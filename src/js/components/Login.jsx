var React = require('react');

/*PRIVATE*/

var Login = React.createClass({
	getInitialState: function () {
		return {value: this.props.value};
	},
	handleChange: function (event) {
		this.setState({value: event.target.value});
	},
	logIn: function () {
		this.props.logIn();
		this.props.setCivName(this.state.value);
	},
	render: function () {
		return (
			<div className="login-screen-container">
				<h1>WELCOME TO SURVIVE</h1>
				<h3>Can you survive as an average dust mite? Or will you be another one who mites the dust?</h3>
				<div className="input-container">
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" onClick={this.logIn} /> 
				</div>
			</div>
		);
	}
});

module.exports = Login;