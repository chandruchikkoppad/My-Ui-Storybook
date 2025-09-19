import * as React from 'react';
import FloatingRect from './FloatingRect';
import useSelector from './use-selector';
import { VisibleRange } from './types';
import { getVisibleRangeDimensions } from './util';

type SelectedProps = {
  visibleRange: VisibleRange;
  scrollPos?: { top: number; left: number };
};

const Selected: React.FC<SelectedProps> = ({
  visibleRange,
  scrollPos = { top: 0, left: 0 },
}) => {
  const rowDimensions = useSelector((state) => state.rowDimensions);
  const columnDimensions = useSelector((state) => state.columnDimensions);
  const dragging = useSelector((state) => state.dragging);
  const hidden = useSelector(
    (state) => state.selected.size(state.model.data) < 2
  );
  const fullRange = useSelector((state) =>
    state.selected.toRange(state.model.data)
  );

  const dimensions = React.useMemo(
    () =>
      getVisibleRangeDimensions(
        fullRange,
        visibleRange,
        rowDimensions,
        columnDimensions
      ),
    [fullRange, rowDimensions, columnDimensions, visibleRange]
  );

  const adjustedDimensions = React.useMemo(() => {
    if (!dimensions) return undefined;
    return {
      ...dimensions,
      top: dimensions.top + 32,
      left: dimensions.left + 60,
      height: dimensions.height - 1,
      width: dimensions.width - 1,
    };
  }, [dimensions, scrollPos]);

  return (
    <FloatingRect
      variant="selected"
      dimensions={adjustedDimensions}
      dragging={dragging}
      hidden={hidden || !dimensions}
    />
  );
};

export default Selected;
