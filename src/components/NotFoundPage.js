import { h } from 'preact';
import { Link } from 'preact-router';

const NotFoundPage = () => {
	return (
		<div>
			<h4>
				404 Page Not Found
			</h4>
			<Link href="/"> Go back to homepage </Link>
		</div>
	);
};

export default NotFoundPage;
