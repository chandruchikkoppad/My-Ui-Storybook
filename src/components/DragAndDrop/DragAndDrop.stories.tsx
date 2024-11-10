import { Meta, StoryObj } from '@storybook/react';
import DragAndDropList from './DragAndDropList';

const meta: Meta<typeof DragAndDropList> = {
  title: 'Components/DragAndDrop',
  component: DragAndDropList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `It is a drag and drop list component that allows users to reorder items by dragging and dropping them. Library used is dnd-kit/core, dnd-kit/sortable, dnd-kit/utilities`,
        story:
          'This is a link of [dnd-kit library](https://www.npmjs.com/package/@dnd-kit/core) for reference to an external website.',
      },
    },
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof DragAndDropList>;

export const Primary: Story = {
  render: () => <DragAndDropList />,
};
export default meta;
