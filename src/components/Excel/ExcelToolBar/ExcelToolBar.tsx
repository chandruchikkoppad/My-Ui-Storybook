import { useEffect, useRef, useState } from 'react';
import './ExcelToolBar.scss';
import MenuOption from '../../MenuOption';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';
import Select from '../../Select';
import { CellBase } from '../ExcelFile/ExcelFileComponents';
import * as Matrix from '../ExcelFile/ExcelFileComponents/matrix';
import ColorBarSelector from '../ColorBarSelector/ColorBarSelector';
import useSelector from '../ExcelFile/ExcelFileComponents/use-selector';
import { convertStyleToBackend } from '../dataConversion';
import {
  convertPxToPt,
  EmptyCell,
  fontFamilyList,
  fontSizeList,
} from '../ExcelFile/ExcelFileComponents/util';

interface ExcelToolBarProps {
  toolbar?: 'show' | 'disable' | 'hide';
  editable: boolean;
  onBold: (data: Matrix.Matrix<CellBase>) => void;
  onItalic: (data: Matrix.Matrix<CellBase>) => void;
  setUnderlineType: (data: Matrix.Matrix<CellBase>) => void;
  setColor: (data: Matrix.Matrix<CellBase>, value: string) => void;
  setBackgroundColor: (data: Matrix.Matrix<CellBase>, value: string) => void;
  setFormatePainter: (data: Matrix.Matrix<CellBase>) => void;
  setTextAlign: (data: Matrix.Matrix<CellBase>, value: string) => void;
  setFontSize: (data: Matrix.Matrix<CellBase>, value: string) => void;
  setFontFamily: (data: Matrix.Matrix<CellBase>, value: string) => void;
  setBorderType: (
    data: Matrix.Matrix<CellBase>,
    value: string,
    color: string
  ) => void;
}

const ExcelToolBar: React.FC<ExcelToolBarProps> = ({
  toolbar = 'show',
  editable,
  onBold,
  onItalic,
  setUnderlineType,
  setColor,
  setFontSize,
  setFontFamily,
  setTextAlign,
  setBackgroundColor,
  setBorderType,
  setFormatePainter,
}) => {
  const disable = toolbar === 'disable' || !editable;
  const cell = useSelector((state) =>
    state.active ? Matrix.get(state.active, state.model.data) : null
  );
  const data = useSelector((state) => state.model.data);
  const formattedStyle = useSelector((state) => state.formattedStyle.open);

  // Default style to Excel
  const basicStyle: React.CSSProperties = {
    ...EmptyCell.style,
    color: '#1e161f', // Needed hexacode for backend
    backgroundColor: '#ffffff', // Needed hexacode for backend
    borderColor: '#1e161f', // Needed hexacode for backend
  };

  const [cellStyle, setCellStyle] = useState(cell?.style || basicStyle);
  const borderMenuRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      cell?.style &&
      JSON.stringify(cell.style) !== JSON.stringify(cellStyle)
    ) {
      setCellStyle(cell?.style || basicStyle);
    }
  }, [cell]);

  const styleBackend = convertStyleToBackend(cellStyle);
  const [border, setBorder] = useState<string>('border-none');
  const [selectedFontFamily, setSelectedFontFamily] = useState<{
    label: string;
    value: string;
  }>({
    label: 'Times New Roman',
    value: 'Times New Roman',
  });
  const [selectedFontSize, setSelectedFontSize] = useState<{
    label: string;
    value: string;
  }>({
    label: '11',
    value: '11',
  });
  const [colorContainer, setColorContainer] = useState<ColorContainer>({
    color: basicStyle.color as string,
    backgroundColor: basicStyle.backgroundColor as string,
    borderColor: basicStyle.borderColor as string,
  });

  const borderTypeIcon = [
    { value: 'border-all-sides', label: 'All Border', icon: 'all_borders' },
    { value: 'border-bottom', label: 'Border Bottom', icon: 'border_bottom' },
    { value: 'border-left', label: 'Border Left', icon: 'border_left' },
    { value: 'border-right', label: 'Border Right', icon: 'border_right' },
    { value: 'border-top', label: 'Border Top', icon: 'border_top' },
    { value: 'border-none', label: 'No Border', icon: 'no_border' },
  ];

  const fontSize = fontSizeList.map((fontSize) => ({
    label: fontSize,
    value: fontSize,
  }));

  const getTextColor = (color: string) => {
    setColorContainer((prev) => ({ ...prev, color: color }));
  };

  const getBackgroundColor = (color: string) => {
    setColorContainer((prev) => ({ ...prev, backgroundColor: color }));
  };

  useEffect(() => {
    let timeGap = setTimeout(() => {
      setColor(data, colorContainer.color);
    }, 0);
    return () => {
      clearTimeout(timeGap);
    };
  }, [colorContainer.color]);

  useEffect(() => {
    let timeGap = setTimeout(() => {
      setBackgroundColor(data, colorContainer.backgroundColor);
    }, 0);
    return () => {
      clearTimeout(timeGap);
    };
  }, [colorContainer.backgroundColor]);

  let getBorderIcon = () => {
    const selectedIcon = borderTypeIcon.find((e) => e.value === border);
    return selectedIcon ? selectedIcon.icon : '';
  };

  useEffect(() => {
    const fontFamily = cellStyle.fontFamily as string;
    const fontSize = `${convertPxToPt(cellStyle.fontSize as string)}`;
    setSelectedFontFamily({ label: fontFamily, value: fontFamily });
    setSelectedFontSize({ label: fontSize, value: fontSize });
  }, [cellStyle]);

  return (
    <div className="ff-excel-toolbar">
      <div className="ff-excel-toolbar-font ">
          <div className="ff-excel-toolbar-font-family">
            <Select
              disabled={disable}
              height={24}
              tooltip
              showToolTip
              showLabel={false}
              optionZIndex={2000}
              onChange={(e) => {
                setSelectedFontFamily({ label: e.label, value: e.label });
                setFontFamily(data, e.value);
              }}
              required={false}
              optionsList={fontFamilyList}
              selectedOption={selectedFontFamily}
            />
          </div>
          <div className="ff-excel-toolbar-font-size">
            <Select
              disabled={disable}
              height={24}
              showLabel={false}
              optionZIndex={2000}
              required={false}
              onChange={(e) => {
                setSelectedFontSize({ label: e.label, value: e.value });
                setFontSize(data, e.value);
              }}
              optionsList={fontSize}
              selectedOption={selectedFontSize}
            />
          </div>
      </div>
      <div className="ff-excel-toolbar-divider"></div>
      <div className="ff-excel-toolbar-icon">
        <Tooltip placement="top" title={'Text Left'}>
          <Icon
            disabled={disable}
            variant={cellStyle.textAlign === 'left' ? 'dark' : 'light'}
            hoverEffect={cellStyle.textAlign === 'left' ? false : true}
            onClick={() => setTextAlign(data, 'left')}
            name="text_align_left"
          />
        </Tooltip>
        <Tooltip placement="top" title={'Text Center'}>
          <Icon
            disabled={disable}
            variant={cellStyle.textAlign === 'center' ? 'dark' : 'light'}
            hoverEffect={cellStyle.textAlign === 'center' ? false : true}
            onClick={() => setTextAlign(data, 'center')}
            name="text_align_center"
          />
        </Tooltip>

        <Tooltip placement="top" title={'Text Right'}>
          <Icon
            disabled={disable}
            variant={cellStyle.textAlign === 'right' ? 'dark' : 'light'}
            hoverEffect={cellStyle.textAlign === 'right' ? false : true}
            onClick={() => setTextAlign(data, 'right')}
            name="text_align_right"
          />
        </Tooltip>
      </div>
      <div className="ff-excel-toolbar-divider"></div>
      <div className="ff-excel-toolbar-text">
        <Tooltip placement="top" title={'Bold'}>
          <Icon
            disabled={disable}
            variant={styleBackend.bold ? 'dark' : 'light'}
            hoverEffect={styleBackend.bold ? false : true}
            onClick={() => onBold(data)}
            name="bold"
          />
        </Tooltip>
        <Tooltip placement="top" title={'Italic'}>
          <Icon
            disabled={disable}
            variant={styleBackend.italic ? 'dark' : 'light'}
            hoverEffect={styleBackend.italic ? false : true}
            onClick={() => onItalic(data)}
            name="italic"
          />
        </Tooltip>
        <Tooltip placement="top" title={'Underline'}>
          <div className="ff-excel-toolbar-icon-underline">
            <Icon
              disabled={disable}
              variant={
                cellStyle.textDecoration === 'underline' ? 'dark' : 'light'
              }
              hoverEffect={
                cellStyle.textDecoration === 'underline' ? false : true
              }
              onClick={() => setUnderlineType(data)}
              name="underline"
            />
          </div>
        </Tooltip>
      </div>
      <div className="ff-excel-toolbar-divider"></div>
      <div className="ff-excel-toolbar-icon">
        <Tooltip placement="top" title={'Format Painter'}>
          <Icon
            disabled={disable}
            variant={formattedStyle ? 'dark' : 'light'}
            hoverEffect={formattedStyle ? false : true}
            onClick={() => {
              setFormatePainter(data);
            }}
            name="formate_painter"
          />
        </Tooltip>
        <Tooltip placement="top" title={'Text Color'}>
          <div className="ff-excel-toolbar-icon-color">
            <Icon
              disabled={disable}
              hoverEffect
              width={12}
              height={12}
              onClick={() => {
                setColor(data, colorContainer.color);
              }}
              name="text_color"
            />
            <ColorBarSelector
              disabled={disable}
              getColorValue={getTextColor}
              initialColor={colorContainer.color}
            />
          </div>
        </Tooltip>
        <Tooltip placement="top" title={'Background Color'}>
          <div className="ff-excel-toolbar-icon-color">
            <Icon
              disabled={disable}
              hoverEffect
              width={12}
              height={12}
              onClick={() =>
                setBackgroundColor(data, colorContainer.backgroundColor)
              }
              name="fill_color"
            />
            <ColorBarSelector
              disabled={disable}
              getColorValue={getBackgroundColor}
              initialColor={colorContainer.backgroundColor}
            />
          </div>
        </Tooltip>
      </div>
      <div className="ff-excel-toolbar-divider"></div>
      <div className="ff-excel-toolbar-menu">
        <Tooltip placement="top" title={'Border Type'}>
          <div className="ff-excel-toolbar-menu-option">
            <Icon
              hoverEffect
              disabled={disable}
              onClick={() => setBorderType(data, border, 'black')}
              name={getBorderIcon()}
            />
            <span ref={borderMenuRef}>
              <MenuOption
                disabled={disable}
                iconName="arrow_down"
                targetRef={borderMenuRef}
                iconSize={12}
                zIndex={2000}
                options={borderTypeIcon}
                tooltipPlacement="top"
                onOptionClick={(e) => {
                  let selectedValue = e.value as string;
                  setBorderType(data, selectedValue, 'black');
                  setBorder(selectedValue);
                }}
              />
            </span>
          </div>
        </Tooltip>
      </div>

      {/* <div className="ff-excel-toolbar-divider"></div>  TODO */}
      {/* <div className="ff-excel-toolbar-menu"> 
        <Tooltip placement="top" title={'Formula'}>
          <Icon
            hoverEffect
            disabled={toolbar === 'disable'}
            onClick={() => setBorderType(data, border, 'black')}
            name="formula_icon"
          />
        </Tooltip>
      </div>  TODO */}
    </div>
  );
};

export default ExcelToolBar;
