import { useState } from 'react';
import { Meta } from '@storybook/react';
import { checkMicrophoneAccess } from './checkMicrophoneAccess';
import Toastify from '../../components/Toastify/Toastify';
import Icon from '../../components/Icon';

export default {
  title: 'Utils/checkMicrophoneAccess',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  const [micEnabled, setMicEnabled] = useState(false);

  const handleMicToggle = () => {
    setMicEnabled((prev) => !prev);
  };

  return (
    <div>
      <Icon
        onClick={() =>
          checkMicrophoneAccess(handleMicToggle, {
            requestDeniedMsg: 'Microphone access denied',
            notSupportedMsg:
              'Microphone permissions not supported in this browser.',
            micAccessDeniedMsg:
              'Microphone access denied. Please enable it in your browser settings',
          })
        }
        name={micEnabled ? 'mic_filled' : 'mic'}
        height={16}
        width={16}
      />
      <Toastify />
    </div>
  );
};
