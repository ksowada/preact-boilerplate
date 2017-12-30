import { h } from 'preact';
import DynamicComponent from "./DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";
import ComponentService from "./services/ComponentService";
import _ from 'lodash';

class GroupComponent extends ContainerBaseComponent {
	constructor() {
		super();
		this.dbgRenderCnt = 1;
	}
	handleClick(action) {
		console.log("click "+action);
		let controls = this.props.context.cell.handleAction(action);
		this.props.context.controls = controls;
		this.forceUpdate();
	}
	render() {
		this.props.context.component = this;
		this.props.context.dbgRenderCnt = this.dbgRenderCnt++;
		let self = this;
		let items;
		if (_.isArrayLikeObject(self.props.context.controls)) { // shall not be null or undefined
			items = self.props.context.controls.map(control => {
				let path = self.getPath(control.name);
				return (<DynamicComponent context={control} path={path} key={control.key} />);
			});
		}
		return (
			<div className={'card panel panel-info lvl-'+self.props.context.x.pointerLvl}>
				<span>
					<a onClick={() => this.handleClick('zoom-out')}><img src="./pics/arrow-alt-circle-down.svg" className="defaultConsole"/></a>
					<a onClick={() => this.handleClick('zoom-in')}><img src="./pics/arrow-alt-circle-up.svg" className="defaultConsole"/></a>
				</span>
				<span className="debugTitle">{this.props.context.dbgRenderCnt+" "+this.props.context.cell.view}</span>
				<div className="panel-heading">
					<h2 className="panel-title">{self.props.context.x.name}</h2>
				</div>
				<div className="panel-body">
					{items}
				</div>
			</div>
		);
	}
}
ComponentService.addComponent('group', GroupComponent);
export default GroupComponent;
