import React from 'react';
import formatString from './FormatString';

export default {
  title: 'Utils/FormatString',
  component: formatString,
};

export const Default = () => {
  const examples = [
    {
      input: 'hiBye',
      output: formatString('hiBye', ['hi']),
      removeSections: 'hi',
    },
    {
      input: 'hiHelloBye',
      output: formatString('hiHelloBye', ['hello']),
      removeSections: 'Hello',
    },
    {
      input: 'webserviceCount',
      output: formatString('webserviceCount', ['count']),
      removeSections: 'count',
    },
    { input: 'PARTIAL_PUBLIC', output: formatString('PARTIAL_PUBLIC') },
    { input: 'assignedMemory', output: formatString('assignedMemory') },
    {
      input: 'webAndMobileCount',
      output: formatString('webAndMobileCount', ['count']),
      removeSections: 'count',
    },
  ];

  return (
    <div>
      <h3>FormatString Function Examples</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Input</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              Remove Section
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              Output
            </th>
          </tr>
        </thead>
        <tbody>
          {examples.map((example, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {example.input}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {example?.removeSections}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {example.output}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
