//
// # Hierarchic structure explorer for treedata
// date: 171223  edit: 171229 version: 1.1 so
//
// cares for JSON data
// hierarchy build with children
// points to position via .pointer
// -  pointer = [] means not find sucessfully
// -  pointer = [0] means root
// problems with hierarchy with lodash
import _ from 'lodash';

class Hierarchic {
	constructor(args) {
		this.hierAll = args; // hierarchy in json
		this.hier = this.hierAll;
		this.reset = function () {
			this.hier = this.hierAll; // hierarchy in json
			this.pointer = []; // points to json structure via children ix
			this.pointerLvl = 0;
			this.length = 1; // count of nodes brothers
			this.pointer[this.pointerLvl] = 0;
		};
		this.reset();
	}

	// reset this.pointer and find
	find(tag, value) {
		this.reset();
		return this._find(this.hierAll, tag, value);
	}
	// dive to position where [tag]=value
	// copy at this position
	_find(hier, tag, value) {
		if (hier[tag] === value) {
			this.hier = hier; // move route to called route
			return this._copy();
		}
		this.pointerLvl++; // dive in
		if (typeof hier.children !== 'undefined') {
			for (let childIx = 0; childIx < hier.children.length; childIx++) {
				this.pointer[this.pointerLvl] = childIx;
				this.length = hier.children.length; // remember length, because no parent available do it thatway
				let found = this._find(hier.children[childIx], tag, value);
				if (typeof found !== 'undefined') {
					return found;
				}
			}
		}
		this.pointerLvl--;
		this.pointer = _.slice(this.pointer, 0, this.pointerLvl); // use array as lodash reduces array to int at _.first(1)
	}
	// return parent beginning with root
	parents() {
		let parents = [];
		let pointerStart = this.pointer;
		let pointer;
		for (let arrIx = 1; arrIx <= pointerStart.length; arrIx++) {

			// reduce array without last
			pointer = _.slice(pointerStart, 0, arrIx);

			console.info('parent', pointer);
			parents.push(this.get(pointer));
		}
		return parents;
	}
	// return brother beginning with root
	brothers() {
		let brothers = [];
		let _pointer = _.clone(this.pointer);
		let pointerLvl = this.pointerLvl;
		let length = this.length;
		let pointer = _.clone(this.pointer);

		console.info('brother-start', pointer);
		for (let pointIx = 0; pointIx < length; pointIx++) {

			// interpolate route array at last
			pointer[pointerLvl] = pointIx;

			// add selfinfo if equal with this.pointer
			let highlight = (_.isEqual(pointer, _pointer));

			console.info('brother', pointer);

			brothers.push(this.get(pointer));
			brothers[brothers.length - 1].highlight = highlight;
		}
		return brothers;
	}
	// return childs
	childs() {
		return this.children;
	}
	// get node by pointer, set this.hier
	get(pointer) {
		this.reset();
		let hier = _.clone(this.hierAll); //this.hierAll;
		for (let arrIx = 1; arrIx < pointer.length; arrIx++) {
			this.pointer[arrIx] = pointer[arrIx];
			this.pointerLvl = arrIx;
			if (typeof hier !== 'undefined') {
				if (typeof hier.children !== 'undefined') {
					this.length = hier.children.length;
					hier = hier.children[pointer[arrIx]];
				}
			}
		}
		this.hier = hier;
		return this._copy();
	}
	// set node by entry, faster then find by url
	set(entry) {
		this.reset();
		this.hier.id = entry.id;
		this.hier.name = entry.name;
		this.hier.shortdesc = entry.shortdesc;
		this.hier.url = entry.url;
		this.pointer = entry.pointer;
		this.pointerLvl = entry.pointerLvl;
		this.length = entry.length;
		this.highlight = entry.highlight;
		this.get(entry.pointer); // stets this.hier
		return entry;
	}
	// copy content of actual node
	_copy() {
		return {
			"id": this.hier.id,
			"name": this.hier.name,
			"shortdesc": this.hier.shortdesc,
			"url": this.hier.url,
			"pointer": this.pointer,
			"pointerLvl": this.pointerLvl,
			"length": this.length,
			"highlight": this.highlight
		};
	}
}
export default Hierarchic;
