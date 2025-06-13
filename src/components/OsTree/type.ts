/**
 * Props for the OsTree component.
 */
export interface OsTreeProps {
  /**
   * Label for the root node of the tree.
   */
  rootLabel: string;

  /**
   * Array of labels for the children nodes of the root.
   */
  childrenLabels: string[];

  /**
   * Direction of the tree layout.
   * Can be "horizontal" or "vertical".
   * @default "horizontal"
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * Alignment of the tree nodes based on the direction.
   * For vertical layout: "left", "center", "right"
   * For horizontal layout: "top", "center", "bottom"
   * @default "center"
   */
  align?: 'left' | 'center' | 'right' | 'top' | 'bottom';
}
