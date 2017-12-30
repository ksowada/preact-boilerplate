class ComponentService {
	constructor() {
		if (!ComponentService.instance) {
			this.componentMap = {};
			this.DEFAULT = 'default';
			ComponentService.instance = this;
		}
		return ComponentService.instance;
	}

	addComponent(name, component) {
		this.componentMap[name] = component;
	}
	addDefaultComponent(component) {
		this.addComponent(this.DEFAULT, component);
	}

	getComponent(name) {
		let type = this.componentMap[name];
		return type || this.componentMap[this.DEFAULT];
	}
}
const instance = new ComponentService();
Object.freeze(instance);
export default instance;
