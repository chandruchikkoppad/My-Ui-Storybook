import { TreeNodeProps } from '../../../ComponentProps/TreeNodeProps';

export const addNewRow = (
  treeData: TreeNodeProps[],
  newNode: {
    action?: 'addAbove' | 'addBelow' | 'addInside';
    sourceId?: string;
    error?: string;
    value?: string;
    label?: string;
    options?: [];
    selectedOption?: string;
    type?: 'input' | 'inputWithDropdown';
  },
  rootNode: TreeNodeProps,
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

  const updatedTreeData = [...treeData];
  const sourceIndex = treeData.findIndex((node) => node.key === sourceId);

  const newNodeBase = {
    hierarchy: sourceNode.hierarchy,
    sourceId: sourceNode.key,
    isNewNode: true,
    key: 'new-node',
    value,
    error,
    label,
    type,
    options: convertedOptions,
    selectedOption: convertedSelectedOption,
  };

  switch (action) {
    case 'addAbove':
      updatedTreeData.splice(sourceIndex, 0, newNodeBase);
      break;
    case 'addBelow':
      updatedTreeData.splice(sourceIndex + 1, 0, newNodeBase);
      break;
    case 'addInside':
      updatedTreeData.splice(sourceIndex + 1, 0, {
        ...newNodeBase,
        hierarchy: sourceNode.hierarchy + 1,
      });
      break;
    default:
      break;
  }

  return updatedTreeData;
};
