import type { Meta, StoryObj } from '@storybook/react';
import ExcelFile from './ExcelFile/ExcelFile';
import { Data } from './Data';
import { Data2 } from './Data2';
import { useState } from 'react';

const meta: Meta<typeof ExcelFile> = {
  title: 'Components/ExcelFile',
  component: ExcelFile,
  tags: ['autodocs'],
  argTypes: {
    toolbar: {
      control: { type: 'radio' },
      options: ['show', 'disable', 'hide'],
      description: 'Controls whether the toolbar is shown, disabled, or hidden',
    },
    excelData: {
      description: 'The Excel data containing sheets and their content',
    },
    contextOption: {
      description: 'Provide context menu options for actions like right-click',
    },
    onSave: {
      description: 'Callback function to save the Excel data',
    },
  },
};

type Story = StoryObj<typeof ExcelFile>;

export const Default: Story = {
  args: {
    excelData: Data,
    toolbar: 'show',
    sheetBar: 'show',
    colCount: 50,
    onSaveInfoChange: (saveInfo) => {
      console.log(saveInfo);
    },
    rowCount: 100,
    columnContextEnable: true,
    rowContextEnable: true,
    disableDeleteOption: false,
    getActiveCell: (activeCell) => {
      console.log('activeCell:', activeCell);
    },
    contextOption: {
      open: true,
      options: [
        {
          label: 'Get data from Header',
          value: 'Get data from Header',
          iconName: 'success',
          action: () => {},
          disable: false,
          disableTooltip: '',
          visible: false,
        },
        {
          label: 'Get Cell Value',
          value: 'Get Cell Value',
          iconName: 'success',
          action: () => {},
          disable: false,
          disableTooltip: '',
          visible: false,
        },
      ],
      contextType: null,
    },
    // minimumColumnWidth: 150,
    contextHeightPositioning: 0,
    contextWidthPositioning: 0,
    sheetHeight: '400px',
    onSaveDelay: 4000,
    onSave: (val, headerOldNew) => {
      console.log(val);
      console.log('headerOldNew:', headerOldNew);
    },
    maxColLimit: 100,
    maxRowLimit: 110,
    maxSheetLimit: 2,
    scroller: true,
  },
  render: (args) => {
    const [editable, setEditable] = useState(true);

    return (
      <div>
        <button
          onClick={() => setEditable((prev) => !prev)}
          style={{
            marginBottom: '10px',
            padding: '6px 12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {editable ? 'Edit Disable' : 'Edit Enable'}
        </button>

        <ExcelFile {...args} editable={editable} />
      </div>
    );
  },
};

export const WithToolbarHidden: Story = {
  args: {
    excelData: Data,
    toolbar: 'hide',
  },
};

export const WithContextMenuDisabled: Story = {
  args: {
    excelData: Data2,
    columnContextEnable: false,
    rowContextEnable: false,
    sheetBarContextEnable: false,
  },
};

export const WithRowAndColumnReadonly: Story = {
  args: {
    excelData: [
      {
        sheetName: 'Example Sheet',
        data: [
          [
            {
              value: 'Test Steps',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
                'Delete Row': true,
                'Add Row Top': true,
              },
            },
            {
              value: 'Input',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
            {
              value: 'Expected Result',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
            {
              value: 'Actual Result',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: false,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: true,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
            {
              value: 'Attachment',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: false,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: true,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
            {
              value: 'Status',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: false,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: true,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
            {
              value: 'Comment',
              style: {
                name: 'Arial',
                size: 11,
                bold: false,
                italic: false,
                underline: false,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: true,
              inputType: {
                type: 'text',
              },
              contextDisable: {
                'Delete Column': true,
              },
            },
          ],
        ],
        rows: {
          readOnly: [1],
        },
        columns: {
          readOnly: [1],
        },
      },
    ],
  },
};

export default meta;
