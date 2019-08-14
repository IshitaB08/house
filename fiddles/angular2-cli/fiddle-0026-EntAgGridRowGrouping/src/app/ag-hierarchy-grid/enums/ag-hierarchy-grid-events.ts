
export enum AgHierarchyGridEvents {
  /**
   * Grid data was filtered.
   */
  AfterFilter = 1,

  /**
   * A cell was clicked.
   */
  CellClicked = 2,

  /**
   * A column was moved.
   */
  ColumnMoved = 3,

  /**
   * A column's visibility has changed.
   */
  ColumnVisible = 4,

  /**
   * A column's pin state has changed.
   */
  ColumnPinned = 5,

  /**
   * The gird has rendered.
   */
  Ready = 6,

  /**
   * A row was double clicked.
   */
  RowDoubleClicked = 7,

  /**
   * Shotgun - gets called when either a) new columns are set or b) columnApi.setState() is used, so everything has changed.
   */
  ColumnEverythingChanged = 8,

  /**
   * A row was selected.
   */
  RowSelected = 9,

  /**
   * Rows selection was changed.
   */
  SelectionChanged = 10,

  /**
   * The grid was sorted.
   */
  SortChanged = 11,

  /**
   * The hidden columns have changed.
   */
  HiddenColumns = 12,
  
  /**
   * A row having a "..." data.action value was clicked.
   */
  nodeRequest = 13,

  /**
   * A row having children was expanded.
   */
  expandBubble= 14
}
