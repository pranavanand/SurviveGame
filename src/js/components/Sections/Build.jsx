var React = require('react');
/*PRIVATE*/
//get building fungus and worker really good. 
//put quantity in the builds
	//includes showing what is pending to be built
	//includes on hover div
	//make a new tab for knowledge(?) wtf did I mean?
//add a property for show
var builds = [
	{
		name: 'fungus',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'food',
			increase: 0.5
		},
		quantity: 0
		
	},
	{
		name: 'harvester',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'population',
			increase: 1
		},
		quantity: 0
	},
	{
		name: 'worker',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'population',
			increase: -1
		},
		quantity: 0
	},
	{
		name: 'dust mite',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'population',
			increase: -1
		},
		quantity: 0
	},
	{
		name: 'library',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'population',
			increase: 1
		},
		quantity: 0
	},
	{
		name: 'barracks',
		costs: {
			food: 15,
		},
		timeCost: 2,
		affect: {
			resource: 'population',
			increase: 1
		},
		quantity: 0
	}
];
pendingBuilds = [];
resourcesToBeSubtracted = null;

var buildsToShow = null;
var Build = React.createClass({
	getInitialState: function () {
		return {
			//Other
			currentTime: 0,
			shownResourcesIndexes: [0],
			//Buildings
			//numberOfBuilds: [0, 0, 0, 0, 0, 0]
			// numFungus: 0,
			// numLibrary: 0,
			// numBarracks: 0,
			// numChurch: 0,
			// //populace
			// numWorker: 0,
			// numDustMite: 0,
			// numHarvester: 0,
		}
	},
	componentDidMount: function () {
		this.timer = setInterval(this.updatePending, 1500);
	},
	incrementBuild: function (buildToIncrease) {
		var buildToIncreaseNum = parseInt(buildToIncrease);
		var completeTime       = builds[buildToIncreaseNum].timeCost;
		var           newValue = [
			                        buildToIncrease,
									completeTime
								 ];
		pendingBuilds.push(newValue);

	},
	updatePending: function () {
		if (pendingBuilds[0] != null) {
			for (var i = 0; i < pendingBuilds.length(); i++) {
				pendingBuilds[i][1]--;
				if (pendingBuilds[i][1] == 0) {
					var stateToIncrement = pendingBuilds[i][0];
					var incrementState = this.state.numberOfBuilds(pendingBuilds[i][0])+1;			
					this.setState({numberOfBuilds: incrementState});
					pendingBuilds.splice(i, 1);
				}
			}
		}
	},
	render: function () {

		buildsToShow = builds.map(function(key, i) {
			return (
				<div 
					className="each-build"
					key={i}
					index={key}>
					<button onClick={this.incrementBuild(i).bind(this, i)}>+</button>
					{builds[i].quantity}
				</div>
			)
		}, this);
		return (
			<Stats
				numBuilds={this.state.numberOfBuilds} />
			<h1>Builds</h1>
			{buildsToShow}
			<Resources 
				builds={builds} />	
		);

});

module.exports = Build;