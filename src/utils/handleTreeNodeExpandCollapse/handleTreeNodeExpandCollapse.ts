import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';
import { checkEmpty } from '../checkEmpty/checkEmpty';

export const handleTreeNodeExpandCollapse = (
  data: TreeNodeProps[],
  key: string | undefined,
  rootNode: TreeNodeProps | null,
  isExpanded: boolean,
  hidePrePostScript: boolean = false
): { data: TreeNodeProps[]; rootNode?: TreeNodeProps } => {
  if (!key) {
    throw new Error('Key is required');
  }

  // Build a map for quick access to nodes by key
  const nodesMap = new Map<string, TreeNodeProps>();
  const childMap = new Map<string, TreeNodeProps[]>();
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

  // Helper to update child nodes recursively
  function updateChildren(nodeKey: string, hide: boolean) {
    if (visited.has(nodeKey)) {
      throw new Error(`Cycle detected at node: ${nodeKey}`);
    }
    visited.add(nodeKey);

    const children = childMap.get(nodeKey) || [];
    children.forEach((child) => {
      child.hide = hide;
      child.expanded = false;
      if (hide) {
        updateChildren(child.key, true); // If parent is collapsed, hide all descendants
      }
    });

    visited.delete(nodeKey); // Clean up after recursion
  }

  // Main logic: update the target node and propagate changes
  const targetNode = nodesMap.get(key);
  if (targetNode) {
    targetNode.expanded = isExpanded;

    if (!isExpanded) {
      // Collapse: Hide all child nodes
      targetNode.expandedAll = false;
      updateChildren(key, true);
    } else {
      // Expand: Show direct child nodes
      const children = childMap.get(key) || [];
      children.forEach((child) => (child.hide = hidePrePostScript ? true : false));
    }
  }

  if (!checkEmpty(rootNode)) {
    return {
      rootNode: list[0],
      data: list.slice(1),
    };
  }

  return { data: list };
};
