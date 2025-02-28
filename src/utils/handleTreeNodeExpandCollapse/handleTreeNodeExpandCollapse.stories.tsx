import React, { useState } from 'react';
import { handleTreeNodeExpandCollapse } from './handleTreeNodeExpandCollapse'; // Ensure this imports the utility function
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';

export default {
  title: 'Utils/handleTreeNodeExpandCollapse',
  component: handleTreeNodeExpandCollapse,
};

const initialData: TreeNodeProps[] = [
  {
    key: 'PAG1010',
    name: 'Root',
    parentId: undefined,
    subContainerCount: 1,
    resourceCount: 0,
    hide: false,
    expanded: true,
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T10:54:33.296Z',
    modifiedOn: '2023-05-31T10:54:33.296Z',
    state: 'APPROVED',
    path: '/Root',
    searchKey: '/PAG1010',
    projectId: 'PJT1006',
    hierarchy: 0,
    executionOrder: 0,
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
    key: 'PAG1011',
    name: 'page1',
    parentId: 'PAG1010',
    subContainerCount: 0,
    resourceCount: 3,
    hide: false,
    expanded: true,
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T10:57:31.721Z',
    modifiedOn: '2023-05-31T10:57:31.721Z',
    state: 'APPROVED',
    path: '/Root/page1',
    searchKey: '/PAG1010/PAG1011',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 1,
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
    key: 'PAG1012',
    name: 'page2',
    parentId: 'PAG1010',
    subContainerCount: 2,
    resourceCount: 5,
    hide: false,
    expanded: true,
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:00:00.000Z',
    modifiedOn: '2023-05-31T11:00:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2',
    searchKey: '/PAG1010/PAG1012',
    projectId: 'PJT1006',
    hierarchy: 1,
    executionOrder: 2,
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
    key: 'PAG1013',
    name: 'subpage1',
    parentId: 'PAG1012',
    subContainerCount: 0,
    resourceCount: 2,
    hide: false,
    expanded: true,
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:05:00.000Z',
    modifiedOn: '2023-05-31T11:05:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2/subpage1',
    searchKey: '/PAG1010/PAG1012/PAG1013',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 1,
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
    key: 'PAG1014',
    name: 'subpage2',
    parentId: 'PAG1012',
    subContainerCount: 0,
    resourceCount: 4,
    hide: false,
    expanded: true,
    createdBy: 'USR4705',
    modifiedBy: '--',
    createdByUname: 'Saqeb',
    modifiedByUname: '--',
    createdOn: '2023-05-31T11:10:00.000Z',
    modifiedOn: '2023-05-31T11:10:00.000Z',
    state: 'APPROVED',
    path: '/Root/page2/subpage2',
    searchKey: '/PAG1010/PAG1012/PAG1014',
    projectId: 'PJT1006',
    hierarchy: 2,
    executionOrder: 2,
    totalSubContainerCount: 0,
    totalResourceCount: 4,
    totalProjectElementCount: 0,
    totalSharedElementCount: 0,
    container: false,
    localDelete: false,
    defaultEntity: false,
    lastResource: true,
  },
];

export const InteractiveTreeExpandCollapse = () => {
  const [data, setData] = useState<TreeNodeProps[]>(initialData);
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleUpdateTree = () => {
    const updatedTree = handleTreeNodeExpandCollapse(data, selectedKey, null, isExpanded);
    setData([...updatedTree.data]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Interactive Tree Expand/Collapse</h1>
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
            checked={isExpanded}
            onChange={(e) => setIsExpanded(e.target.checked)}
          />
          Expand Node
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
