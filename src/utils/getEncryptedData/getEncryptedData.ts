import JSEncrypt from 'jsencrypt';

const getEncryptedData = (data: string, publicKey: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const enData = encrypt.encrypt(data);
  return enData;
};

export default getEncryptedData;
