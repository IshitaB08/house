import {
  AgHierarchyGridEvents
} from '../enums/index';

export interface AgHierarchyGridEvent {
  type: AgHierarchyGridEvents;
  data: any;
  gridState?: any;
}
