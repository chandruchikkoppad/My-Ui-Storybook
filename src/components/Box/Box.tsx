import { type FC, CSSProperties } from 'react';
import './Box.scss';
import { CardProps } from './types';

const Card: FC<CardProps> = ({
  cardProperties = {
    width: '200px',
    height: '200px',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '1px 4px 8px var(--plugins-header-bg-color)',
    padding: '16px',
    margin: '0',
    border: 'none',
    className: '',
    style: {} as CSSProperties,
    onClick: () => {},
  },
  headerContent,
  midContent,
  footerContent,
}) => {
  const {
    width,
    height,
    background,
    borderRadius,
    boxShadow,
    padding,
    margin,
    border,
    className = '',
    style = {},
  } = cardProperties;

  return (
    <section
      className={`ff-card ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        boxShadow,
        padding,
        margin,
        border,
        ...style,
      }}
      onClick={cardProperties.onClick}
    >
      {headerContent?.isHeader && (
        <div className="ff-card-header">{headerContent.content}</div>
      )}
      {midContent?.isMidContent && (
        <div className="ff-card-content">{midContent.content}</div>
      )}
      {footerContent?.isFooter && (
        <div className="ff-card-footer">{footerContent.content}</div>
      )}
    </section>
  );
};

export default Card;
