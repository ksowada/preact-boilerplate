import ComponentService from "./ComponentService";

ComponentService.addComponent('test1', 'component1');
ComponentService.addDefaultComponent('defaultComponent');

describe('ComponentService test', () => {
	it('#getComponent should return named component', () => {
		expect(ComponentService.getComponent('test1')).toBe('component1');
	});
	it('#getComponent should return default component', () => {
		expect(ComponentService.getComponent('xxx')).toBe('defaultComponent');
	});
});
