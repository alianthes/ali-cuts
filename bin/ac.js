var arguments = require("minimist")(process.argv.slice(2));


var functionType = arguments["_"][0];
var number = arguments["_"][1];

var ac = module.exports = {};

ac.costView = function(views) {
	var cost = ((views/1000) * 0.50);
	return cost;
};
