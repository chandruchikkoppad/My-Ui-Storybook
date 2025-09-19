import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChatModalAi from './ChatModalAi';
import Prompt from '../Prompt';
import './ChatModalAi.scss';

const meta: Meta<typeof ChatModalAi> = {
  title: 'Components/ChatModalAi',
  component: ChatModalAi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ChatModalAi>;

const defaultArgs = {
   hoverTitle : "Fia",
  iconName: 'fia_ai_icon',
  iconHeight: 40,
  iconWidth: 40,
  iconPosition: { top: 23, left: 720, bottom: 0, right: 0 },
  modalPosition: { top: 0, left: 0, bottom: 0, right: 0 },
  hoverIconPosition: { top: 30, bottom: 0, right: 330 },
  modalWidth: 444,
  modalHeight: 521.51,
  onClearChat: () => {
    alert('chat cleared');
  },
};

export const DemoModal: Story = {
  args: {
    ...defaultArgs,
    hoverTitle : "Fia Generating",
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

export const DynamicPosition: Story = {
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
