import React from 'react';
import { LineLoaderProps } from './types';
import './LineLoader.scss';

const LineLoader: React.FC<LineLoaderProps> = ({ logo: Logo, overlay }) => {
  return (
    <div className="overlay-loader">
      <div className={`loader-container ${overlay ? 'overlay' : ''}`}>
        {Logo && <Logo />}
        <div className="line_loader">
        </div>
      </div>
    </div>
  );
};

export default LineLoader;
