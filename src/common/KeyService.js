/*
 * #KeyService
 * continously factory unique sucessive keys
 */
class KeyService {
	static Lock = {};
	constructor(type) {
		this.type = type;
		this.prefix = type;

		// init static var only if first time
		if (!KeyService.Lock[this.type]) KeyService.Lock[this.type] = 0;
	}
	get key() {
		return this.prefix + KeyService.Lock[this.type]++;
	}
	// expect id from evt.path as node43_zoomIn
	isIDFromEvt(id) {
		return (id.indexOf(this.type) >= 0);
	}
	// get from HTML.ID to subj, verb TODO obj (_.split)
	getFromPath(id) {
		return {
			is: (id.indexOf(this.type) >= 0), // true if valid node
			id, // node43_zoomIn
			subj: id.substr(0, id.indexOf('_')), // node43
			verb: id.substr(id.indexOf('_') + 1) // zoomIn
		};
	}
}
//KeyService.Lock = {};

export default KeyService;
