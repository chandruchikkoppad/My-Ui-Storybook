import { useRef } from 'react';

type TriggerControl = {
  canTrigger: () => boolean;
  setTriggered: () => void;
  resetTrigger: () => void;
};
const useTriggerControl = (): TriggerControl => {
  const canTriggerRef = useRef(true);

  const canTrigger = () => canTriggerRef.current;

  const setTriggered = () => {
    canTriggerRef.current = false;
  };

  const resetTrigger = () => {
    canTriggerRef.current = true;
  };

  return {
    canTrigger,
    setTriggered,
    resetTrigger,
  };
};

export default useTriggerControl;
