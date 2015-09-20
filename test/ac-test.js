var ac = require("../bin/ac.js");

var test = require("tape");

var costView = ac.costView;
var costPermGeo = ac.costPermGeo;

test("cost shortcuts test", function(t) {
	t.test("costView test", function(assert) {
		assert.equal(costView(1000000), 500, "1 million map views should cost $500");
		assert.end();
	});
	t.test("costPermGeo", function(assert) {
		assert.equal(costPermGeo(5000000), 12500, "5 million perm geocodes should cost $12,500");
		assert.end();
	});
});


