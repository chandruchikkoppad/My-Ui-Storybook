import React, { useState } from 'react';
import { togglePrePostConditions } from './togglePrePostCondition';
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';

export default {
  title: 'Utils/togglePrePostConditions',
  component: togglePrePostConditions,
};

const initialData: TreeNodeProps[] = [
  {
    key: 'MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    name: 'Module 1',
    state: 'APPROVED',
    path: '/Root/Module 1',
    searchKey: '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:24 PM',
    modifiedOn: '24 Apr 2025 03:30 PM',
    parentId: 'MOD1191',
    entityType: 'Module',
    projectId: 'PJT1161',
    hierarchy: 1,
    executionOrder: 9,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    conditionCount: 2,
    container: true,
    expandable: true,
    expanded: true,
    expandedAll: false,
    selectedStatus: 'none',
    status: 'Partially Executed',
  },
  {
    key: 'PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    name: 'Preconditions',
    state: 'APPROVED',
    path: '/Root/Module 1/Preconditions',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:27 PM',
    modifiedOn: '24 Apr 2025 12:27 PM',
    parentId: 'MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'PRE',
    projectId: 'PJT1161',
    hierarchy: 2,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 3,
    totalSubContainerCount: 0,
    totalResourceCount: 3,
    container: true,
    expandable: true,
    expanded: true,
    expandedAll: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'PRE_POST_CONDb289bae3-603b-41a6-a30c-c41bba87ddc2',
    name: 'OpenBrowser',
    state: 'APPROVED',
    version: '1.0',
    path: '/Root/Module 1/Preconditions/OpenBrowser',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_POST_CONDb289bae3-603b-41a6-a30c-c41bba87ddc2',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:27 PM',
    modifiedOn: '24 Apr 2025 12:27 PM',
    parentId: 'PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'PRE',
    projectId: 'PJT1161',
    hierarchy: 3,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    container: false,
    expandable: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'PRE_POST_CONDea3adee4-43de-4a49-96dc-8124c3b17e6a',
    name: 'CloseBrowser',
    state: 'APPROVED',
    version: '1.0',
    path: '/Root/Module 1/Preconditions/CloseBrowser',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_POST_CONDea3adee4-43de-4a49-96dc-8124c3b17e6a',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:28 PM',
    modifiedOn: '24 Apr 2025 12:28 PM',
    parentId: 'PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'PRE',
    projectId: 'PJT1161',
    hierarchy: 3,
    executionOrder: 2,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    container: false,
    expandable: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'PRE_POST_COND0dac6886-3a87-48b9-bc70-f84c6f357de4',
    name: 'CloseBrowser',
    state: 'APPROVED',
    version: '1.0',
    path: '/Root/Module 1/Preconditions/CloseBrowser',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_POST_COND0dac6886-3a87-48b9-bc70-f84c6f357de4',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:29 PM',
    modifiedOn: '24 Apr 2025 12:29 PM',
    parentId: 'PRE_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'PRE',
    projectId: 'PJT1161',
    hierarchy: 3,
    executionOrder: 3,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    container: false,
    expandable: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    name: 'Postconditions',
    state: 'APPROVED',
    path: '/Root/Module 1/Postconditions',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:35 PM',
    modifiedOn: '24 Apr 2025 12:35 PM',
    parentId: 'MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'POST',
    projectId: 'PJT1161',
    hierarchy: 2,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 2,
    totalSubContainerCount: 0,
    totalResourceCount: 2,
    container: true,
    expandable: true,
    expanded: true,
    expandedAll: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'PRE_POST_COND88dd5e91-8b67-412f-850e-042fdda88a1e',
    name: 'OpenBrowser',
    state: 'APPROVED',
    version: '1.0',
    path: '/Root/Module 1/Postconditions/OpenBrowser',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_POST_COND88dd5e91-8b67-412f-850e-042fdda88a1e',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:35 PM',
    modifiedOn: '24 Apr 2025 12:35 PM',
    parentId: 'POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'POST',
    projectId: 'PJT1161',
    hierarchy: 3,
    executionOrder: 1,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    container: false,
    expandable: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
  {
    key: 'PRE_POST_COND3a5299b6-a086-4f21-b36c-019d93a3eaa9',
    name: 'CloseBrowser',
    state: 'APPROVED',
    version: '1.0',
    path: '/Root/Module 1/Postconditions/CloseBrowser',
    searchKey:
      '/MOD1191/MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8/PRE_POST_COND3a5299b6-a086-4f21-b36c-019d93a3eaa9',
    createdBy: 'USR18162',
    modifiedBy: 'USR18162',
    createdByUname: 'Karthikeyan V',
    modifiedByUname: 'Karthikeyan V',
    createdOn: '24 Apr 2025 12:36 PM',
    modifiedOn: '24 Apr 2025 12:36 PM',
    parentId: 'POST_MOD44d5fba3-5d82-4804-97b3-6cb5b0e94ee8',
    entityType: 'POST',
    projectId: 'PJT1161',
    hierarchy: 3,
    executionOrder: 2,
    subContainerCount: 0,
    resourceCount: 0,
    totalSubContainerCount: 0,
    totalResourceCount: 0,
    container: false,
    lastResource: true,
    expandable: false,
    selectedStatus: 'none',
    status: 'N/A',
    cascaded: 'not_cascaded',
  },
];

export const InteractiveTogglePrePostConditions = () => {
  const [data, setData] = useState<TreeNodeProps[]>(initialData);
  const [isHide, setIsHide] = useState<boolean>(false);

  const handleUpdateTree = () => {
    const updatedTree = togglePrePostConditions(data, isHide);
    setData([...updatedTree]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Interactive Tree Hide Pre/Post Condition</h1>

      <div>
        <label htmlFor="treeData">Tree Data (JSON): </label>
        <textarea
          id="treeData"
          value={JSON.stringify(data, null, 2)}
          onChange={(e) => {
            try {
              setData(JSON.parse(e.target.value));
            } catch {
              alert('Invalid JSON');
            }
          }}
          rows={8}
          cols={80}
        />
      </div>
      <br/>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isHide}
            onChange={(e) => setIsHide(e.target.checked)}
          />
          Hide Pre/Post condition
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
