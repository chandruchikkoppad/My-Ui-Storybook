export interface ModuleChipProps {
  /**
   * mandatory | label for the ModuleChip component
   */
  label: string;
  /**
   * mandatory | isActive for the ModuleChip component
   */
  isActive: boolean;
  /**
   * mandatory | onClick for the ModuleChip component
   */
  onClick: () => void;
  isFilterChip?: boolean;
}
