import React, { useState } from 'react';
import './carousel.scss';
import { CarouselProps } from './type';
import Icon from '../Icon';
import Typography from '../Typography';

const Carousel: React.FC<CarouselProps> = ({
  items,
  slideName,
  slideIconName,
  currentScripts,
  totalScripts,
  onCollapseClick,
  collapseIconName,
  timeText,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleItems = items.length > 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="ff-carousel">
      <div className="ff-slide_header">
        <div className="ff-slide-name">
          <Icon name={slideIconName} />
          <Typography> {slideName} </Typography>{' '}
        </div>
        {collapseIconName && (
          <div className="ff-collapse_icon">
            <Icon
              name={collapseIconName}
              onClick={onCollapseClick}
              height={22}
              width={22}
            />
          </div>
        )}
      </div>

      <div
        className="ff-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="ff-carousel-slide">
            {item.type === 'image' ? (
              <img src={item.src} alt={`Slide ${index}`} />
            ) : (
              <video src={item.src} autoPlay muted />
            )}
          </div>
        ))}
      </div>

      <div className="ff-carousel-bottom-text">
        <div className="ff-left-text">
          <Icon className="ff-clock_icon" name="clock_new_icon" />
          <Typography className="ff-time-text" >
            {timeText}
          </Typography>
        </div>

        <Typography className="ff-right-text" >
          {' '}
          {currentScripts}/{totalScripts}
        </Typography>
      </div>

      {hasMultipleItems && (
        <div className="ff-carousel-controls">
          <div className="ff-left-control">
            {currentIndex > 0 && (
              <Icon
                className="ff-carousel-icons"
                name={'left_new_icon'}
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
                name={'right_new-icon'}
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
