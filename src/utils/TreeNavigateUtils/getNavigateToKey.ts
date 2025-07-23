import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';
import { HierarchyInfo } from './types';
export const getNavigateToKey = (
  currentNode: TreeNodeProps,
  treeData: TreeNodeProps[],
  action: string
) => {
  // this function will find all the children nodes of the current node
  const getAllChildrenNodesUsingSearchKey = (
    treeData: TreeNodeProps[],
    searchKey: string
  ) => {
    return treeData.filter(
      (node) => node.searchKey && node.searchKey.startsWith(searchKey + '/')
    );
  };
  // this function will find the last child of the current node
  const findLastChild = (
    treeData: TreeNodeProps[],
    currentNode: TreeNodeProps
  ) => {
    // Get all children of the current node using searchKey
    const children = treeData.filter(
      (node) =>
        node.searchKey && node.searchKey.startsWith(currentNode.searchKey + '/')
    );

    if (children.length === 0) {
      // If no children will return the current node's key
      return currentNode.key;
    }

    // it will  Find the last child
    const lastChild = children[children.length - 1];

    // If the last child is a container (nested), recursively find the last child
    if (lastChild?.container) {
      return findLastChild(treeData, lastChild);
    } else {
      // If the last child is not a container, return its key
      return lastChild?.key;
    }
  };
  // this function will analyze the hierarchy of the treeData based on the searchKey it hel to find the pre and post node in the parent node
  const analyzeHierarchy = (treeData: TreeNodeProps[], searchKey: string) => {
    // Split the searchKey into its hierarchy parts
    const hierarchyParts = searchKey.split('/').filter((part) => part !== '');

    const hierarchyMap: { [index: number]: HierarchyInfo } = {};

    // Find each level in the treeData
    hierarchyParts.forEach((_, index) => {
      const currentPath = '/' + hierarchyParts.slice(0, index + 1).join('/');

      // Find the node that matches this exact searchKey path
      const node = treeData.find((n) => n.searchKey === currentPath);

      if (node) {
        hierarchyMap[index] = {
          key: node.key,
          name: node.name ?? '',
          type: node.entityType ?? '',
          searchKey: node.searchKey ?? '',
          hierarchy: node.hierarchy,
          isContainer: node.container ?? false,
          hasPrePost: false,
        };

        // Check if this node has PRE/POST children
        const children = treeData.filter(
          (n) =>
            n?.searchKey?.startsWith(currentPath + '/') &&
            n?.searchKey?.split('/').length ===
              currentPath?.split('/').length + 1
        );

        hierarchyMap[index].hasPrePost = children.some(
          (child) => child.entityType === 'PRE' || child.entityType === 'POST'
        );
      }
    });

    return hierarchyMap;
  };
  const getRootChildren = (
    treeData: TreeNodeProps[],
    rootNode: TreeNodeProps
  ) => {
    return treeData.filter(
      (node) =>
        node.parentId === rootNode.key &&
        node.entityType !== 'POST' &&
        node.entityType !== 'PRE'
    );
  };
  if (action === 'inside' || 'addInside') {
    // Handle root node case
    if (currentNode.path === '/Root') {
      const childrenOfRoot = getRootChildren(treeData, currentNode);
      if (childrenOfRoot.length > 0) {
        const lastChildOfRoot = childrenOfRoot[childrenOfRoot.length - 1];
        if (
          lastChildOfRoot?.expandedAll === false ||
          lastChildOfRoot?.expanded === false
        ) {
          return { navigateTo: lastChildOfRoot?.key };
        }
        if (
          lastChildOfRoot?.expandedAll === true ||
          lastChildOfRoot?.expanded === true
        ) {
          const lastChildExpand = getAllChildrenNodesUsingSearchKey(
            treeData,
            lastChildOfRoot?.searchKey as string
          );
          return {
            navigateTo: lastChildExpand[lastChildExpand.length - 1]?.key,
          };
        }
      }
    } else {
      // Handle non-root node case
      const lastChild = findLastChild(treeData, currentNode);
      const currentNodeAllChildren = getAllChildrenNodesUsingSearchKey(
        treeData,
        currentNode?.searchKey as string
      );
      const hierarchyInfo = analyzeHierarchy(
        treeData,
        currentNode?.searchKey as string
      );
      const currentNodeHierarchyInfo = Object.values(hierarchyInfo).find(
        (obj) => obj.key === currentNode.key
      );
      if (currentNodeAllChildren.length > 0) {
        const nonPostPreChildren = currentNodeAllChildren.filter(
          (node) => node.entityType !== 'POST' && node.entityType !== 'PRE'
        );
        if (nonPostPreChildren.length > 0) {
          return {
            navigateTo: currentNodeHierarchyInfo?.hasPrePost
              ? nonPostPreChildren[nonPostPreChildren.length - 1]?.key
              : lastChild,
          };
        } else {
          return {
            navigateTo:
              currentNodeAllChildren[currentNodeAllChildren.length - 1]?.key,
          };
        }
      } else {
        return { navigateTo: currentNode?.key };
      }
    }
  } else if (action === 'below' || 'addBelow') {
    if (currentNode.expandedAll === false || currentNode.expanded === false) {
      return { navigateTo: currentNode?.key };
    } else {
      const lastChild = findLastChild(treeData, currentNode);
      return { navigateTo: lastChild };
    }
  } else if (action === 'above' || 'addAbove') {
    return { navigateTo: currentNode?.key };
  }

  return { navigateTo: currentNode?.key };
};
