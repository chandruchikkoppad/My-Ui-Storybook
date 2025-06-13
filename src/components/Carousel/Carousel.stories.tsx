import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items: [
      {
        src: 'https://picsum.photos/id/1011/800/450',
        alt: 'Mountain',
        icon: 'windows',
        currentScripts: 4,
        totalScripts: 50,
        extraField: 'you can add anything here without TS error',
        runId: '1',
        machineName: 'Machine Name',
        scriptName: 'Script Name',
      },
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        icon: 'linux',
        currentScripts: 4,
        totalScripts: 50,
        runId: '2',
        machineName: 'Machine Name',
        scriptName: 'Script Name',
      },
      {
        src: 'https://picsum.photos/id/1015/800/450',
        alt: 'Forest',
        icon: 'windows',
        currentScripts: 4,
        totalScripts: 50,
        runId: '3',
        machineName: 'Machine Name',
        scriptName: 'Script Name',
      },
    ],
    initialRunId: '2',
    onCollapseClick: () => alert('Collapse clicked!'),
    height: '450px',
  },
};
