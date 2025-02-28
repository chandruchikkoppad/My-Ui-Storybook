import { useState } from 'react';
import { getTreeDetails, TreeDetailsResult } from './getTreeDetails';
import React from 'react';
import { TreeNodeProps } from '../../ComponentProps/TreeNodeProps';

export default {
  title: 'Utils/getTreeDetails',
  component: getTreeDetails,
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
    key: 'PAG1011',
    name: 'page1',
    projectId: 'PJT1006',
    hierarchy: 0,
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
    platform: '',
  },
];

export const InteractivePlayground = () => {
  const [data, setData] = useState<TreeNodeProps[]>(initialData);
  const [newData, setNewData] = useState<TreeNodeProps[]>([]);
  const [action, setAction] = useState<
    | 'above'
    | 'below'
    | 'expand'
    | 'collapse'
    | 'start'
    | 'addAbove'
    | 'addBelow'
  >('below');
  const [index, setIndex] = useState<number | undefined>(undefined);
  const [sourceId, setSourceId] = useState<string | undefined>(undefined); // State for sourceId
  const [result, setResult] = useState<TreeDetailsResult | null>(null);

  const handleGetTreeDetails = () => {
    try {
      // If sourceId exists, we pass it, otherwise we pass the index
      const treeDetails = getTreeDetails(
        action,
        data,
        newData,
        index,
        sourceId
      );
      setData(treeDetails.treeDataList);
      setResult(treeDetails);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Interactive Playground for getTreeDetails</h1>

      <div>
        <label htmlFor="action">Action:</label>
        <select
          id="action"
          value={action}
          onChange={(e) =>
            setAction(
              e.target.value as
                | 'above'
                | 'below'
                | 'expand'
                | 'collapse'
                | 'start'
                | 'addAbove'
                | 'addBelow'
            )
          }
        >
          <option value="above">Above</option>
          <option value="below">Below</option>
          <option value="expand">Expand</option>
          <option value="collapse">Collapse</option>
          <option value="start">Start</option>
          <option value="addAbove">Add Above</option>
          <option value="addBelow">Add Below</option>
        </select>
      </div>

      {/* Input for sourceId, if action requires it */}
      {(action === 'expand' ||
        action === 'collapse' ||
        action === 'addAbove' ||
        action === 'addBelow') && (
        <div>
          <label htmlFor="sourceId">
            Source ID (for expand/collapse/addAbove/addBelow):
          </label>
          <input
            type="text"
            id="sourceId"
            value={sourceId || ''}
            onChange={(e) => setSourceId(e.target.value)}
            placeholder="Enter Source ID"
          />
        </div>
      )}

      {/* Input for index, for actions requiring index */}
      {(action === 'expand' || action === 'collapse') && !sourceId && (
        <div>
          <label htmlFor="index">Index (for expand/collapse):</label>
          <input
            type="number"
            id="index"
            value={index !== undefined ? index : ''}
            onChange={(e) =>
              setIndex(
                e.target.value ? parseInt(e.target.value, 10) : undefined
              )
            }
            disabled={action !== 'expand' && action !== 'collapse'}
          />
        </div>
      )}

      <div>
        <label htmlFor="newData">New Data (JSON):</label>
        <textarea
          id="newData"
          value={JSON.stringify(newData, null, 2)}
          onChange={(e) => {
            try {
              setNewData(JSON.parse(e.target.value));
            } catch {
              alert('Invalid JSON');
            }
          }}
        />
      </div>

      <button onClick={handleGetTreeDetails}>Get Tree Details</button>

      <h2>Result:</h2>
      {result ? (
        <div>
          {result.root && (
            <>
              <h3>Root:</h3>
              <pre>{JSON.stringify(result.root, null, 2)}</pre>
            </>
          )}
          <p>
            <strong>Next:</strong> {result.next.toString()}
          </p>
          <p>
            <strong>Previous:</strong> {result.previous.toString()}
          </p>
          <p>
            <strong>Start ID:</strong> {result.startId}
          </p>
          <p>
            <strong>End ID:</strong> {result.endId}
          </p>
        </div>
      ) : (
        <p>No result yet. Perform an action to see the details.</p>
      )}

      <h2>Current Tree Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
