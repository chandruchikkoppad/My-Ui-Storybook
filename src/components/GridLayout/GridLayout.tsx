import React from 'react';
import './GridLayout.scss';
import { ContainerProps, RowProps, ColProps } from './types';
import cx from 'classnames';

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  gap = '0px',
  className = '',
}) => {
  const containerClassName = fluid ? 'ff-container-fluid' : 'ff-container';
  return (
    <div className={cx(containerClassName, className)} style={{ gap }}>
      {children}
    </div>
  );
};

export const Row: React.FC<RowProps> = ({
  children,
  gap = '0px',
  className = '',
}) => {
  return (
    <div className={cx('ff-row', className)} style={{ gap }}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({
  children,
  size = 12,
  className = '',
}) => {
  const colClassName = `ff-col-${size}`;
  return <div className={cx(colClassName, className)}>{children}</div>;
};
