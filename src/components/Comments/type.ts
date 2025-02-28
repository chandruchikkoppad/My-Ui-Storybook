export interface CommentType {
  id?: string | number;
  description?: string;
  createdBy?: string;
  modifiedBy?: string;
  createdByUname?: string;
  modifiedByUname?: string;
  createdOn?: string;
  modifiedOn?: string;
  name?: string;
  emailId?: string[];
  commentParentId?: string;
  comments: CommentType[];
}

export type HandleAddComment = (
  newComment: CommentType,
  parentCommentId?: string
) => void;

// Handles editing an existing comment
export type HandleEditComment = (
  commentId: string,
  updatedDescription: string
) => void;

// Handles deleting a comment
export type HandleDeleteComment = (commentId: string) => void;
export type HandleNodeFunction = (commentId: string, value: string) => void;
export interface CommentsProps {
  commentsData: CommentType[];
  handleAddComment: any;
  handleEditComment: any;
  handleDeleteComment: any;
  onCommentsDataChange?: (data: any) => void;
  currentUser?: {
    createdBy: string;
    modifiedBy: string;
    createdByUname: string;
    modifiedByUname: string;
  };
  isDisable?: boolean;
}

export interface CommentProps {
  handleInsertNode: any;
  handleEditNode: any;
  handleDeleteNode: (_commentId: string) => void;
  comment: CommentType;
  depth?: number;
  commentedData?: CommentType[];
  isDisable?: boolean;
}