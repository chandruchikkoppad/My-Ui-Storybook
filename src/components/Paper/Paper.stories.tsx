import type { Meta, StoryObj } from '@storybook/react';
import Paper from './Paper';
import { Children } from 'react';
import Typography from '../Typography';
import './Paper.scss';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Paper>;

const defaultArgs = {
  Children,
  className: '',
  rounded: false,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    children: <p>This is a simple Paper component with default styles.</p>,
    className: 'ff_paper_default_style',
  },
};

export const PrimaryPaper: Story = {
  render: () => {
    return (
      <Paper className="ff_paper_default_style">
        <Typography>
          This Paper component has custom background color and padding.
        </Typography>
      </Paper>
    );
  },
};

export const PaperWithLowShadow: Story = {
  render: () => {
    return (
      <Paper className="ff_paper_default_style">
        <Typography>This Paper component has a shadow depth of 6.</Typography>
      </Paper>
    );
  },
};

export const PaperWithHighShadow: Story = {
  render: () => {
    return (
      <Paper className="ff_paper_basic_style" rounded>
        <Typography>
          This Paper component combines custom styles, shadow depth of 10, and
          rounded corners.
        </Typography>
      </Paper>
    );
  },
};

export const PaperWithRounded: Story = {
  render: () => {
    return (
      <Paper rounded className="ff_paper_default_style">
        <Typography>This Paper component has Rounded Corners.</Typography>
      </Paper>
    );
  },
};

export default meta;
