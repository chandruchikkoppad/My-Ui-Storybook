import * as React from 'react';
import FloatingRect from './FloatingRect';
import useSelector from './use-selector';
import { VisibleRange } from './types';
import { getVisibleRangeDimensions } from './util';

type CopiedProps = {
  visibleRange: VisibleRange;
  scrollPos?: { top: number; left: number };
};

const Copied: React.FC<CopiedProps> = ({
  visibleRange,
  scrollPos = { top: 0, left: 0 },
}) => {
  const rowDimensions = useSelector((state) => state.rowDimensions);
  const columnDimensions = useSelector((state) => state.columnDimensions);
  const fullRange = useSelector((state) => state.copied);
  const hidden = fullRange === null;

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
      variant="copied"
      dimensions={adjustedDimensions}
      hidden={hidden || !dimensions}
      dragging={false}
    />
  );
};

export default Copied;
