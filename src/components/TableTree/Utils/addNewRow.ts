import { TreeNodeProps } from '../../../ComponentProps/TreeNodeProps';
import { addLastChild } from './addLastChild';

export const addNewRow = (
  treeData: TreeNodeProps[],
  newNode: {
    action?: 'addAbove' | 'addBelow' | 'addInside';
    sourceId?: string;
    payloadSourceId?: string;
    error?: string;
    value?: string;
    label?: string;
    options?: [];
    selectedOption?: string;
    type?: 'input' | 'inputWithDropdown';
    confirmIconTooltip?: string;
    cancelIconTooltip?: string;
  },
  rootNode: TreeNodeProps
) => {
  const {
    sourceId,
    action,
    value = '',
    error = '',
    label,
    type,
    options,
    selectedOption,
    confirmIconTooltip,
    cancelIconTooltip,
    payloadSourceId,
  } = newNode;

  if (!sourceId || !action) return treeData;

  const convertedOptions = options?.map((option) => ({
    label: option,
    value: option,
  }));
  const convertedSelectedOption = selectedOption
    ? { label: selectedOption, value: selectedOption }
    : undefined;

  const nodeMap = new Map(treeData.map((node) => [node.key, node]));
  if (rootNode) {
    nodeMap.set(rootNode.key, rootNode);
  }
  const sourceNode = nodeMap.get(sourceId);

  if (!sourceNode) return treeData;

  let payloadSourceNode;
  if (payloadSourceId) {
    payloadSourceNode = nodeMap.get(payloadSourceId);
  }

  const updatedTreeData = [...treeData];
  const sourceIndex = treeData.findIndex((node) => node.key === sourceId);

  const newNodeBase = {
    hierarchy: payloadSourceNode?.hierarchy ?? sourceNode.hierarchy,
    sourceId: sourceNode.key,
    isNewNode: true,
    key: 'new-node',
    value,
    error,
    label,
    type,
    options: convertedOptions,
    selectedOption: convertedSelectedOption,
    confirmIconTooltip,
    cancelIconTooltip,
  };

  let parentId
  switch (action) {
    case 'addAbove':
      updatedTreeData.splice(sourceIndex, 0, newNodeBase);
      break;
    case 'addBelow':
      parentId = payloadSourceNode?.parentId;
      updatedTreeData.splice(sourceIndex + 1, 0, {...newNodeBase, parentId});
      break;
    case 'addInside':
      parentId = payloadSourceNode?.key;

      updatedTreeData.splice(sourceIndex + 1, 0, {
        ...newNodeBase,
        hierarchy: newNodeBase.hierarchy + 1,
        parentId,
      });
      break;
    default:
      break;
  }

  return addLastChild(updatedTreeData);
};
