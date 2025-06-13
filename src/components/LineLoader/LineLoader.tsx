import React from 'react';
import { LineLoaderProps } from './types';
import './LineLoader.scss';

const LineLoader: React.FC<LineLoaderProps> = ({
  logo: Logo,
  overlay = false,
}) => {
  return (
    <div className={`overlay-loader ${overlay && 'overlay'}`}>
      <div className={`loader-container `}>
        {Logo && <Logo />}
        <div className="line_loader"></div>
      </div>
    </div>
  );
};

export default LineLoader;
