import LazyLoad from './LazyLoad';
const { FixedSizeList } = LazyLoad;
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
