import { Meta, StoryObj } from '@storybook/react';
import { Container, Row, Col } from './GridLayout';
import './GridLayoutStory.scss';

const meta: Meta<typeof Container> = {
  title: 'Components/GridLayout',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type ContainerStory = StoryObj<typeof Container>;

const defaultContainerArgs = {
  fluid: false,
  gap: '20px',
};

export const Grid: ContainerStory = {
  args: {
    ...defaultContainerArgs,
  },
  render: (args) => (
    <>
      <Container {...args}>
        <Row>
          <Col size={4}>
            <div className="one">Column 1</div>
          </Col>
          <Col size={4}>
            <div className="two">Column 2</div>
          </Col>
          <Col size={4}>
            <div className="three">Column 3</div>
          </Col>
        </Row>
        <Row>
          <Col size={6}>
            <div className="four">Column 4</div>
          </Col>
          <Col size={6}>
            <div className="five">Column 5</div>
          </Col>
        </Row>
      </Container>
    </>
  ),
};
export const Grid2: ContainerStory = {
  args: {
    ...defaultContainerArgs,
  },
  render: (args) => (
    <>
      <Container {...args}>
        <Row gap="20px">
          <Col size={3}>
            <div className="one">Column 1 (size 3)</div>
          </Col>
          <Col size={6}>
            <div className="two">Column 2 (size 6)</div>
          </Col>
          <Col size={3}>
            <div className="three">Column 3 (size 3)</div>
          </Col>
        </Row>
        <Row gap="10px">
          <Col size={4}>
            <div className="four">Column 4 (size 4)</div>
          </Col>
          <Col size={4}>
            <div className="five">Column 5 (size 4)</div>
          </Col>
          <Col size={4}>
            <div className="one">Column 6 (size 4)</div>
          </Col>
        </Row>
        <Row gap="15px">
          <Col size={12}>
            <div className="two">Full-width column (size 12)</div>
          </Col>
        </Row>
      </Container>
    </>
  ),
};

export default meta;
