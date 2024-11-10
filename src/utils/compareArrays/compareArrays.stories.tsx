import { compareArrays } from './compareArrays'; // Adjust the import path as necessary

export default {
  title: 'Utils/compareArrays',
  component: compareArrays,
};

export const Default = () => {
  const testCases = [
    { arr1: [1, 2, 3], arr2: [1, 2, 3], expected: true },
    { arr1: [1, 2, 3], arr2: [1, 2, 4], expected: false },
    { arr1: [1, { a: 1 }], arr2: [1, { a: 1 }], expected: true },
    { arr1: [1, { a: 1 }], arr2: [1, { a: 2 }], expected: false },
    { arr1: [1, 2, 3], arr2: [1, 2, 3, 4], expected: false },
    { arr1: [], arr2: [], expected: true },
    { arr1: [null, undefined], arr2: [null, undefined], expected: true },
    { arr1: [null], arr2: [undefined], expected: false },
    {
      arr1: [
        [1, 2],
        [3, 4],
      ],
      arr2: [
        [1, 2],
        [3, 4],
      ],
      expected: true,
    },
    {
      arr1: [
        [1, 2],
        [3, 4],
      ],
      arr2: [
        [1, 2],
        [4, 3],
      ],
      expected: false,
    },
  ];

  return (
    <div>
      <h1>
        <u>compareArrays(arr1, arr2)</u> - Expected / Actual
      </h1>
      {testCases.map(({ arr1, arr2, expected }, index) => {
        const actual = compareArrays(arr1, arr2);
        return (
          <div key={index}>
            <strong>
              compareArrays({JSON.stringify(arr1)}, {JSON.stringify(arr2)}) -
            </strong>
            <span style={{ color: actual === expected ? 'green' : 'red' }}>
              {` Expected: ${expected}, Actual: ${actual}`}
            </span>
          </div>
        );
      })}
    </div>
  );
};
