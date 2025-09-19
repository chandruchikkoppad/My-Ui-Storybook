import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';
import { checkEmpty } from '../checkEmpty/checkEmpty';

export const handleTreeExpandAllCollapseAll = (
  data: TreeNodeProps[],
  key: string,
  rootNode: TreeNodeProps | null,
  isExpanded: boolean,
  treeAction: 'expandAll' | 'collapseAll' | undefined = undefined,
  hidePrePostScript: boolean = false
): { data: TreeNodeProps[]; rootNode?: TreeNodeProps } => {
  if (!key && !treeAction) {
    throw new Error(
      'Key is required for individual node expansion/collapse or a valid treeAction for all nodes'
    );
  }

  const nodesMap = new Map<string, TreeNodeProps>();
  const childMap = new Map<string, TreeNodeProps[]>();
  const visited = new Set<string>();

  let list = [...data];
  if (rootNode && !checkEmpty(rootNode)) {
    list = [rootNode, ...data];
  }

  list.forEach((node) => {
    nodesMap.set(node.key, node);
    if (node.parentId) {
      if (!childMap.has(node.parentId)) {
        childMap.set(node.parentId, []);
      }
      childMap.get(node.parentId)!.push(node);
    }
  });

  // Recursive helper to update descendants
  function updateDescendants(nodeKey: string, expanded: boolean) {
    if (visited.has(nodeKey)) {
      throw new Error(`Cycle detected at node: ${nodeKey}`);
    }
    visited.add(nodeKey);

    const children = childMap.get(nodeKey) || [];
    children.forEach((child) => {
      child.expanded = expanded;
      child.expandedAll = expanded;
      child.hide = !expanded;
      updateDescendants(child.key, expanded);
    });

    visited.delete(nodeKey);
  }

  // Handle scoped expand/collapse if both key and treeAction are provided
  if ((treeAction === 'expandAll' || treeAction === 'collapseAll') && key) {
    const targetNode = nodesMap.get(key);
    if (targetNode) {
      const expanded = treeAction === 'expandAll';
      targetNode.expanded = expanded;
      targetNode.expandedAll = expanded;
      targetNode.hide = false;
      updateDescendants(key, expanded);
    }
  }

  // Handle global expand/collapse
  else if (
    (treeAction === 'expandAll' || treeAction === 'collapseAll') &&
    !key
  ) {
    const expanded = treeAction === 'expandAll';
    list.forEach((node) => {
      node.expanded = expanded;
      node.expandedAll = expanded;
      node.hide = !expanded;
    });
  }

  // Handle individual node expand/collapse
  else if (key) {
    const targetNode = nodesMap.get(key);
    if (targetNode) {
      targetNode.expanded = isExpanded;
      targetNode.expandedAll = isExpanded;
      targetNode.hide = false;

      if (!isExpanded) {
        updateDescendants(key, false); // collapse: hide children
      } else {
        const children = childMap.get(key) || [];
        children.forEach(
          (child) => (child.hide = hidePrePostScript ? true : false)
        ); // show direct children only
      }
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
