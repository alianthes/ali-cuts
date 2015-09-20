var ac = require("../bin/ac.js");

var test = require("tape");

var costView = ac.costView;
var costPermGeo = ac.costPermGeo;

test("cost shortcuts test", function(t) {
	t.test("costView test", function(assert) {
		assert.equal(costView(1000000), 500, "1 million map views should cost $500 at list price");
		assert.equal(costView(78000000), 39000, "78 million map views should cost $39k at list price");
		assert.equal(costView(200000000), 100000, "200 million map views should cost $100k at list price");
		assert.equal(costView(6500000), 3250, "6.5 million map views should cost $3,250 at list price"); 
		assert.end();
	});
	t.test("costPermGeo", function(assert) {
		assert.equal(costPermGeo(5000000), 12500, "5 million perm geocodes should cost $12,500 at list price");
		assert.equal(costPermGeo(100000000), 250000, "100 million perm geocodes should cost $250k at list price");
		assert.equal(costPermGeo(9500), 23.75, "9,500 per geocodes should cost $23.75 at list price");
		assert.equal(costPermGeo(2000000), 5000, "2 million per geocodes should cost $5k at list price");
		assert.end();
	});
});


