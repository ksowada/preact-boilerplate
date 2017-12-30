/*
 * # Global variables used in App between React and Control-Logic
 */
class Global {
	// essential to implement get and set for static access
	get hierarchy() { return Global.hierarchy; }
	set hierarchy(da) { Global.hierarchy = da; }
	get controls() { return Global.controls; }
	set controls(da) { Global.controls = da; }
	get actions() { return Global.actions; }
	set actions(da) { Global.actions = da; }
	get status() { return Global.status; }
	set status(da) { Global.status = da; }
}

Global.actions = {}; // actions done by user or app
Global.controls = {}; // json object containing site hierarchy
Global.status = {};
Global.hierarchy = {}; // json object containing site hierarchy

Window.Global = Global;

/*
Object.defineProperty(Example, 'constant1', {
		hierarchy: {},
		controls : {},
		enumerable : true,
		configurable : false
}); */
export default Global;
