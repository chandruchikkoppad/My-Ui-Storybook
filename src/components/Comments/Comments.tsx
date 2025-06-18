import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Comments.scss';
import { CommentType, HandleNodeFunction, CommentsProps } from './type';
import Icon from '../Icon';
import { ffid } from '../../utils/ffID/ffid';
import ChildComment from './childComment/ChildComment';
import useNode from './childComment/useNode';
import MentionUser from './mentionUser/MentionUser';
import { formatUserDetails, findUserByName } from './commentCommonUtils';
import {
  DETECT_MENTIONED_USERNAME_AFTER_SPACE,
  DETECT_MENTIONED_USERNAME_AFTER_SPACE_SPECIAL_CHARS_ALLOWED,
  DETECT_AT_CHAR_AT_START,
  CHECK_AT_FOLLOWED_BY_WORD,
} from '../../../src/validations/regex';
import Typography from '../Typography';
import Tooltip from '../Tooltip';

const Comments = ({
  commentsData,
  handleAddComment,
  handleEditComment,
  handleDeleteComment,
  onCommentsDataChange,
  currentUser,
  isDisable = false,
  userDetails,
  createdByID,
  rowBreakCharCount = 83,
  isVewMode = false,
  deleteEnable = true,
  showTextarea = false,
  autoFocus = false,
}: CommentsProps) => {
  const [input, setInput] = useState<string>('');
  const [commentData, setCommentsData] = useState<CommentType[]>([]);
  const [hasAtSymbol, setHasAtSymbol] = useState<boolean>(false);
  const [usersObj, setUsersObj] = useState<
    { id: string; name: string; emailId: string }[]
  >([]);
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const [textAfterAt, setTextAfterAt] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formattedUsersDetails = formatUserDetails(userDetails);
    setUsersObj(formattedUsersDetails);
  }, [userDetails]);

  const findNode = (
    nodes: CommentType[],
    id: number | string
  ): CommentType | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      const found = findNode(node.comments, id);
      if (found) return found;
    }
    return null;
  };
  useEffect(() => {
    if (commentsData) {
      setCommentsData(commentsData);
    }
  }, [commentsData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectSectionRef.current &&
        !selectSectionRef.current.contains(event.target as Node)
      ) {
        setHasAtSymbol(false);

        setInput((existingTexts) => {
          const splittedWords = existingTexts.split(' ');
          if (
            splittedWords.length > 0 &&
            splittedWords?.[splittedWords?.length - 1]?.startsWith('@')
          ) {
            return splittedWords.slice(0, -1).join(' ');
          }
          return existingTexts;
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode: HandleNodeFunction = (parentId, text, emailIds) => {
    if (!text.trim()) return;

    const newComment: CommentType = {
      id: ffid(),
      description: text,
      commentParentId: parentId,
      emailId: emailIds,
      comments: [],
      createdBy: currentUser?.createdBy,
      modifiedBy: currentUser?.modifiedBy,
      createdByUname: currentUser?.createdByUname,
      modifiedByUname: currentUser?.modifiedByUname,
      createdOn: new Date().toISOString(),
      modifiedOn: new Date().toISOString(),
    };

    setCommentsData((prevComments) =>
      insertNode(prevComments, parentId, newComment as any)
    );

    if (handleAddComment)
      handleAddComment(newComment, findNode(commentData, parentId));
  };

  const handleEditNode: HandleNodeFunction = useCallback(
    (commentId, value, mentionedUsersEmail) => {
      const updatedTree = editNode(commentData, commentId, value);
      setCommentsData(updatedTree);
      const updatedNode = findNode(updatedTree, commentId);
      if (handleEditComment)
        handleEditComment(commentId, value, updatedNode, mentionedUsersEmail);
    },
    [commentData, editNode, handleEditComment]
  );

  const handleDeleteNode = useCallback(
    async (commentId: string) => {
      try {
        if (handleDeleteComment) {
          const response = await handleDeleteComment(commentId);
          if (response?.success) {
            const updatedTree = deleteNode(commentData, commentId);
            setCommentsData(updatedTree);
          }
        }
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    },
    [deleteNode, handleDeleteComment]
  );

  useEffect(() => {
    if (onCommentsDataChange) {
      onCommentsDataChange(commentData);
    }
  }, [commentData, onCommentsDataChange]);

  const handleAddNewComment = () => {
    if (!input.trim()) return;

    const mentionedUserNames = input.match(/@\S+/g) || [];
    const mentionedUserEmails = mentionedUserNames
      .map((name) => findUserByName(name, usersObj))
      .filter((email): email is string => !!email);

    const newComment: CommentType = {
      id: ffid(),
      description: input,
      comments: [],
      createdBy: currentUser?.createdBy,
      modifiedBy: currentUser?.modifiedBy,
      createdByUname: currentUser?.createdByUname,
      modifiedByUname: currentUser?.modifiedByUname,
      createdOn: new Date().toISOString(),
      modifiedOn: new Date().toISOString(),
      commentParentId: '',
      emailId: mentionedUserEmails,
    };
    if (handleAddComment) handleAddComment(newComment, null);

    setCommentsData((prev) => [...prev, newComment]);
    setInput('');
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
      top: spanRect.top,
      left: spanRect.left,
    };
  };
  const updateMentionPosition = () => {
    if (!textareaRef.current) return;
    const textareaEl = textareaRef?.current;
    const dropdownEl = selectSectionRef?.current;
    const inputEl = inputRef?.current;
    const caretPosition = textareaRef.current.selectionStart;
    const caretCoords = getCaretCoordinates(textareaEl, caretPosition);
    const dropdownHeight = dropdownEl?.getBoundingClientRect().height || 370;
    const inputRect = inputEl?.getBoundingClientRect();
    if (!inputRect) return;
    const spaceBelow = window.innerHeight - inputRect.bottom;
    const spaceAbove = inputRect.top;
    const showAbove =
      spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;
    setMentionPosition({
      top: showAbove
        ? caretCoords.top - dropdownHeight - 528
        : caretCoords.top - 606,
      left: caretCoords.left + 10,
    });
  };
  const textAreaInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = e.target.value;
    setInput(textAreaValue);
    updateMentionPosition();
    const caretPosition = e.target.selectionStart;
    const textBeforeCaret = textAreaValue.slice(0, caretPosition);

    const match = textBeforeCaret.match(CHECK_AT_FOLLOWED_BY_WORD);
    const mentionWords = match?.[1] || '';
    setTextAfterAt(mentionWords);
    const hasExplicitAtSymbol = DETECT_AT_CHAR_AT_START.test(textBeforeCaret);
    setHasAtSymbol(!!hasExplicitAtSymbol);
  };

  const optionClicked = (name: string) => {
    if (!textareaRef.current) return;

    const caretPosition = textareaRef.current.selectionStart;
    const textBeforeCaret = input.slice(0, caretPosition);
    const mentionNameMatch = textBeforeCaret.match(
      DETECT_MENTIONED_USERNAME_AFTER_SPACE
    );

    if (mentionNameMatch) {
      const mentionNameStart = textBeforeCaret.lastIndexOf(
        mentionNameMatch[1] ?? ''
      );
      const remainingText = input.slice(caretPosition);
      const mentionedUserName = `@${name.replace(/\s+/g, '')} `;

      const newText =
        input.slice(0, mentionNameStart) + mentionedUserName + remainingText;
      setInput(newText);
      setHasAtSymbol(false);

      setTimeout(() => {
        textareaRef.current?.focus();
        const newCaretPos = mentionNameStart + mentionedUserName.length + 1;
        textareaRef.current?.setSelectionRange(newCaretPos, newCaretPos);
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === '@') {
      setHasAtSymbol(true);
    } else if (e.key === 'Backspace' && textareaRef.current) {
      const caretPos = textareaRef.current.selectionStart;
      const textBeforeCaret = input.slice(0, caretPos);

      if (textBeforeCaret.endsWith('@')) {
        setHasAtSymbol(false);
      }

      const mentionMatch = textBeforeCaret.match(
        DETECT_MENTIONED_USERNAME_AFTER_SPACE_SPECIAL_CHARS_ALLOWED
      );
      if (mentionMatch) {
        e.preventDefault();

        const mentionText = mentionMatch[1];
        const mentionIndex = textBeforeCaret.lastIndexOf(mentionText || '');
        const updatedInput =
          input.slice(0, mentionIndex) + input.slice(caretPos);

        setInput(updatedInput);
        setHasAtSymbol(false);
        setTimeout(() => {
          textareaRef.current?.setSelectionRange(mentionIndex, mentionIndex);
        }, 0);
      }
    }
  };

  return (
    <div className="ff-comments-container-box">
      {!isVewMode && (
        <div className={`ff-first-comment ${showTextarea ? 'no-border' : ''}`}>
          <Typography fontWeight="semi-bold" className="ff-comment-heading">
            Comments
          </Typography>

          {!showTextarea && (
            <div className="input-wrapper" ref={inputRef}>
              <textarea
                className="inputContainer_input first_input"
                rows={input.length < rowBreakCharCount ? 1 : 3}
                autoFocus={autoFocus}
                value={input}
                onChange={(e) => textAreaInputChange(e)}
                placeholder="Add a comment"
                disabled={isDisable}
                ref={textareaRef}
                onKeyDown={handleKeyDown}
              />

              {hasAtSymbol && (
                <div
                  id="mention-user"
                  ref={selectSectionRef}
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
                  />
                </div>
              )}

              <span className="reply-comment">
                <Tooltip title="Add">
                  <Icon
                    name="comment_reply"
                    onClick={handleAddNewComment}
                    hoverEffect
                    disabled={Boolean(!input.length)}
                  />
                </Tooltip>
              </span>
            </div>
          )}
        </div>
      )}

      {commentData.length > 0 &&
        commentData.map((comment) => (
          <ChildComment
            key={comment.id}
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={comment}
            depth={0}
            isDisable={isDisable}
            userDetails={userDetails}
            isEditDeleteActionAllowed={comment.createdBy === createdByID}
            createdByID={createdByID}
            isVewMode={isVewMode}
            deleteEnable={deleteEnable}
          />
        ))}
    </div>
  );
};

export default Comments;
