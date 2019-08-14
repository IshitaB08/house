
import { NgModule } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from '@angular/common/http';

// ag-grid
import { AppComponent } from './app.component';
import { AgHierarchyGridModule } from './ag-hierarchy-grid/ag-hierarchy-grid.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgHierarchyGridModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
