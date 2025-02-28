// findAndInsert.stories.tsx
import { useState } from 'react';
import { findAndInsert, AnyObject } from './findAndInsert';
import React from 'react';

export default {
  title: 'Utils/findAndInsert',
  component: findAndInsert,
};

const initialData: AnyObject[] = [
  { id: 1, name: 'Object 1' },
  {
    id: 2,
    name: 'Object 2',
    children: [
      { id: 3, name: 'Child 1', children: [{ id: 5, name: 'SubChild 1' }] },
      { id: 4, name: 'Child 2' },
    ],
  },
];

export const InteractivePlayground = () => {
  const [data, setData] = useState<AnyObject[]>(initialData);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [newEntryName, setNewEntryName] = useState<string>('New Object');
  const [insertPosition, setInsertPosition] = useState<
    'above' | 'below' | 'replace'
  >('below');

  const handleInsert = () => {
    if (selectedId !== null) {
      const newEntry = { id: Date.now(), name: newEntryName };
      const result = findAndInsert(
        data,
        'id',
        selectedId,
        newEntry,
        insertPosition,
        'children'
      );
      if (result) {
        setData(result.updatedArray);
      } else {
        alert('Item not found in nested structure');
      }
    }
  };

  const generateOptions = (
    data: AnyObject[],
    prefix = ''
  ): { id: number; label: string }[] => {
    const options: { id: number; label: string }[] = [];
    function recurse(items: AnyObject[], levelPrefix: string) {
      items.forEach((item) => {
        options.push({
          id: item.id,
          label: `${levelPrefix}${item.name} (ID: ${item.id})`,
        });
        if (item.children) recurse(item.children, `${levelPrefix}- `);
      });
    }
    recurse(data, prefix);
    return options;
  };

  const options = generateOptions(data);

  return (
    <div>
      <h1>Interactive Playground for findAndInsert</h1>
      <label htmlFor="targetId">Select Object:</label>
      <select
        id="targetId"
        onChange={(e) => setSelectedId(Number(e.target.value))}
        value={selectedId !== null ? selectedId : ''}
      >
        <option value="" disabled>
          Select an object
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="newEntryName">New Entry Name:</label>
        <input
          type="text"
          id="newEntryName"
          value={newEntryName}
          onChange={(e) => setNewEntryName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="insertPosition">Insert Position:</label>
        <select
          id="insertPosition"
          value={insertPosition}
          onChange={(e) =>
            setInsertPosition(e.target.value as 'above' | 'below' | 'replace')
          }
        >
          <option value="above">Above</option>
          <option value="below">Below</option>
          <option value="replace">Replace</option>
        </select>
      </div>

      <button onClick={handleInsert}>Insert Entry</button>

      <h2>Current Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
