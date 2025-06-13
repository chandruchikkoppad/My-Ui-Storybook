import React, { useState, useEffect } from 'react';
import './carousel.scss';
import { CarouselProps } from './type';
import Icon from '../Icon';
import Typography from '../Typography';

interface ExtendedCarouselProps extends CarouselProps {
  height?: number | string;
}
const Carousel: React.FC<ExtendedCarouselProps> = ({
  items,
  onCollapseClick,
  initialRunId,
  height,
}) => {
  if (!items || items.length === 0) return null;

  const findInitialIndex = () => {
    if (!initialRunId) return 0;
    const idx = items.findIndex((item) => item.runId === initialRunId);
    return idx >= 0 ? idx : 0;
  };

  const [currentIndex, setCurrentIndex] = useState(findInitialIndex());
  const hasMultipleItems = items.length > 1;

  useEffect(() => {
    setCurrentIndex(findInitialIndex());
  }, [initialRunId, items]);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const carouselStyle = {
    '--ff-carousel-height': typeof height === 'number' ? `${height}px` : height,
  } as React.CSSProperties;

  const { scriptName, machineName, icon, currentScripts, totalScripts } =
    items[currentIndex]!;

  return (
    <div className="ff-carousel" style={carouselStyle}>
      <div className="ff-slide_header">
        <div className="ff-slide-name">
          <Icon name={icon} />
          <Typography>
            {machineName}-{scriptName}
          </Typography>
        </div>
        <div className="ff-collapse_icon">
          <Icon
            name="collapse_icon"
            onClick={onCollapseClick}
            height={22}
            width={22}
          />
        </div>
      </div>

      <div
        className="ff-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="ff-carousel-slide">
            {item.src.endsWith('.mp4') ? (
              <video src={item.src} autoPlay muted loop controls />
            ) : (
              <img src={item.src} alt={item.alt || `Slide ${idx}`} />
            )}
          </div>
        ))}
      </div>

      <div className="ff-carousel-bottom-text">
        <div className="ff-left-text" />
        <Typography className="ff-right-text">
          {currentScripts}/{totalScripts}
        </Typography>
      </div>

      {hasMultipleItems && (
        <div className="ff-carousel-controls">
          <div className="ff-left-control">
            {currentIndex > 0 && (
              <Icon
                className="ff-carousel-icons"
                name="left_new_icon"
                onClick={handlePrev}
                height={64}
                width={64}
              />
            )}
          </div>
          <div className="ff-right-control">
            {currentIndex < items.length - 1 && (
              <Icon
                className="ff-carousel-icons"
                name="right_new_icon"
                onClick={handleNext}
                height={64}
                width={64}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
