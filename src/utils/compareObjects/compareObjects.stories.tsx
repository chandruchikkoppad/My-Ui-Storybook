import { compareObjects } from './compareObjects'; // Adjust the import path as necessary

export default {
  title: 'Utils/compareObjects',
  component: compareObjects,
};

export const Default = () => {
  const testCases = [
    {
      obj1: { a: 1, b: [2, { c: 3 }] },
      obj2: { a: 1, b: [2, { c: 3 }] },
      expected: true,
    },
    {
      obj1: { a: 1, b: [2, { c: 3 }] },
      obj2: { a: 1, b: [3, 2] },
      expected: false,
    },
    {
      obj1: { a: 1, b: { c: 2 } },
      obj2: { a: 1, b: { c: 2 } },
      expected: true,
    },
    {
      obj1: { a: 1, b: { c: 2 } },
      obj2: { a: 1, b: { c: 3 } },
      expected: false,
    },
    { obj1: null, obj2: null, expected: true },
    { obj1: { a: null }, obj2: { a: null }, expected: true },
    { obj1: { a: 1 }, obj2: { a: null }, expected: false },
    { obj1: {}, obj2: {}, expected: true },
    { obj1: { a: 0 }, obj2: { a: 0 }, expected: true },
    { obj1: { a: 0 }, obj2: { a: 1 }, expected: false },
  ];

  return (
    <div>
      <h1>
        <u>compareObjects(obj1, obj2)</u> - true / false
      </h1>
      {testCases.map(({ obj1, obj2, expected }, index) => (
        <div key={index}>
          compareObjects({JSON.stringify(obj1)}, {JSON.stringify(obj2)}) -
          {compareObjects(obj1, obj2) === expected ? ' True' : ' False'}
        </div>
      ))}
    </div>
  );
};
