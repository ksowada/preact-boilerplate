//
// # BrothersCell: navigate to a resource
// date: 171226  edit: 171226 version: 1.0 so
//
import * as calcs from './../common/calcs';
import Cell from './Cell';
import * as CellFactory from './CellFactory';
import ModeSelect from './../common/ModeSelect';

class BrothersCell extends Cell {
	constructor (opts) {
		super(opts);
		this.opts = opts;
		this.opts = Object.assign(this.opts,{ui:'group',uimode:'default'}); // default ui default for DynamicComponent
		this.view = 'full';
		this.viewSel = new ModeSelect(this.view,['full','hidden']);
	}
	handleCreator () {
		super.handleCreator(this.opts);
		this.view = this.viewSel.is();
		if (this.view==='hidden') {
			return;
		}
		let brothers = this.hier.brothers();
		for (let ix = 0; ix < brothers.length; ix++) {
			this.add(CellFactory.create(calcs.join(this.opts, {creator: 'content', route: brothers[ix].url, highlight: brothers[ix].highlight})));
		}
	}
}
export default BrothersCell;