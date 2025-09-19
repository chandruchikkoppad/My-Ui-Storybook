export interface Action {
  text?: string;
  color?: string;
}
export interface ScriptGenerationLoaderProps {
  /**
   * array
   */
  actions?: Action[];
  /**
   * In percentage
   */
  width?: number;
  /**
   * In percentage
   */
  height?: number;
  path?: string;
  DynamicHeight?: number;
}
