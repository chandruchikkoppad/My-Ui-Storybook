import { TreeNodeProps } from "../../ComponentProps/TreeNodeProps";

export function getTopVisibleNodeKey(
  scrollContainerWrapper: HTMLDivElement,
  treeData: TreeNodeProps[],
): string | null {
  if (!scrollContainerWrapper) {
    console.warn('[getTopVisibleNodeKey] Provided wrapper element is null or undefined.');
    return null;
  }

  const container = scrollContainerWrapper.querySelector('.table-scrollable') as HTMLElement | null;
  if (!container) {
    console.warn('[getTopVisibleNodeKey] Could not locate scrollable container from wrapper.');
    return null;
  }

  const scrollTop = container.scrollTop;
  const rows = Array.from(container.querySelectorAll('tbody tr'));

  if (rows.length === 0) {
    console.warn('getTopVisibleNodeKey: No rows found.');
    return null;
  }

  const rowHeight = (rows[0] as HTMLElement).offsetHeight || 0;
  if (!rowHeight) {
    console.warn('[getTopVisibleNodeKey] Failed to measure row height.');
    return null;
  }

  const approxIndex = Math.floor(scrollTop / rowHeight);
  const topRow = treeData[approxIndex] ?? treeData[0];

  return topRow?.key || null;
}
