import './MentionUser.scss';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MentionUsers } from '../type';
import Typography from '../../Typography';

const MentionUser: React.FC<MentionUsers> = ({
  hasAtSymbol,
  usersObj,
  optionClicked,
  charsAfterAt,
  mentionUserRef,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (!hasAtSymbol) return null;

  const filteredUsers = usersObj.filter((option) =>
    charsAfterAt
      ? option.name.toLowerCase().startsWith(charsAfterAt.toLowerCase())
      : true
  );

  useEffect(() => {
    setHoveredIndex(0);
  }, [charsAfterAt]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!hasAtSymbol || filteredUsers.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHoveredIndex(
            (prevIndex) => (prevIndex + 1) % filteredUsers.length
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHoveredIndex((prevIndex) =>
            prevIndex === 0 ? filteredUsers.length - 1 : prevIndex - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          const selectedUser = filteredUsers[hoveredIndex];
          if (selectedUser) {
            optionClicked(selectedUser.name, selectedUser.emailId);
          }
          break;
        default:
          break;
      }
    },
    [filteredUsers, hoveredIndex, hasAtSymbol, optionClicked]
  );

  useEffect(() => {
    if (itemRefs.current[hoveredIndex]) {
      itemRefs.current[hoveredIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [hoveredIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="select-section" onMouseDown={(e) => e.preventDefault()}>
      <div className="select-group" ref={mentionUserRef}>
        {filteredUsers.length ? (
          filteredUsers.map((option, index) => (
            <div
              key={option.id}
              ref={(name) => (itemRefs.current[index] = name)}
              className={`mention-option ${
                index === hoveredIndex ? 'hovered' : ''
              }`}
              onClick={() => optionClicked(option.name, option.emailId)}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Typography>{option.name}</Typography>
            </div>
          ))
        ) : (
          <div className="user-not-found">
            <Typography>No user name found</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentionUser;
