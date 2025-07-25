import * as React from 'react';
import classnames from 'classnames';
import * as Matrix from './matrix';
import * as Types from './types';
import * as Point from './point';
import * as Actions from './actions';
import { isActive, getOffsetRect } from './util';
import useDispatch from './use-dispatch';
import useSelector from './use-selector';

export const Cell: React.FC<Types.CellComponentProps> = ({
  row,
  column,
  DataViewer,
  active,
  dragging,
  mode,
  data,
  evaluatedData,
  select,
  activate,
  setCellDimensions,
  setCellData,
}): React.ReactElement => {
  const rootRef = React.useRef<HTMLTableCellElement | null>(null);
  const point = React.useMemo(
    (): Point.Point => ({
      row,
      column,
    }),
    [row, column]
  );

  const handleMouseDown = React.useCallback(
    (event: React.MouseEvent<HTMLTableCellElement>) => {
      if (mode === 'view') {
        setCellDimensions(point, getOffsetRect(event.currentTarget));

        if (event.shiftKey) {
          select(point);
        } else {
          activate(point);
        }
      }
    },
    [mode, setCellDimensions, point, select, activate]
  );

  const handleMouseOver = React.useCallback(
    (event: React.MouseEvent<HTMLTableCellElement>) => {
      if (dragging) {
        setCellDimensions(point, getOffsetRect(event.currentTarget));
        select(point);
      }
    },
    [setCellDimensions, select, dragging, point]
  );

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const updateDimensions = () => {
      setCellDimensions(point, getOffsetRect(root));
    };
    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(root);
    return () => observer.disconnect();
  }, [setCellDimensions, point]);

  if (data && data.DataViewer) {
    DataViewer = data.DataViewer;
  }

  return (
    <td
      ref={rootRef}
      style={data?.style}
      className={classnames('ff-spreadsheet-cell', data?.className, {
        'ff-spreadsheet-active-cell': active || dragging,
      })}
      onMouseEnter={handleMouseOver}
      onMouseDown={handleMouseDown}
      tabIndex={0}
    >
      <DataViewer
        row={row}
        column={column}
        cell={data}
        active={active}
        evaluatedCell={evaluatedData}
        setCellData={setCellData}
        inputValue={() => null}
      />
    </td>
  );
};

export const enhance = (
  CellComponent: React.ComponentType<Types.CellComponentProps>
): React.FC<
  Omit<
    Types.CellComponentProps,
    | 'active'
    | 'copied'
    | 'dragging'
    | 'mode'
    | 'data'
    | 'select'
    | 'activate'
    | 'setCellDimensions'
  >
> => {
  return function CellWrapper(props) {
    const { row, column } = props;
    const dispatch = useDispatch();
    const point = React.useMemo(
      (): Point.Point => ({
        row,
        column,
      }),
      [row, column]
    );
    const setCellData = React.useCallback(
      (data: Types.CellBase) => dispatch(Actions.setCellData(point, data)),
      [dispatch, point]
    );
    const select = React.useCallback(
      (point: Point.Point) => dispatch(Actions.select(point)),
      [dispatch]
    );
    const activate = React.useCallback(
      (point: Point.Point) => dispatch(Actions.activate(point)),
      [dispatch]
    );
    const setCellDimensions = React.useCallback(
      (point: Point.Point, dimensions: Types.Dimensions) =>
        dispatch(Actions.setCellDimensions(point, dimensions)),
      [dispatch]
    );
    const active = useSelector((state) => isActive(state.active, point));
    const mode = useSelector((state) => (active ? state.mode : 'view'));
    const data = useSelector((state) => Matrix.get(point, state.model.data));
    const evaluatedData = useSelector((state) =>
      Matrix.get(point, state.model.evaluatedData)
    );
    const dragging = useSelector((state) => state.dragging);
    const copied = useSelector((state) => state.copied?.has(point) || false);

    return (
      <CellComponent
        {...props}
        active={active}
        copied={copied}
        dragging={dragging}
        mode={mode}
        evaluatedData={evaluatedData}
        data={data}
        select={select}
        activate={activate}
        setCellDimensions={setCellDimensions}
        setCellData={setCellData}
      />
    );
  };
};
