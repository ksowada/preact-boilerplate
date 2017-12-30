import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";

class OpenComponent extends Component{
	handleClick(action) {
		let controls = this.props.context.cell.handleAction(action);
		this.props.context.controls = controls;
		//this.render();
		this.forceUpdate();
	}
	render() {
		let self = this;
		self.props.context.component = self;
		return (
			<div>
				<span>
					<a onClick={() => this.handleClick('zoom-out')}><img src="./pics/arrow-alt-circle-up.svg" className="defaultConsole"/></a>
					<a onClick={() => this.handleClick('zoom-in')}><img src="./pics/arrow-alt-circle-down.svg" className="defaultConsole"/></a>
				</span>
				<span className="defaultTitle">open {this.props.context.x.name}</span>
			</div>
		);
	}
}
ComponentService.addComponent('open', OpenComponent);
export default OpenComponent;
