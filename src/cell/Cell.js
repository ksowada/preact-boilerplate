//
// # Cell: hierarchy item with reference to sub-hierarchy
// date: 171223  edit: 171223 version: 1.0 so
//
// this.cell = new Cell({creator:'open',ui:'group',uimode:'route',route:Window.Global.status.focus});
// groups at all reflect the hierarchy of the controls architechture
// you can trace the cause of a control by going to parent
// writeControl will create the controls for the App
//
import Hierarchic from './../control/Hierarchic';
import KeyService from './../common/KeyService';
import _ from 'lodash';
import * as calcs from './../common/calcs';
import ModeSelect from './../common/ModeSelect';
import Actions from './../control/Actions';

class Cell {

	constructor (opts) {
		this.opts = opts;
		this.parent = null; // would get a parent by internal add
		this.cell = []; // new Backbone.Collection(opts); // cares for sub-cell
		this.keyDefault = new KeyService('default');
		this.view = 'default';
		this.viewSel = new ModeSelect(this.view, ['default']);
		this.actions = new Actions(Window.Global.actions);
	}
	// controls the creation of control elements, writes in this.controls
	handleCreator (opts) {
		this.view = this.viewSel.is();
		this.cell = [];
		console.info('handleCreator ', opts.creator, ' in', opts.route );
		this.hier = new Hierarchic(Window.Global.hierarchy);
		this.entry = this.hier.find('url', opts.route);

		// add hierarchical info
		this.controls = {
			x: this.entry,
			key: this.keyDefault.key,
			cell: this };

		// add opts
		this.controls = calcs.join(this.controls, opts);
	}
	// add child, add links to child in both ways
	add (cell) {
		cell.parent = this;
		this.cell.push (cell);
	}
	// produces controls that describes resource
	writeControl () {
		this.handleCreator(this.opts);
		let controls = this.controls;
		if (this.cell.length > 0) {
			let children = [];
			_.each (this.cell, (item) => {
				children.push(item.writeControl());
			});
			controls = calcs.join(controls, {controls: children});
		}
		return controls;
	}
	// invoked by Component handleAction
	handleAction (opts) {

		switch (opts) {
			case "zoom-in" :
				this.view = this.actions.exe({action:'viewSel',cell:this,dir:true});
				//this.component.prototype.setState({controls:this.writeControl()});
				break;
			case "zoom-out":
				this.view = this.actions.exe({action:'viewSel',cell:this,dir:false});
				//this.component.prototype.setState({controls:this.writeControl()});
				break;
			default: break;
		}
		console.info('changeControl', this.view, opts);
		return this.writeControl();
	}
}
export default Cell;
