import { truncateText } from './truncateText';

export default {
  title: 'Utils/truncateText',
  component: truncateText,
};

export const Default = () => {
  const testCases = [
    {
      text: 'This is a placeholder text that might be too long',
      maxLength: 25,
      expected: 'This is a placeholder text...',
    },
    { text: 'Short text', maxLength: 25, expected: 'Short text' },
    { text: 'Another example', maxLength: 10, expected: 'Another ex...' },
    { text: 'Testing with a long text', maxLength: 5, expected: 'Testi...' },
    { text: '', maxLength: 10, expected: '' },
    {
      text: 'Exactly twenty-five chars!',
      maxLength: 25,
      expected: 'Exactly twenty-five chars!',
    }, 
  ];

  return (
    <div>
      {testCases.map((test, index) => (
        <div key={index}>
          truncateText({JSON.stringify(test.text)}, {test.maxLength}) -
          Expected: {test.expected}, Result:{' '}
          {truncateText(test.text, test.maxLength)}
        </div>
      ))}
    </div>
  );
};
