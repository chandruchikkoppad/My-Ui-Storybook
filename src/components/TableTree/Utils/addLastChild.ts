import { TreeNodeProps } from '../../../ComponentProps/TreeNodeProps';

export const addLastChild = (treeData: TreeNodeProps[]): TreeNodeProps[] => {
  const childMap = new Map<string, TreeNodeProps[]>();

  const updatedTreeData = treeData.map((node) => {
    const newNode = { ...node };
    if (node.parentId) {
      const children = childMap.get(node.parentId) ?? [];
      children.push(newNode);
      childMap.set(node.parentId, children);
    }
    return newNode;
  });

  childMap.forEach((children) => {
    const lastChildNode = children.at(-1);
    if (lastChildNode) {
      lastChildNode.lastChild = true;
    }
  });

  return updatedTreeData;
};
