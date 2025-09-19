import * as React from 'react';
import classnames from 'classnames';
import * as Actions from './actions';
import * as Types from './types';
import * as Point from './point';
import useSelector from './use-selector';
import useDispatch from './use-dispatch';
import {
  getCellDimensions,
  getOffsetRect,
  getSelectedDimensions,
} from './util';
import * as Matrix from './matrix';
import Select from '../../../Select';
import AttachmentButton from '../../../AttachmentButton';
import { toast } from '../../../Toastify/Toastify';

type Props = {
  DataEditor: Types.DataEditorComponent;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuState>>;
  getActiveCell: (cell: { value: string; active: Point.Point }) => void;
  attachmentAction?: {
    addAttachment: (file: File) => Promise<string>;
    deleteAttachment: (fileId: string) => Promise<string>;
    viewAttachment: (fileId: string, fileName: string) => Promise<void>;
  };
  contextOption?: ContextMenuState;
  visibleRange: { start: number; end: number };
};

const ActiveCell: React.FC<Props> = (props) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const setCellData = React.useCallback(
    (active: Point.Point, data: Types.CellBase) =>
      dispatch(Actions.setCellData(active, data)),
    [dispatch]
  );
  const activate = React.useCallback(
    (point: Point.Point) => dispatch(Actions.activate(point)),
    [dispatch]
  );
  const edit = React.useCallback(() => dispatch(Actions.edit()), [dispatch]);
  const autoFill = React.useCallback(
    (value: boolean) => dispatch(Actions.autoFill(value)),
    [dispatch]
  );
  const commit = React.useCallback(
    (changes: Types.CommitChanges<Types.CellBase>) =>
      dispatch(Actions.commit(changes)),
    [dispatch]
  );
  const view = React.useCallback(() => {
    dispatch(Actions.view());
  }, [dispatch]);
  const rowDimensions = useSelector((state) => state.rowDimensions);
  const active = useSelector((state) => state.active);
  const mode = useSelector((state) => state.mode);
  const cell = useSelector((state) =>
    state.active ? Matrix.get(state.active, state.model.data) : undefined
  );
  const selected = useSelector((state) => state.selected);
  const selectedDimensions = useSelector((state) => {
    return (
      selected &&
      getSelectedDimensions(
        state.rowDimensions,
        state.columnDimensions,
        state.model.data,
        state.selected
      )
    );
  });
  const dimensions = useSelector((state) => {
    let dimensionValue = active
      ? getCellDimensions(active, state.rowDimensions, state.columnDimensions)
      : undefined;
    dimensionValue = {
      top: dimensionValue?.top ? dimensionValue?.top : 0,
      height: dimensionValue?.height ? dimensionValue?.height : 0,
      left: dimensionValue?.left ? dimensionValue?.left : 0, // Note: +1 Because of Active cell width is 2px
      width: dimensionValue?.width ? dimensionValue?.width : 0,
    };
    return dimensionValue;
  });

  const offset = React.useMemo(() => {
    let sum = 0;
    const DEFAULT_ROW_HEIGHT = 32;
    for (let r = 0; r < props.visibleRange.start; r++) {
      sum += rowDimensions[r]?.height || DEFAULT_ROW_HEIGHT;
    }
    return sum;
  }, [rowDimensions, props.visibleRange.start]);

  const adjustedDimensions = React.useMemo(() => {
    if (!dimensions) return undefined;
    return { ...dimensions, top: dimensions.top - offset };
  }, [dimensions, offset]);

  const hidden = React.useMemo(
    () =>
      !active ||
      !dimensions ||
      active.row < props.visibleRange.start ||
      active.row >= props.visibleRange.end,
    [active, dimensions, props.visibleRange]
  );

  const initialCellRef = React.useRef<Types.CellBase | undefined>(undefined);
  const prevActiveRef = React.useRef<Point.Point | null>(null);
  const prevCellRef = React.useRef<Types.CellBase | undefined>(undefined);

  const handleChange = React.useCallback(
    (cell: Types.CellBase) => {
      if (!active) {
        return;
      }
      setCellData(active, cell);
    },
    [setCellData, active]
  );

  const [dropDownValue, setDropDownValue] = React.useState({
    value: '',
    name: '',
  });
  const [selectOption, setSelectOption] = React.useState<boolean>(false);
  const [allOption, setAllOption] = React.useState<
    {
      disable: boolean;
      label: JSX.Element;
      value: string;
    }[]
  >();
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleFilesChange = async (
    newFiles: File[],
    selected?: any,
    actionType?: string
  ) => {
    try {
      if (actionType === 'ADD' && cell?.inputType?.type === 'file') {
        // Parse existing cell.value
        let existingFiles: Types.AttachmentApi[] = [];
        try {
          if (cell?.value) {
            existingFiles = JSON.parse(cell.value);
          }
        } catch (error) {
          console.error('Error parsing cell.value:', error);
        }

        // Deduplicate within newFiles and against existingFiles
        let duplicateCount = 0;
        const uniqueFiles = newFiles.filter((file, index, self) => {
          const baseName = file.name.split('*')[0];
          const isDuplicateInSelf =
            self.findIndex((f) => f.name.split('*')[0] === baseName) !== index;
          const isDuplicateInExisting = existingFiles.some(
            (existingFile) => existingFile.name.split('*')[0] === baseName
          );
          if (isDuplicateInSelf || isDuplicateInExisting) {
            duplicateCount++;
            return false;
          }
          return true;
        });

        // Check total file count
        if (existingFiles.length + uniqueFiles.length > 5) {
          toast.info('Cannot upload more than 5 files.');
          return;
        }

        if (props.attachmentAction?.addAttachment && uniqueFiles.length > 0) {
          try {
            let successCount = 0;
            let failureCount = 0;
            let memoryFullCount = 0;
            const fileLength = selectedFiles?.length + uniqueFiles?.length;
            const extractHeight = fileLength > 0 ? fileLength * 25 : 1;
            const processedFiles: Types.AttachmentApi[] = [...existingFiles];

            const uploadPromises = uniqueFiles?.map(async (file) => {
              try {
                if (file.name.includes('*')) {
                  return {
                    file,
                    status: 'existing',
                    data: { name: file.name },
                  };
                }

                const response = await props?.attachmentAction?.addAttachment(
                  file
                );

                if (
                  !response ||
                  (typeof response === 'string' && response.trim().length === 0)
                ) {
                  return { file, status: 'failed', reason: 'no response' };
                }

                if (typeof response === 'string') {
                  try {
                    const parsedResponse = JSON.parse(response);

                    if (parsedResponse.responseCode === 507) {
                      return {
                        file,
                        status: 'memory_full',
                        reason: 'no memory',
                      };
                    }

                    if (parsedResponse.responseCode === 400) {
                      return { file, status: 'failed', reason: 'invalid file' };
                    }

                    if (parsedResponse?.id && parsedResponse?.name) {
                      return { file, status: 'success', data: parsedResponse };
                    } else {
                      console.error(
                        `Invalid response structure for ${file.name}:`,
                        parsedResponse
                      );
                      return {
                        file,
                        status: 'failed',
                        reason: 'invalid response',
                      };
                    }
                  } catch (error) {
                    console.error(`Parse error for ${file.name}:`, error);
                    return { file, status: 'failed', reason: 'parse error' };
                  }
                }

                if (typeof response === 'object' && response !== null) {
                  const typedResponse = response as Types.AttachmentApi;
                  if (typedResponse?.id && typedResponse?.name) {
                    return { file, status: 'success', data: typedResponse };
                  } else {
                    console.error(
                      `Invalid response structure for ${file.name}:`,
                      response
                    );
                    return {
                      file,
                      status: 'failed',
                      reason: 'invalid response',
                    };
                  }
                }

                console.error(`Unknown response for ${file.name}:`, response);
                return { file, status: 'failed', reason: 'unknown' };
              } catch (error) {
                console.error(`Upload failed for ${file.name}:`, error);
                return { file, status: 'failed', reason: 'upload error' };
              }
            });

            const results = await Promise.allSettled(uploadPromises);

            results.forEach((result) => {
              if (result.status === 'fulfilled' && result.value) {
                const { status, data } = result.value;
                if (status === 'success' && data?.id && data?.name) {
                  processedFiles.push(data as Types.AttachmentApi);
                  successCount++;
                } else if (status === 'existing' && data?.name) {
                  processedFiles.push(data as Types.AttachmentApi);
                } else if (status === 'memory_full') {
                  memoryFullCount++;
                } else {
                  failureCount++;
                }
              } else {
                failureCount++;
              }
            });

            if (
              successCount > 0 ||
              processedFiles.length > existingFiles.length
            ) {
              const newValue =
                processedFiles.length > 0 ? JSON.stringify(processedFiles) : '';
              handleChange({
                ...cell,
                value: newValue,
                style: cell?.style,
                inputType: cell?.inputType,
              });
              dispatch(Actions.setRowHeight(active?.row || 0, extractHeight));
              setSelectedFiles(
                processedFiles.map(
                  (file) =>
                    new File(
                      [new Blob()],
                      file.name?.split('*')[0] ?? 'default'
                    )
                )
              );
            }

            if (memoryFullCount > 0) {
              toast.info('No memory available to add the file');
            }

            if (successCount > 0) {
              toast.success(
                `${successCount} file${
                  successCount > 1 ? 's' : ''
                } uploaded successfully`
              );
            }

            if (failureCount > 0) {
              toast.info(
                `${failureCount} unsupported ${
                  failureCount > 1 ? 'files' : 'file'
                }. Please check the file formats.`
              );
            }
          } catch (error) {
            console.error('Upload operation failed:', error);
            toast.error('Operation failed');
          }
        }
      } else if (actionType === 'DELETE' && cell?.inputType?.type === 'file') {
        try {
          const parsedValue = cell && JSON.parse(cell.value);
          let updatedFileDetails = [...parsedValue];
          let deletedCount = 0;

          for (const file of selected || []) {
            const index = updatedFileDetails.findIndex(
              (originalFile: Types.AttachmentApi) =>
                originalFile.name.split('*')[0] === file.name.split('*')[0]
            );

            const fileId = updatedFileDetails[index]?.id;

            if (
              index !== -1 &&
              fileId &&
              props.attachmentAction?.deleteAttachment
            ) {
              try {
                const response = await props.attachmentAction.deleteAttachment(
                  fileId
                );

                // Check for valid response
                if (
                  response === 'SUCCESS' ||
                  (typeof response === 'object' &&
                    response !== null &&
                    (('status' in response &&
                      (response as any).status === 'SUCCESS') ||
                      ('responseCode' in response &&
                        (response as any).responseCode === 200)))
                ) {
                  updatedFileDetails.splice(index, 1);
                  deletedCount++;
                } else {
                  console.error(
                    `Delete failed for ${file.name}: Invalid response`,
                    response
                  );
                }
              } catch (deleteError) {
                console.error(`Delete error for ${file.name}:`, deleteError);
                toast.error('Error deleting file');
              }
            } else {
              console.error(
                `Cannot delete ${file.name}: Invalid fileId or no match`,
                {
                  index,
                  fileId,
                  hasDeleteAttachment:
                    !!props.attachmentAction?.deleteAttachment,
                }
              ); // Debug log
              toast.error('Failed to delete file: Invalid file data');
            }
          }

          // Update cell value and selected files
          if (deletedCount > 0) {
            const newValue =
              updatedFileDetails.length > 0
                ? JSON.stringify(updatedFileDetails)
                : '';
            handleChange({
              ...cell,
              value: newValue,
              style: cell?.style,
              inputType: cell?.inputType,
            });

            setSelectedFiles(
              updatedFileDetails?.map(
                (file) => new File([new Blob()], file.name.split('*')[0])
              )
            );

            toast.success(
              `${deletedCount} file${
                deletedCount > 1 ? 's' : ''
              } deleted successfully`
            );
          } else if (selected?.length) {
            const validFiles = updatedFileDetails?.filter(
              (file: Types.AttachmentApi) => file.id && file.name
            );
            if (validFiles.length < updatedFileDetails.length) {
              const newValue =
                validFiles.length > 0 ? JSON.stringify(validFiles) : '';
              handleChange({
                ...cell,
                value: newValue,
                style: cell?.style,
                inputType: cell?.inputType,
              });
              setSelectedFiles(
                validFiles.map(
                  (file) => new File([new Blob()], file.name.split('*')[0])
                )
              );
              toast.error(
                'Failed to delete file(s). Invalid file data detected.'
              );
            } else {
              toast.error('Failed to delete file(s). No valid files removed.');
            }
          }
        } catch (error) {
          console.error('Delete operation failed:', error);
          toast.error('Delete operation failed');
        }
      }
    } catch (error) {
      console.error('handleFilesChange error:', error);
      toast.error('Operation failed');
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const fileElement = (e.target as HTMLElement).closest(
      '.ff-attachment-files'
    );
    const isIconClick = (e.target as HTMLElement).closest(
      '.ff-icon-container, .ff-icon-click, .ff-icon-danger'
    );
    if (
      !fileElement ||
      isIconClick ||
      !cell?.value ||
      !props.attachmentAction?.viewAttachment
    ) {
      console.warn(
        'Missing file element, icon click, cell value, or viewAttachment action'
      );
      return;
    }

    try {
      const files: Types.AttachmentApi[] = JSON.parse(cell.value);
      const fileElements =
        fileElement.parentElement?.querySelectorAll('.ff-attachment-files') ||
        [];
      const fileIndex = Array.from(fileElements).indexOf(fileElement);
      if (fileIndex === -1 || !files[fileIndex]) {
        console.error('File index not found or invalid');
        return;
      }

      const file = files[fileIndex];
      props.attachmentAction.viewAttachment(
        file.id,
        file.name?.split('*')[0] ?? 'default'
      );
    } catch (error) {
      console.error('Error parsing cell value:', error);
    }
  };

  React.useEffect(() => {
    if (cell && active) {
      props.getActiveCell({ value: cell.value, active: active });
    }
    const root = rootRef.current;
    if (!hidden && root) {
      root.focus({ preventScroll: true });

      if (cell?.inputType?.type === 'file' && cell?.value) {
        try {
          const parsedFiles: File[] = JSON.parse(cell.value).map(
            (file: Types.AttachmentApi) =>
              new File([new Blob()], file.name.split('*')[0] ?? 'default')
          );
          setSelectedFiles(parsedFiles);
        } catch (error) {
          console.error('Error parsing cell value for files:', error);
          setSelectedFiles([]);
        }
      } else {
        setSelectedFiles([]);
      }
      if (cell?.inputType?.type === 'dropDown') {
        setDropDownValue({ value: cell?.value, name: cell?.value });
        setSelectOption((prev) => !prev);
        const getAllOption = cell?.inputType?.options?.map((option) => ({
          disable: option.disable,
          label: <span style={{ color: option.color }}>{option.label}</span>,
          value: option.value,
        }));
        setAllOption(getAllOption);
      }
    }
  }, [rootRef, hidden, active]);

  React.useEffect(() => {
    const prevActive = prevActiveRef.current;
    const prevCell = prevCellRef.current;
    prevActiveRef.current = active;
    prevCellRef.current = cell;

    if (!prevActive || !prevCell) {
      return;
    }

    const coordsChanged =
      active?.row !== prevActive.row || active?.column !== prevActive.column;
    const exitedEditMode = mode !== 'edit';

    if (coordsChanged || exitedEditMode) {
      const initialCell = initialCellRef.current;
      if (prevCell !== initialCell) {
        commit([
          {
            prevCell: initialCell || null,
            nextCell: prevCell,
          },
        ]);
      } else if (!coordsChanged && cell !== prevCell) {
        commit([
          {
            prevCell,
            nextCell: cell || null,
          },
        ]);
      }
      initialCellRef.current = cell;
    }
  });

  const DataEditor = (cell && cell.DataEditor) || props.DataEditor;
  const readOnly = cell && cell.readOnly;

  const handleMouseDown = React.useCallback(() => {
    if (active) {
      autoFill(true);
      activate(active);
    }
  }, [activate, autoFill, active]);

  const contextClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      props.setContextMenu({
        open: props.contextOption?.open ?? false,
        contextType: props.contextOption?.contextType ?? null,
        options: props.contextOption?.options || [],
      });
    },
    [props]
  );

  const isDragged =
    selectedDimensions?.height !== dimensions?.height ||
    selectedDimensions?.width !== dimensions?.width;

  const handleCellClick = React.useCallback(
    (event: React.MouseEvent<HTMLTableCellElement>) => {
      if (active && isDragged) {
        Actions.setCellDimensions(active, getOffsetRect(event.currentTarget));
        activate(active);
      }
    },
    [active, isDragged]
  );
  return (
    <div
      ref={rootRef}
      className={classnames(
        'ff-spreadsheet-active-cell',
        `ff-spreadsheet-active-cell--${mode}`,
        {
          'ff-spreadsheet-active-cell--hidden': hidden,
          'ff-spreadsheet-active-cell--dragging':
            isDragged && cell?.inputType?.type !== 'text',
        }
      )}
      onMouseDown={handleCellClick}
      style={adjustedDimensions}
      onContextMenu={contextClick}
      onClick={mode === 'view' && !readOnly ? edit : undefined}
      tabIndex={0}
    >
      {cell?.inputType?.type === 'dropDown' ? (
        <Select
          {...cell?.inputType?.inputProps}
          showOptions={{ open: true, toggle: selectOption }}
          selectedOption={dropDownValue}
          optionsList={allOption || []}
          height={26}
          showLabel={false}
          showBorder={false}
          optionZIndex={5000}
          onChange={(value: any) => {
            setDropDownValue({ value: value.value, name: value.label });
            handleChange({
              ...cell,
              value: value.value,
              style: cell?.style,
              inputType: cell?.inputType,
            });
          }}
        />
      ) : cell?.inputType?.type === 'file' ? (
        <AttachmentButton
          {...cell?.inputType?.inputProps}
          label=""
          onFileListClick={handleClick}
          selectedFiles={selectedFiles}
          onFilesChange={handleFilesChange}
          disabled={false}
          maxFiles={5}
          buttonLabel="+ Attachments"
          buttonVariant="tertiary"
          deleteButton={true}
          selectedFileMessage="Duplicate attachments not allowed within the same row"
          addAttachmentButton
          isInfoIconRequired={false}
          truncateMaxLimit={dimensions.width - 60} // Adjusted According to Attachment Action Width
        />
      ) : mode === 'edit' && active ? (
        <DataEditor
          row={active.row}
          column={active.column}
          cell={cell}
          onChange={handleChange}
          exitEditMode={view}
        />
      ) : (
        <textarea
          className="ff-spreadsheet-cell-textarea"
          style={{
            ...cell?.style,
            textDecoration:
              cell?.style?.textDecoration === 'underline'
                ? 'underline'
                : 'none',
            backgroundColor: isDragged
              ? '#1e161f00'
              : cell?.style?.backgroundColor,
            pointerEvents: 'none',
            borderTop: '',
            borderBottom: '',
            borderLeft: '',
            borderRight: '',
          }} // needed textDecoration
          value={cell?.value}
          disabled={false}
        />
      )}
      {!['file'].includes(cell?.inputType?.type ?? '') && (
        <div onMouseDown={handleMouseDown} className="select_dot"></div>
      )}
    </div>
  );
};

export default ActiveCell;
