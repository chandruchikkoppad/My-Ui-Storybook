import { FC } from 'react';
import './PopUpModal.scss';
import Modal from '../Modal';
import Icon from '../Icon';
import Typography from '../Typography';
import Button from '../Button';
import { PopUpModalProps } from './types';

const PopUpModal: FC<PopUpModalProps> = ({
  isOpen,
  onClose,
  onContinue,
  titleMessage = 'Warning!',
  subTitleMessage = 'Unsaved Changes.',
  iconName,
  modalMessage = 'Your web service data will be lost. Are you sure you want to exit?',
  firstButtonLabel = 'Cancel',
  secondButtonLabel = 'Continue',
  buttonVariant = 'warning',
  border = '1px solid var(--warning-modal-border-color)',
  popupWidth = '420',
  popupHeight = '226',
  colorForTitleMessage = 'var(--status-button-bg-warning)',
  footerContent,
  firstButtonDisabled = false,
  secondButtonDisabled = false,
  zIndex = 1100,
}) => {
  return (
    <Modal
      overlayClassName="custom-overlay"
      isOpen={isOpen}
      onClose={onClose}
      isHeaderDisplayed={false}
      zIndex={zIndex}
      children={
        <div className={'warning_modal_container'}>
          <div className={'warning_modal_content'}>
            <Icon
              name={iconName}
              className={'warning_modal_icon'}
              width={94}
              height={94}
            />
            <div className={'warning_modal_message'}>
              <Typography
                fontSize={20}
                fontWeight="semi-bold"
                className="warning_modal_title_wrapper"
              >
                {' '}
                <Typography
                  color={`${colorForTitleMessage}`}
                  fontSize={20}
                  fontWeight="semi-bold"
                >
                  {' '}
                  {titleMessage}{' '}
                </Typography>{' '}
                {subTitleMessage}
              </Typography>
              <div className="warning_modal_message_wrapper">
                <Typography fontSize={16}>{modalMessage}</Typography>
                <Typography as="div">{footerContent}</Typography>
              </div>
            </div>
          </div>
          <div className={'warning_modal_footer_button'}>
            <Button
              variant="secondary"
              label={firstButtonLabel}
              onClick={onClose}
              disabled={firstButtonDisabled}
            />
            <Button
              variant={buttonVariant || 'warning'}
              label={secondButtonLabel}
              onClick={onContinue}
              disabled={secondButtonDisabled}
            />
          </div>
        </div>
      }
      ariaHideApp
      isFooterDisplayed={false}
      customWidth={`${popupWidth}px`}
      customHeight={`${popupHeight}px`}
      boxShadow="0px 1px 4px 0px var(--toaster-boxshadow)"
      border={border}
    />
  );
};

export default PopUpModal;
