import { saveFileFromBlob } from './saveFileFromBlob';
import { Toastify, toast } from '../../components/Toastify/Toastify';

export default {
  title: 'Utils/saveFileFromBlob',
  component: saveFileFromBlob,
};

export const Default = () => {
  const testCases = [
    {
      blob: new Blob(['Hello, world!'], { type: 'text/plain' }),
      filename: 'hello.txt',
    },
    {
      blob: new Blob(['{ "key": "value" }'], { type: 'application/json' }),
      filename: 'data.json',
    },
    {
      blob: null,
      filename: 'invalid.txt',
      expectedError: 'Invalid Blob object',
    },
  ];

  const handleDownload = (blob: Blob | null, filename: string) => {
    try {
      if (blob instanceof Blob) {
        saveFileFromBlob(blob, filename);
        toast.success(`File "${filename}" downloaded successfully!`);
      } else {
        throw new Error('Invalid Blob object');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div>
        <h1>saveFileFromBlob - Test Cases</h1>
        {testCases.map(({ blob, filename, expectedError }, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <button
              onClick={() => handleDownload(blob as Blob, filename)}
              style={{ marginRight: '1rem' }}
            >
              Download {filename}
            </button>
            {expectedError && (
              <span style={{ color: 'red' }}>
                Expected Error: {expectedError}
              </span>
            )}
          </div>
        ))}
      </div>
      <Toastify />
    </>
  );
};
