import classNames from 'classnames';
import './Paper.scss';
import { PaperProps } from './types';

const Paper = ({ children, className = '', rounded = false }: PaperProps) => {
  const dynamicClassName = classNames(
    { ['ff_rounded_lg']: rounded },
    className
  );

  return <div className={dynamicClassName}>{children}</div>;
};

export default Paper;
