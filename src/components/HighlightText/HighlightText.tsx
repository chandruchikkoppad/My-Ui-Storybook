import { HighlightTextProps } from './types';
import './HighlightText.scss';
import classNames from 'classnames';

// Function to escape special characters in the search term
const escapeRegExp = (text: String): string => {
  return text?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

const HighlightText: React.FC<HighlightTextProps> = ({
  text = '',
  highlight = '',
  onlyExactMatch = false,
}) => {
  if (!highlight) return <span>{text}</span>;

  const escapedHighlight = escapeRegExp(highlight); // Escape special characters
  const parts = text?.split(new RegExp(`(${escapedHighlight})`, 'gi')); // Use escaped string in the regex

  if (onlyExactMatch) {
    const isTextEqualsHighlight =
      text.toLowerCase() === highlight.toLowerCase();
    return (
      <span
        className={classNames(isTextEqualsHighlight ? 'ff-highlight-bg' : '')}
      >
        {text}
      </span>
    );
  }

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
