import React, { useState } from 'react';
import { handleTreeNodeSect } from './handleTreeNodeSelect'; // Ensure this imports the utility function
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';

export default {
  title: 'Utils/handleTreeNodeSect',
  component: handleTreeNodeSect,
};

const initialData: TreeNodeProps[] = [
  {
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T10:54:33.296Z',
    modifiedOn: '2023-05-31T10:54:33.296Z',
    state: 'APPROVED',
    path: '/Root',
    searchKey: '/PAG1010',
    key: 'PAG1010',
    name: 'Root',
    projectId: 'PJT1006',
    hierarchy: 0,
    executionOrder: 0,
    subContainerCount: 1,
    resourceCount: 0,
    totalSubContainerCount: 1,
    totalResourceCount: 2,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: false,
    localDelete: false,
    defaultEntity: false,
    lastResource: false,
    platform: '',
  },
  {
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T10:57:31.721Z',
    modifiedOn: '2023-05-31T10:57:31.721Z',
    state: 'APPROVED',
    path: '/Root/page1',
    searchKey: '/PAG1010/PAG1011',
    parentId: 'PAG1010',
    parentName: 'Root Page',
    key: 'PAG1011',
    name: 'page1',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 3,
    totalSubContainerCount: 0,
    totalResourceCount: 1,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: false,
    localDelete: false,
    defaultEntity: false,
    lastResource: true,
  },
  {
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:00:00.000Z',
    modifiedOn: '2023-05-31T11:00:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2',
    searchKey: '/PAG1010/PAG1012',
    parentId: 'PAG1010',
    parentName: 'Root Page',
    key: 'PAG1012',
    name: 'page2',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 2,
    subContainerCount: 2,
    resourceCount: 5,
    totalSubContainerCount: 2,
    totalResourceCount: 7,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: true,
    localDelete: false,
    defaultEntity: false,
    lastResource: false,
  },
  {
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:05:00.000Z',
    modifiedOn: '2023-05-31T11:05:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2/subpage1',
    searchKey: '/PAG1010/PAG1012/PAG1013',
    parentId: 'PAG1012',
    parentName: 'page2',
    key: 'PAG1013',
    name: 'subpage1',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 2,
    totalSubContainerCount: 0,
    totalResourceCount: 2,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: false,
    localDelete: false,
    defaultEntity: false,
    lastResource: true,
  },
  {
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:10:00.000Z',
    modifiedOn: '2023-05-31T11:10:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2/subpage2',
    searchKey: '/PAG1010/PAG1012/PAG1014',
    parentId: 'PAG1012',
    parentName: 'page2',
    key: 'PAG1014',
    name: 'subpage2',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 2,
    subContainerCount: 0,
    resourceCount: 4,
    totalSubContainerCount: 0,
    totalResourceCount: 4,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: false,
    localDelete: false,
    defaultEntity: false,
    lastResource: true,
  },
  // Repeat similar patterns to generate 50 entries, modifying hierarchy, executionOrder, and other attributes as needed.
];

export const InteractiveTreeSelector = () => {
  const [data, setData] = useState<{
    data: TreeNodeProps[];
    rootNode?: TreeNodeProps | null;
  }>({ data: initialData, rootNode: null });
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleUpdateTree = () => {
    const updatedTree = handleTreeNodeSect(
      data.data,
      selectedKey,
      null,
      isChecked
    );
    setData(updatedTree);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Interactive Tree Selector</h1>
      <div>
        <label htmlFor="nodeKey">Node Key:</label>
        <input
          id="nodeKey"
          type="text"
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
          placeholder="Enter node key"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Set Checked
        </label>
      </div>
      <button onClick={handleUpdateTree} style={{ marginTop: '10px' }}>
        Update Tree
      </button>

      <h2>Tree Data:</h2>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
