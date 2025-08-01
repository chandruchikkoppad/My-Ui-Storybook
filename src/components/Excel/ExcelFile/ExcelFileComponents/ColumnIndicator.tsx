import * as React from 'react';
import classNames from 'classnames';
import * as Types from './types';
import * as Point from './point';
import * as Actions from './actions';
import * as Matrix from './matrix';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';
import Typography from '../../../Typography';
import { useMemo } from 'react';

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
  selectedColumn,
  minimumColumnWidth,
}) => {
  const dispatch = useDispatch();

  const minColumnWidth = minimumColumnWidth;

  const columnWidth = useSelector(
    (state) => state.columnDimensions[column]?.width || minColumnWidth
  );

  const options = useMemo(() => {
    return [
      {
        label: 'Add Column Left',
        value: 'Add Column Left',
        iconName: 'plus_icon',
        action: addColumnLeft,
        disable: cell?.contextDisable?.['Add Column Left'] ?? false,
      },
      {
        label: 'Add Column Right',
        value: 'Add Column Right',
        iconName: 'plus_icon',
        action: addColumnRight,
        disable: cell?.contextDisable?.['Add Column Right'] ?? false,
      },
      {
        label: 'Delete Column',
        value: 'Delete Column',
        iconName: 'delete',
        action: deleteColumn,
        disable: cell?.contextDisable?.['Delete Column'] ?? false,
      },
    ];
  }, [selectedColumn, cell, addColumnLeft, addColumnRight, deleteColumn]);

  const onMouseDrag = React.useCallback(
    (event: React.MouseEvent, isRight: boolean) => {
      const getTargetColumn = isRight ? column - 1 : column;
      const targetColumn = Math.max(getTargetColumn, 0);
      onSelect(targetColumn, event.shiftKey);
      const startX = event.clientX;
      const initialWidth = columnWidth;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(
          minColumnWidth,
          initialWidth + (moveEvent.clientX - startX)
        );
        dispatch(Actions.setColumnPosition(targetColumn, newWidth));
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
    [column, columnWidth]
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
      setContextMenu({
        open: columnContextEnable,
        options,
      });
    },
    [column, selectedColumn, columnContextEnable, options]
  );

  React.useEffect(() => {
    if (selectedColumn !== undefined) {
      setContextMenu((prev) => ({
        open: prev.open,
        options,
      }));
    }
  }, [column, selectedColumn, columnContextEnable, options]);

  return (
    <th
      className={classNames('ff-spreadsheet-header', {
        'ff-spreadsheet-header--selected': selected,
      })}
      style={{ minWidth: `${columnWidth}px` }} // Dynamic value, Inline Styling required
      onClick={handleClick}
      onContextMenu={contextClick}
      tabIndex={0}
    >
      <Typography fontWeight="medium">
        {label !== undefined ? label : columnIndexToLabel(column)}
      </Typography>
      <div
        className="drag-column-selector drag-column-left"
        onMouseDown={(e) => onMouseDrag(e, false)}
        onDoubleClick={() =>
          dispatch(Actions.setColumnPosition(column, minColumnWidth))
        }
        onClick={() => activate({ row: -1, column })}
      />
      <div
        className="drag-column-selector drag-column-right"
        onMouseDown={(e) => onMouseDrag(e, true)}
        onDoubleClick={() =>
          dispatch(Actions.setColumnPosition(column, minColumnWidth))
        }
        onClick={() => activate({ row: -1, column })}
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
    const selectedColumn = useSelector(
      (state) => state.selectedColumn ?? undefined
    );
    const cell = useSelector((state) =>
      state.active ? Matrix.get(state.active, state.model.data) : undefined
    );

    return (
      <ColumnIndicatorComponent
        {...props}
        cell={cell}
        selected={selected}
        selectedColumn={selectedColumn}
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
