'use strict';
var React = require('react');
var Build = require('./Events.jsx');
var Events = require('./Build.jsx');
var OtherClans = require('./OtherClans.jsx');
var Stats = require('./Stats.jsx');
/*PRIVATE*/
var resources = [
	'food:',
	'population:', 
	'research:',
	'fungi:', //there is fungus among us
];
//complete componentdidupdate
//nes flashing black screen
//implement the timing thing
//implement setinterval in parent as well
//pass amount that needs to be deducted from food to resources, once it has been deducted, call to parent to reset that amount to 0

var resourcesToShow = null;
var startLocations = [
	'carpet',
	'sofa',
	'bed',
	'kitchen',
	'attic'
];

var Researchstuff = null;
var otherclanshow = null;
var buildsToShow = null;
var startingPosition = startLocations[Math.floor(Math.random()*5)];
var Resources = React.createClass({
	getInitialState: function () {
		return {
			timeCounter: 0
			food: 0
			numFungus: this.props.builds[0].quantity,
			numLibrary: this.props.builds[4].quantity,
			numBarracks: this.props.builds[5].quantity,
			//populace
			numWorker: this.props.builds[2].quantity,
			numDustMite: this.props.builds[3].quantity,
			numHarvester: this.props.builds[1].quantity
		}
	},
	componentDidMount: function () {
		this.timer = setInterval(this.updateResources, 1500);
		alert("Collect food so you don't die!");
	},
	componentDidUpdate: function () {
		if (this.state.numFungus !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numLibrary !== this.props.numLibrary) {
			var difference = this.props.numLibrary - this.state.numLibrary;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numBarracks !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numChurch !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numWorker !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numDustMite !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
		if (this.state.numHarvester !== this.props.numFungus) {
			var difference = this.props.numFungus - this.state.numFungus;
			difference = this.props.build[0].timeCost*difference;
			var newFood = this.state.food - difference;
			this.setState({food: newFood}); 
			var timeComplete = this.props.build[0].timeCost + this.state.timeCounter;
			this.setState({numFungus: this.props.numFungus});
		}
	},
	updateResources: function () {
		var newCounter = this.state.timeCounter+1;
		this.setState({timeCounter: newCounter});

		var netFood = this.state.food + (this.state.fungus*this.props.build[0].affect.increase - this.state.numDustMite*this.props.build[3].affect.increase - this.state.workers*this.props.build[2].affect.increase);
	 	this.setState({food: netFood})

	 	var newResearch = this.state.research + this.props.build[4timeC.affect.increase*this.state.library;
	 	this.setState({research: newResearch});  	
	},

	collectFood: function () {
		var newFood = this.state.food;
		newFood++;
		this.setState({food: newFood}); 
	},
	render: function () {
		return (
			<div>
				<Stats startingPosition={startingPosition} happiness={this.state.happiness} showLevel={this.state.showLevelStats} />
				<h1>{this.props.civName}</h1>
				<div className="resources-container">
					<h2>Resources:</h2>
					<button onClick={this.collectFood}>Collect food</button>
					{resourcesToShow}
				</div>
				<div className="build-container">
					<h2>Build:</h2>
						{buildsToShow}
				</div>
				{Researchstuff}
				
				<OtherClans showLevel={this.state.showLevelOtherClans} />
				{otherclanshow}
			</div>
		);
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
	}
});

module.exports = Resources;