// Helper function to get the anchor element
export const getAnchorElement = (anchorRef: React.RefObject<HTMLElement> | string) => {
  if (typeof anchorRef === 'string') {
    return document.getElementById(anchorRef);
  }
  return anchorRef?.current || null;
};
