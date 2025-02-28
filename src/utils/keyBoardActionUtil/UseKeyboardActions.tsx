import { useEffect } from "react";
import { KeyboardAction } from "./types";

export const useKeyboardActions = (actions: KeyboardAction[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      actions.forEach(({ key, action }) => {
        if (event.key === key) {
          action();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [actions]);
};
