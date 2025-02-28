import React from 'react';
import { OverviewModalProps } from './types';
import './overviewmodal.scss';
import Icon from '../Icon';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  isMaximized,
  width = '800px',
  height = '432px',
  header,
  children,
  zIndex = 999,
  icons,
  downloadFileIcon = false,
  showheader = true,
  top = '0',
  overlay = true,
  downloadHandler,
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div
      className={classNames('ff-overviewmodal-overlay')}
      style={{
        background: overlay ? 'var(--default-icon-color)' : undefined,
        zIndex: zIndex,
      }}
    >
      <div
        className={classNames('ff-overviewmodal-container', {
          'ff-overviewmaximized-container': isMaximized,
        })}
        style={
          {
            '--modal-width': width,
            '--modal-height': height,
            '--modal-top': top,
          } as React.CSSProperties
        }
      >
        {showheader && (
          <div className={classNames('ff-overviewmodal-header')}>
            {header}
            <div className={classNames('ff-overviewmodal-icons')}>
              {downloadFileIcon && (
                <Icon
                  width={16}
                  height={16}
                  name={'download_file'}
                  onClick={downloadHandler}
                />
              )}
              {icons}
            </div>
          </div>
        )}

        <div className={classNames('ff-overviewmodal-body')}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default OverviewModal;
