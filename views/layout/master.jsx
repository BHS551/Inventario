var React = require('react');
var createReactClass = require('create-react-class');

var MasterLayout = createReactClass({
	render: function() {
		return (
			<html lang="en">
				<head>
					<meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
					<tittle>{this.props.name}</tittle>
					<link rel="stylesheet" herf="/public/css/main.css" />
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
});

module.exports = MasterLayout;