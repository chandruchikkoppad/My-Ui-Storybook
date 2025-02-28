import JSEncrypt from 'jsencrypt';

export const getEncryptedData = (data: string, publicKey: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const enData = encrypt.encrypt(data);
  return enData;
};
