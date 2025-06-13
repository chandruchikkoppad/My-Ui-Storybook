import { Meta, StoryObj } from '@storybook/react';
import TruncatedTooltip from './TruncatedTooltip';

const meta: Meta<typeof TruncatedTooltip> = {
  title: 'Components/TruncatedTooltip',
  component: TruncatedTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<typeof TruncatedTooltip>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 120, border: '1px dashed gray', padding: 8 }}>
      <TruncatedTooltip
        width={100}
        title="This is a long text that will be truncated when it overflows"
      />
    </div>
  ),
};

export const ShortText: Story = {
  render: () => (
    <div style={{ width: 120, border: '1px dashed gray', padding: 8 }}>
      <TruncatedTooltip width={100} title="Short text" />
    </div>
  ),
};

export const LongTextWideContainer: Story = {
  render: () => (
    <div style={{ width: 300, border: '1px dashed gray', padding: 8 }}>
      <TruncatedTooltip
        width={250}
        title="This long text will not truncate in a wider container"
      />
    </div>
  ),
};

export const NestedText: Story = {
  render: () => (
    <div style={{ width: 150, border: '1px dashed gray', padding: 8 }}>
      <TruncatedTooltip
        width={100}
        title="Styled or nested content is now plain text only"
      />
    </div>
  ),
};

export const DynamicWidthContainer: Story = {
  render: () => (
    <div style={{ border: '1px dashed gray', padding: 8 }}>
      <div style={{ width: '50%' }}>
        <TruncatedTooltip
          width={150}
          title="This text might truncate depending on screen size and parent width"
        />
      </div>
    </div>
  ),
};

export default meta;
