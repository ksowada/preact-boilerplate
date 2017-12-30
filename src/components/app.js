/* eslint-disable import/no-named-as-default */
import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Structure from './SiteStructure/Structure';
import AboutPage from './AboutPage/AboutPage';
import NotFoundPage from './NotFoundPage';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	render() {
		return (
			<div>
				<div>
					<Link activeClassName="active" href="/">Structure</Link>
					{' | '}
					<Link activeClassName="active" href="/about">AboutPage</Link>
				</div>
				<Router onChange={this.handleRoute}>
					<Structure path="/" />
					<AboutPage path="/about" />
					<AboutPage path="/search/:query/:advanced?" />
					<NotFoundPage default />
				</Router>
			</div>
		);
	}
}
