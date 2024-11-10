import { debounce } from './debounce'; // Adjust the import path as necessary

export default {
  title: 'Utils/debounce',
  component: debounce,
};

export const Default = () => {
  const testCases = [
    {
      description: 'Basic function call',
      expectedOutput: 'Function called! (after delay)',
      delay: 300,
      setup: () => {
        const debouncedFunc = debounce(
          () => console.log('Function called!'),
          300
        );
        debouncedFunc(); // Call the debounced function
      },
      code: `const debouncedFunc = debounce(() => console.log('Function called!'), 300);\ndebouncedFunc();`,
    },
    {
      description: 'Rapid calls within delay',
      expectedOutput: 'Debounced call! (only once after delay)',
      delay: 500,
      setup: () => {
        const debouncedFunc = debounce(
          () => console.log('Debounced call!'),
          500
        );
        for (let i = 0; i < 5; i++) {
          debouncedFunc(); // Call the debounced function multiple times
        }
      },
      code: `const debouncedFunc = debounce(() => console.log('Debounced call!'), 500);\nfor (let i = 0; i < 5; i++) {\n  debouncedFunc();\n}`,
    },
    {
      description: 'Cancel debounced function',
      expectedOutput: 'Function should not be called if canceled',
      delay: 200,
      setup: () => {
        const debouncedFunc = debounce(
          () => console.log('Should not be called!'),
          200
        );
        debouncedFunc(); // Call the debounced function
        debouncedFunc.cancel(); // Cancel the function
      },
      code: `const debouncedFunc = debounce(() => console.log('Should not be called!'), 200);\ndebouncedFunc();\ndebouncedFunc.cancel();`,
    },
  ];

  return (
    <div>
      <h1>
        <u>debounce(function, delay)</u> - Demonstrating debounce functionality
      </h1>
      {testCases.map(
        ({ description, expectedOutput, delay, setup, code }, index) => (
          <div key={index}>
            <h3>{description}</h3>
            <button
              onClick={() => {
                setup(); // Run the setup for the test case
                setTimeout(() => {
                  console.log(expectedOutput);
                }, delay + 100); // Wait a bit longer than the delay to check output
              }}
            >
              Run Test
            </button>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        )
      )}
    </div>
  );
};
