var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layout/master');
import data from './data/data.json';
import AdaptableTable from './components/adaptableTable';

var IndexComponent = createReactClass({
	render: function() {
		return (
			<DefaultLayout name={this.props.name}>
				<div className="page-container">

					<h1>Inventario</h1>
					
					<AdaptableTable data={data}/>

				</div>
			</DefaultLayout>
		)
	}
});

module.exports = IndexComponent;