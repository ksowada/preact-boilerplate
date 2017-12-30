import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";
//import Console from "./Console";

class DefaultComponent extends Component {
	constructor() {
		super();
		this.dbgRenderCnt = 1;
	}
	handleClick(action) {
		let controls = this.props.context.cell.handleAction(action);
		this.props.context.controls = controls;
		this.forceUpdate();
	}
	render() {
		this.props.context.component = this;
		this.props.context.dbgRenderCnt = this.dbgRenderCnt++;
		return (
			<div className="default">
				<span>
					<a onClick={() => this.handleClick('zoom-out')}><img src="./pics/arrow-alt-circle-down.svg" className="defaultConsole"/></a>
					<a onClick={() => this.handleClick('zoom-in')}><img src="./pics/arrow-alt-circle-up.svg" className="defaultConsole"/></a>
				</span>
				<span className={this.props.context.highlight ? 'highlight' : 'default'}>{this.props.context.x.name}</span>
				<span className="debugTitle">{this.props.context.dbgRenderCnt+" "+this.props.context.cell.view}</span>
			</div>
		);
	}
}
ComponentService.addDefaultComponent(DefaultComponent);
export default DefaultComponent;