import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";

class OutputComponent extends Component{
	constructor(props) {
		super(props);
		this.value = this.props.context.value;
	}
	render() {
		return  <div><strong>{this.props.context.label}</strong><br/>{this.value}</div>;
	}
}
ComponentService.addComponent('output', OutputComponent);
export default OutputComponent;