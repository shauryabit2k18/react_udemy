'use strict';

console.log('app.js is running');

// JSX -Javascript XML

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Shaurya '
	),
	React.createElement(
		'p',
		null,
		' this isn some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
