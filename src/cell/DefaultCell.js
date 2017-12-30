//
// # DefaultCell: show resource
// date: 171226  edit: 171226 version: 1.0 so
//
import Cell from './Cell';
import ModeSelect from './../common/ModeSelect';

class DefaultCell extends Cell {
	constructor (opts) {
		super(opts);
		this.opts = opts;
		this.opts = Object.assign(this.opts,{ui:'content',uimode:'default'}); // default ui default for DynamicComponent
		this.view = 'line';
		this.viewSel = new ModeSelect(this.view, ['col','line','full']);
	}
	handleCreator () {
		super.handleCreator(this.opts);
		this.view = this.viewSel.is();
	}
}
export default DefaultCell;