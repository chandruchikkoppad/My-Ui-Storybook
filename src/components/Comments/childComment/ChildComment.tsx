import { useState, useEffect } from 'react';
import '../Comments.scss';
import Icon from '../../Icon';
import { CommentProps } from '../type';
import Tooltip from '../../Tooltip';
import Typography from '../../Typography';

const ChildComment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
  depth = 0,
  isDisable,
}: CommentProps) => {
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);

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
      handleEditNode(comment.id, input);
      setShowInput(false);
      setInput('');
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput('');
    }
    if (editMode) setEditMode(false);
  };
  return (
    <div className="commentsContainer">
      <div className={'comment-wrapper'}>
        <div className={'commentContainer'}>
          <div className="commentContainer__avatar">{avatar}</div>
          <div className="ff-message-container">
            <div className="ff-message">
              <div className="ff-message-name" style={{ fontWeight: 600 }}>
                {firstName}
              </div>
              <div className="ff-message-time">{randomPastTime}</div>
            </div>
            <div className="ff-editable-container">
              <Typography>{comment?.description}</Typography>
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
                <div className="ff-comment-action-item">
                  {depth < 2 && (
                    <div className="action-icon" onClick={handleNewComment}>
                      <Tooltip title="reply">
                        <Icon
                          name="comment_icon"
                          disabled={editMode || isDisable}
                          hoverEffect
                        />
                      </Tooltip>
                    </div>
                  )}
                  <div
                    className="action-icon"
                    onClick={() => setEditMode(true)}
                  >
                    <Tooltip title="edit">
                      <Icon
                        name="edit"
                        disabled={showInput || isDisable}
                        hoverEffect
                      />
                    </Tooltip>
                  </div>

                  <div
                    className="action-icon"
                    onClick={() => handleDeleteNode(comment.id as string)}
                  >
                    <Tooltip title="delete">
                      <Icon
                        name="delete"
                        color="var(--ff-delete-button-attachment)"
                        disabled={editMode || showInput || isDisable}
                        hoverEffect
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(showInput || editMode) && (
          <div className="inputContainer">
            <textarea
              rows={1}
              className="inputContainer__input first_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              placeholder={editMode ? 'Edit comment' : 'Add a comment'}
            />
            <div className="edit-comment">
              <div
                className="reply"
                onClick={() => {
                  onAddComment();
                  setEditMode(false);
                  setShowInput(false);
                }}
              >
                <Tooltip title="reply">
                  <Icon name="comment_reply" hoverEffect />
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
                <Tooltip title="close">
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
