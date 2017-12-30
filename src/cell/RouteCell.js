//
// # RouteCell: navigate to a resource
// date: 171226  edit: 171226 version: 1.0 so
//
import * as calcs from './../common/calcs';
import Cell from './Cell';
import * as CellFactory from './CellFactory';
import ModeSelect from './../common/ModeSelect';

class RouteCell extends Cell {
	constructor (opts) {
		super(opts);
		this.opts = opts;
		this.opts = Object.assign(this.opts,{ui:'group',uimode:'default'}); // default ui default for DynamicComponent
		this.view = 'full';
		this.viewSel = new ModeSelect(this.view, ['hidden','short','full']);
	}
	handleCreator () {
		super.handleCreator(this.opts);
		this.view = this.viewSel.is();
		if (this.view==='hidden') {
			return;
		}
		let parents = this.hier.parents();
		for (let ix = 0; ix < parents.length; ix++) {
			if (this.view==='full' ) this.add(CellFactory.create(calcs.join(this.opts, {creator: 'brothers',route:parents[ix].url})));
			if (this.view==='short') this.add(CellFactory.create(calcs.join(this.opts, {creator: 'content' ,view:'line',route:parents[ix].url})));
		}
	}
}
export default RouteCell;