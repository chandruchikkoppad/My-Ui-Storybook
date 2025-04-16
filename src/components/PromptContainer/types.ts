export interface PromptContainerProps {
  id?: number | string | null | undefined;
  serialNumber?: number | string;
  children: React.ReactNode;
  onContainerClick: () => void;
  onIconClick: (action: string) => void;
  numberChildren: React.ReactNode;
  onNextClick: () => void;
  onPreviousClick: () => void;
  activeId?: number | null | string;
  setActiveId: (id: number | string | null) => void;
  isActive?: boolean;
  disabled?: boolean;
  isEditAccess?: boolean;
  isViewAccess?: boolean;
  versionsLength?: number;
}

export type Action = {
  action: string;
  title: string;
  color: string;
};
