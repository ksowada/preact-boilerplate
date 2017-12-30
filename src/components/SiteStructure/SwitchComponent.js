import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";

class SwitchComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isChecked: this.props.context.value
		};
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}
	handleCheckboxChange(event) {
		console.log(this.props.path + ' checkbox changed! ', event.target.checked);
		this.setState({isChecked: event.target.checked});
	}
	render() {
		return  (<div><input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isChecked} />
			<strong> {this.props.context.label}</strong></div>);
	}
}
ComponentService.addComponent('switch', SwitchComponent);
export default SwitchComponent;
