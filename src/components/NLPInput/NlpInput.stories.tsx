import type { Meta, StoryObj } from '@storybook/react';
import NlpInput from './NlpInput';
// import { useState } from 'react';
// import { Option } from '../NLPInput/type';

const meta: Meta<typeof NlpInput> = {
  title: 'Components/NlpInput',
  component: NlpInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof NlpInput>;

export const Primary: Story = {
  args: {
    label: 'NLP Input',
    optionsList: [
      {
        desc: 'randomNumber',
        displayName: 'randomNumber',
        failMessage: 'randomNumber has failed',
        isNonPE: false,
        name: 'randomNumber',
        nlpName: 'randomNumber',
        nlpType: 'PROGRAM_ELEMENTS',
        packageName: 'com.tyss.optimize.programelement.LIC3813PJT1001.Logics',
        parentId: 'PKJ1017',
        passMessage: 'randomNumber has passed',
        programElementId: 'PRG_ELE1001',
        projectId: 'PJT1001',
        returnType: 'java.lang.Integer',
        searchName: 'randomNumber',
        stepInputs: [{}], // Placeholder, replace with actual data if needed
        toolTip: 'Logics : randomNumber',
        _class: 'com.tyss.optimize.data.models.db.model.ProgramElementNlp',
        _id: 'PE_NLPdbed27d0-b05a-4354-b9d3-c2f85307b4f2',
      },
      {
        desc: 'randomNumber',
        displayName: 'randomNumber',
        failMessage: 'randomNumber has failed',
        isNonPE: false,
        name: 'randomNumber',
        nlpName: 'randomNumber',
        nlpType: 'PROGRAM_ELEMENTS',
        packageName: 'com.tyss.optimize.programelement.LIC3813PJT1001.Logics',
        parentId: 'PKJ1017',
        passMessage: 'randomNumber has passed',
        programElementId: 'PRG_ELE1001',
        projectId: 'PJT1001',
        returnType: 'java.lang.Integer',
        searchName: 'randomNumber',
        stepInputs: [
          { name: 'Range Of The Number', type: 'java.lang.Integer' },
        ], // Placeholder, replace with actual data if needed
        toolTip: 'Logics : randomNumber',
        _class: 'com.tyss.optimize.data.models.db.model.ProgramElementNlp',
        _id: 'PE_NLPdbed27d0-b05a-4354-b9d3-c2f85307b4f2',
      },
      {
        description: '',
        displayName: 'Open Browser 1',
        failMessage: 'Open Browser is failed',
        imported: false,
        libraryId: 'LIB1002',
        name: 'Open Browser',
        nlpName: 'Open Browser',
        nlpType: 'STEP_GROUP',
        parentId: 'STP_GRP1001',
        passMessage: 'Open Browser is passed',
        path: '/Root/Open and Close Browser/Open Browser',
        platform: 'Web',
        projectId: 'PJT1001',
        returnType: 'void',
        searchName: 'Open Browser',
        stepInputs: [], // Empty array for step inputs
        toolTip: 'Open and Close Browser : Open Browser : Web',
        _class: 'com.tyss.optimize.data.models.db.model.StepGroupNlp',
        _id: 'SG_NLP1001',
      },
    ],
  },
};

export const Disable: Story = {
  args: {
    label: 'NLP Input',
    optionsList: [],
    disabled: true,
  },
};

// export const WithInitialValue: Story = {
//   args: {
//     label: 'NLP Input',
//     selectedOption: { label: 'Option 2', value: '2' },
//     optionsList: [
//       { label: 'NLP 1', value: '1' },
//       { label: 'NLP 2', value: '2' },
//       { label: 'NLP 3', value: '3' },
//     ],
//   },
// };

// export const OptionSelection: Story = {
//   render: () => {
//     const optionsList = [
//       { label: 'NLP 1', value: '1' },
//       { label: 'NLP 2', value: '2' },
//       { label: 'NLP 3', value: '3' },
//     ];

//     const [selectedOption, setSelectedOption] = useState<Option>({
//       label: 'NLP 2',
//       value: '2',
//     });

//     const handleChange = (option: Option) => {
//       setSelectedOption(option);
//     };

//     return (
//       <NlpInput
//         label="NLP Input"
//         optionsList={optionsList}
//         selectedOption={selectedOption}
//         onChange={handleChange}
//       />
//     );
//   },
// };

export default meta;
