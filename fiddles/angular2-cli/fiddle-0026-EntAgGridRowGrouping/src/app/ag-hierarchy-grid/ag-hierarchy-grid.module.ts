import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgHierarchyGridComponent } from './ag-hierarchy-grid.component';
import { AgGridModule } from 'ag-grid-angular/main';


import 'ag-grid-enterprise';

@NgModule({
  declarations: [AgHierarchyGridComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [AgHierarchyGridComponent]
})
export class AgHierarchyGridModule { }
