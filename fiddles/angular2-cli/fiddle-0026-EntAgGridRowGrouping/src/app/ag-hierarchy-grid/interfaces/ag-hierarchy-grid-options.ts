
import { ColDef, GridOptions } from 'ag-grid';

export interface AgHierarchyGridOptions extends GridOptions {
  
  /**
   * Optional parameter used to pass a node request promise to the grid.
   */
  nodesRequest?: Promise<any>;
  
  /**
   * Used to save the state of the column such as order and width.
   */
  columnsState?: any[];

  /**
   * List of hidden columns.
   */
  hiddenColumns?: string[];
  
}
