var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
			<header>
				<h1>This is a header.</h1>
				<hr/>
			</header>
		);
	}
});

module.exports = Header;