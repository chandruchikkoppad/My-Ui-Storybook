import React from 'react';
import { toCamelCase } from './toCamelCase';

export default {
  title: 'Utils/toCamelCase',
  component: toCamelCase,
};

export const Default = () => {
  const examples = [
    {
      input: 'Created By',
      output: toCamelCase('Created By'),
    },
    {
      input: 'Created',
      output: toCamelCase('Created'),
    },
    {
      input: 'createdBy',
      output: toCamelCase('createdBy'),
    },
    { input: 'hello world', output: toCamelCase('hello world') },
    { input: 'alreadyCamel', output: toCamelCase('alreadyCamel') },
    {
      input: 'dash-separated-text',
      output: toCamelCase('dash-separated-text'),
    },
    { input: 'one_word', output: toCamelCase('one_word') },
    { input: 'one_word-text', output: toCamelCase('one_word-text') },
  ];

  return (
    <div>
      <h3>toCamelCase Function Examples</h3>
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
