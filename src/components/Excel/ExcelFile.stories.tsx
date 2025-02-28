import type { Meta, StoryObj } from '@storybook/react';
import ExcelFile from './ExcelFile/ExcelFile';

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
    excelData: [
      {
        sheetName: 'fireflink',
        data: [
          [
            {
              value: 'Test Steps',
              readOnly: false,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
                'Delete Row': true,
                'Add Row Top': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                underline: true,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Input',
              readOnly: false,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                underline: true,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Expected Result',
              readOnly: false,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                underline: true,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Actual Result',
              readOnly: true,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Attachment',
              readOnly: true,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Status',
              readOnly: true,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
            {
              value: 'Comment',
              readOnly: true,
              inputType: { type: 'text' },
              contextDisable: {
                'Delete Column': true,
              },
              style: {
                name: 'Poppins',
                size: 9,
                bold: true,
                italic: false,
                color: '1e161f',
                backgroundColor: 'EFE1F9',
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
            },
          ],
          [
            {
              value: '1',
              style: {
                name: 'Algerian',
                size: 44,
                bold: true,
                italic: false,
                border: {
                  top: 'NONE',
                  bottom: 'NONE',
                  left: 'NONE',
                  right: 'NONE',
                },
                alignment: {
                  horizontal: 'CENTER',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
            },
            {
              value: 'This Cell Content is Non-Editable',
              style: {
                name: 'Arial',
                size: 9,
                bold: false,
                italic: false,
                border: {
                  top: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                  right: 'THIN',
                },
                alignment: {
                  horizontal: 'GENERAL',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
            },
          ],
        ],
        rows: {
          readOnly: [3],
        },
        columns: {
          readOnly: [6],
          inputType: {
            7: {
              type: 'file',
            },
          },
        },
        cells: {
          readOnly: [
            [4, 6],
            [2, 3],
          ],
          inputType: {
            '2,9': {
              type: 'dropDown',
              options: [
                { label: 'Pass', value: 'Pass' },
                { label: 'Fail', value: 'Fail' },
              ],
            },
          },
        },
      },
    ],
    toolbar: 'show',
    sheetBar: 'show',
    colCount: 9,
    onSaveInfoChange: (saveInfo) => {
      console.log(saveInfo);
    },
    rowCount: 9,
    editable: true,
    columnContextEnable: true,
    rowContextEnable: true,
    contextOption: {
      open: true,
      options: [
        {
          label: 'Get data from Header',
          value: 'Get data from Header',
          iconName: 'success',
          action: () => {},
          disable: false,
        },
        {
          label: 'Get Cell Value',
          value: 'Get Cell Value',
          iconName: 'success',
          action: () => {},
          disable: false,
        },
      ],
    },
    contextHeightPositioning: 0,
    contextWidthPositioning: 0,
    sheetHeight: '300px',
    onSaveDelay: 4000,
    onSave: (val) => {
      console.log(val);
    },
  },
};

export const WithToolbarHidden: Story = {
  args: {
    toolbar: 'hide',
  },
};

export const WithContextMenuDisabled: Story = {
  args: {
    contextOption: {
      open: false,
      options: [],
    },
  },
};

export const WithRowAndColumnReadonly: Story = {
  args: {
    excelData: [
      {
        sheetName: 'Example Sheet',
        data: [
          [{ value: 'Header 1' }, { value: 'Header 2' }],
          [{ value: 'Data 1' }, { value: 'Data 2' }],
        ],
        rows: {
          readOnly: [1],
        },
        columns: {
          readOnly: [0],
        },
      },
    ],
  },
};

export default meta;
