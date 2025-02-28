import * as React from 'react';
import classNames from 'classnames';
import * as Actions from './actions';
import { EntireWorksheetSelection } from './selection';
import * as Types from './types';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';
import Icon from '../../../Icon';

const CornerIndicator: Types.CornerIndicatorComponent = ({
  selected,
  onSelect,
}) => {
  const handleClick = React.useCallback(() => {
    onSelect();
  }, [onSelect]);
  return (
    <th
      className={'ff-spreadsheet-corner-header'}
      onClick={handleClick}
      tabIndex={0}
    >
      <div
        className={classNames('corner-header', {
          'ff-spreadsheet-header--selected': selected,
        })}
      >
        <Icon
          variant={selected ? 'dark' : 'light'}
          color={selected ? 'var(--hover-color)' : 'var(--text-color)'}
          name="excel_corner_menu"
        />
      </div>
    </th>
  );
};

export default CornerIndicator;

export const enhance = (
  CornerIndicatorComponent: Types.CornerIndicatorComponent
): React.FC<Omit<Types.CornerIndicatorProps, 'selected' | 'onSelect'>> => {
  return function CornerIndicatorWrapper(props) {
    const dispatch = useDispatch();
    const selectEntireWorksheet = React.useCallback(
      () => dispatch(Actions.selectEntireWorksheet()),
      [dispatch]
    );
    const selected = useSelector(
      (state) => state.selected instanceof EntireWorksheetSelection
    );
    return (
      <CornerIndicatorComponent
        {...props}
        selected={selected}
        onSelect={selectEntireWorksheet}
      />
    );
  };
};
