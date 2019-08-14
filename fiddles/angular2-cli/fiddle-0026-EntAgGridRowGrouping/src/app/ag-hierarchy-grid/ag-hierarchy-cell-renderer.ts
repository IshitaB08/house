import { GroupCellRenderer } from 'ag-grid/main'; 
import { GroupCellRendererParams } from 'ag-grid/dist/lib/rendering/cellRenderers/groupCellRenderer';
import { RowNode } from "ag-grid/dist/lib/entities/rowNode";

export class AgHierarchyCellRenderer extends GroupCellRenderer {
  private _el: HTMLElement;
  
  constructor() {
    super();
    this._el = document.createElement('span');
  }
 
  public getGui(): HTMLElement {
    return this._el || super.getGui();
  }
  
  public init(params: GroupCellRendererParams): void {
    const rowNode: RowNode = params.node;
    const paddingCount: number = rowNode && rowNode.uiLevel ? rowNode.uiLevel : null;
    const indentCssClass: string = paddingCount ? 'ag-row-group-indent-' + paddingCount : null;

    if (params.data) {
        this._el.setAttribute('grid-action', 'none');
        if (params.data.hasOwnProperty('action') && params.data.action === '...') {
            this._el.setAttribute('grid-action', 'request');
            this._el.innerHTML = params.data.value;
        } else if (params.data.expanded) {
          this._el.innerHTML = '<i class=\"mdi mdi-chevron-down\"></i>&nbsp;' + params.data.value;
        } else {
          this._el.innerHTML= '<i class=\"mdi mdi-chevron-up\"></i>&nbsp;' + params.data.value;
        }
        if (indentCssClass) {
          this._el.className = indentCssClass;
        }
        this.addDestroyableEventListener(this._el, 'click', this.onHierarchyNodeClicked.bind(this));
      } else {
        super.init(params); 
      }
        
  }

  public onHierarchyNodeClicked(mouseEvent: MouseEvent): void {
    console.debug(this.constructor.name + '.onHierarchyNodeClicked');
    let _iconEl: Element = this._el.firstElementChild;
    const _mdiClassName: string = _iconEl ? _iconEl.className : null;
    if(_mdiClassName && _mdiClassName.indexOf('chevron') !== -1) {
      if(_mdiClassName.indexOf('down')!== -1) {
          _iconEl.className = 'mdi mdi-chevron-up';
      } else {
          _iconEl.className = 'mdi mdi-chevron-down';
      }
    }

  }


}
