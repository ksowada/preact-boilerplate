import { h } from 'preact';
import DynamicComponent from "./DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";
import ComponentService from "./services/ComponentService";

class TableComponent extends ContainerBaseComponent {
	render() {
		let self = this;
		if (self.props.context === null) {
			return null;
		}
		return (<div className="panel panel-info">
			<div className="panel-heading">
				<h3 className="panel-title">{self.props.context.label}</h3>
			</div>
			<table className="table-condensed">
				<tbody>
					<tr>
						{self.props.context.controls.map((control) => {
							let path = self.getPath(control.name);
							return (
								<td key={path}>
									<DynamicComponent context={control} path={path} key={path}/>
								</td>);
						})}
					</tr>
				</tbody>
			</table>
		</div>);
	}
}
ComponentService.addComponent('table', TableComponent);
export default TableComponent;
