import * as React from 'react';
import classNames from 'classnames';
import * as Types from './types';
import * as Point from './point';
import * as Actions from './actions';
import * as Matrix from './matrix';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';
import Typography from '../../../Typography';

const ColumnIndicator: Types.ColumnIndicatorComponent = ({
  column,
  label,
  selected,
  onSelect,
  setContextMenu,
  deleteColumn,
  addColumnLeft,
  addColumnRight,
  columnContextEnable,
  cell,
}) => {
  const dispatch = useDispatch();

  const columnWidth = useSelector(
    (state) => state.columnDimensions[column]?.width || 100
  );

  const onMouseRightDrag = React.useCallback(
    (event: React.MouseEvent) => {
      let rightDragColumn = 0;
      if (column !== 0) {
        rightDragColumn = column - 1;
      }

      onSelect(rightDragColumn, event.shiftKey);

      const startX = event.clientX;
      const initialWidth = columnWidth;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(
          100,
          initialWidth + (moveEvent.clientX - startX)
        );
        dispatch(Actions.setColumnPosition(rightDragColumn, newWidth));
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        dispatch(Actions.dragEnd());
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      dispatch(Actions.dragStart());
    },
    [column, columnWidth, dispatch]
  );

  const onMouseLeftDrag = React.useCallback(
    (event: React.MouseEvent) => {
      onSelect(column, event.shiftKey);

      const startX = event.clientX;
      const initialWidth = columnWidth;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(
          100,
          initialWidth + (moveEvent.clientX - startX)
        );
        dispatch(Actions.setColumnPosition(column, newWidth));
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        dispatch(Actions.dragEnd());
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      dispatch(Actions.dragStart());
    },
    [column, columnWidth, dispatch]
  );

  const activate = React.useCallback(
    (point: Point.Point) => dispatch(Actions.activate(point)),
    [dispatch]
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      onSelect(column, event.shiftKey);
    },
    [onSelect, column]
  );

  const contextClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      onSelect(column, event.shiftKey);
      const options = [
        {
          label: 'Add Column Left',
          value: 'Add Column Left',
          iconName: 'plus_icon',
          action: () => {
            addColumnLeft();
          },
          disable: cell?.contextDisable?.['Add Column Left'] ?? false,
        },
        {
          label: 'Add Column Right',
          value: 'Add Column Right',
          iconName: 'plus_icon',
          action: () => {
            addColumnRight();
          },
          disable: cell?.contextDisable?.['Add Column Right'] ?? false,
        },
        {
          label: 'Delete Column',
          value: 'Delete Column',
          iconName: 'delete',
          action: () => {
            deleteColumn();
          },
          disable: cell?.contextDisable?.['Delete Column'] ?? false,
        },
      ];

      if (selected) {
        setContextMenu({
          open: columnContextEnable,
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
    [cell, selected, column]
  );

  return (
    <th
      className={classNames('ff-spreadsheet-header', {
        'ff-spreadsheet-header--selected': selected,
      })}
      style={{ minWidth: `${columnWidth}px` }} //Dynamic value, Inline Styling required
      onClick={handleClick}
      onContextMenu={contextClick}
      tabIndex={0}
    >
      <div
        onClick={handleClick}
        onContextMenu={contextClick}
        tabIndex={0}
      ></div>
      <Typography fontWeight="medium">
        {label !== undefined ? label : columnIndexToLabel(column)}
      </Typography>
      <div
        className="drag-column-selector drag-column-left"
        onMouseDown={onMouseLeftDrag}
        onDoubleClick={() => dispatch(Actions.setColumnPosition(column, 100))}
        onClick={() => {
          activate({ row: -1, column });
        }}
      />
      <div
        className="drag-column-selector drag-column-right"
        onMouseDown={onMouseRightDrag}
        onDoubleClick={() => dispatch(Actions.setColumnPosition(column, 100))}
        onClick={() => {
          activate({ row: -1, column });
        }}
      />
    </th>
  );
};

export const enhance = (
  ColumnIndicatorComponent: Types.ColumnIndicatorComponent
): React.FC<Omit<Types.ColumnIndicatorProps, 'selected' | 'onSelect'>> => {
  return function ColumnIndicatorWrapper(props) {
    const dispatch = useDispatch();
    const selectEntireColumn = React.useCallback(
      (column: number, extend: boolean) =>
        dispatch(Actions.selectEntireColumn(column, extend)),
      [dispatch]
    );
    const selected = useSelector((state) =>
      state.selected.hasEntireColumn(props.column)
    );
    const cell = useSelector((state) =>
      state.active ? Matrix.get(state.active, state.model.data) : undefined
    );

    return (
      <ColumnIndicatorComponent
        {...props}
        cell={cell}
        selected={selected}
        onSelect={selectEntireColumn}
      />
    );
  };
};

const EnhancedColumnIndicator = enhance(ColumnIndicator);

export default EnhancedColumnIndicator;

function columnIndexToLabel(column: number): string {
  let label = '';
  let index = column;
  while (index >= 0) {
    label = String.fromCharCode(65 + (index % 26)) + label;
    index = Math.floor(index / 26) - 1;
  }
  return label;
}
