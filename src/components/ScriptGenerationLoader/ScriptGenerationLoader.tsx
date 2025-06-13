import React from 'react';
import Typography from '../Typography';
import { ScriptGenerationLoaderProps } from './types';
import './ScriptGenerationLoader.scss';
const ScriptGenerationLoader: React.FC<ScriptGenerationLoaderProps> = ({
  actions = ['Analyzing', 'Gathering', 'Generating'],
  width,
  height,
  path,
}) => {
  const numberOfDivs = [1, 2, 3];
  return (
    <div
      className="loader-container"
      style={{ width: `${width}%`, height: `${height}%` }}
    >
      <div className="ff-moving-sections-container">
        {numberOfDivs?.map((order) => {
          return <div className={`ff-moving-section${order}`}></div>;
        })}
      </div>

      <div className="ff-gif-container">
        <div className="ff-typing-wrapper">
          {actions?.map((action, index) => (
            <Typography
              key={index}
              className={`ff-typing-text t${index + 1}`}
              fontSize={16}
              fontWeight="medium"
            >
              {action}...
            </Typography>
          ))}
        </div>
        <img height={124} width={124} alt="generation" src={path}></img>
      </div>
    </div>
  );
};

export default ScriptGenerationLoader;
