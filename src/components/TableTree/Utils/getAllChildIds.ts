const getAllChildIds = (nodeId: string, data: any[]): string[] => {
  let result = [nodeId];

  // Traverse the tree and find children based on parentId
  data.forEach(({ node }) => {
    if (node.parentId === nodeId) {
      result = result.concat(getAllChildIds(node.id, data)); // Add children recursively
    }
  });

  return result;
};

export default getAllChildIds;
