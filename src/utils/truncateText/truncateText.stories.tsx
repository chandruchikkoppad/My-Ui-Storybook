import { truncateText } from './truncateText';

export default {
  title: 'Utils/truncateText',
  component: truncateText,
};

export const Default = () => {
  const testCases = [
    {
      text: 'This is a placeholder text that might be long',
      maxLength: 250,
      expected: 'This is a placeholder text...',
    },
    {
      text: 'This is a placeholder text that might be lo',
      maxLength: 250,
      expected: 'Short text',
    },
    { text: 'Another example', maxLength: 100, expected: 'Another ex...' },
    { text: 'Testing with a long text', maxLength: 50, expected: 'Testi...' },
    { text: '', maxLength: 100, expected: '' },
    {
      text: 'Exactly twenty-five chars!',
      maxLength: 250,
      expected: 'Exactly twenty-five chars!',
    },
  ];

  return (
    <div>
      {testCases.map((test, index) => (
        <div key={index}>
          truncateText({test.maxLength}){/* Expected: {test.expected} */}
          <div>{truncateText(test.text, test.maxLength)}</div>
        </div>
      ))}
    </div>
  );
};
