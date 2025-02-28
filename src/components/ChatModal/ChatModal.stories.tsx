import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChatModal from './ChatModal';
import Prompt from '../Prompt';
import './ChatModal.scss';

const meta: Meta<typeof ChatModal> = {
  title: 'Components/ChatModal',
  component: ChatModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ChatModal>;

const defaultArgs = {
  iconName: 'fia_icon',
  iconHeight: 24,
  iconWidth: 24,
  iconPosition: { top: 0, left: 0, bottom: 0, right: 0 },
  modalPosition: { top: 0, left: 0, bottom: 0, right: 0 },
  hoverIconPosition: { top: 0, left: 0, bottom: 0, right: 0 },
  modalWidth: 444,
  modalHeight: 521.51,
  onClearChat: () => {
    alert('chat cleared');
  },
};

export const DemoModalStory: Story = {
  args: {
    ...defaultArgs,
    footerContent: (
      <Prompt
        borderRadius={80}
        height={40}
        iconName="right_arrow_filled_icon"
        iconPosition="right"
        placeholder="Enter your question here"
        width={428}
        iconHeight={24}
        iconWidth={24}
        autoFocus
        value="value"
      />
    ),
    children: (
      <div className="ff-content-box">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
          voluptate? Officiis est soluta placeat eveniet reiciendis, harum
          ducimus rem unde possimus repudiandae accusantium. Voluptate eius
          tenetur beatae sed ut ad.
        </p>
      </div>
    ),
  },
};

export const DynamicPositionAndSize: Story = {
  args: {
    ...defaultArgs,
    headerContent: <h3>Dynamic Modal</h3>,
    footerContent: <button>Close</button>,
    children: (
      <div>
        <p>
          This modal dynamically positions itself at <strong>10% top</strong>{' '}
          and <strong>10% left</strong>.
        </p>
      </div>
    ),
  },
};

export default meta;
