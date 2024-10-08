import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import Components from './iconList';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  args: {
    name: 'delete_black',
    color: '',
  },
};

export const AllIcons: Story = {
  render: () => {
    return (
      <div className="group-icons">
        {Object.keys(Components).map((iconName) => {
          return (
            <div key={iconName}>
              <Icon name={iconName} height={40} width={40} />
              <center title={iconName}>{iconName}</center>
            </div>
          );
        })}
      </div>
    );
  },
};

export default meta;
