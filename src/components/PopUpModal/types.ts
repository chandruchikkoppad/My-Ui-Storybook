export interface PopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue?: () => void;
  titleMessage: string;
  subTitleMessage?: string;
  iconName: string;
  modalMessage: string | React.ReactNode;
  secondaryMessage?: string | React.ReactNode;
  firstButtonLabel?: string;
  secondButtonLabel: string;
  buttonVariant: any;
  border: string;
  popupWidth?: string;
  popupHeight?: string;
  colorForTitleMessage?: string;
  footerContent?: React.ReactNode;
  firstButtonDisabled?: boolean;
  secondButtonDisabled?: boolean;
  zIndex?: number;
}
