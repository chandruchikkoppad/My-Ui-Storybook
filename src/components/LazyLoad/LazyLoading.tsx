import React, { ComponentType } from 'react';
import LazyLoad from './LazyLoad';
const { FixedSizeList: _FixedSizeList } = LazyLoad;

const FixedSizeList = _FixedSizeList as unknown as ComponentType<{
  height: number;
  itemCount: number;
  itemSize: number;
  width: number;
  children: (props: { index: number; style: React.CSSProperties }) => JSX.Element;
}>;
const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => <div style={style}>Row {index}</div>;

const LazyLoading = () => {
  return (
    <FixedSizeList height={300} itemCount={100000} itemSize={30} width={400}>
      {Row}
    </FixedSizeList>
  );
};

export default LazyLoading;
