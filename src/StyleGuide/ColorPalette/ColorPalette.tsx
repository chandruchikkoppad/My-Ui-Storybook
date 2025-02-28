import { ColorBoxProps } from './types';
import ColorPalette from './colorPaletteList';
import './ColorPalette.scss';

// Component to render each color card
const ColorBox = ({
  name,
  colorCode,
  opacity,
  dropShadow,
  border,
  variable,
}: ColorBoxProps) => {
  const opacityPercentage = opacity ? `${Math.round(opacity * 100)}%` : '';

  const boxStyle = {
    background: colorCode,
    opacity: opacity,
    filter: dropShadow ? dropShadow : '',
    border: `1px solid ${border}`,
    color: colorCode,
  };

  return (
    <div className="color-card">
      <span className="color-name">{name}</span>
      <div className="color-box" style={boxStyle}>
        <p style={{ '--colorCode': colorCode } as React.CSSProperties}> </p>
      </div>
      <span className="color-code">
        {colorCode} {opacityPercentage && `opacity ${opacityPercentage}`} <br />
        {border && `Border -${border}`}
      </span>
      <span className="color-code">{variable}</span>
    </div>
  );
};

// Main Colors component
const Colors = () => {
  return (
    <div className="ff-style-guide">
      <div className="style-guide-header">
        <div>Colors</div>
        <span>
          Application of the color palette brings a unified and recognisable
          consistency to MX's array of digital products and interface.
        </span>
      </div>
      <div className="style-guide-content">
        {ColorPalette.map((color) => (
          <ColorBox
            key={color.name}
            name={color.name}
            colorCode={color.colorCode}
            opacity={color?.opacity}
            dropShadow={color?.dropShadow}
            border={color?.border}
            variable={color.variable}
          />
        ))}
      </div>
    </div>
  );
};

export default Colors;
