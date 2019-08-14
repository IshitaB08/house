import { AfterViewInit, Component } from '@angular/core';
import { AgHierarchyGridImpl, AgHierarchyGridOptions, AgHierarchyGridEvent} from './ag-hierarchy-grid/interfaces/index';
import { AgHierarchyGridEvents } from './ag-hierarchy-grid/enums/index';
import { HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid/main'; 
import { AgHierarchyCellRenderer } from './ag-hierarchy-grid';


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, AgHierarchyGridImpl {

  // #region properties 
  
  options: AgHierarchyGridOptions;

  defaultColDef: any = {
    cellStyle: (params: any) => {
      const val: number = +params.value;
      if (val < 0) {
        return {color: 'red'};
      }
      return null;
    },
    cellClass: ['text-right'],
    suppressSorting: false,
    dataType: 'number',
    decimalPlaces: 2
  }


  // #region columns

  columnDef: any[] = [
    {
      'headerName': 'A',
      'field': 'A',
      'decimalPlaces': 0,
    }, {
      'headerName': 'B',
      'field': 'B'
    }, {
      'headerName': 'C',
      'field': 'C'
    }, {
      'headerName': 'D',
      'field': 'D'
    }, {
      'headerName': 'E',
      'field': 'E'
    }, {
      'headerName': 'F',
      'field': 'F',
      'hide': true,
    }, {
      'headerName': 'G',
      'field': 'G',
      'hide': true
    }, {
      'headerName': 'H',
      'field': 'H'
    }, {
      'headerName': 'I',
      'field': 'I'
    }, {
      'headerName': 'J',
      'field': 'J',
      'hide': true
    }, {
      'headerName': 'K',
      'field': 'K'
    }, {
      'headerName': 'L',
      'field': 'L',
      'hide': true
    }, {
      'headerName': 'M',
      'field': 'M',
      'hide': true
    }, {
      'headerName': 'N',
      'field': 'N'
    }, {
      'headerName': 'O',
      'field': 'O',
      'hide': true
    }, {
      'headerName': 'P',
      'field': 'P',
      'hide': true
    }, {
      'headerName': 'Q',
      'field': 'Q',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'R',
      'field': 'R',
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'S',
      'field': 'S',
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'T',
      'field': 'T',
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'U',
      'field': 'U',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'V',
      'field': 'V',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'W',
      'field': 'W',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'X',
      'field': 'X',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'Y',
      'field': 'Y',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'Z',
      'field': 'Z',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'AA',
      'field': 'AA',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'BB',
      'field': 'BB',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'CC',
      'field': 'CC',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'DD',
      'field': 'DD',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'EE',
      'field': 'EE',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'FF',
      'field': 'FF',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'GG',
      'field': 'GG',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'HH',
      'field': 'HH',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'II',
      'field': 'II',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }, {
      'headerName': 'KK',
      'field': 'KK',
      'hide': true,
      'suppressSorting': false,
      'dataType': 'number',
      'decimalPlaces': 2
    }
  ];
  // #endregion
  
  rowData: any[];

  // #endregion

  // #region constructor 
  constructor(private _http: HttpClient) {
    this.options = {
      components: {
        'agHierarchyCellRenderer': AgHierarchyCellRenderer
      },
      autoGroupColumnDef: {
        headerName: 'Group',
        width: 300,
        cellClass: [],
        cellRenderer: 'agHierarchyCellRenderer',
        cellRendererParams: {
          suppressCount: true
        }
      },
      defaultColDef: this.defaultColDef,
      groupDefaultExpanded: 2,
      columnDefs: this.columnDef
    }
  }
  // #endregion
  // #region AfterViewInit implementation
  
  ngAfterViewInit(): void {
    this._http
      .get(
        'assets/data.json'
      )
      .subscribe((data: any) => {
        this.rowData = data;
        window.setTimeout(() => {
          this.options.rowData = this.rowData.slice(0);
        }, 300);
        console.clear();
      });
  }

  // #endregion
  // #region AgHierarchyGridImpl implementation
  
  AgHierarchyGridOnEvent(event: AgHierarchyGridEvent): void {
    console.debug(AgHierarchyGridEvents[event.type].toString());
    switch(event.type) {
        case AgHierarchyGridEvents.nodeRequest:
        this._onNodeRequest(event.data);
        break;
    } 
  }

  // #endregion
  // #region internal methods

  private _onNodeRequest(params: any) {
    if (params.node) {
      params.node.data.expanded = !params.node.expanded;
      params.node.setExpanded(!params.node.expanded);
      if (params.node.data.value.indexOf('...') !== -1) {
        params.event.target.setAttribute('style', 'display: none !important');
        this.options.rowData = [];
        this._removeRowData(params.rowIndex, params.node.childrenAfterGroup.map((child: any) => { return child.rowIndex; }));
        this.options.rowData = this.rowData.slice(0);
      }
    }
  }

  private _removeRowData(rowIndex: number, childIndexArr: number[]) {
    childIndexArr.forEach((index) => {
      this.rowData[index].path.splice(this.rowData[index].path.length - 2, 1);
    });
    this.rowData.splice(rowIndex, 1);  
  }
  
  private _onFetchError(error:any) {
    if (error) {
      console.error(error);
    }
  }

  private _onGroupCellRender(params: ICellRendererParams) {
    return params.data.value;
  }


  // #endregion

}

