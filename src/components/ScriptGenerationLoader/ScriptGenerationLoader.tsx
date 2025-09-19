import React, { useEffect, useState } from 'react';
import Typography from '../Typography';
import { ScriptGenerationLoaderProps } from './types';
import './ScriptGenerationLoader.scss';

const ScriptGenerationLoader: React.FC<ScriptGenerationLoaderProps> = ({
  actions = [
    {
      text: 'Analyzing your application flow...',
      color: 'var(--brand-color)',
    },
    { text: 'AI agents are on action...', color: 'var(--ff-electric-indigo)' },
    {
      text: 'Thinking like a QA expert… just a few more seconds...',
      color: 'var(--ff-vivid-orange)',
    },
    {
      text: 'Hold on, test cases are on the way!',
      color: 'var(--ff-dodger-blue)',
    },
  ],
  width,
  height,
  path,
  DynamicHeight = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState('');
  const numberOfDivs = [1, 2, 3, 4];
  useEffect(() => {
    if (currentIndex >= actions?.length) return;

    const message = actions[currentIndex]?.text || ' ';
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= message?.length) {
        setVisibleChars(message?.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev < actions?.length - 1 ? prev + 1 : prev
          );
        }, 1000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentIndex, actions]);

  const currentColor = actions[currentIndex]?.color;

  return (
    <div
      className="loader-container"
      style={{ width: `${width}%`, height: `${height}%` }}
    >
      <div className="ff-moving-sections-container">
        {numberOfDivs?.map((order) => (
          <div
            key={order}
            className={`ff-moving-section${order}`}
            style={{ height: `${DynamicHeight + 'px'}` }}
          />
        ))}
      </div>

      <div className="ff-gif-container">
        <div className="ff-typing-wrapper">
          <Typography
            className="ff-typing-text"
            fontSize={16}
            fontWeight="medium"
            style={{ color: currentColor }}
          >
            {visibleChars}
          </Typography>
        </div>
        <img height={100} width={100} alt="generation" src={path} />
      </div>
    </div>
  );
};

export default ScriptGenerationLoader;
