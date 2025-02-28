import React, { useState } from "react";

// Define the type for each row in the data
interface TableRow {
  id: number;
  name: string;
  age: number;
  details: string;
}

interface ExpandableTableProps {
  data: TableRow[];
}

const ExpandableTable: React.FC<ExpandableTableProps> = ({ data }) => {
  // State to track expanded rows (using row IDs)
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRowExpansion = (rowId: number) => {
    setExpandedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            {/* Main Row */}
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {row.name}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {row.age}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => toggleRowExpansion(row.id)}>
                  {expandedRows.includes(row.id) ? 'Collapse' : 'Expand'}
                </button>
              </td>
            </tr>
            {/* Expanded Row */}
            {expandedRows.includes(row.id) && (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    border: '1px solid black',
                    padding: '8px',
                    backgroundColor: '#f9f9f9',
                    height: '200px',
                  }}
                >
                  <strong>Details:</strong> {row.details}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ExpandableTable;
