import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';

/**
 * Updates selectedStatus to 'none' and optionally merges updates by key.
 *
 * @param tree Original tree (flat array)
 * @param updates Optional array of partial updates (matched by key)
 * @returns Updated tree
 */
export function handleUnCheckAllTreeNodesWithUpdates(
  tree: TreeNode[],
  updates?: Partial<TreeNode>[]
): TreeNode[] {
  const updateMap = updates
    ? new Map(updates.map((node) => [node.key, node]))
    : null;

  return tree.map((node) => {
    const updatedNode = updateMap?.get(node.key);

    return {
      ...node,
      ...(updatedNode || {}),
      selectedStatus: 'none',
    };
  });
}
