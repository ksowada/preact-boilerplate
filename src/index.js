// import 'promise-polyfill';
// import 'isomorphic-fetch';import { h, render } from 'preact';
import $ from 'jquery';
import { h, render } from 'preact';
//import App from './components/App';
import Global from './global';
import './style';

//import './style/styles';
//require('./favicon.ico'); // Tell webpack to load favicon.ico
//import './components/App.css';
//import './components/SiteStructure/styles.css';

// bind global variables in window.Global.~
new Global();
let focus = Window.FromPage.focus;
Window.Global.status.focus = focus;

let root;
function init() {
	let App = require('./components/App').default;
	root = render(<App />,document.getElementById('app'),root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	let init;
	module.hot.accept('./components/App', () => requestAnimationFrame(init));
}

// sequence load json
//let self = this;
$.getJSON('hierarchy.json', (data) => {
	Window.Global.hierarchy = data;
	init();
});
