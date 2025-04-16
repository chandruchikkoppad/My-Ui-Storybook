import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';
import { checkEmpty } from '../checkEmpty/checkEmpty';

export const handleTreeNodeSect = (
  data: TreeNode[],
  key: string | undefined,
  rootNode: TreeNode | null,
  isChecked: boolean
): { data: TreeNode[]; rootNode?: TreeNode | null } => {
  if (!key) {
    throw new Error('Key is required');
  }

  // Build a map for quick access to nodes by key
  const nodesMap = new Map<string, TreeNode>();
  const childMap = new Map<string, TreeNode[]>();
  const visited = new Set<string>(); // To detect cycles

  let list = [...data];
  if (rootNode && !checkEmpty(rootNode)) {
    list = [rootNode, ...data];
  }

  // Initialize the maps
  list.forEach((node) => {
    nodesMap.set(node.key, node);
    if (node.parentId) {
      if (!childMap.has(node.parentId)) {
        childMap.set(node.parentId, []);
      }
      childMap.get(node.parentId)!.push(node);
    }
  });

  // Helper to calculate the selected status of a node
  function calculateSelectedStatus(
    nodeKey: string
  ): 'completely' | 'partially' | 'none' {
    const node = nodesMap.get(nodeKey);
    if (!node) return 'none';

    const totalChildren =
      (node.resourceCount ?? 0) + (node.subContainerCount ?? 0) + (node.conditionCount ?? 0);

    if (totalChildren === 0) {
      // Leaf node: use its own selected status
      return node.selectedStatus ?? 'none';
    }

    const children = childMap.get(nodeKey) || [];
    let completelySelectedCount = 0;
    let hasPartialSelection = false;

    for (const child of children) {
      if (child.selectedStatus === 'completely') {
        completelySelectedCount++;
      } else if (child.selectedStatus === 'partially') {
        hasPartialSelection = true;
      }
    }

    if (completelySelectedCount === totalChildren) {
      return 'completely';
    } else if (hasPartialSelection || completelySelectedCount > 0) {
      return 'partially';
    } else {
      return 'none';
    }
  }

  // Helper to update child nodes recursively
  function updateChildren(nodeKey: string, status: 'completely' | 'none') {
    if (visited.has(nodeKey)) {
      throw new Error(`Cycle detected at node: ${nodeKey}`);
    }
    visited.add(nodeKey);

    const children = childMap.get(nodeKey) || [];
    children.forEach((child) => {
      child.selectedStatus = status;
      updateChildren(child.key, status);
    });

    visited.delete(nodeKey); // Clean up after recursion
  }

  // Helper to update parent nodes recursively
  function updateParents(nodeKey: string) {
    if (visited.has(nodeKey)) {
      throw new Error(`Cycle detected at node: ${nodeKey}`);
    }
    visited.add(nodeKey);

    const node = nodesMap.get(nodeKey);
    if (node && node.parentId) {
      const parentNode = nodesMap.get(node.parentId);
      if (parentNode) {
        parentNode.selectedStatus = calculateSelectedStatus(parentNode.key);
        updateParents(parentNode.key);
      }
    }

    visited.delete(nodeKey); // Clean up after recursion
  }

  // Main logic: update the target node and propagate changes
  const targetNode = nodesMap.get(key);
  if (targetNode) {
    targetNode.selectedStatus = isChecked ? 'completely' : 'none';
    updateChildren(key, targetNode.selectedStatus);
    updateParents(key);
  }

  if (!checkEmpty(rootNode)) {
    return {
      rootNode: list[0],
      data: list.slice(1),
    };
  }

  return { data: list };
};
