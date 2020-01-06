console.log('app.js is running')

// JSX -Javascript XML

var template = (
	<div>
		<h1>Shaurya </h1>
		<p> this isn some info</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);


	
var appRoot = document.getElementById('app');
ReactDOM.render(template , appRoot);