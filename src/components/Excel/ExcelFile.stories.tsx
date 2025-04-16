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
        sheetName: 'Sheet1',
        data: [
          [
            {
              value: 'Test Steps',
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: 'Input',
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: 'Expected Result',
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: 'Actual Result',
            },
            {
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: 'Attachment',
            },
            {
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: 'Status',
            },
            {
              style: {
                name: 'Arial',
                size: 10,
                bold: false,
                italic: false,
                underline: true,
                color: '3D0301',
                backgroundColor: 'C6E7FF',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: 'Comment',
            },
          ],
          [
            {
              value: '',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: 'asfd',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: 'asdfasfd',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: 'F2F2F2',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: '',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'file',
              },
              value:
                '[{"createdBy":"USR18162","modifiedBy":"USR18162","createdByUname":"Karthikeyan V","modifiedByUname":"Karthikeyan V","createdOn":"08 Mar 2025 04:42 AM","modifiedOn":"08 Mar 2025 04:42 AM","state":"APPROVED","searchKey":"/FLDR1017/FLDR1020/FILE1416","parentId":"FLDR1020","sourceId":"FLDR1020","inputAction":"add","id":"FILE1417","name":"basic (3).png*49397f5b-d5ba-4304-bbc0-40cd05bcbd86","projectId":"PJT1005","folder":false,"executionOrder":0,"imported":false},{"createdBy":"USR18162","modifiedBy":"USR18162","createdByUname":"Karthikeyan V","modifiedByUname":"Karthikeyan V","createdOn":"08 Mar 2025 04:42 AM","modifiedOn":"08 Mar 2025 04:42 AM","state":"APPROVED","searchKey":"/FLDR1017/FLDR1020/FILE1416","parentId":"FLDR1020","sourceId":"FLDR1020","inputAction":"add","id":"FILE1418","name":"basic (5).png*49397f5b-d5ba-4304-bbc0-40cd05bcbd86","projectId":"PJT1005","folder":false,"executionOrder":0,"imported":false},{"createdBy":"USR18162","modifiedBy":"USR18162","createdByUname":"Karthikeyan V","modifiedByUname":"Karthikeyan V","createdOn":"08 Mar 2025 04:42 AM","modifiedOn":"08 Mar 2025 04:42 AM","state":"APPROVED","searchKey":"/FLDR1017/FLDR1020/FILE1416","parentId":"FLDR1020","sourceId":"FLDR1020","inputAction":"add","id":"FILE1416","name":"basic (4).png*49397f5b-d5ba-4304-bbc0-40cd05bcbd86","projectId":"PJT1005","folder":false,"executionOrder":0,"imported":false}]',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'dropDown',
                options: [
                  {
                    disable: false,
                    label: 'pass',
                    name: 'pass',
                    value: 'pass',
                  },
                  {
                    disable: false,
                    label: 'fail',
                    name: 'fail',
                    value: 'fail',
                  },
                ],
              },
              value: 'pass',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: '',
            },
          ],
          [
            {
              value: '',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: 'asdfasfd',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              value: '',
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: 'c9c9c9',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: '',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'file',
              },
              value: '',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'dropDown',
                options: [
                  {
                    disable: false,
                    title: 'warning',
                    label: 'warning',
                    value: 'warning',
                    color: 'orange',
                  },
                  {
                    disable: false,
                    title: 'fail',
                    label: 'fail',
                    value: 'fail',
                    color: 'red',
                  },
                  {
                    disable: false,
                    title: 'skipped',
                    label: 'skipped',
                    value: 'skipped',
                    color: 'grey',
                  },
                  {
                    disable: false,
                    title: 'pass',
                    label: 'green',
                    value: 'pass',
                    color: 'green',
                  },
                ],
              },
              value: '',
            },
            {
              style: {
                name: 'Poppins',
                size: 9,
                bold: false,
                italic: false,
                underline: false,
                color: '000000',
                backgroundColor: 'ffffff',
                borderColor: '000000',
                border: {
                  top: 'THIN',
                  right: 'THIN',
                  bottom: 'THIN',
                  left: 'THIN',
                },
                alignment: {
                  horizontal: 'LEFT',
                  vertical: 'BOTTOM',
                  wrapText: false,
                },
              },
              readOnly: false,
              inputType: {
                type: 'text',
              },
              value: '',
            },
          ],
        ],
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
    disableDeleteOption: false,
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
    minimumColumnWidth: 150,
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
