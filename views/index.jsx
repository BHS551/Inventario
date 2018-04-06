var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layout/master');
var tabulator = require('./components/adaptabletable/index');
var data = require('./data/data.json');

var IndexComponent = createReactClass({
	render: function() {
		return (
			<DefaultLayout name={this.props.name}>
				<div className="page-container">
					<h1>Inventario</h1>
					
					<adaptabletable data={data}/>

				</div>
			</DefaultLayout>
		)
	}
});

module.exports = IndexComponent;