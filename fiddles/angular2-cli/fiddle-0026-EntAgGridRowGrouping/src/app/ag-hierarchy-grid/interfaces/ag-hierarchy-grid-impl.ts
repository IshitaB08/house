import { AgHierarchyGridOptions } from './ag-hierarchy-grid-options';
import { AgHierarchyGridEvent } from './ag-hierarchy-grid-event';

export interface AgHierarchyGridImpl {

  options: AgHierarchyGridOptions;

  AgHierarchyGridOnEvent(event: AgHierarchyGridEvent): void;

}
