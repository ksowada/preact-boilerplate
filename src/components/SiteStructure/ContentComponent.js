import $ from 'jquery';
import { h, Component } from 'preact';
import ComponentService from "./services/ComponentService";
//import Console from "./Console";

class ContentComponent extends Component{
	createMarkup() {
		let self = this;
		$.get("webtool.de.php", ( data ) => {
			let html = $($.parseHTML(data, 0, true)).find('.title').parent().html(); // use only content of GET data
			self.setState({html:'html'});
			return html;
		});
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.state.html}/>
		);
	}
}
ComponentService.addComponent('content', ContentComponent);
export default ContentComponent;

