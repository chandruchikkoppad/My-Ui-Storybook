import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import Icon from '../Icon';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Accordion>;
const defaultArgs = {
  headerTitle: 'Accordion',
};

export const SampleAccordion: Story = {
  args: {
    ...defaultArgs,
    headerTitle: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Icon name="accordion_header_icon" />
        <span>Home and Web</span>
      </div>
    ),
  },
};

export default meta;
