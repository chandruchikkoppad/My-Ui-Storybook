import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EditLabel from './EditLabel';

const meta: Meta<typeof EditLabel> = {
  title: 'Components/EditLabel',
  component: EditLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof EditLabel>;

let optionsList = [
  { label: 'option 1', value: 'option 1' },
  { label: 'option 2', value: 'option 2' },
  { label: 'option 3', value: 'option 3' },
  { label: 'option 4', value: 'option 4' },
];
let selectedOption = { label: 'option 2', value: 'option 2' };

const defaultArgs = {
  label: 'Field-Name',
  placeholder: 'Enter your name',
  optionsList: optionsList,
  selectedOption: selectedOption,
  isDisable: { confirm: false, cancel: false, textField: false },
  handleTriggerDoubleClick: () => console.log('Double-click triggered!'),
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    value: 'abcqwertyuiop[asdfghjkl;zxcvbnm,qwertyuiosdfghjklsedrftgyhujik',
    isOnBlurTrue: false,
    highlightText: 'abc',
  },
};

export const withDropdown: Story = {
  render: () => {
    const [text, setText] = useState('script 123');
    const handleOnConfirm = (text, currentSelectedOption) => {
      setText(text);
      return { text, currentSelectedOption };
    };
    const handleCustomError = (inputValue: string) => {
      if (!inputValue) {
        return 'Text is required';
      }
      if (inputValue.length < 3) {
        return 'Please enter at least 3 characters.';
      }
      return '';
    };
    return (
      <EditLabel
        withDropdown={true}
        value={text}
        optionsList={optionsList}
        selectedOption={selectedOption}
        onConfirm={handleOnConfirm}
        inputFieldWidth={100}
        selectFieldWidth={100}
        tooltip={{
          tooltipTitle: 'text',
          tooltipPlacement: 'bottom',
        }}
        required
        handleCustomError={handleCustomError}
        onClick={() => {
          console.log('single click');
        }}
        handleTriggerDoubleClick={() => console.log('Double-click triggered!')}
      />
    );
  },
};

export const SelectOneDisableOther: Story = {
  render: () => {
    const [values, setValues] = useState([
      { id: '1', text: 'hello World' },
      { id: '2', text: 'check it' },
      { id: '3', text: 'dont check' },
    ]);
    const [editableId, setEditableId] = useState<string | null>(null);

    const handleOnConfirm = (id: string, text: string) => {
      setValues((prevValues) =>
        prevValues.map((value) =>
          value.id === id ? { ...value, text } : value
        )
      );
    };

    const handleCustomError = (inputValue: string) => {
      const errors: { [key: string]: boolean } = {
        'Name is required': !inputValue,
        'Name should contain at least 3 characters':
          inputValue.length > 0 && inputValue.length < 3,
        'Name cannot exceed 25 characters': inputValue.length > 25,
      };

      return Object.keys(errors).find((key) => errors[key]) || '';
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };

    return (
      <div style={{ padding: '20px' }}>
        {values.map((value) => (
          <EditLabel
            key={value.id}
            id={value.id}
            onConfirm={(text) => handleOnConfirm(value.id, text)}
            value={value.text}
            label="Edit Variable"
            withDropdown={false}
            handleCustomError={handleCustomError}
            inputFieldWidth={120}
            isDisable={{ confirm: false, cancel: false, textField: false }}
            isEditable={editableId === value.id}
            setIsEditable={setEditableId}
            highlightText="HELLO"
            handleOnChange={handleOnChange}
            cursor="default"
            handleTriggerDoubleClick={() =>
              console.log(`Double-clicked on${value.text}`)
            }
          />
        ))}
      </div>
    );
  },
};
export default meta;
