import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import Components from './iconList';
import React, { useState } from 'react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
};

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  args: {
    name: 'more',
    color: '',
  },
};

export const AllIcons: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredIcons = Object.keys(Components).filter((iconName) =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginBottom: '16px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
        <div
          className="group-icons"
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              style={{
                border: '1px solid var(--brand-color)',
                width: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Icon name={iconName} height={40} width={40} />
              <p
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  width: '160px',
                }}
                title={iconName}
              >
                {iconName}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const DarkVariantIcons: Story = {
  args: {
    name: 'hamburger_menu',
    color: 'var(--ff-icon-color-dark-variant)',
    variant: 'dark',
    hoverEffect: true,
  },
  render: (args) => {
    const backgroundColor = args.variant === 'dark' ? '#000' : '#fff';
    const iconColor =
      args.variant === 'dark'
        ? 'var(--ff-icon-color-dark-variant)'
        : 'var(--brand-color)';

    return (
      <div style={{ backgroundColor, padding: '20px' }}>
        <Icon {...args} color={iconColor} height={16} width={16} />
      </div>
    );
  },
};

export const DynamicCursorType: Story = {
  args: {
    name: 'hamburger_menu',
    color: 'var(--ff-icon-color-dark-variant)',
    variant: 'dark',
    hoverEffect: true,
    cursorType: 'not-allowed',
  },
  render: (args) => {
    const iconColor =
      args.variant === 'dark'
        ? 'var(--ff-icon-color-dark-variant)'
        : 'var(--brand-color)';

    return (
      <div style={{
                width: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
        <Icon {...args} color={iconColor} height={16} width={16}/>
      </div>
    );
  },
};

export default meta;