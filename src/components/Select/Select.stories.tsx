import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { Option } from './types';
import RadioGroup from '../RadioGroup';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select',
    labelAccessor: 'name',
    valueAccessor: 'value',
    tooltip: false,
    optionsList: [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
        name: 'fireflink',
        disable: true,
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
        name: 'local',
        disable: false,
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
        name: 'browser stack',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
        name: 'lambda test',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
        name: 'lambda test',
      },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Select',
    optionsList: [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ],
    errorMsg: 'Please select a option',
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    optionsList: [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ],
  },
};

export const EmptyOptions: Story = {
  args: {
    label: 'Select',
    optionsList: [],
    errorMsg: 'No options available',
  },
};

export const Disable: Story = {
  args: {
    label: 'Select',
    optionsList: [],
    disabled: true,
  },
};

export const WithInitialValue: Story = {
  args: {
    label: 'Select',
    selectedOption: {
      label: 'fire-flink-LIC4900-onPrem',
      value: 'fire-flink-LIC4900-onPrem',
    },
    optionsList: [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ],
  },
};

export const OptionSelection: Story = {
  render: () => {
    const optionsList = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'fire-flink-LIC3179',
      value: 'fire-flink-LIC3179',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
    );
  },
};

export const CustomJSX: Story = {
  render: () => {
    const optionsList: Option[] = [
      {
        label: <p style={{ color: 'red' }}>Option 1</p>,
        value: 'option 1',
      },
      {
        label: <p style={{ color: 'green' }}>Option 2</p>,
        value: 'option 2',
      },
      {
        label: <p style={{ color: 'beige' }}>Option 3</p>,
        value: 'option 3',
      },
      {
        label: <p style={{ color: 'crimson' }}>Option 4</p>,
        value: 'option 4',
      },
      {
        label: <p style={{ color: 'cyan' }}>Option 5</p>,
        value: 'option 5',
      },
      {
        label: <p style={{ color: 'red' }}>Option 6</p>,
        value: 'option 6',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: <p style={{ color: 'red' }}>Option 6</p>,
      value: 'option 6',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
    );
  },
};

export const updateOptionFromOutside: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'fire-flink-LIC4900-onPrem',
      value: 'fire-flink-LIC4900-onPrem',
    });

    const optionsList = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ];

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    const radioOptions = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ];
    const [selectedRadioOption, setSelectedRadioOption] = useState('option2');
    const handleOptionChange = (option: Option) => {
      setSelectedRadioOption(option.value);
      setSelectedOption(option);
    };

    return (
      <div>
        <Select
          optionsList={optionsList}
          selectedOption={selectedOption}
          onChange={handleChange}
          showLabel={false}
          noResultsMessage="No License Available"
        />
        <RadioGroup
          selectedValue={selectedRadioOption}
          onChange={handleOptionChange}
          name="option"
          options={radioOptions}
        />
      </div>
    );
  },
};

export const IconOptionSelection: Story = {
  render: () => {
    const optionsList = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
        iconName: 'local',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
        iconName: 'chrome_icon',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
        iconName: 'mac_icon',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
        iconName: 'web_icon',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'fire-flink-LIC3179',
      value: 'fire-flink-LIC3179',
      iconName: 'local',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
        showIcon={true}
        width={200}
      />
    );
  },
};

export const SelectWithPlaceHolder: Story = {
  render: () => {
    const optionsList = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: 'fire-flink-LIC4999',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: '',
      value: '',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
        placeHolder="Search"
        showLabel={false}
        label="test"
        // showArrowIcon={false}
        tooltip={true}
      />
    );
  },
};

export const SelectWithToolTip: Story = {
  render: () => {
    const optionsList = [
      {
        label: 'fire-flink-LIC4900-onPrem',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC4900-onPrem',
      },
      {
        label: 'fire-flink-LIC3179',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC3179',
      },
      {
        label: 'fire-flink-LIC4937',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC4937',
      },
      {
        label: 'fire-flink-LIC5937',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC5937',
      },
      {
        label: 'fire-flink-LIC6937',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC6937',
      },
      {
        label: 'fire-flink-LIC7937',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC7937',
      },
      {
        label: 'fire-flink-LIC4999',
        value: {
          clientId: 'fire-flink-LIC4900-onPrem',
        },
        name: 'fire-flink-LIC4999',
        recurrence: true,
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: '',
      value: {
        clientId: '',
      },
      name: '',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    const getMiniModalJSX = () => (
      <>
        <h1>Test Mini Modal</h1>
      </>
    );
    return (
      <Select
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
        label="Select Label"
        showToolTip={true}
        modalJSXProps={getMiniModalJSX()}
        valueAccessor="name"
        tooltip
        recurrence
      />
    );
  },
};

export const RecurrenceModal: Story = {
  render: () => {
    const Recurrence_Initial_State = [
      { label: 'Once', value: 'Once' },
      { label: 'Hourly', value: 'Hourly' },
      { label: 'Daily', value: 'Daily' },
      {
        label: `Weekly on `,
        value: 'Weekly',
      },
      {
        label: `Monthly on`,
        value: 'Monthly',
      },
      {
        label: 'Every Weekday (Monday-Friday)',
        value: 'Weekday',
      },
      {
        label: 'Custom recurrence',
        value: 'custom',
        recurrence: true,
      },
      {
        label: 'Continuous',
        value: 'Continuous',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: <p style={{ color: 'red' }}>custom recurrence</p>,
      value: 'custom recurrence',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={Recurrence_Initial_State}
        selectedOption={selectedOption}
        recurrence
        onChange={(option: Option) => {
          if (option.label.toLowerCase() !== 'custom recurrence') {
            const tempArr = [...Recurrence_Initial_State];
            tempArr.splice(6, 1);
            setSelectedOption(tempArr);
          }
        }}
        modalJSXProps={
          <>
            <h1>modal</h1>
          </>
        }
      />
    );
  },
};

export const SelectWithCloseIcon: Story = {
  render: () => {
    const Recurrence_Initial_State = [
      { label: 'Once', value: 'Once' },
      { label: 'Hourly', value: 'Hourly' },
      { label: 'Daily', value: 'Daily' },
      {
        label: `Weekly on `,
        value: 'Weekly',
      },
      {
        label: `Monthly on`,
        value: 'Monthly',
      },
      {
        label: 'Every Weekday (Monday-Friday)',
        value: 'Weekday',
      },
      {
        label: 'Custom recurrence',
        value: 'custom',
        recurrence: true,
      },
      {
        label: 'Continuous',
        value: 'Continuous',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: <p style={{ color: 'red' }}>custom recurrence</p>,
      value: 'custom recurrence',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={Recurrence_Initial_State}
        selectedOption={selectedOption}
        recurrence
        onChange={(option: Option) => {
          if (option.label.toLowerCase() !== 'custom recurrence') {
            const tempArr = [...Recurrence_Initial_State];
            tempArr.splice(6, 1);
            setSelectedOption(tempArr);
          }
        }}
        modalJSXProps={
          <>
            <h1>modal</h1>
          </>
        }
        showArrowIcon={false}
        showClearIcon={true}
        handelClear={() => setSelectedOption({ label: '', value: '' })}
      />
    );
  },
};

export default meta;
