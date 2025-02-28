import { Meta, StoryObj } from '@storybook/react';
import IconRadioGroup from './IconRadioGroup';
import { useState } from 'react';

const meta: Meta<typeof IconRadioGroup> = {
  title: 'Components/IconRadioGroup',
  component: IconRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof IconRadioGroup>;

export const Default: Story = {
  render: () => {
    const radioOptions = [
      {
        iconName: 'no_access_icon',
        iconLabel: 'No Access',
        disabled: false,
        disableMessage: '',
      },
      {
        iconName: 'view_access_icon',
        iconLabel: 'View Access',
        disabled: false,
        disableMessage: '',
      },
      {
        iconName: 'edit',
        iconLabel: 'Edit Access',
        disabled: false,
        disableMessage: '',
      },
      {
        iconName: 'full_access_icon',
        iconLabel: 'Full Access',
        disabled: false,
        disableMessage: '',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (selected: string | null) => {
      setSelectedOption(selected);
    };

    return (
      <IconRadioGroup
        items={radioOptions}
        onButtonClick={(selectedItem) => console.log('Selected:', selectedItem)}
        onChange={handleOptionChange}
        selectedValue={selectedOption}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: () => {
    const radioOptions = [
      {
        iconName: 'no_access_icon',
        iconLabel: 'No Access',
        disabled: true,
        disableMessage: 'user dont have access',
      },
      {
        iconName: 'view_access_icon',
        iconLabel: 'View',
        disabled: false,
        disableMessage: '',
      },
      {
        iconName: 'edit',
        iconLabel: 'Edit',
        disabled: false,
        disableMessage: '',
      },
      {
        iconName: 'full_access_icon',
        iconLabel: 'Full Access',
        disabled: false,
        disableMessage: '',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (selected: string | null) => {
      setSelectedOption(selected);
    };

    return (
      <IconRadioGroup
        items={radioOptions}
        onButtonClick={() => {}}
        onChange={handleOptionChange}
        selectedValue={selectedOption}
      />
    );
  },
};

export default meta;
