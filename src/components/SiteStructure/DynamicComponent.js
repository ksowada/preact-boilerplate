
import { h, Component } from 'preact';
/*eslint-disable */
import DefaultComponent from "./DefaultComponent"
import TitleComponent from "./TitleComponent"
import TableComponent from "./TableComponent"
import OutputComponent from "./OutputComponent"
import SwitchComponent from "./SwitchComponent"
import RangeComponent from "./RangeComponent"
import GroupComponent from "./GroupComponent"
/*eslint-enable */
import ComponentService from "./services/ComponentService";
import _ from 'lodash';

class DynamicComponent extends Component{
	render() {
		if (!_.isObject(this.props.context)) {
			return null;
		}
		this.component = ComponentService.getComponent(this.props.context.ui);
		this.props.context.component = this.component;
		this.props.context.cell.component = this.component; // enable cell to access Component
		return  (<this.component context={this.props.context} path={this.props.path}/>);
	}
}
export default DynamicComponent;
