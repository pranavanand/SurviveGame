'use strict';
var React = require('react');
/*PRIVATE*/
var statsBar = [
	'happiness: '
];
var Stats = React.createClass({
	getInitialState: function () {
		
		return {
			showLevel: this.props.showLevel,
			startingPosition: this.props.startingPosition,
			happiness: this.props.happiness
		}
	},
	componentWillUpdate: function () {
		if (this.state.happiness !== this.props.happiness) {
			this.setState({happiness: this.props.happiness});	
		}
	},
	render: function () {
		return (
			<div className="stats-container">
				<h4>Stats:</h4>
				<ul>
					<li>Your clan started in: {this.props.startingPosition}</li>
					<li>{statsBar[0]}{this.state.happiness}</li>
				</ul>
			</div>

		);
	}
});

module.exports = Stats;