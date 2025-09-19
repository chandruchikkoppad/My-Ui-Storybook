import { useState, useEffect, useRef, Fragment } from 'react';
import '../Comments.scss';
import Icon from '../../Icon';
import { CommentProps } from '../type';
import Tooltip from '../../Tooltip';
import Typography from '../../Typography';
import MentionUser from '../mentionUser/MentionUser';
import {
  DETECT_AT_CHAR_IN_COMMENT,
  DETECT_AT_CHAR_BETWEEN_STRINGS_IN_COMMENT,
  DETECT_MENTIONED_USERNAME_BEFORE_CARET,
  DETECT_AT_CHAR_AT_START,
  CHECK_AT_FOLLOWED_BY_WORD,
  DETECT_WORD_START_WITH_AT,
} from '../../../../src/validations/regex';
import { formatUserDetails, findUserByName } from '../commentCommonUtils';

const ChildComment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
  depth = 0,
  isDisable,
  userDetails,
  isEditDeleteActionAllowed = true,
  createdByID,
  rowBreakCharCount = 83,
  isVewMode = false,
  deleteEnable = true,
}: CommentProps) => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  const [usersObj, setUsersObj] = useState<
    { id: string; name: string; emailId: string }[]
  >([]);
  const [hasAtSymbol, setHasAtSymbol] = useState<boolean>(false);
  const [mentionedUserEmails, setMentionedUserEmails] = useState<string[]>([]);
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const [textAfterAt, setTextAfterAt] = useState('');

  let previousInputStateLength = input.length;

  const [previousInputLength, setPreviousInputLength] = useState(
    previousInputStateLength
  );

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const mentionRef = useRef<HTMLDivElement | null>(null);
  const mentionReplyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editMode && comment?.description) {
      setInput(comment?.description);

      let commentDescriptionLength = comment?.description?.length;
      setPreviousInputLength(commentDescriptionLength);
    }
  }, [editMode, comment.description]);

  useEffect(() => {
    const formattedUsersDetails = formatUserDetails(userDetails);
    setUsersObj(formattedUsersDetails);
  }, [userDetails]);

  useEffect(() => {
    const mentionedNames = input.match(DETECT_AT_CHAR_IN_COMMENT) || [];

    const updatedEmails = mentionedNames
      .map((name) => {
        return findUserByName(name, usersObj);
      })
      .filter(Boolean) as string[];

    setMentionedUserEmails(updatedEmails);
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutsideMentionUser =
        mentionRef.current &&
        !mentionRef.current.contains(event.target as Node) &&
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target as Node);

      const clickedOutsideTextarea =
        mentionReplyRef.current &&
        !mentionReplyRef.current.contains(event.target as Node) &&
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target as Node);

      if (clickedOutsideMentionUser || clickedOutsideTextarea) {
        setHasAtSymbol(false);
        setInput((prev) => prev.replace(/(?:^|\s)(@\w*)$/, ''));
      }
    };

    if (hasAtSymbol) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hasAtSymbol]);

  const { modifiedByUname, createdByUname, modifiedOn, createdOn } =
    comment || {};
  const randomPastTime = modifiedOn ?? createdOn ?? new Date().toLocaleString();
  const firstName = modifiedByUname ?? createdByUname ?? 'Anonymous';

  const isDepthLimitReached = depth > 2;
  const avatar = firstName ? firstName.charAt(0).toUpperCase() : 'A';
  useEffect(() => {
    if (editMode && comment.description) {
      setInput(comment.description);
    }
  }, [editMode, comment.description]);

  const handleNewComment = () => {
    setShowInput(true);
  };

  const onAddComment = () => {
    if (input.trim().length === 0) return;
    if (editMode) {
      handleEditNode(comment.id, input, mentionedUserEmails);
      setShowInput(false);
      setInput('');
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input, mentionedUserEmails);
      setShowInput(false);
      setInput('');
    }
    if (editMode) setEditMode(false);
  };

  const getCaretCoordinates = (
    element: HTMLTextAreaElement,
    position: number
  ) => {
    const div = document.createElement('div');
    const copyStyle = getComputedStyle(element);

    div.style.cssText = `
        position: absolute;
        visibility: hidden;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: auto;
        width: ${element.offsetWidth}px;
        height: ${element.offsetHeight}px;
        font-family: ${copyStyle.fontFamily};
        font-size: ${copyStyle.fontSize};
        padding: ${copyStyle.padding};
        border: ${copyStyle.border};
        box-sizing: ${copyStyle.boxSizing};
        line-height: ${copyStyle.lineHeight};
      `;

    div.scrollTop = element.scrollTop;
    div.scrollLeft = element.scrollLeft;

    document.body.appendChild(div);

    const text = element.value.slice(0, position);
    div.textContent = text || '.';

    const span = document.createElement('span');
    span.textContent = '.';
    div.appendChild(span);

    const spanRect = span.getBoundingClientRect();
    document.body.removeChild(div);

    return {
      top: spanRect.top - 20,
      left: spanRect.left,
    };
  };
  useEffect(() => {
    const updateMentionPosition = () => {
      if (!textAreaRef.current) return;
      const textareaEl = textAreaRef?.current;
      const dropdownEl = editMode
        ? mentionRef?.current
        : mentionReplyRef?.current;
      const caretPosition = textAreaRef.current.selectionStart;
      const caretCoords = getCaretCoordinates(textareaEl, caretPosition);
      const dropdownHeight = dropdownEl?.getBoundingClientRect().height ?? 0;
      const inputRect = textareaEl?.getBoundingClientRect();
      if (!inputRect) return;
      const spaceBelow = window.innerHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;
      const showAbove =
        spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;
      setMentionPosition({
        top: showAbove
          ? caretPosition - dropdownHeight - 16
          : caretPosition + 32,
        left: caretCoords.left + 10,
      });
    };
    updateMentionPosition();
  }, [input]);

  const textAreaInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = e.target.value;
    setInput(textAreaValue);
    const mentionedUserNames = textAreaValue.match(/@\S+/g) || [];
    const mentionedUserEmails = mentionedUserNames
      .map((name) => {
        return findUserByName(name, usersObj);
      })
      .filter((email) => email !== null) as string[];

    setMentionedUserEmails(mentionedUserEmails);

    const caretPosition = e.target.selectionStart;
    const textBeforeCaret = textAreaValue.slice(0, caretPosition);

    const match = textBeforeCaret.match(CHECK_AT_FOLLOWED_BY_WORD);
    const mentionWords = match?.[1] || '';
    setTextAfterAt(mentionWords);
    const hasExplicitAtSymbol = DETECT_AT_CHAR_AT_START.test(textBeforeCaret);
    setHasAtSymbol(!!hasExplicitAtSymbol);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === '@') {
      setHasAtSymbol(true);
    } else if (e.key === 'Backspace' && textAreaRef.current) {
      const caretPos = textAreaRef.current.selectionStart;
      const textBeforeCaret = input.slice(0, caretPos);

      if (textBeforeCaret.endsWith('@')) {
        setHasAtSymbol(false);
      }

      const mentionMatch = textBeforeCaret.match(
        DETECT_MENTIONED_USERNAME_BEFORE_CARET
      );

      if (mentionMatch) {
        e.preventDefault();

        const mentionText = mentionMatch[1];
        const mentionIndex = textBeforeCaret.lastIndexOf(mentionText || '');
        const updatedInput =
          input.slice(0, mentionIndex) + input.slice(caretPos);

        setInput(updatedInput);
        setHasAtSymbol(false);
        setMentionedUserEmails(() => {
          const nameMentionsInText = (updatedInput.match(/@\w+/g) || []).map(
            (m) => m.slice(1)
          );
          return nameMentionsInText
            .map((username) => {
              return findUserByName(username, usersObj);
            })
            .filter(Boolean) as string[];
        });

        setTimeout(() => {
          textAreaRef.current?.setSelectionRange(mentionIndex, mentionIndex);
        }, 0);
      }
    }
  };

  const optionClicked = (name: string) => {
    if (!textAreaRef.current) return;

    const caretPosition = textAreaRef.current.selectionStart;
    const textBeforeCaret = input.slice(0, caretPosition);
    const mentionNameMatch = textBeforeCaret.match(
      DETECT_AT_CHAR_BETWEEN_STRINGS_IN_COMMENT
    );

    if (mentionNameMatch) {
      const mentionNameStart = textBeforeCaret.lastIndexOf(
        mentionNameMatch[1] || ''
      );
      const remainder = input.slice(caretPosition);
      const mentionedUserName = `@${name.replace(/\s+/g, '')} `;

      const newText =
        input.slice(0, mentionNameStart) + mentionedUserName + remainder;

      setInput(newText);
      setHasAtSymbol(false);

      setTimeout(() => {
        textAreaRef.current?.focus();
        textAreaRef.current?.setSelectionRange(
          mentionNameStart + mentionedUserName.length + 1,
          mentionNameStart + mentionedUserName.length + 1
        );
      }, 0);

      setMentionedUserEmails(() => {
        const nameMentionsInText = (newText.match(/@\w+/g) || []).map((word) =>
          word.slice(1)
        );
        const updatedUserEmails = nameMentionsInText
          .map((username) => {
            return findUserByName(username, usersObj);
          })
          .filter(Boolean) as string[];

        return updatedUserEmails;
      });
    }
  };

  return (
    <div className="commentsContainer">
      <div className={'comment-wrapper'}>
        <div className={'commentContainer'}>
          <div className="commentContainer__avatar">
            {comment?.profileImage ? (
              <img
                height={30}
                width={30}
                src={`data:image/jpeg;base64,${comment?.profileImage}`}
              />
            ) : (
              avatar
            )}
          </div>
          <div className="ff-message-container">
            <div className="ff-message">
              <div className="ff-message-name">{firstName}</div>
              <div className="ff-message-time">{randomPastTime}</div>
            </div>
            <div className="ff-editable-container">
              {!editMode && (
                <Typography className="typography-text">
                  {comment?.description
                    ?.split(DETECT_WORD_START_WITH_AT)
                    .map((part, index) =>
                      part.startsWith('@') ? (
                        <b key={`highlight-${index}`}>{part}</b>
                      ) : (
                        <Fragment key={`text-${index}`}>{part}</Fragment>
                      )
                    )}
                </Typography>
              )}

              {editMode && (
                <div className="inputContainer">
                  <textarea
                    rows={input.length < rowBreakCharCount ? 1 : 3}
                    className="inputContainer_input first_input"
                    value={input}
                    autoFocus
                    placeholder={'Edit comment'}
                    ref={textAreaRef}
                    onChange={(e) => textAreaInputChange(e)}
                    onKeyDown={handleKeyDown}
                  />

                  {hasAtSymbol && (
                    <div
                      id="mention-user"
                      style={{
                        position: 'absolute',
                        top: `${mentionPosition.top}px`,
                        left: `${mentionPosition.left}px`,
                      }}
                    >
                      <MentionUser
                        hasAtSymbol={hasAtSymbol}
                        usersObj={usersObj}
                        optionClicked={optionClicked}
                        charsAfterAt={textAfterAt}
                        mentionUserRef={mentionRef}
                      />
                    </div>
                  )}

                  <div className="edit-comment">
                    <div className="reply">
                      <Tooltip title={editMode ? 'Update' : 'Add'}>
                        <Icon
                          name="comment_reply"
                          hoverEffect
                          disabled={
                            (editMode &&
                              input.length === previousInputLength) ||
                            input.trim().length === 0
                          }
                          onClick={() => {
                            onAddComment();
                            setEditMode(false);
                            setShowInput(false);
                          }}
                        />
                      </Tooltip>
                    </div>
                    <div
                      className="reply"
                      onClick={() => {
                        setEditMode(false);
                        setShowInput(false);
                        setInput('');
                      }}
                    >
                      <Tooltip title={editMode ? 'Cancel' : 'Close'}>
                        <Icon
                          name="close"
                          color="var(--ff-delete-button-attachment)"
                          hoverEffect
                        />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              )}

              <div className="comment-actions">
                {!isDepthLimitReached &&
                  depth < 2 &&
                  comment.comments?.length > 0 && (
                    <div
                      className="action-icon"
                      onClick={() => setExpand((prevExpand) => !prevExpand)}
                    >
                      <Tooltip title={`${expand ? 'collapse' : 'expand'}`}>
                        <Icon
                          name={expand ? 'collapse-arrow' : 'expand-arrow'}
                          disabled={editMode || showInput}
                          hoverEffect
                        />
                      </Tooltip>
                    </div>
                  )}
                {!isDepthLimitReached &&
                  depth < 2 &&
                  comment.comments?.length === 0 && (
                    <div className="action-icon">
                      <Icon name="expand-arrow" disabled />
                    </div>
                  )}

                {!isVewMode && (
                  <div className="ff-comment-action-item">
                    {depth < 2 && (
                      <div className="action-icon">
                        <Tooltip title="Reply">
                          <Icon
                            name="comment_icon"
                            disabled={editMode || isDisable}
                            hoverEffect
                            onClick={handleNewComment}
                          />
                        </Tooltip>
                      </div>
                    )}

                    {isEditDeleteActionAllowed && (
                      <div className="action-icon">
                        <Tooltip title="Edit">
                          <Icon
                            name="edit"
                            disabled={showInput || isDisable}
                            hoverEffect
                            onClick={() => setEditMode(true)}
                          />
                        </Tooltip>
                      </div>
                    )}

                    {isEditDeleteActionAllowed && deleteEnable && (
                      <div className="action-icon">
                        <Tooltip title="Delete">
                          <Icon
                            name="delete"
                            color="var(--ff-delete-button-attachment)"
                            onClick={() => {
                              if (showInput) return;
                              handleDeleteNode(comment.id as string);
                            }}
                            disabled={editMode || showInput || isDisable}
                            hoverEffect
                          />
                        </Tooltip>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="comment-reply-container">
          {showInput && (
            <div className="inputContainer">
              <textarea
                rows={input.length < rowBreakCharCount ? 1 : 3}
                className="inputContainer_input first_input"
                value={input}
                autoFocus
                placeholder={'Add reply comments'}
                ref={textAreaRef}
                onChange={(e) => textAreaInputChange(e)}
                onKeyDown={handleKeyDown}
              />

              {hasAtSymbol && (
                <div
                  id="mention-user"
                  style={{
                    position: 'absolute',
                    top: `${mentionPosition.top}px`,
                    left: `${mentionPosition.left}px`,
                  }}
                >
                  <MentionUser
                    hasAtSymbol={hasAtSymbol}
                    usersObj={usersObj}
                    optionClicked={optionClicked}
                    charsAfterAt={textAfterAt}
                    mentionUserRef={mentionReplyRef}
                  />
                </div>
              )}

              <div className="edit-comment">
                <div
                  className="reply"
                  onClick={() => {
                    onAddComment();
                    setEditMode(false);
                    setShowInput(false);
                  }}
                >
                  <Tooltip title="Reply">
                    <Icon
                      name="comment_reply"
                      hoverEffect
                      disabled={Boolean(!input.length)}
                    />
                  </Tooltip>
                </div>
                <div
                  className="reply"
                  onClick={() => {
                    setEditMode(false);
                    setShowInput(false);
                    setInput('');
                  }}
                >
                  <Tooltip title="Cancel">
                    <Icon
                      name="close"
                      color="var(--ff-delete-button-attachment)"
                      hoverEffect
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Render Parent comments */}
        {expand && comment.comments?.length > 0 && (
          <div
            className={`child-comments ${
              depth === 0 ? 'first-level-child' : ''
            } ${depth === 1 ? 'second-level-child' : ''}`}
          >
            {comment.comments.map((childComment) => (
              <div
                className={`child-comments child-comments-${depth + 1}`}
                key={childComment.id}
              >
                <ChildComment
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  comment={childComment}
                  depth={depth + 1}
                  isDisable={isDisable}
                  userDetails={userDetails}
                  isEditDeleteActionAllowed={comment.createdBy === createdByID}
                  createdByID={createdByID}
                  isVewMode={isVewMode}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChildComment;
