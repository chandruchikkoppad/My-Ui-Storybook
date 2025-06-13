import React, { useState } from 'react';
import { handleUnCheckAllTreeNodesWithUpdates } from './handleUnCheckAllTreeNodesWithUpdates';
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';

export default {
  title: 'Utils/handleUnCheckAllTreeNodesWithUpdates',
  component: handleUnCheckAllTreeNodesWithUpdates,
};

const initialData: TreeNodeProps[] = [
  {
    key: 'PAG1010',
    name: 'Root',
    selectedStatus: 'completely',
    projectId: 'PJT1006',
    hierarchy: 0,
    executionOrder: 0,
  },
  {
    key: 'PAG1011',
    name: 'page1',
    parentId: 'PAG1010',
    selectedStatus: 'completely',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 1,
  },
  {
    key: 'PAG1012',
    name: 'page2',
    parentId: 'PAG1010',
    selectedStatus: 'completely',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 2,
  },
  {
    key: 'PAG1013',
    name: 'subpage1',
    parentId: 'PAG1012',
    selectedStatus: 'completely',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 1,
  },
  {
    key: 'PAG1014',
    name: 'subpage2',
    parentId: 'PAG1012',
    selectedStatus: 'completely',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 2,
  },
];

const updateSamples: Partial<TreeNodeProps>[] = [
  { key: 'PAG1011', name: 'Updated Page 1' },
  { key: 'PAG1014', name: 'Updated Subpage 2' },
];

export const InteractiveTreeUpdater = () => {
  const [treeData, setTreeData] = useState<TreeNodeProps[]>(initialData);

  const handleUpdate = () => {
    const updated = handleUnCheckAllTreeNodesWithUpdates(
      treeData,
      updateSamples
    );
    setTreeData(updated);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Update & Uncheck Tree Nodes</h1>
      <p>
        This utility updates tree node properties and sets all{' '}
        <code>selectedStatus</code> values to <code>"none"</code>.
      </p>

      <button onClick={handleUpdate} style={{ marginBottom: '20px' }}>
        Apply Updates
      </button>

      <h2>Tree Data:</h2>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
        {JSON.stringify(treeData, null, 2)}
      </pre>
    </div>
  );
};
