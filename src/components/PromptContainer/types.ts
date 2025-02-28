export interface PromptContainerProps {
  id?: number | string | null | undefined;
  serialNumber?: number | string;
  children: React.ReactNode;
  onClick: () => void;
  onIconClick: (action: string) => void;
  numberChildren: React.ReactNode;
  onNextClick: () => void;
  onPreviousClick: () => void;
  activeId?: number | null | string;
  setActiveId: (id: number | string | null) => void;
  isActive?: boolean;
}

export type Action = {
  action: string;
  title: string;
  color: string;
};
