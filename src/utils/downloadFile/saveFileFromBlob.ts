// saveFileFromBlob.ts

/**
 * Save a file from a Blob object.
 * This utility handles downloading files in browsers, including IE support.
 *
 * @param blob - The Blob object representing the file.
 * @param filename - The name of the file to save.
 */
interface NavigatorWithMsSaveBlob extends Navigator {
  msSaveOrOpenBlob?: (_blob: Blob, _filename: string) => void;
}

export const saveFileFromBlob = (blob: Blob, filename: string): void => {
  if (!blob || !(blob instanceof Blob)) {
    console.error('Invalid Blob object');
    throw new Error('Invalid Blob object');
  }

  const navigatorWithMsSaveBlob = window.navigator as NavigatorWithMsSaveBlob;

  if (navigatorWithMsSaveBlob.msSaveOrOpenBlob) {
    const saveBlob = navigatorWithMsSaveBlob.msSaveOrOpenBlob;
    if (saveBlob) {
      saveBlob(blob, filename);
    }
  } else {
    // For modern browsers
    const anchorElement = document.createElement('a');
    document.body.appendChild(anchorElement);
    const objectURL = window.URL.createObjectURL(blob);
    anchorElement.href = objectURL;
    anchorElement.download = filename;
    anchorElement.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(objectURL);
      document.body.removeChild(anchorElement);
    }, 0);
  }
};
