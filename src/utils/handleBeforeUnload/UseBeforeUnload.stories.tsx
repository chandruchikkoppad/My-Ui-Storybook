import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useBeforeUnload } from './UseBeforeUnload';

export default {
  title: 'Utils/BeforeUnloadHandler',
  argTypes: {
    isPreventUnloadEnabled: {
      control: 'boolean',
      description:
        'If true, prevents reload or tab closure by triggering a beforeunload prompt.',
    },
  },
} satisfies Meta;

const BeforeUnloadHandler: React.FC = () => {
  // Using useBeforeUnload() to manage the unload prevention state
  const [isPreventLoad, setIsPreventLoad] = useState(false);
  useBeforeUnload(isPreventLoad);

  return (
    <div>
      <h3>{`useBeforeUnload(${isPreventLoad})`}</h3>
      <p>
        {isPreventLoad
          ? 'User cannot reload or close the tab.'
          : 'User can reload or close the tab.'}
      </p>
      <p>
        {isPreventLoad
          ? 'A beforeunload prompt will show if the user tries to leave the page.'
          : 'No beforeunload prompt will appear.'}
      </p>

      <button onClick={() => setIsPreventLoad(!isPreventLoad)}>
        Toggle Prevent Unload
      </button>
    </div>
  );
};

export const Default: StoryObj<typeof BeforeUnloadHandler> = {
  render: () => <BeforeUnloadHandler />,
};
