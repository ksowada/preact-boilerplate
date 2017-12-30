//
// # ModeSelect for static vars
// date: 171227  edit: 171227 version: 1.0 so
//
class ModeSelect {
	constructor(sel, modes, changed) {
		this.ix = modes.indexOf(sel);
		this.modes = modes;
		this.changed=changed;
	}
	step(up) {
		let ix = this.ix ;
		if (up) {
			if (ix < this.modes.length-1) ix++;
		}	else if (ix > 0) ix--;

		if (this.ix !== ix) {
			//this.changed.call();
		}
		this.ix = ix;
		return this.modes[this.ix];

	}
	is() {
		return this.modes[this.ix];
	}
}
export default ModeSelect;