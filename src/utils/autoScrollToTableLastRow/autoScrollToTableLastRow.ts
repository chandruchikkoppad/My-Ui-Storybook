export const autoScrollToTableLastRow = (
  tableRef: React.RefObject<HTMLTableSectionElement>,
  extraCustomHeight?: number
) => {
  let observer: MutationObserver | undefined;
  if (tableRef.current) {
    const tableCurrent = tableRef.current;
    observer = new MutationObserver(() => {
      const requiredScrollHeight = tableCurrent.scrollHeight;
      tableCurrent.scrollTop = requiredScrollHeight + (extraCustomHeight || 0);
    });
    observer.observe(tableCurrent, { childList: true, subtree: true });
    const requiredScrollHeight = tableCurrent.scrollHeight;
    tableCurrent.scrollTop = requiredScrollHeight;
  }
  return () => {
    if (observer) {
      observer.disconnect();
    }
  };
};
