import { throttle } from './throttle'; // Adjust the import path as necessary

export default {
  title: 'Utils/throttle',
  component: throttle,
};

export const Default = () => {
  const testCases = [
    {
      description: 'Basic function call',
      expectedOutput: 'Function called! (at most once every 300ms)',
      limit: 300,
      setup: () => {
        const throttledFunc = throttle(
          () => console.log('Function called!'),
          300
        );
        for (let i = 0; i < 5; i++) {
          throttledFunc(); // Call the throttled function multiple times
        }
      },
      code: `const throttledFunc = throttle(() => console.log('Function called!'), 300);\nfor (let i = 0; i < 5; i++) {\n  throttledFunc();\n}`,
    },
    {
      description: 'Throttling with rapid calls',
      expectedOutput: 'Function called! (at most once every 500ms)',
      limit: 500,
      setup: () => {
        const throttledFunc = throttle(
          () => console.log('Throttled call!'),
          500
        );
        for (let i = 0; i < 10; i++) {
          throttledFunc(); // Call the throttled function rapidly
        }
      },
      code: `const throttledFunc = throttle(() => console.log('Throttled call!'), 500);\nfor (let i = 0; i < 10; i++) {\n  throttledFunc();\n}`,
    },
    {
      description: 'Cancel throttled function',
      expectedOutput: 'Function should not be called if canceled',
      limit: 200,
      setup: () => {
        const throttledFunc = throttle(
          () => console.log('Should not be called!'),
          200
        );
        throttledFunc(); // Call the throttled function
        throttledFunc.cancel(); // Cancel the function
      },
      code: `const throttledFunc = throttle(() => console.log('Should not be called!'), 200);\nthrottledFunc();\nthrottledFunc.cancel();`,
    },
    {
      description: 'Scroll event handling',
      expectedOutput: 'Scroll event handled (at most once every 400ms)',
      limit: 400,
      setup: () => {
        const throttledScroll = throttle(
          () => console.log('Scroll event handled'),
          400
        );

        // Simulating rapid scroll events
        for (let i = 0; i < 10; i++) {
          throttledScroll(); // Simulate scroll event
        }
      },
      code: `const throttledScroll = throttle(() => console.log('Scroll event handled'), 400);\nfor (let i = 0; i < 10; i++) {\n  throttledScroll();\n}`,
    },
  ];

  return (
    <div>
      <h1>
        <u>throttle(function, limit)</u> - Demonstrating throttle functionality
      </h1>
      {testCases.map(
        ({ description, expectedOutput, limit, setup, code }, index) => (
          <div key={index}>
            <h3>{description}</h3>
            <button
              onClick={() => {
                setup(); // Run the setup for the test case
                setTimeout(() => {
                  console.log(expectedOutput);
                }, limit + 100); // Wait a bit longer than the limit to check output
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
