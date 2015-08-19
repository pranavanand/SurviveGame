var React = require('react');
/*PRIVATE*/
var Events = React.createClass({
	getInitialState: function () {
		return {
			showLevel: this.props.showLevel
		}
	},
	render: function () {
		return <div className="events-container"><h2>Events:</h2></div>
	}
});

module.exports = Events;