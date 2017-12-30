import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";
//import Console from "./Console";
import Radio from './../../common/Radio';

class TitleComponent extends Component{
	handleClick(action) {
		console.log("click "+action);
		Radio.trigger('click', action, this.props.context);
	}
	render() {
		let self = this;
		self.props.context.component = self;
		return (
			<div className="title">
				<span>
					<a onClick={this.handleClick('up')}><img src="./pics/arrow-alt-circle-up.svg" className="defaultConsole"/></a>
					<a onClick={this.handleClick('down')}><img src="./pics/arrow-alt-circle-down.svg" className="defaultConsole"/></a>
				</span>
				<span className="defaultTitle">{this.props.context.x.name}</span>
			</div>
		);
	}
}
ComponentService.addComponent(TitleComponent);
export default TitleComponent;
