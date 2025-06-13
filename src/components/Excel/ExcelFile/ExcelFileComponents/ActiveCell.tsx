import * as React from 'react';
import classnames from 'classnames';
import * as Actions from './actions';
import * as Types from './types';
import * as Point from './point';
import useSelector from './use-selector';
import useDispatch from './use-dispatch';
import { getCellDimensions } from './util';
import * as Matrix from './matrix';
import Select from '../../../Select';
import AttachmentButton from '../../../AttachmentButton';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import { toast } from '../../../Toastify/Toastify';

type Props = {
  DataEditor: Types.DataEditorComponent;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuState>>;
  attachmentAction?: {
    addAttachment: (file: File) => Promise<string>;
    deleteAttachment: (fileId: string) => Promise<string>;
    viewAttachment: (fileId: string, fileName: string) => Promise<void>;
  };
  contextOption?: {
    open: boolean;
    options: {
      label: string;
      value: string;
      iconName: string;
      action: () => void;
      disable: boolean;
    }[];
  };
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
  const active = useSelector((state) => state.active);
  const mode = useSelector((state) => state.mode);
  const cell = useSelector((state) =>
    state.active ? Matrix.get(state.active, state.model.data) : undefined
  );
  const dimensions = useSelector((state) => {
    let dimensionValue = active
      ? getCellDimensions(active, state.rowDimensions, state.columnDimensions)
      : undefined;
    dimensionValue = {
      top: (dimensionValue?.top ?? 0) + 1, // Note: +1 Because of Active cell width is 2px
      height: (dimensionValue?.height ?? 0) + 1, // Note: +1 Because of Active cell width is 2px
      left: (dimensionValue?.left ?? 0) + 1, // Note: +1 Because of Active cell width is 2px
      width: (dimensionValue?.width ?? 0) + 1, // Note: +1 Because of Active cell width is 2px
    };
    return dimensionValue;
  });

  const hidden = React.useMemo(
    () => !active || !dimensions,
    [active, dimensions]
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
    selected?: File[],
    actionType?: string
  ) => {
    if (newFiles.length > 5) {
      toast.info('Cannot upload more than 5 files.');
      return;
    }

    if (props.attachmentAction?.addAttachment && selected) {
      try {
        if (actionType === 'ADD' && cell?.inputType?.type === 'file') {
          const parsedFiles: File[] = !checkEmpty(cell.value)
            ? JSON.parse(cell.value)
            : [];
          for (const file of selected) {
            const response = await props.attachmentAction?.addAttachment(file);
            if (!checkEmpty(response)) {
              parsedFiles.push(JSON.parse(response));
            }
          }
          handleChange({
            ...cell,
            value: JSON.stringify(parsedFiles),
            style: cell?.style,
            inputType: cell?.inputType,
          });
          setSelectedFiles(parsedFiles);
        } else if (actionType === 'DELETE') {
          const parsedValue = cell && JSON.parse(cell.value);
          const updatedFileDetails = [...parsedValue];
          for (const file of selected) {
            const index = updatedFileDetails.findIndex(
              (originalFile: Types.AttachmentApi) => {
                return originalFile.name === file.name;
              }
            );
            const fileId = updatedFileDetails[index].id;
            if (index !== -1 && fileId) {
              const response = await props.attachmentAction?.deleteAttachment(
                fileId
              );
              if (response) {
                updatedFileDetails.splice(index, 1);
                handleChange({
                  ...cell,
                  value: !checkEmpty(updatedFileDetails)
                    ? JSON.stringify(updatedFileDetails)
                    : '',
                  style: cell?.style,
                  inputType: cell?.inputType,
                });
                setSelectedFiles((prevSelectedFiles) => [
                  ...prevSelectedFiles.filter((f) => f.name !== file.name),
                ]);
              }
            }
          }
        }
      } catch (error) {
        toast.error('Attachment operation failed');
        console.error('Attachment failed:', error);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const selectedList = (e.target as HTMLElement).innerText;
    if (selectedList) {
      JSON.parse(cell?.value).map((file: Types.AttachmentApi) => {
        if (
          file.name === selectedList &&
          props.attachmentAction?.viewAttachment
        ) {
          props.attachmentAction?.viewAttachment(file.id, file.name);
        }
      });
    }
  };

  React.useEffect(() => {
    const root = rootRef.current;
    if (!hidden && root) {
      root.focus();

      if (cell?.inputType?.type === 'file' && cell?.value) {
        const parsedFiles: File[] = JSON.parse(cell.value).map(
          (file: Types.AttachmentApi) => {
            const blob = new Blob([]);
            return new File([blob], file.name);
          }
        );
        setSelectedFiles(parsedFiles);
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
        options: props.contextOption?.options || [],
      });
    },
    [props]
  );

  return (
    <div
      ref={rootRef}
      className={classnames(
        'ff-spreadsheet-active-cell',
        `ff-spreadsheet-active-cell--${mode}`
      )}
      style={dimensions}
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
          onChange={(value) => {
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
          maxFileSizeMB={5}
          maxFiles={5}
          buttonLabel="+ Attachments"
          buttonVariant="tertiary"
          deleteButton={true}
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
          style={{ ...cell?.style }}
          value={cell?.value}
          disabled={false}
        />
      )}

      <div onMouseDown={handleMouseDown} className="select_dot"></div>
    </div>
  );
};

export default ActiveCell;
