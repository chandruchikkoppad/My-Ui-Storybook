import { useEffect } from 'react';
import './DownloadClient.scss';
import Icon from '../Icon';
import Typography from '../Typography';
import { DownloadClientProps } from './type';

const DownloadClient: React.FC<DownloadClientProps> = ({
  onClose,
  top = '100px',
  left = '0px',
  className,
  description = 'Download and Install the fireflink client to run the script',
  onClick = () => {},
  optionZIndex = 10000001,
}) => {
  useEffect(() => {
    const handleCloseDownloadClient = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };
    document.addEventListener('keydown', handleCloseDownloadClient);
    return () => {
      document.removeEventListener('keydown', handleCloseDownloadClient);
    };
  }, [onClose]);

  const osVersion = ['windows', 'mac_icon', 'linux'];

  return (
    <div
      className={`ff-download-client-wrapper ${className}`}
      style={{ top: top, left: left, zIndex: optionZIndex }}
    >
      <div className="ff-download-client-header-wrapper">
        <div className="ff-download-client-hollow-triangle"></div>
        <Typography
          fontWeight="semi-bold"
          lineHeight="32px"
          className="ff-download-client-header-text"
        >
          Download client
        </Typography>
        <Icon
          name="close"
          color="var(--brand-color)"
          className="ff-download-client-close-icon"
          height={12}
          width={12}
        />
      </div>

      <div className="ff-download-client-content-text">
        <Typography
          as="div"
          color="var(--download-client-content-text-color)"
          fontWeight="semi-bold"
          textAlign="center"
          lineHeight="26px"
        >
          {description}
        </Typography>
        <Typography
          as="div"
          className="ff-download-client-description-text"
          textAlign="center"
          fontWeight="medium"
          lineHeight="26px"
        >
          Choose OS to Download
        </Typography>

        <div className="ff-download-client-os-wrapper">
          {osVersion.map((os) => (
            <div
              key={os}
              className="ff-os-version-wrapper"
              onClick={() => {
                onClick(os === 'mac_icon' ? 'mac' : os);
              }}
            >
              <Icon name={os} height={36} width={36} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadClient;
