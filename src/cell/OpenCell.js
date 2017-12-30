//
// # OpenCell: navigate to a resource
// date: 171226  edit: 171226 version: 1.0 so
//
import * as calcs from './../common/calcs';
import Cell from './Cell';
import * as CellFactory from './CellFactory';
import ModeSelect from './../common/ModeSelect';

class OpenCell extends Cell {
	constructor (opts) {
		super(opts);
		this.opts = opts;
		this.opts = Object.assign(this.opts,{ui:'group',uimode:'default'}); // default ui default for DynamicComponent
		this.view = 'short';
		this.viewSel = new ModeSelect(this.view, ['hidden','short','full']);
	}
	handleCreator () {
		super.handleCreator(this.opts);
		this.view = this.viewSel.is();
		this.cell = [];
		if (this.view==='hidden') {
			return;
		}
		this.add(CellFactory.create(calcs.join(this.opts,{creator: 'route'  })));
		this.add(CellFactory.create(calcs.join(this.opts,{creator: 'content'})));
		this.add(CellFactory.create(calcs.join(this.opts,{creator: 'childs' })));
	}
}
export default OpenCell;