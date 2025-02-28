// getEncryptData.stories.tsx
import { useState } from 'react';
import { getEncryptedData } from './getEncryptedData';

export default {
  title: 'Utils/getEncryptedData',
  component: getEncryptedData,
};

export const InteractivePlayground = () => {
  const [data, setData] = useState<string>('Sensitive information');
  const [publicKey, setPublicKey] = useState<string>(`Add your public key`);
  const [encryptedData, setEncryptedData] = useState<string | null>(null);

  const handleEncrypt = () => {
    const result = getEncryptedData(data, publicKey);
    setEncryptedData(result.toString());
  };

  return (
    <div>
      <h1>Interactive Playground for getEncryptData</h1>

      <div>
        <label htmlFor="data">Data to Encrypt:</label>
        <input
          type="text"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="publicKey">Public Key:</label>
        <textarea
          id="publicKey"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          rows={5}
          cols={50}
        />
      </div>

      <button onClick={handleEncrypt}>Encrypt Data</button>

      <h2>Encrypted Data:</h2>
      {encryptedData ? (
        <pre>{encryptedData}</pre>
      ) : (
        <p>No encrypted data yet. Click "Encrypt Data" to generate it.</p>
      )}
    </div>
  );
};
