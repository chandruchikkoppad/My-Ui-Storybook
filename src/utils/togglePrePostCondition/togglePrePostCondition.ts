import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';
export function togglePrePostConditions(
  data: TreeNode[],
  isHide: boolean
): TreeNode[] {
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array of TreeNode objects.');
  }
  return data.map((node) =>
    ['PRE', 'POST'].includes(node.entityType ?? '') ? { ...node, hide: isHide } : node
  );
}