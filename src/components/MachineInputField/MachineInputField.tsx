import './MachineInputField.scss';
import Typography from '../Typography';
import Icon from '../Icon';
import { MachineInputFieldProps, MachineType } from './types';
import classNames from 'classnames';
import { truncateText } from '../../utils/truncateText/truncateText';
import Tooltip from '../Tooltip';

const MachineInputField = ({
  width = '',
  options = [],
  runCount = 0,
  className = '',
  contentReverse = false,
  onClick = () => {},
  modalId = '',
  trucatedLable,
  scriptType = '',
  readOnly = false,
}: MachineInputFieldProps) => {
  const getIcon: Record<MachineType['type'], string> = {
    local: 'local',
    browserstack: 'browserstack_icon',
    sauceLabs: 'sause_lab',
    lambdaTest: 'lambda_icon',
    mac: 'mac_icon',
    mac_icon: 'mac_icon',
    android: 'android_icon',
    linux: 'linux',
    'google chrome': 'chrome_icon',
    'mozilla firefox': 'fire_fox',
    'microsoft edge': 'edge',
    'internet explorer': 'internet_explorer',
    safari: 'safari_icon',
    opera: 'opera',
    windows: 'windows',
  };
  const isManualScript = scriptType.toLowerCase() === 'manual';
  return (
    <div
      id={modalId}
      style={{ width: width }}
      className={classNames('ff-machine-input-field-wrapper', className, {
        'cursor-event-none': runCount > 1,
      })}
      onClick={() => {
        if (readOnly) return;
        onClick();
      }}
    >
      {!isManualScript && (
        <Typography
          as="span"
          color="var(--ff-machine-input-field-text-color)"
          fontSize={8}
          textAlign="center"
          className="ff-machine-input-label"
        >
          Run {runCount}
        </Typography>
      )}

      <div
        className={classNames('ff-machine-input-field', {
          'ff-machine-input-field-reverse': contentReverse,
        })}
      >
        {options.map(({ label, type = 'local' }) => (
          <div
            key={type}
            className={classNames('ff-machine-icon-text-wrapper', {
              'ff-machine-icon-text-wrapper-reverse': contentReverse,
            })}
          >
            <Icon
              name={getIcon[type?.toLowerCase()] || 'local'}
              className="ff-machine-icon"
            />
            <Tooltip title={label}>
              <Typography
                className={classNames('ff-machine-text', {
                  'ff-machine-text-reverse': contentReverse,
                })}
                color="var(--ff-machine-input-field-text-color)"
              >
                {trucatedLable ? truncateText(label, 15) : label}
              </Typography>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

MachineInputField.displayName = 'MachineInputField';

export default MachineInputField;
