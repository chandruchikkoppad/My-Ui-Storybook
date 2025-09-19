import './MachineInputField.scss';
import Typography from '../Typography';
import Icon from '../Icon';
import { MachineInputFieldProps, MachineType } from './types';
import classNames from 'classnames';
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import Tooltip from '../Tooltip';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const MachineInputField = ({
  width = '100%',
  options = [],
  runCount = 0,
  className = '',
  contentReverse = false,
  onClick = () => {},
  modalId = '',
  scriptType = '',
  readOnly = false,
}: MachineInputFieldProps) => {
  const getIcon: Record<MachineType['type'], string> = {
    local: 'local',
    browserstack: 'browserstack_icon',
    saucelabs: 'sause_lab_icon',
    lambdatest: 'lambda_icon',
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
    edge: 'edge',
    firefox: 'fire_fox',
    chrome: 'chrome_icon',
    explorer: 'internet_explorer',
    ios: 'mac_icon',
  };
  const isManualScript = scriptType.toLowerCase() === 'manual';
  return (
    <div
      id={modalId}
      style={{ width: width }}
      className={classNames('ff-machine-input-field-wrapper', className, {
        'cursor-event-none': runCount !== 1 && scriptType == 'Automation',
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
        {options.map(({ label, type, version }) => (
          <div
            key={type}
            className={classNames('ff-machine-icon-text-wrapper', {
              'ff-machine-icon-text-wrapper-reverse': contentReverse,
            })}
          >
            <Icon
              name={getIcon[type?.toLowerCase()] || ''}
              className="ff-machine-icon"
            />
            <Tooltip title={label}>
              <Typography
                className={classNames('ff-machine-text', {
                  'ff-machine-text-reverse': contentReverse,
                })}
                color="var(--ff-machine-input-field-text-color)"
              >
                {isTextTruncated(label, 10) ? truncateText(label, 10) : label}
              </Typography>
            </Tooltip>
            {isManualScript && !checkEmpty(version) && (
              <Tooltip title={version}>
                <Typography
                  className={classNames('ff-machine-text', {
                    'ff-machine-text-reverse': contentReverse,
                  })}
                  color="var(--ff-machine-input-field-text-color)"
                >
                  &nbsp;-{' '}
                  {isTextTruncated(version ?? '', 10)
                    ? truncateText(version ?? '', 10)
                    : version}
                </Typography>
              </Tooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

MachineInputField.displayName = 'MachineInputField';

export default MachineInputField;
