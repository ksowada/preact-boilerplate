//
// # Actions: hierarchy item with reference to sub-hierarchy
// date: 171223  edit: 171223 version: 1.0 so
//
// this.cell = new Actions({creator:'open',ui:'group',uimode:'route',route:Window.Global.status.focus});
// groups at all reflect the hierarchy of the controls architechture
// you can trace the cause of a control by going to parent
// writeControl will create the controls for the App
//
import Radio from './../common/Radio';
import * as CellFactory from './../cell/CellFactory';

class Actions {

	constructor(opts) {
		this.opts = opts;
		this.actions = [];
	}
	// add child, add links to child in both ways
	add(opts) {
		opts.parent = this;
		this.actions.push (opts);
	}
	// execute action, opts.action has key for action, return changed value
	exe(opts) {
		let ret;
		console.info('exe', opts);
		this.add(opts);
		switch (opts.action) {
			case 'cell': ret = CellFactory.create(opts); break;
			case 'viewSel':
				ret = opts.cell.viewSel.step(opts.dir);
				//ret = opts.cell.handleCreator();
				//opts.cell.component.prototype.render();
				break;
			default: break;
		}
		// send message with action
		Radio.trigger(opts.action, opts);
		return ret;
	}
}
export default Actions;
