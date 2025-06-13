import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';
import { checkEmpty } from '../checkEmpty/checkEmpty';

export interface TreeDetailsResult {
  treeDataList: TreeNode[];
  next: boolean;
  previous: boolean;
  startId: string;
  endId: string;
  root?: TreeNode;
}

export const getTreeDetails = (
  action:
    | 'above'
    | 'below'
    | 'expand'
    | 'collapse'
    | 'start'
    | 'addAbove'
    | 'addBelow'
    | 'expandAll'
    | 'collapseAll'
    | 'show'
    | 'hide'
    | 'clone'
    | 'delete'
    | 'create'
    | 'refresh',
  oldData: TreeNode[],
  newData: TreeNode[],
  sourceId?: string
): TreeDetailsResult => {
  let treeDataList: TreeNode[];
  let root: TreeNode | undefined = undefined;

  const findIndexByKey = (data: TreeNode[], key: string): number => {
    return data.findIndex((node) => node.key === key);
  };

  const getIndex = (): number | undefined => {
    if (sourceId) {
      const indexByKey = findIndexByKey(oldData, sourceId);
      if (indexByKey === -1) {
        throw new Error(`Key "${sourceId}" not found in oldData.`);
      }
      return indexByKey;
    }
    return 0;
  };
  const tempNewData = [...newData];
  switch (action) {
    case 'above':
      treeDataList = [...tempNewData, ...oldData].slice(0, 100);
      break;
    case 'below':
      treeDataList = [...oldData, ...tempNewData].slice(-100);
      break;
    case 'expand':
    case 'expandAll':
    case 'collapseAll':
    case 'collapse':
      const actionIndex = getIndex();
      if (actionIndex === undefined) {
        throw new Error(
          "Both sourceId and index are required for 'expand' or 'collapse' actions."
        );
      }
      if (
        actionIndex === 0 &&
        !['above', 'below'].includes(action) &&
        !checkEmpty(tempNewData) &&
        tempNewData[0]
      ) {
        tempNewData[0] = { ...tempNewData[0], lastResource: true };
      }
      treeDataList = [...oldData.slice(0, actionIndex), ...tempNewData].slice(
        -40
      );
      break;
    case 'addAbove':
      const addAboveIndex = getIndex();
      if (addAboveIndex === undefined) {
        throw new Error(
          "Both sourceId and index are required for 'addAbove' action."
        );
      }
      treeDataList = [
        ...oldData.slice(0, addAboveIndex),
        ...tempNewData,
        ...oldData.slice(addAboveIndex),
      ];
      break;
    case 'addBelow':
      const addBelowIndex = getIndex();
      if (addBelowIndex === undefined) {
        throw new Error(
          "Both sourceId and index are required for 'addBelow' action."
        );
      }
      treeDataList = [
        ...oldData.slice(0, addBelowIndex + 1),
        ...tempNewData,
        ...oldData.slice(addBelowIndex + 1),
      ];
      break;
    case 'start':
    case 'show':
    case 'hide':
    case 'clone':
    case 'create':
    case 'refresh':
    case 'delete':
      if (!checkEmpty(tempNewData)) {
        root = tempNewData[0];
        treeDataList = tempNewData.slice(1);
      } else {
        throw new Error('Tree data list is empty, cannot determine root.');
      }
      break;
    default:
      throw new Error(`Invalid action: ${action}`);
  }

  if (checkEmpty(treeDataList) && action !== 'start' && action !== 'delete') {
    throw new Error('Tree data list is empty.');
  }

  const firstNode = treeDataList[0] || root!;
  const lastNode = treeDataList[treeDataList.length - 1] || {
    lastResource: true,
    key: '',
  };

  return {
    treeDataList,
    next: !lastNode?.lastResource,
    previous: !firstNode?.lastResource,
    startId: firstNode?.key,
    endId: lastNode?.key,
    root,
  };
};

// NOTE:: This function is used to update the state of the tree nodes based on the current node's state and searchKey.
// from the search key will get all its parent, using this will be updating the container state.
// It returns the updated treeDataList.
export const updateTreeState = (
  treeDataList: TreeNode[],
  currentNode: TreeNode
) => {
  const containerIds = currentNode.searchKey?.split('/') || [];
  if (checkEmpty(containerIds)) {
    return treeDataList;
  }
  treeDataList.map((node) => {
    if (containerIds.includes(node.key)) {
      node.state = currentNode.state;
    }
    return node;
  });
  return treeDataList;
};
