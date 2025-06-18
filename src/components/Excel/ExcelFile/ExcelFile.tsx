import React, { useState, useRef, useEffect } from 'react';
import Spreadsheet, { CellBase } from './ExcelFileComponents/index';
import * as Matrix from './ExcelFileComponents/matrix';
import './ExcelFile.scss';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';
import Toastify from '../../Toastify';
import { toast } from '../../Toastify/Toastify';
import { ContextMenuState } from './ExcelFileComponents/types';
import ExcelContextMenu from '../ExcelContextMenu/ExcelContextMenu';
import Typography from '../../Typography';
import {
  convertStyleToBackend,
  convertStyleToFrontend,
} from '../dataConversion';
import { checkEmpty } from '../../../utils/checkEmpty/checkEmpty';
import { debounce } from '../../../utils/debounce/debounce';
import classNames from 'classnames';
import { EmptyCell } from './ExcelFileComponents/util';

interface ExcelFileProps {
  /**
   * The Excel data containing all the sheets and their respective content.
   */
  excelData: WorkSheet[];

  /**
   * Make the Excel Sheet Freeze or Editable using the boolean key.
   */
  editable?: boolean;

  /**
   * Optional configuration for the context menu (usually shown on right-click).
   * This allows customization of the context menu options with a label, value, icon, and action to be performed.
   */
  contextOption?: {
    /**
     * Whether the context menu should be enabled (open or not).
     * If set to true, the context menu will be shown, otherwise, it will be disabled.
     */
    open: boolean;

    /**
     * Array of options available in the context menu. Each option contains a label (display name),
     * value (identifier), iconName (icon to display), and action (function to be executed on click).
     */
    options: {
      label: string;
      value: string;
      iconName: string;
      action: () => void;
      disable: boolean;
    }[];
  };

  /**
   * Controls whether the toolbar is shown or hidden.
   * Possible values:
   * - 'show' to display the toolbar
   * - 'hide' to hide the toolbar
   */
  toolbar?: 'show' | 'disable' | 'hide';

  /**
   * Controls whether the sheet navigation bar (tabs) is shown or hidden.
   * Possible values:
   * - 'show' to display the sheet bar
   * - 'hide' to hide the sheet bar
   */
  sheetBar?: 'show' | 'hide';

  /**
   * Optional: The total number of rows in the Excel sheet.
   * This helps in determining the size and content of the sheet.
   */
  rowCount?: number;

  /**
   * Optional: The total number of columns in the Excel sheet.
   * This helps in determining the structure of the sheet.
   */
  colCount?: number;

  /**
   * Callback function triggered when saving the Excel data.
   */
  onSave?: (saveData: SaveData[]) => void;

  onSaveInfoChange?: (info: string) => void;

  /**
   * Delay time (in milliseconds) before the onSave callback is executed.
   */
  onSaveDelay?: number;

  /**
   * Optional: Sets the vertical (Y-axis) positioning of the context menu.
   * This allows precise control over where the context menu appears on the screen.
   */
  contextHeightPositioning?: number;

  /**
   * Optional: Sets the horizontal (X-axis) positioning of the context menu.
   * This allows precise control over where the context menu appears on the screen.
   */
  contextWidthPositioning?: number;

  /**
   * Optional: Dynamically sets the height of the sheet view area.
   * This can be useful if you want to change the height of the sheet display.
   */
  sheetHeight?: string;

  /**
   * Optional: Enables or disables the context menu for columns.
   * When set to true, column-related context menu actions are enabled.
   */
  columnContextEnable?: boolean;

  /**
   * Optional: Enables or disables the context menu for rows.
   * When set to true, row-related context menu actions are enabled.
   */
  rowContextEnable?: boolean;

  sheetBarContextEnable?: boolean;

  minimumColumnWidth?: number;
  scroller?: boolean;

  attachmentAction?: {
    addAttachment: (file: File) => Promise<string>;
    deleteAttachment: (fileId: string) => Promise<string>;
    viewAttachment: (fileId: string, fileName: string) => Promise<void>;
  };

  disableDeleteOption?: boolean;
}

const ExcelFile: React.FC<ExcelFileProps> = ({
  excelData,
  contextOption,
  toolbar = 'show',
  sheetBar = 'show',
  rowCount = 26,
  colCount = 26,
  sheetHeight = '100%',
  editable = true,
  contextHeightPositioning = 0,
  contextWidthPositioning = 0,
  onSave = () => Promise.resolve(),
  onSaveInfoChange,
  attachmentAction = {
    addAttachment: () => Promise.resolve(''),
    deleteAttachment: () => Promise.resolve(''),
    viewAttachment: () => Promise.resolve(),
  },
  onSaveDelay = 3000,
  scroller = false,
  columnContextEnable = true,
  rowContextEnable = true,
  sheetBarContextEnable = true,
  minimumColumnWidth = 100,
  disableDeleteOption = false,
}) => {
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [saveInfo, setSaveInfo] = useState<string>('');
  const [contextMenu, setContextMenu] = React.useState<ContextMenuState>({
    open: false,
    options: [
      { label: '', value: '', iconName: '', action: () => {}, disable: false },
    ],
  });

  const [selectedSheet, setSelectedSheet] = useState<{
    name: string;
    index: number;
  }>({ name: 'defaultSheet', index: 0 });

  const [worksheetsData, setWorksheetsData] = useState<{
    [key: string]: Matrix.Matrix<CellBase>;
  }>({ defaultSheet: [[EmptyCell]] });

  const [selectedSheetData, setSelectedSheetData] = useState<
    Matrix.Matrix<CellBase>
  >([[EmptyCell]]);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const pageRef = useRef<string>('');
  const workRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const checkVal = (val: any) => {
    if (val === undefined || val === null) {
      return null;
    }
    return val;
  };

  useEffect(() => {
    const payload = excelData;
    if (payload) {
      const sheetNames = payload.map((e) => e.sheetName);
      setSheetNames(sheetNames);

      if (!checkEmpty(sheetNames.length)) {
        pageRef.current = sheetNames[0] || ''; // Ternary is required, must use ''
        setSelectedSheet({
          name: sheetNames[0] || '', // Ternary is required, must use ''
          index: 0,
        });
      }

      const newWorksheetsData: { [key: string]: Matrix.Matrix<CellBase> } = {};

      payload.forEach((sheet) => {
        const sheetName = sheet.sheetName;
        const json = sheet.data;
        const maxRows = Math.max(rowCount, json.length);
        const maxCols = Math.max(
          colCount,
          Math.max(...json.map((row) => row.length))
        );

        let spreadsheetData: Matrix.Matrix<CellBase> = Array.from(
          { length: maxRows },
          () =>
            Array(maxCols).fill({
              value: '',
              style: EmptyCell.style,
              readOnly: false,
              inputType: undefined,
            })
        );

        json.forEach((row, rowIndex) => {
          row.forEach((cell, colIndex) => {
            if (rowIndex < maxRows && colIndex < maxCols) {
              if (!spreadsheetData[rowIndex]) {
                spreadsheetData[rowIndex] = [];
              }

              spreadsheetData[rowIndex][colIndex] = {
                value: checkVal(cell.value),
                style: checkEmpty(cell?.style)
                  ? EmptyCell.style
                  : convertStyleToFrontend(cell?.style),
                readOnly: cell?.readOnly ? cell?.readOnly : false,
                inputType: cell?.inputType ?? undefined,
                contextDisable: cell.contextDisable,
              };
            }
          });
        });

        const readOnlyCells = new Set([
          ...(sheet?.rows?.readOnly
            ? sheet.rows.readOnly.map((r) => `r${r}`)
            : []),
          ...(sheet?.columns?.readOnly
            ? sheet.columns.readOnly.map((c) => `c${c}`)
            : []),
          ...(sheet?.cells?.readOnly
            ? sheet.cells.readOnly.map(([r, c]) => `${r},${c}`)
            : []),
        ]);

        const getInputTypeForCell = (
          rowIndex: number,
          colIndex: number,
          cell: CellBase
        ) => {
          if (cell?.inputType) {
            return cell.inputType;
          }
          const inputTypeConfig =
            sheet?.rows?.inputType?.[rowIndex + 1] ||
            sheet?.columns?.inputType?.[colIndex + 1] ||
            sheet?.cells?.inputType?.[
              `${rowIndex + 1},${
                colIndex + 1
              }` as keyof typeof sheet.cells.inputType
            ];

          return inputTypeConfig || { type: 'text' };
        };

        spreadsheetData.forEach((row, rowIndex) => {
          row.forEach((cell, colIndex) => {
            if (!spreadsheetData[rowIndex]) {
              spreadsheetData[rowIndex] = [];
            }
            const isReadOnly =
              readOnlyCells.has(`r${rowIndex + 1}`) ||
              readOnlyCells.has(`c${colIndex + 1}`) ||
              readOnlyCells.has(`${rowIndex + 1},${colIndex + 1}`);

            const inputType = getInputTypeForCell(
              rowIndex,
              colIndex,
              cell || EmptyCell
            );

            spreadsheetData[rowIndex][colIndex] = {
              ...cell,
              value: cell?.value ?? '',
              readOnly: cell?.readOnly ? cell.readOnly : isReadOnly,
              inputType: inputType as InputType | undefined,
              contextDisable: cell?.contextDisable,
            };
          });
        });
        newWorksheetsData[sheetName] = spreadsheetData;
      });

      setWorksheetsData(newWorksheetsData);
      const firstSheetName = Object.keys(newWorksheetsData)[0];
      if (firstSheetName && newWorksheetsData[firstSheetName] !== undefined) {
        setSelectedSheetData(newWorksheetsData[firstSheetName]);
      }
    }
  }, [excelData]);

  useEffect(() => {
    if (onSaveInfoChange) {
      onSaveInfoChange(saveInfo);
    }
    if (saveInfo === 'File saved') {
      setTimeout(() => {
        setSaveInfo('');
      }, 2000);
    }
  }, [saveInfo]);

  useEffect(() => {
    setSaveInfo('Saving...');
    debounceDispatch(handleSaveData());
  }, [worksheetsData, pageRef.current]);

  const debounceDispatch = React.useCallback(
    debounce((val) => {
      onSave(val);
      setSaveInfo('File saved');
    }, onSaveDelay),
    [onSave]
  );

  const handleSave = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        event.stopPropagation();
        debounceDispatch(handleSaveData());
      }
    },
    [onSave]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleSave);
    return () => {
      document.removeEventListener('keydown', handleSave);
    };
  }, [handleSave]);

  const handleSaveData = () => {
    return sheetNames.map((sheetName) => {
      const sheetData =
        worksheetsData[sheetName]?.map((row) => {
          const lastIndex = row.reduce((lastIdx, cell, i) => {
            const value = cell?.value ?? '';
            const hasValue = String(value).trim() !== '';
            return hasValue ? i : lastIdx;
          }, -1);

          const filteredRow = row
            .map((cell, index) => {
              if (cell && cell.style && index <= lastIndex) {
                return {
                  value: cell.value,
                  style: convertStyleToBackend(cell.style),
                  readOnly: cell.readOnly,
                  inputType: cell.inputType,
                  contextDisable: cell.contextDisable,
                };
              }
              return null;
            })
            .filter((cell) => cell !== null);

          return filteredRow.length > 0 ? filteredRow : [];
        }) || [];

      const finalData = sheetData.filter((row, index) => {
        const isNextRowNotEmpty = sheetData
          .slice(index + 1)
          .some((nextRow) => nextRow.length > 0);
        return row.length > 0 || isNextRowNotEmpty;
      });

      return {
        sheetName: sheetName,
        data: checkEmpty(finalData.length) ? [[]] : finalData,
      };
    });
  };

  const onEvaluateChange = (data: Matrix.Matrix<CellBase>) => {
    setWorksheetsData((prev) => ({ ...prev, [pageRef.current]: data }));
  };

  const [editingSheet, setEditingSheet] = useState<number | null>(null);

  const handleAddSheet = () => {
    const generateUniqueSheetName = (
      baseName: string,
      existingNames: string[]
    ) => {
      let newName = `${baseName}1`;
      let counter = 2;
      while (existingNames.includes(newName)) {
        newName = `${baseName}${counter}`;
        counter++;
      }
      return newName;
    };
    const baseName = 'Sheet';
    const existingSheetNames = sheetNames;
    const newSheetName = generateUniqueSheetName(baseName, existingSheetNames);
    const newSheetData = Array.from({ length: rowCount }, () =>
      Array.from({ length: colCount }, () => EmptyCell)
    );
    setSheetNames((prev) => [...prev, newSheetName]);
    setSelectedSheet({ index: sheetNames?.length, name: newSheetName });
    setWorksheetsData({ ...worksheetsData, [newSheetName]: newSheetData });
    setSelectedSheetData(newSheetData);
    pageRef.current = newSheetName;
  };

  useEffect(() => {
    const selectedData = worksheetsData[selectedSheet.name];
    if (selectedData !== undefined) {
      setSelectedSheetData(selectedData);
    } else {
      setSelectedSheetData([]);
    }
  }, [selectedSheet.name]);

  const handleDeleteSheet = (name: string, index: number) => {
    if (sheetNames.length > 1) {
      let updatedSheetNames = sheetNames.slice();
      updatedSheetNames.splice(index, 1);

      const updatedWorksheetsData = { ...worksheetsData };

      delete updatedWorksheetsData[name];
      const newIndex = Math.min(index, updatedSheetNames.length - 1);

      setSheetNames(updatedSheetNames);
      setWorksheetsData(updatedWorksheetsData);
      setSelectedSheet({
        index: newIndex,
        name: updatedSheetNames[newIndex] ? updatedSheetNames[newIndex] : '',
      });
    } else {
      toast.warning('Cannot delete the last sheet.');
    }
  };

  const handleNameChange = (
    event: React.SyntheticEvent<HTMLDivElement>,
    index: number,
    name: string
  ): void => {
    const target = event.target as HTMLDivElement;
    if (!target) {
      setEditingSheet(null);
      return;
    }

    const updatedSheetValue = target.textContent?.trim();

    if (!updatedSheetValue) {
      toast.warning('Sheet name cannot be empty.');
      target.textContent = selectedSheet.name;
      setEditingSheet(null);
      return;
    }

    if (updatedSheetValue.length > 30) {
      toast.warning('The sheet name cannot be greater than 30 characters');
      target.textContent = selectedSheet.name;
      setEditingSheet(null);
      return;
    }

    if (
      sheetNames.includes(updatedSheetValue) &&
      sheetNames[index] !== updatedSheetValue
    ) {
      toast.warning('Sheet name already exists');
      target.textContent = selectedSheet.name;
      setEditingSheet(null);
      return;
    }

    let updatedSheetNames = sheetNames;

    updatedSheetNames.splice(index, 1, updatedSheetValue);

    let remainingSheets = worksheetsData;

    const updatedData = replaceKeyValueByKeyName(
      remainingSheets,
      name,
      updatedSheetValue,
      selectedSheetData
    );
    pageRef.current = updatedSheetValue;
    setSelectedSheet((prev) => ({ ...prev, name: updatedSheetValue }));
    setWorksheetsData(updatedData);
    setEditingSheet(null);
  };

  function replaceKeyValueByKeyName(
    obj: {
      [key: string]: Matrix.Matrix<CellBase>;
    },
    oldKey: string,
    newKey: string,
    newValue: Matrix.Matrix<CellBase>
  ) {
    if (!(oldKey in obj)) {
      throw new Error(`Key "${oldKey}" not found in object`);
    }
    delete obj[oldKey];
    obj[newKey] = newValue;
    return obj;
  }

  const handleSheetChange = (name: string, index: number) => {
    if (name === selectedSheet.name || index === selectedSheet.index) {
      return;
    }
    setSelectedSheet({ index, name });
    setSheetNames((prev: string[]) => {
      const updatedSheetNames = [...prev];
      updatedSheetNames[index] = name;
      return updatedSheetNames;
    });

    const selectedSheetData = worksheetsData[name];
    if (selectedSheetData) {
      setSelectedSheetData(selectedSheetData);
    } else {
      setSelectedSheetData([[EmptyCell]]);
    }
    pageRef.current = name;
  };

  const setCursorToEnd = (element: HTMLDivElement): void => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (contextMenu.open) {
        event.preventDefault();
        event.stopPropagation();
        setContextMenu({
          open: false,
          options: [
            {
              label: '',
              value: '',
              iconName: '',
              action: () => {},
              disable: false,
            },
          ],
        });
      }
    },
    [contextMenu.open]
  );

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const contextClick = (
    event: React.MouseEvent,
    name: string,
    index: number
  ) => {
    event.preventDefault();
    const options = [
      {
        label: 'Add Sheet',
        value: 'Add Sheet',
        iconName: 'plus_icon',
        action: () => {
          handleAddSheet();
        },
        disable: false,
      },
      {
        label: 'Delete Sheet',
        value: 'Delete Sheet',
        iconName: 'delete',
        action: () => {
          handleDeleteSheet(name, index);
        },
        disable: false,
      },
    ];
    setContextMenu((prev) => ({ ...prev, open: true, options: options }));
  };

const setContextPosition = (event: React.MouseEvent) => {
    event.preventDefault();
    const rect = sheetRef.current?.parentElement?.getBoundingClientRect();
    const xOffset = window.scrollX;
    const yOffset = window.scrollY;
    let sheetRefX = event.clientX - (rect?.left || 0) + xOffset;
    let sheetRefY = event.clientY - (rect?.top || 0) + yOffset;
  
    const menuWidth = 300;
    const menuHeight = 200;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const spaceOnRight = windowWidth - event.clientX;
    const spaceOnLeft = event.clientX;
    const spaceBelow = windowHeight - event.clientY;
    const spaceAbove = event.clientY;
    // Horizontal positioning: left if no space on right
    if (spaceOnRight < menuWidth && spaceOnLeft >= menuWidth) {
      sheetRefX = event.clientX - (rect?.left || 0) + xOffset - 150;
    } else {
      sheetRefX += 2;
    }
  
    // Vertical positioning: above if no space below
    if (spaceBelow < menuHeight && spaceAbove >= menuHeight) {
      sheetRefY = event.clientY - (rect?.top || 0) + yOffset - 20;
    } else {
      sheetRefY += 2;
    }
  
    if ((event.target as HTMLElement).classList.contains('ff-excel-tab-list')) {
      setPosition({
        x: sheetRefX,
        y: sheetRefY - 65,
      });
      return;
    }
    // Ensure menu stays within window bounds
    if (sheetRefX + menuWidth > windowWidth) {
      sheetRefX = windowWidth - (menuWidth) - 2;
    }
    if (sheetRefX < 0) {
      sheetRefX = 2; // Prevent clipping off left edge
    }

    setPosition({
      x: sheetRefX + contextWidthPositioning,
      y: sheetRefY + contextHeightPositioning,
    });
  };

  const unsetContextPosition = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (contextMenu.open) {
      setContextMenu({
        open: false,
        options: [
          {
            label: '',
            value: '',
            iconName: '',
            action: () => {},
            disable: false,
          },
        ],
      });
    }
  };

  return (
    <>
      {sheetNames.length > 0 && (
        <div
          ref={workRef}
          className="ff-excel"
          onContextMenu={setContextPosition}
          onClick={unsetContextPosition}
        >
          <div ref={sheetRef} className="ff-excel-sheet">
            <Spreadsheet
              editable={editable}
              attachmentAction={attachmentAction}
              toolbar={toolbar}
              sheetHeight={sheetHeight}
              setContextMenu={setContextMenu}
              contextOption={contextOption}
              data={selectedSheetData}
              columnContextEnable={columnContextEnable}
              rowContextEnable={rowContextEnable}
              minimumColumnWidth={minimumColumnWidth}
              onEvaluatedDataChange={onEvaluateChange}
              workRef={workRef}
              scroller={scroller}
            />
          </div>
          {sheetBar === 'show' && (
            <div className="ff-excel-sheet-bar">
              {sheetBarContextEnable && (
                <div className="ff-excel-add-sheet-set">
                  <Tooltip title="Add Sheet" placement="top">
                    <Icon
                      disabled={!editable}
                      className="ff-excel-add-sheet-icon"
                      hoverEffect={true}
                      onClick={handleAddSheet}
                      name="plus_icon"
                      height={20}
                      width={20}
                    />
                  </Tooltip>
                </div>
              )}
              <div className="ff-excel-tab-container">
                {sheetNames.map((name, index) => (
                  <Typography key={name} lineHeight="16px">
                    <div
                      onContextMenu={(event) => {
                        handleSheetChange(name, index);
                        if (sheetBarContextEnable) {
                          contextClick(event, name, index);
                        }
                      }}
                      className={classNames('ff-excel-tab-list', {
                        active: name === selectedSheet.name,
                      })}
                      onClick={() => {
                        handleSheetChange(name, index);
                      }}
                      suppressContentEditableWarning={editingSheet === index}
                      onDoubleClick={(e) => {
                        setEditingSheet(index);
                        if (editingSheet === null) {
                          setTimeout(
                            () => setCursorToEnd(e.target as HTMLDivElement),
                            0
                          );
                        }
                      }}
                      contentEditable={editable && editingSheet === index}
                      onBlur={(e) => {
                        handleNameChange(e, index, name);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleNameChange(e, index, name);
                        }
                      }}
                    >
                      {name}
                    </div>
                  </Typography>
                ))}
              </div>
            </div>
          )}
          {contextMenu.open && (
            <ExcelContextMenu
              contextMenu={contextMenu}
              position={position}
              editable={editable}
              disableDeleteOption={disableDeleteOption}
            />
          )}
          <Toastify />
        </div>
      )}
    </>
  );
};

export default ExcelFile;
