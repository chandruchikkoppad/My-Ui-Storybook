import { Meta, StoryObj } from '@storybook/react';
import LazyLoading from './LazyLoading';

const meta: Meta = {
  title: 'Components/LazyLoad',
  component: LazyLoading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
        The \`LazyLoading\` component is designed to optimize performance by only rendering the necessary parts of a large dataset that are visible within the viewport.
        This component is particularly useful for applications that handle a significant amount of content, such as image galleries or infinite scrolling lists.

        LazyLoad works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

          i) It reduces the amount of work (and time) required to render the initial view and to process updates. \n
          ii) It reduces the memory footprint by avoiding over-allocation of DOM nodes.`,
        story:
          'This is a description with [library](https://www.npmjs.com/package/react-window) to an external website.',
      },
    },
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof LazyLoading>;

export const Primary: Story = {
  render: () => <LazyLoading />,
};

export default meta;
