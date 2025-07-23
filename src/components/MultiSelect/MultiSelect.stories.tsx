import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './MultiSelect';
import { useEffect, useState } from 'react';
import { Option } from './MultiSelectTypes';
import React from 'react';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MultiSelect>;

const defaultArgs = {
  label: 'Fruits',
  disabled: false,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    withSelectButton: true,
    maxDropdownHeight: 192, //5 options and a select button
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
      { label: 'Grape', value: 'grape' },
      { label: 'Kiwi', value: 'kiwi' },
      { label: 'Mango', value: 'mango' },
      { label: 'Orange', value: 'orange' },
      { label: 'Peach', value: 'peach' },
      { label: 'Strawberry', value: 'strawberry' },
    ],
  },
};

export const NameAccessor: Story = {
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([
      { name: 'Apple', fruit: 'apple' },
    ]);
    const onChange = (options: Option[]) => {
      setSelectedOptions(options);
    };
    useEffect(() => {
      setOptions([
        { name: 'Apple', fruit: 'apple' },
        { name: 'Banana', fruit: 'banana' },
        {
          name: 'CherryCherryCherryCherryCherryCherryCherryCherryCherryCherry',
          fruit: 'cherry',
        },
        { name: 'Date', fruit: 'date' },
        { name: 'Kiwi', fruit: 'kiwi' },
        { name: 'Mango', fruit: 'mango' },
        { name: 'Orange', fruit: 'orange' },
        { name: 'Peach', fruit: 'peach' },
        { name: 'Strawberry', fruit: 'strawberry' },
      ]);
    }, []);
    return (
      <MultiSelect
        labelAccessor="name"
        label={'Fruits'}
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
        valueAccessor="fruit"
      />
    );
  },
};
export const ScrollMultiSelect: Story = {
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const onChange = (options: Option[]) => {
      setSelectedOptions(options);
    };
    useEffect(() => {
      setOptions([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        { label: 'Grape', value: 'grape' },
        { label: 'Kiwi', value: 'kiwi' },
        { label: 'Mango', value: 'mango' },
        { label: 'Orange', value: 'orange' },
        { label: 'Peach', value: 'peach' },
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        { label: 'Grape', value: 'grape' },
        { label: 'Kiwi', value: 'kiwi' },
        { label: 'Mango', value: 'mango' },
        { label: 'Orange', value: 'orange' },
        { label: 'Peach', value: 'peach' },
        { label: 'Strawberry', value: 'strawberry' },
      ]);
    }, []);
    return (
      <div style={{ height: '300px', overflow: 'scroll' }}>
        <div style={{ height: '500px', marginTop: '400px' }}>
          <MultiSelect
            maxDropdownHeight={224} //7 options
            displayCount={false}
            label={'Fruits'}
            options={options}
            selectedOptions={selectedOptions}
            onChange={onChange}
          />
        </div>
      </div>
    );
  },
};
export const EmailGroup: Story = {
  render: () => {
    const [options, setOptions] = useState([
      {
        label: 'Sample1@gmail.com',
        value: 'sample1@gmail.com',
        isDisabled: true,
      },
      { label: 'Sample2@gmail.com', value: 'sample2@gmail.com' },
    ]);
    const [selectedOptions, setSelectedOptions] = useState<
      { label?: string; value?: string; isDisabled?: boolean }[]
    >([
      {
        label: 'Sample1@gmail.com',
        value: 'sample1@gmail.com',
        isDisabled: true,
      },
    ]);
    const onChange = (
      options: { label?: string; value?: string; isDisabled?: boolean }[]
    ) => {
      setSelectedOptions(options);
    };
    const onEnter = (newOption: string) => {
      setOptions((prev) => [...prev, { label: newOption, value: newOption }]);
      setSelectedOptions((prev) => [
        ...prev,
        { label: newOption, value: newOption },
      ]);
      return false;
    };
    return (
      <MultiSelect
        label={'Enter Email'}
        type="email"
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
        acceptNewOption={true}
        displayCount={true}
        labelAccessor="label"
        valueAccessor="value"
        onEnter={onEnter}
        noResultsMessage="email not found"
      />
    );
  },
};

export const ControlledWithSelectAll: Story = {
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<
      { label?: string; value?: string }[]
    >([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
    const onChange = (options: { label?: string; value?: string }[]) => {
      setSelectedOptions(options);
    };
    const onToggleAllSelect = () => {
      if (isAllSelected) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(options);
      }
      setIsAllSelected(!isAllSelected);
    };
    useEffect(() => {
      setOptions([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        {
          label:
            'GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123',
          value: 'grape',
        },
        { label: 'Kiwi', value: 'kiwi' },
        { label: 'Mango', value: 'mango' },
        { label: 'Orange', value: 'orange' },
        { label: 'Plum', value: 'plum' },
        { label: 'Berry', value: 'berry' },
        { label: 'Watermelon', value: 'watermelon' },
        { label: 'Guava', value: 'guava' },
        { label: 'Pineapple', value: 'pineapple' },
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Pear', value: 'pear' },
        { label: 'Peach', value: 'peach' },
        { label: 'Lemon', value: 'lemon' },
        { label: 'Papaya', value: 'papaya' },
        { label: 'Apricot', value: 'apricot' },
        { label: 'Raspberry', value: 'raspberry' },
        { label: 'Pomegranate', value: 'pomegranate' },
        { label: 'Cantaloupe', value: 'cantaloupe' },
        { label: 'Lychee', value: 'lychee' },
      ]);
    }, []);
    useEffect(() => {
      setIsAllSelected(selectedOptions.length === options.length);
    }, [selectedOptions, options]);
    return (
      <div>
        <MultiSelect
          label={'Fruits'}
          required
          options={options}
          displayCount={false}
          selectedOptions={selectedOptions}
          onChange={onChange}
          isAllSelected={isAllSelected}
          onToggleAllSelect={onToggleAllSelect}
          isAllSelect={true}
          displayAllSelectedAsText={true}
        />
      </div>
    );
  },
};
export const Controlled: Story = {
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<
      { label?: string; value?: string }[]
    >([]);
    const onChange = (options: { label?: string; value?: string }[]) => {
      setSelectedOptions(options);
    };
    useEffect(() => {
      setOptions([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        {
          label:
            'GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123',
          value: 'grape',
        },
        { label: 'Kiwi', value: 'kiwi' },
        { label: 'Mango', value: 'mango' },
        { label: 'Orange', value: 'orange' },
        { label: 'Plum', value: 'plum' },
        { label: 'Berry', value: 'berry' },
        { label: 'Watermelon', value: 'watermelon' },
        { label: 'Guava', value: 'guava' },
        { label: 'Pineapple', value: 'pineapple' },
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Pear', value: 'pear' },
        { label: 'Peach', value: 'peach' },
        { label: 'Lemon', value: 'lemon' },
        { label: 'Papaya', value: 'papaya' },
        { label: 'Apricot', value: 'apricot' },
        { label: 'Raspberry', value: 'raspberry' },
        { label: 'Pomegranate', value: 'pomegranate' },
        { label: 'Cantaloupe', value: 'cantaloupe' },
        { label: 'Lychee', value: 'lychee' },
      ]);
    }, []);
    return (
      <MultiSelect
        label={'Fruits'}
        required
        options={options}
        displayCount
        selectedOptions={selectedOptions}
        onChange={onChange}
        maxDropdownHeight={224} //7 options
      />
    );
  },
};
export const Labels: Story = {
  render: () => {
    const [options] = useState<Option[]>([
      {
        label: 'Funtional Testing',
        value: 'functional testing',
      },
      {
        label: 'Smoke Testing',
        value: 'smoke testing',
      },
      {
        label: 'Regression Testing',
        value: 'regression Testing',
      },
      {
        label: 'Integration Testing',
        value: 'integration testing',
      },
    ]);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const onChange = (options: { label?: string; value?: string }[]) => {
      setSelectedOptions(options);
    };

    return (
      <div style={{ width: '250px' }}>
        <MultiSelect
          required
          label={'Labels'}
          variant="labels"
          options={options}
          selectedOptions={selectedOptions}
          onChange={onChange}
          onLabelPlusIconClick={async (searchedKeyword) => {
            alert(searchedKeyword);
          }}
          displayCount
        />
      </div>
    );
  },
};

export const Machines: Story = {
  render: () => {
    const [options] = useState<Option[]>([
      {
        label: <h2>Machine 1</h2>,
        value: 'machine 1',
      },
      {
        label: <h2>Machine 2</h2>,
        value: 'machine 2',
      },
      {
        label: <h2>Machine 3</h2>,
        value: 'machine 3',
      },
      {
        label: <h2>Machine 4</h2>,
        value: 'machine 4',
      },
    ]);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const handleSelectChange = (machines: Option[]) => {
      setSelectedOptions(machines);
    };

    return (
      <div style={{ width: '250px' }}>
        <div>
          {selectedOptions.map((machine, index) => (
            <MultiSelect
              key={index}
              label="Machines"
              variant="machines"
              //  labelAccessor='label'
              // valueAccessor='value'
              options={options}
              onSelectButtonClick={handleSelectChange}
              selectedOptions={selectedOptions} // Pass shared state
            />
          ))}
          <MultiSelect
            label="Machines"
            labelAccessor="label"
            valueAccessor="value"
            withSelectButton
            options={options}
            onSelectButtonClick={handleSelectChange}
            selectedOptions={selectedOptions}
          />
        </div>
      </div>
    );
  },
};

export default meta;
