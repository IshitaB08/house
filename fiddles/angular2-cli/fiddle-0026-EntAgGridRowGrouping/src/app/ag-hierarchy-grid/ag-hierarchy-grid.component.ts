import {
  Input,
  Output,
  EventEmitter,
  Component,
  OnChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  ViewEncapsulation,
  DoCheck
} from '@angular/core';

import {
  AgHierarchyGridOptions,
  AgHierarchyGridEvent
} from './interfaces/index';

import {
  AgHierarchyGridEvents
} from './enums/index';

@Component({
  selector: 'app-ag-hierarchy-grid',
  templateUrl: './ag-hierarchy-grid.component.html',
  styleUrls: ['./ag-hierarchy-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgHierarchyGridComponent implements OnChanges, DoCheck {

 @Output() events: EventEmitter<AgHierarchyGridEvent>;
  @Input() options: AgHierarchyGridOptions;
  
  // #region Internal Properties
  private _icons: any;
  private _differ: KeyValueDiffer<any, any>;
  private _gridApi: any;
  private _columnApi: any;
  private _columnDefs: any;
  private _sideBar: any;
  private _rowSelection: any;
  private _autoGroupColumnDef: any;
  private _defaultColDef: any;
  private _rowData: any;
  private _style: { width: string; height: string };
  private _getDataPath: Function;
  private _components: any;
  private _groupDefaultExpanded: number;

  //#endregion

  // #region Constructor

  constructor(private _differs: KeyValueDiffers) {
    this._icons = {
      groupExpanded: '<i class="mdi mdi-chevron-up"></i>',
      groupContracted: '<i class="mdi mdi-chevron-down"></i>',
      columnHidden: '<i class="mdi mdi-checkbox-blank-outline"></i>',
      columnVisible: '<i class="mdi mdi-checkbox-marked"></i>',
      group: '<i class="mdi mdi-format-list-numbers"></i>',
      group12: '<i class="mdi mdi-format-list-numbers"></i>',
      pin: '<i class="mdi mdi-pin"></i>',
      aggregation: '<i class="mdi mdi-sigma"></i>',
      sortAscending: '<i class="mdi mdi-chevron-up"></i>',
      sortDescending: '<i class="mdi mdi-chevron-down"></i>',
      copy: '<i class="mdi mdi-content-copy"></i>',
      paste: '<i class="mdi mdi-content-paste"></i>',
      move: '<i class="mdi mdi-cursor-move"></i>',
      hidden: '<i class="mdi mdi-delete"></i>',
      left: '<i class="mdi mdi-arrow-left-bold"></i>',
      right: '<i class="mdi mdi-arrow-right-bold"></i>'
    };
    this.events = new EventEmitter();
    this._rowSelection = 'multiple';
    this._defaultColDef = {
      sortable: true,
      resizable: true,
      suppressMenu: true,
      filter: 'agTextColumnFilter'
    };
    this._components = {};
    this._autoGroupColumnDef = {
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true,
        suppressCount: true
       }
    };
    this._sideBar = {
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressSideButtons: true,
            suppressColumnFilter: true,
            suppressColumnSelectAll: true,
            suppressColumnExpandAll: true
          }
        }
      ],
      defaultToolPanel: "columns"
    };
    this._getDataPath = (params: any) => this.onGetDataPath(params);
    this._groupDefaultExpanded= -1;
    
  }

  // #endregion

  // #region OnChanges Implementation

  ngOnChanges(changes: any): void {
    if ('options' in changes) {
      const value = changes['options'].currentValue;
      if (!this._differ && value) {
        this._differ = this._differs.find(value).create();
      }
    }
  }

  // #endregion

  // #region DoCheck Implementation

  ngDoCheck(): void {
    if (this._differ) {
      const changes: any = this._differ.diff(this.options);
      if (changes) {
        changes.forEachChangedItem((item: any) => {
          this._applyChange(item);
        });
        changes.forEachAddedItem((item: any) => {
          this._applyChange(item);
        });
      }
    }
  }

  // #endregion

  // #region Event Handlers

  onCellClicked(cell: any) {
    if (cell) {
      this.events.emit({
        type: AgHierarchyGridEvents.CellClicked,
        data: cell
      });
    }
  }

  onColumnEverythingChanged(event:any) {
    if (this._gridApi) {
      this._gridApi.refreshCells();
      this._autosizeAll();
    }
  }

  onColumnMoved(data:any) {
    if (data && data.column && this._columnApi) {
      data.column.toIndex = data.toIndex;
      this.events.emit({
        type: AgHierarchyGridEvents.ColumnMoved,
        data: data.column,
        gridState: this._columnApi.getColumnState()
      });
    }
  }

  onColumnVisible(data: any) {
    this._autosizeAll();
    if (data && data.column && this._columnApi) {
      this.events.emit({
        type: AgHierarchyGridEvents.ColumnVisible,
        data: data.column,
          gridState: this._columnApi.getColumnState()
      });
    }
  }

  onColumnPinned(data: any) {
    if(data && data.column && this._columnApi) {
      this.events.emit({
        type: AgHierarchyGridEvents.ColumnPinned,
        data: data.column,
        gridState: this._columnApi.getColumnState()
      });
    }
  }

  onFilterChanged() {
    if (this._gridApi) {
      this.events.emit({
        type: AgHierarchyGridEvents.AfterFilter,
        data: this._gridApi.filterManager.getFilterModel()
      });
  
    }
  }

  onGridReady(params: any) {
   this._gridApi = params.api;
    this._columnApi = params.columnApi;
    this._autosizeAll();
    window.addEventListener('resize', (event:any) => this.onResize(event)); 
    this.events.emit({
      type: AgHierarchyGridEvents.Ready,
      data: params
    });
  }
  
  onGetDataPath(data: any) {
    return data.path;
  }

  onQuickFilterChanged(event: any) {
    this._gridApi.setQuickFilter(event.target.value);
  }

  onResize(event: any): void {
    window.setTimeout(() => {
      this._autosizeAll()
    }, 200);
  }
  onRowGroupOpened(row: any) {
    this._autosizeAll();
  }
  onRowSelected(row: any) {
    this.events.emit({
      type: AgHierarchyGridEvents.RowSelected,
      data: row
    });
  }

  onRowClicked(params: any) {
    const _isExpanded: boolean = params.node.expanded;
    const _actionType: string = params.data && params.data.action ? params.data.action : null;
    if (_actionType && _actionType === '...') {
      this.events.emit({
        type: AgHierarchyGridEvents.nodeRequest,
        data: params
      });
      return false;
    }
    params.node.setExpanded(!_isExpanded);
    if (!_isExpanded) {
      this.events.emit({
        type: AgHierarchyGridEvents.expandBubble,
        data: params
      });
    }
    if (params) {
      if (!params.data) {
        const className:any = params.event.target.className;
        if (className === 'ag-group-cell-entire-row' || className === 'ag-group-value' || className === 'ag-group-child-count') {
          params.event.target.dispatchEvent(
            new MouseEvent(
              'dblclick', {
                'view': window,
                'bubbles': true,
                'cancelable': true
              }
            )
          );
        }
      }
    }
  }

  onRowDoubleClicked(row: any) {
    if (row) {
      this.events.emit({
        type: AgHierarchyGridEvents.RowDoubleClicked,
        data: row.data
      });
    }
  }

  onSelectionChanged(event: any) {
    this.events.emit({
      type: AgHierarchyGridEvents.RowSelected,
      data: event,
      gridState: this._columnApi.getColumnState()
    });
  }

  onSortChanged(event:any) {
    if (this._gridApi) {
      this.events.emit({
        type: AgHierarchyGridEvents.SortChanged,
        data: this._gridApi.getSortModel()
      });
    }
  }

  // #endregion

  // #region internal methods

  private _stretchGrid(width: number, height: number): void {
    this._style = {
      width: width + 'px',
      height: (height - 40) + 'px'
    };
  }

  private _autosizeAll() {
    this._stretchGrid(window.innerWidth, window.innerHeight);
    if (this._gridApi) {
      this._gridApi.sizeColumnsToFit();  
    }
  }
  
  private _applyChange(item: any): void {
    switch (item.key) {
      // #region autoGroupColumnDef
      case 'autoGroupColumnDef':
        this._autoGroupColumnDef = this.options.autoGroupColumnDef;
        break;
      // #endregion
      // #region columnDefs
      case 'columnDefs':
        this._columnDefs = this.options.columnDefs;
        if (this._gridApi) {
          this._gridApi.setColumnDefs(this._columnDefs);
          this._gridApi.sizeColumnsToFit();  
        }
        break;
      // #endregion
      // #region components
      case 'components':
        this._components = this.options.components;
        break;
      // #endregion
      // #region defaultColDef
      case 'defaultColDef':
        this._defaultColDef = this.options.defaultColDef;
        if (this._gridApi) {
          this._gridApi.setColumnDefs(this._columnDefs);
          this._gridApi.sizeColumnsToFit();  
        }
        break;
      // #endregion
      // #region getDataPath
      case 'getDataPath':
        this._getDataPath = this.options.getDataPath;
        break;
      // #endregion
      // #region groupDefaultExpanded
      case 'groupDefaultExpanded':
        this._groupDefaultExpanded = this.options.groupDefaultExpanded;
        break;
      // #endregion
      case 'hiddenColumns':
        
        break;
      // #region nodesRequest
      case 'nodesRequest':
        item.currentValue.then((data: any) => {
          this._gridApi.updateRowData({ add: data });
        });
        break;
      // #endregion
      // #region rowData
      case 'rowData':
        this._rowData = this.options.rowData;
        if (this._gridApi) {
          this._gridApi.setRowData([]);
          this._gridApi.setRowData(this._rowData);
        }
        break;
      // #endregion
      case 'columnsState':
          if (this._gridApi) {
            this._columnApi.setColumnState(this.options.columnsState);
          }
          break;
    }
  }

  // #endregion

} 
