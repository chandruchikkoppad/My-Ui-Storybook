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
    | 'expandAll',
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

  switch (action) {
    case 'above':
      treeDataList = [...newData, ...oldData].slice(0, 100);
      break;
    case 'below':
      treeDataList = [...oldData, ...newData].slice(-100);
      break;
    case 'expand':
    case 'expandAll':
    case 'collapse':
      const actionIndex = getIndex();
      if (actionIndex === undefined) {
        throw new Error(
          "Both sourceId and index are required for 'expand' or 'collapse' actions."
        );
      }
      treeDataList = [...oldData.slice(0, actionIndex), ...newData].slice(-40);
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
        ...newData,
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
        ...newData,
        ...oldData.slice(addBelowIndex + 1),
      ];
      break;
    case 'start':
      if (!checkEmpty(newData)) {
        root = newData[0];
        treeDataList = newData.slice(1);
      } else {
        throw new Error('Tree data list is empty, cannot determine root.');
      }
      break;
    default:
      throw new Error(`Invalid action: ${action}`);
  }

  if (checkEmpty(treeDataList) && action !== 'start') {
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
