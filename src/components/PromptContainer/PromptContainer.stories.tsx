import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromptContainer from './PromptContainer';
import Typography from '../Typography';

const meta: Meta<typeof PromptContainer> = {
  title: 'Components/PromptContainer',
  component: PromptContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onIconClick: { action: 'iconClicked' },
    serialNumber: { control: 'number' },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disable prompt actions and navigation',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PromptContainer>;

export const Default: Story = {
  args: {
    id: 1,
    serialNumber: 1,
    activeId: null,
    setActiveId: (id: string | number | null) => {},
    children: (
      <Typography>
        This is the content of the container. Open browser, go to Flipkart,
        click on the login link, and enter credentials. click on the login link,
        and enter credentials. click on the login link, and enter credentials.
        click on the login link, and enter credentials.
      </Typography>
    ),
    onIconClick: (action: string) => {
      if (action === 'delete') {
        alert('delete action');
      } else if (action === 'edit') {
        alert('edit action');
      } else if (action === 'regenerate') {
        alert('regenerate action');
      }
    },
    numberChildren: <Typography> 1/1 </Typography>,
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeId, setActiveId] = useState<number | null | string>(0);

    const handleIconClick = (action: string) => {
      if (action === 'delete') {
        alert('delete action');
      } else if (action === 'edit') {
        alert('edit action');
      } else if (action === 'regenerate') {
        alert('regenerate action');
      }
    };
    const handleContainerClick = () => {
      alert('Main Container Clicked');
    };
    const handleRightClick = () => {
      alert('next Click');
    };

    const handleLeftClick = () => {
      alert('previous Click');
    };

    return (
      <div>
        <PromptContainer
          disabled={false}
          id={1}
          serialNumber={1}
          activeId={activeId}
          setActiveId={setActiveId}
          onContainerClick={handleContainerClick}
          onIconClick={handleIconClick}
          numberChildren={<Typography> 1/3 </Typography>}
          onNextClick={() => handleRightClick()}
          onPreviousClick={handleLeftClick}
        >
          <Typography>
            Generate a comprehensive set of test cases for Flipkart's e-commerce
            platform, covering key functionalities such as user login, product
            search, filtering, adding items to the cart, checkout, payment
            processing, order tracking, and returns/refunds. Include both
            positive and negative test scenarios, boundary value cases, and edge
            cases. Ensure detailed steps, expected results, and test data where
            applicable. Test different user roles, device compatibilities, and
            browser environments. Consider security, performance, and usability
            aspects while designing the test cases.and edge cases. Ensure
            detailed steps, expected results, and test data where applicable.
            Test different user roles, device compatibilities, and browser
            environments. Consider security, performance, and usability aspects
            while designing the test cases.
          </Typography>
        </PromptContainer>
      </div>
    );
  },
};
