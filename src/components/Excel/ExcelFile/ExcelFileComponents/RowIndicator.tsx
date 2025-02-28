import * as React from 'react';
import classNames from 'classnames';
import * as Actions from './actions';
import * as Point from './point';
import * as Types from './types';
import * as Matrix from './matrix';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';
import Typography from '../../../Typography';

const RowIndicator: Types.RowIndicatorComponent = ({
  row,
  label,
  selected,
  onSelect,
  setContextMenu,
  addRowTop,
  addRowBottom,
  deleteRow,
  rowContextEnable,
  cell,
}) => {
  const dispatch = useDispatch();
  const rowHeight = useSelector(
    (state) => state.rowDimensions[row]?.height || 32
  );

  const onMouseUpDrag = React.useCallback(
    (event: React.MouseEvent) => {
      onSelect(row, event.shiftKey);

      const startY = event.clientY;
      const initialHeight = rowHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newHeight = Math.max(
          32,
          initialHeight + (moveEvent.clientY - startY)
        );
        dispatch(Actions.setRowHeight(row, newHeight));
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        dispatch(Actions.dragEnd());
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      dispatch(Actions.dragEnd());
    },
    [onSelect, rowHeight, row]
  );

  const onMouseDownDrag = React.useCallback(
    (event: React.MouseEvent) => {
      let downDragRow = 0;
      if (row !== 0) {
        downDragRow = row - 1;
      }
      onSelect(downDragRow, event.shiftKey);

      const startY = event.clientY;
      const initialHeight = rowHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newHeight = Math.max(
          32,
          initialHeight + (moveEvent.clientY - startY)
        );
        dispatch(Actions.setRowHeight(downDragRow, newHeight));
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        dispatch(Actions.dragEnd());
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      dispatch(Actions.dragEnd());
    },
    [onSelect, rowHeight, row]
  );

  const activate = React.useCallback(
    (point: Point.Point) => dispatch(Actions.activate(point)),
    [dispatch]
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      onSelect(row, event.shiftKey);
    },
    [onSelect, row]
  );

  const contextClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      onSelect(row, event.shiftKey);

      const options = [
        {
          label: 'Add Row Top',
          value: 'Add Row Top',
          iconName: 'plus_icon',
          action: () => {
            addRowTop();
          },
          disable: cell?.contextDisable?.['Add Row Top'] ?? false,
        },
        {
          label: 'Add Row Bottom',
          value: 'Add Row Bottom',
          iconName: 'plus_icon',
          action: () => {
            addRowBottom();
          },
          disable: cell?.contextDisable?.['Add Row Bottom'] ?? false,
        },
        {
          label: 'Delete Row',
          value: 'Delete Row',
          iconName: 'delete',
          action: () => {
            deleteRow();
          },
          disable: cell?.contextDisable?.['Delete Row'] ?? false,
        },
      ];

      if (selected) {
        setContextMenu({
          open: rowContextEnable,
          position: {
            x: event.pageX,
            y: event.pageY,
          },
          options: options,
        });
      } else {
        setContextMenu({
          open: false,
          position: {
            x: event.pageX,
            y: event.pageY,
          },
          options: options,
        });
      }
    },
    [cell, selected, row]
  );

  return (
    <th
      className={classNames('ff-spreadsheet-header', {
        'ff-spreadsheet-header--selected': selected,
      })}
      style={{ height: `${rowHeight}px`, minWidth: '60px' }} //Dynamic value, Inline Styling required
      onClick={handleClick}
      onContextMenu={contextClick}
      tabIndex={0}
    >
      <Typography fontWeight="medium">
        {label !== undefined ? label : row + 1}
      </Typography>
      <div
        className="drag-row-selector drag-row-down"
        onMouseDown={onMouseUpDrag}
        onDoubleClick={() => dispatch(Actions.setRowHeight(row, 32))}
        onClick={() => activate({ row, column: -1 })}
      />
      <div
        className="drag-row-selector drag-row-up"
        onMouseDown={onMouseDownDrag}
        onDoubleClick={() => dispatch(Actions.setRowHeight(row, 32))}
        onClick={() => activate({ row, column: -1 })}
      />
    </th>
  );
};

export default RowIndicator;

export const enhance = (
  RowIndicatorComponent: Types.RowIndicatorComponent
): React.FC<Omit<Types.RowIndicatorProps, 'selected' | 'onSelect'>> => {
  return function RowIndicatorWrapper(props) {
    const dispatch = useDispatch();
    const selected = useSelector((state) =>
      state.selected.hasEntireRow(props.row)
    );
    const cell = useSelector((state) =>
      state.active ? Matrix.get(state.active, state.model.data) : undefined
    );
    const selectEntireRow = React.useCallback(
      (row: number, extend: boolean) =>
        dispatch(Actions.selectEntireRow(row, extend)),
      [dispatch]
    );
    return (
      <RowIndicatorComponent
        {...props}
        selected={selected}
        cell={cell}
        onSelect={selectEntireRow}
      />
    );
  };
};
