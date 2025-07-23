import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';
export function toggleShowHideEntity(
  data: TreeNode[],
  isHide: boolean,
  isScript: boolean
): TreeNode[] {
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array of TreeNode objects.');
  }

  const hideTypeArray = isScript ? ['script', 'element', 'sharedelement', 'program_element', 'stepgroup', 'file', 'webservice_collection', 'workbench_request'] : ['pre', 'post'];

  return data.map((node) =>
    hideTypeArray.includes(node.entityType?.toLowerCase() ?? '')
      ? { ...node, hide: isHide }
      : node
  );
}
