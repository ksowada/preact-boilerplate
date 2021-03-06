//
// # ChildsCell: navigate to a resource
// date: 171226  edit: 171226 version: 1.0 so
//
import * as calcs from './../common/calcs';
import Cell from './Cell';
import * as CellFactory from './CellFactory';
import ModeSelect from './../common/ModeSelect';

class ChildsCell extends Cell {
	constructor (opts) {
		super(opts);
		this.opts = opts;
		this.opts = Object.assign(this.opts,{ui:'group',uimode:'default'}); // default ui default for DynamicComponent
		this.view = 'full';
		this.viewSel = new ModeSelect(this.view, ['full','hidden']);
	}
	handleCreator () {
		super.handleCreator(this.opts);
		this.view = this.viewSel.is();
		if (this.view==='hidden') {
			return;
		}
		let childs = this.hier.childs();
		if (typeof childs !== 'undefined') {
			for (let ix = 0; ix < childs.length; ix++) {
				this.add(CellFactory.create(calcs.join(this.opts, {creator: 'content'})));
			}
		}
	}
}
export default ChildsCell;