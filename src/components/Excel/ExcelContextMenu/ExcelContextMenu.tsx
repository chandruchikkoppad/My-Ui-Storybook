import Icon from '../../Icon';
import './ExcelContextMenu.scss';
import Typography from '../../Typography';
import { ContextMenuState } from '../ExcelFile/ExcelFileComponents/types';
import Tooltip from '../../Tooltip';

type ExcelContextMenuProps = {
  contextMenu: ContextMenuState;
  position: { x: number; y: number };
  editable: boolean;
};

const ExcelContextMenu: React.FC<ExcelContextMenuProps> = ({
  contextMenu,
  position,
  editable,
}) => {
  if (!contextMenu.open) return null;

  const checkDelete = (label: string): boolean => {
    return label.includes('Delete');
  };

  return (
    editable && (
      <div
        onContextMenu={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        className="ff-excel-menu"
        style={{
          left: position.x,
          top: position.y,
          position: 'absolute',
          zIndex: 9999999999,
        }}
      >
        {contextMenu.options.map((option) => {
          if (!option.visible) {
            const disabled = option.disable;

            return (
              <Tooltip
                key={option.label}
                title={disabled ? option.disableTooltip : ''}
              >
                <div
                  className={`ff-excel-menu-options ${
                    disabled ? 'disabled' : ''
                  }`}
                  onClick={() => {
                    if (!disabled) {
                      option.action();
                    }
                  }}
                >
                  {option.iconName && (
                    <Icon
                      name={option.iconName}
                      height={16}
                      width={16}
                      color={
                        checkDelete(option.label)
                          ? 'var(--label-edit-error-text)'
                          : 'var(--brand-color)'
                      }
                      disabled={disabled}
                    />
                  )}
                  <Typography as="label">{option.label}</Typography>
                </div>
              </Tooltip>
            );
          }
          return null;
        })}
      </div>
    )
  );
};

export default ExcelContextMenu;
