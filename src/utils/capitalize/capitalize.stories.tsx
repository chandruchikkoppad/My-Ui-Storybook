import React from 'react';
import { capitalize } from './capitalize';

export default {
  title: 'Utils/Capitalize', // Organize under the "Utils" category
  component: capitalize,
};

export const Default = () => {
  const examples = [
    { input: 'hello', output: capitalize('hello') },
    { input: 'world', output: capitalize('world') },
    { input: '', output: capitalize('') },
    { input: 'capitalize', output: capitalize('capitalize') },
  ];

  return (
    <div>
      <h3>Capitalize Function Examples</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Input</th>
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
                {example.output}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
