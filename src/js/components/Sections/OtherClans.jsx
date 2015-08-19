var React = require('react');

/*PRIVATE*/
var OtherClans = React.createClass({
	getInitialState: function () {
		return {
			showLevel: this.props.showLevelOtherClans
		}
	},
	render: function () {
		return <div className="otherclans-container"><h2>Other Clans:</h2></div>
	}
});

module.exports = OtherClans;