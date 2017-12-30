import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";

class RangeComponent extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: this.props.context.value
		};
		let range = this.props.context.range;
		this.items = [];
		for (let v = range.min; v <= range.max; v += range.step) {
			this.items.push(v);
		}
	}
	handleChange(event) {
		console.log(this.props.path + ' range set value=' + event.target.value);
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<div><strong>{this.props.context.label}</strong><br/>
				<select value={this.state.value} onChange={this.handleChange}>
					{this.items.map((item) => {
						return (<option value={item} key={item}>{item}</option>);
					})}
				</select>
			</div>
		);
	}
}
ComponentService.addComponent('range', RangeComponent);
export default RangeComponent;
