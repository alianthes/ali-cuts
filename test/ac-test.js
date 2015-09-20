var ac = require("../bin/ac.js");

var test = require("tape");

var costView = ac.costView;
var costPermGeo = ac.costPermGeo;

test("cost shortcuts test", function(t) {
	t.test("costView test", function(assert) {
		assert.equal(costView(1000000), 500, "1 million map views costs $500");
		assert.end();
	});
});


