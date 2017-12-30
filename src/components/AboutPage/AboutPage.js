import { h } from 'preact';
import { Link } from 'preact-router';
import './about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
	return (
		<div>
			<h2 className="alt-header">About</h2>
			<p>
				This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
				starter kit</a>.
			</p>
			<p>
				<Link href="/badlink">Click this bad link</Link> to see the 404 page.
			</p>
		</div>
	);
};
export default AboutPage;
