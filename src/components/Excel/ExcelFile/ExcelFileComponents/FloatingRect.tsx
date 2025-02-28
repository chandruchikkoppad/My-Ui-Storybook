import * as React from 'react';
import classnames from 'classnames';
import * as Types from './types';
import useSelector from './use-selector';
import { getCellDimensions } from './util';

export type Props = {
  variant?: string;
  dimensions?: Types.Dimensions | null | undefined;
  hidden?: boolean;
  dragging?: boolean;
};

const FloatingRect: React.FC<Props> = ({
  dimensions,
  dragging,
  hidden,
  variant,
}) => {
  const active = useSelector((state) => state.active);
  const autoFill = useSelector((state) => state.autoFill);
  const FixedVal = useSelector((state) =>
    active
      ? getCellDimensions(active, state.rowDimensions, state.columnDimensions)
      : undefined
  );

  const { width, height, top, left } = dimensions || {};

  let sampleHeight = FixedVal?.height ?? 0;
  let sampleWidth = FixedVal?.width ?? 0;
  let adjustedWidth = width;
  let adjustedHeight = height;
  if (autoFill.open && width && height && FixedVal) {
    if (width - sampleWidth > height - sampleHeight) {
      adjustedWidth = width;
      adjustedHeight = FixedVal.height;
    } else {
      adjustedHeight = height;
      adjustedWidth = FixedVal.width;
    }
  }

  return (
    <div
      className={classnames('ff-spreadsheet-floating-rect', {
        [`ff-spreadsheet-floating-rect--${variant}`]: variant,
        'ff-spreadsheet-floating-rect--dragging': dragging,
        'ff-spreadsheet-floating-rect--hidden': hidden,
      })}
      style={{
        width: (adjustedWidth ?? 0) + 1,
        height: (adjustedHeight ?? 0) + 1,
        top,
        left,
      }}
    />
  );
};

export default FloatingRect;
