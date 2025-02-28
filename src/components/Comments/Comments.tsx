import { useState, useEffect, useCallback } from 'react';
import './Comments.scss';
import { CommentType, HandleNodeFunction, CommentsProps } from './type';
import Icon from '../Icon';
import { ffid } from '../../utils/ffID/ffid';
import ChildComment from './childComment/ChildComment';
import useNode from './childComment/useNode';
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
}: CommentsProps) => {
  const [input, setInput] = useState('');
  const [commentData, setCommentsData] = useState<CommentType[]>([]);
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

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode: HandleNodeFunction = (parentId, text) => {
    if (!text.trim()) return;

    const newComment: CommentType = {
      id: ffid(),
      description: text,
      commentParentId: parentId,
      emailId: [],
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
    (commentId, value) => {
      const updatedTree = editNode(commentData, commentId, value);
      setCommentsData(updatedTree);
      const updatedNode = findNode(updatedTree, commentId);
      if (handleEditComment) handleEditComment(commentId, value, updatedNode);
    },
    [commentData, editNode, handleEditComment]
  );

  const handleDeleteNode = useCallback(
    (commentId: string) => {
      const updatedTree = deleteNode(commentData, commentId);
      setCommentsData(updatedTree);
      if (handleDeleteComment) handleDeleteComment(commentId);
    },
    [commentData, deleteNode, handleDeleteComment]
  );

  useEffect(() => {
    if (onCommentsDataChange) {
      onCommentsDataChange(commentData);
    }
  }, [commentData, onCommentsDataChange]);

  const handleAddNewComment = () => {
    if (!input.trim()) return;

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
    };

    setCommentsData((prev) => [...prev, newComment]);
    if (handleAddComment) handleAddComment(newComment, null);
    setInput('');
  };

  return (
    <div className="ff-comments-container-box">
      <div className="first-comment">
        <Typography fontWeight="semi-bold" className="ff-comment-heading">
          Comments
        </Typography>
        <div className="input-wrapper">
          <textarea
            className="inputContainer__input first_input"
            rows={1}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Comments"
            disabled={isDisable}
          />
          <span className="reply-comment">
            <Tooltip title="reply">
              <Icon
                name="comment_reply"
                onClick={handleAddNewComment}
                hoverEffect
                disabled={isDisable}
              />
            </Tooltip>
          </span>
        </div>
      </div>

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
          />
        ))}
    </div>
  );
};

export default Comments;
