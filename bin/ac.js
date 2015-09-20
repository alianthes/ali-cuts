#!/usr/bin/env node

var arguments = require("minimist")(process.argv.slice(2));


var functionType = arguments["_"][0];
var number = arguments["_"][1];
var help = arguments["help"]

var ac = module.exports = {};

ac.costView = function(views) {
	var cost = ((views/1000) * 0.50);
	return cost;
};

ac.costPermGeo = function(geocodes) {
	var cost = ((geocodes/1000) * 2.5);
	return cost;
};

if (functionType === "costView") {
	var result = ac.costView(number);
	console.log(result);
} else if (functionType === "costPermGeo") { 
	var result = ac.costPermGeo(number);
	console.log(result);
}

function usage () {
	console.log(" ");
	console.log("Usage");
	console.log(" ");
	console.log("To calculate map view cost: `ac costView x`, where x equals the number of estimated views");
	console.log("To calculate permanent geocoding cost: `ac costPermGeo y`, where y equals the number of estimated permanent geocodes");  
}

if (help) {
	usage();
}

