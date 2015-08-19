var React = require('react');
var Login = require('./Login.jsx');
var Resources = require('./Sections/Resources.jsx');
/*PRIVATE*/

var App = React.createClass({
	getInitialState: function () {
		return {
			value: 'Enter the Name of Your Clan',
			mainPage: 0,
			civName: null
		}
	},
	setCivName: function (value) {
		if ((value == "Enter the Name of Your Clan")) {
			value = "XxxDustM1t3xxX";
		}
		this.setState({civName: value});
	},
	handleClick: function () {
		this.setState({mainPage: 1});
	},
	render: function () {
		var renderedVar = this.state.mainPage ? <Resources civName={this.state.civName} />:<Login value={this.state.value} setCivName={this.setCivName} logIn={this.handleClick} />
		return <div>{renderedVar}</div>
	}
});

module.exports = App;