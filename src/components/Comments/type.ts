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
  profileImage?: string | null;
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
export type HandleNodeFunction = (
  commentId: string,
  value: string,
  mentionedUsersEmail: string[]
) => void;
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
  userDetails?: any;
  createdByID?: string;
  createdBy?: string;
  rowBreakCharCount?: number;
  isVewMode?: boolean;
  showTextarea?: boolean;
  deleteEnable?: boolean;
  autoFocus?: boolean;
}

export interface CommentProps {
  handleInsertNode: any;
  handleEditNode: any;
  handleDeleteNode: (_commentId: string) => void;
  comment: CommentType;
  depth?: number;
  commentedData?: CommentType[];
  isDisable?: boolean;
  userDetails?: any;
  isEditDeleteActionAllowed?: boolean;
  createdByID?: string;
  rowBreakCharCount?: number;
  isVewMode?: boolean;
  deleteEnable?: boolean;
}

export interface MentionUsers {
  hasAtSymbol: boolean;
  usersObj: { id: string; name: string; emailId: string }[];
  optionClicked: (_name: string, _emailId: string) => void;
  charsAfterAt?: string;
}
