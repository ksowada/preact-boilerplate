import { h, Component } from 'preact';
import DynamicComponent from "./DynamicComponent";
import PropTypes from 'prop-types';
import KeyService from './../../common/KeyService';
import Controls from './../../control/Controls';
import Actions from './../../control/Actions';
import _ from 'lodash';

let keyDefault = new KeyService('default');

class Structure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			controls: null
		};
		this.controller = new Controls();
		this.actions = new Actions(Window.Global.actions);
	}
	componentDidMount() {

		// call action open, another controller will reply
		let controls = Window.Global.controls; // link to root
		let opts = {action:'cell',creator:'open',route:Window.Global.status.focus};
		this.cell = this.actions.exe(opts);

		this.setupControl(controls);
	}
	// generate controls
	setupControl(controls) {
		if (_.isObject(this.cell)) {
			controls = [this.cell.writeControl()];
			this.setState({controls});
		}
	}
	// renew App
	render() {
		let self = this;
		if (self.state.controls === null) {
			return null;
		}
		return (
			<div>
				<div className="center">
					<h1>site-structure react</h1>
				</div>
				<div>
					{self.state.controls.map((control) => {
						return <DynamicComponent context={control} path={control.name} key={keyDefault.key}/>;
					})}
				</div>
			</div>
		);
	}
}
Structure.contextTypes = {
	content: PropTypes.object
};
export default Structure;
