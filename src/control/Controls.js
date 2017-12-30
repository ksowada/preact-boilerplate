//
// # controls route/page structure list
// date: 171223  edit: 171223 version: 1.0 so
//
import Radio from './../common/Radio';
import KeyService from './../common/KeyService';
import _ from 'lodash';

class Controls {
	constructor() {
		//this.channelUser = Radio.channel('user');
		this.keyDefault = new KeyService('default');

		// react on Radio
		// open route
		Radio.on('open',(route)=>{
			return this.routes.openRoute(route);
		});
		// bigger component
		Radio.on('zoomIn',(opts)=>{
			return Radio.trigger('zoom', _.extend(opts, {dir: true}));
		});
		// smaller component
		Radio.on('zoomOut',(opts)=>{
			return Radio.trigger('zoom', _.extend(opts, {dir: false}));
		});
		Radio.on('click', (action, context)=>{
			console.log(context.ui);
			if (action === 'up') {
				if (context.ui === 'title') context.ui = 'title';
			}
			if (action === 'down') {
				if (context.ui === 'naventry') context.ui = 'hidden';
			}
			context.component.render();
		});
	}
	// App globally called on Click => call channelUser
	onClick(evt) {
		//console.info(evt);
		// check first items from top of path for implicit action from id
		for (let i = 0; i < 3 && i < evt.path.length; i++) {
			let path = evt.path[i].id;
			let info = this.keyDefault.getFromPath(path);
			if (info.is) {
				Radio.trigger(
					info.verb, // event
					info       // infos
				);
				break;
			}
		}
	}
}
export default Controls;
