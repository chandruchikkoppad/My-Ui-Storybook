import { HighlightTextProps } from './types';
import './HighlightText.scss';

// Function to escape special characters in the search term
const escapeRegExp = (text: String): string => {
  return text?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

const HighlightText: React.FC<HighlightTextProps> = ({
  text = '',
  highlight = '',
}) => {
  if (!highlight) return <span>{text}</span>;

  const escapedHighlight = escapeRegExp(highlight); // Escape special characters
  const parts = text?.split(new RegExp(`(${escapedHighlight})`, 'gi')); // Use escaped string in the regex

  return (
    <>
      {parts.map((part, index) =>
        part?.toLowerCase() === highlight?.toLowerCase() ? (
          <span key={index} className="ff-highlight-bg">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;
