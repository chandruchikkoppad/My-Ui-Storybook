type ScrollLogicalPosition = 'start' | 'center' | 'end' | 'nearest';

export const scrollToView = (
  id: string | null | undefined,
  block: ScrollLogicalPosition = 'nearest',
  retries: number = 5
): void => {
  if (!id) return;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block });
  } else if (retries > 0) {
    setTimeout(() => {
      scrollToView(id, block, retries - 1);
    }, 300);
  } else {
    console.warn(`Element with id - "${id}" not found after multiple retries.`);
  }
};
