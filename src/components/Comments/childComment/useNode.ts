import { ffid } from "../../../utils/ffID/ffid";
import { CommentType } from "../type";

const useNode = () => {
  const insertNode = (
    tree: CommentType[],
    commentId: string,
    item: any
  ): CommentType[] => {
    return tree.map((node) => {
      if (node.id === commentId) {
        return {
          ...node,
          comments: [
            ...node.comments,
            {
              id: ffid(),
              description: item.description as string,
              comments: [],
              createdBy: node.createdBy,
              modifiedBy: node.modifiedBy,
              createdByUname: node.createdByUname,
              modifiedByUname: node.modifiedByUname,
              createdOn: new Date().toLocaleString(),
              modifiedOn: new Date().toLocaleString(),
              commentParentId: commentId,
            },
          ],
        };
      }
      return {
        ...node,
        comments: insertNode(node.comments, commentId, item),
      };
    });
  };

  const editNode = (
    tree: CommentType[],
    commentId: number | string,
    value: string
  ): CommentType[] => {
    return tree.map((node) => ({
      ...node,
      description: node.id === commentId ? value : node.description,
      comments: editNode(node.comments, commentId, value),
    }));
  };

  const deleteNode = (
    tree: CommentType[],
    commentId: number | string
  ): CommentType[] => {
    return tree
      .filter((node) => node.id !== commentId)
      .map((node) => ({
        ...node,
        comments: deleteNode(node.comments, commentId),
      }));
  };

  return { insertNode, editNode, deleteNode };
};

export default useNode;
