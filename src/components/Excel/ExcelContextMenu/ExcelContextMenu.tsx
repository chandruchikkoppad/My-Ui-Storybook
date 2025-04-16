import Icon from '../../Icon';
import './ExcelContextMenu.scss';
import Typography from '../../Typography';
import { ContextMenuState } from '../ExcelFile/ExcelFileComponents/types';

type ExcelContextMenuProps = {
  contextMenu: ContextMenuState;
  position: { x: number; y: number };
  editable: boolean;
  disableDeleteOption: boolean;
};

const ExcelContextMenu: React.FC<ExcelContextMenuProps> = ({
  contextMenu,
  position,
  editable,
  disableDeleteOption,
}) => {
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
        style={{ left: position.x, top: position.y }}
      >
        {contextMenu.options.map((option) => {
          if (
            !option.disable &&
            (!checkDelete(option.label) || !disableDeleteOption)
          ) {
            return (
              <div
                key={option.label}
                className={'ff-excel-menu-options'}
                onClick={() => {
                  option.action();
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
                  />
                )}
                <Typography as="label">{option.label}</Typography>
              </div>
            );
          }
          return null;
        })}
      </div>
    )
  );
};

export default ExcelContextMenu;
