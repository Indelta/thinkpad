(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.note1 = function() {
	this.initialize(img.note1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,284);


(lib.note2 = function() {
	this.initialize(img.note2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,208);


(lib.note3 = function() {
	this.initialize(img.note3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,311);


(lib.pic = function() {
	this.initialize(img.pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E32627").s().p("AhuBwQgtgvgBhBQABhBAtguQAugvBAAAQBBAAAuAvQAtAuABBBQgBBBgtAvQguAuhBAAQhAAAgugug");
	this.shape.setTransform(0,0,0.159,0.158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-2.5,-2.5,5,5), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuBwQgtgvgBhBQABhBAtguQAugvBAAAQBBAAAuAvQAtAuABBBQgBBBgtAvQguAuhBAAQhAAAgugug");
	this.shape.setTransform(0,0,0.159,0.158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-2.5,-2.5,5,5), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.note3();
	this.instance.parent = this;
	this.instance.setTransform(-163,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-163,-156,326,311), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.note2();
	this.instance.parent = this;
	this.instance.setTransform(-112,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-112,-104,224,208), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBwIAAgbIAUAAIAAAbgAgDA1IgGiNIAAgXIASAAIAAAXIgECNg");
	this.shape.setTransform(84.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABIBwIAAhpIiPAAIAABpIgQAAIAAjfIAQAAIAABoICPAAIAAhoIAQAAIAADfg");
	this.shape_1.setTransform(68.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPBwIAAjfICeAAIAAAQIiOAAIAABYIB/AAIAAANIh/AAIAABaICPAAIAAAQg");
	this.shape_2.setTransform(46.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACPBwIhVhyIgyA1IAAA9IgPAAIAAg9Igyg1IhVByIgVAAIBfh+IhYhhIAUAAICBCOIAAiOIAPAAIAACOICBiOIAVAAIhYBhIBeB+g");
	this.shape_3.setTransform(17.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKBwIAAhZIhKAAIhFBZIgVAAIBHhcQgTgDgOgJQgOgIgIgNQgHgNAAgUQAAgSAJgPQAKgOASgKQARgIAZAAIBdAAIAADfgAgxhSQgQAOAAAXQAAARAJAMQAIALAOAGQAPAHATgBIBKAAIAAhmIhLAAQgegBgSAOg");
	this.shape_4.setTransform(-11.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBwIAAjfIBRAAQAYAAATAIQASAIAKAQQALAPAAAWQAAAYgMAPQgMAPgUAJQgTAHgXABIg8AAIAABTgAhAANIA9AAQAUAAAQgHQAPgGAIgMQAJgMAAgRQABgTgJgMQgJgLgOgHQgQgFgTAAIg/AAg");
	this.shape_5.setTransform(-32.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABeBxIgcg/IiDAAIgdA/IgRAAIBojhIAPAAIBpDhgAA7AjIg7iBIg6CBIB1AAg");
	this.shape_6.setTransform(-56.4,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBrQgWgJgUgSIALgNQASARAUAJQATAIAXAAQAQAAAOgGQAMgGAIgLQAIgLAAgOQAAgWgSgNQgQgMggAAIgYAAIAAgOIAYAAQASAAAMgFQAOgGAIgKQAIgLAAgPQAAgNgHgKQgIgKgMgGQgNgGgQAAQgRAAgRAGQgRAHgPAMIgKgMQAQgOATgHQASgHAYAAQAVAAARAIQAQAIAJANQAJAOAAARQAAAPgGALQgGALgKAGQgKAHgKADQAOADAKAHQALAIAHALQAGALAAAPQAAARgJAPQgKAOgRAIQgRAJgWAAQgaAAgXgJg");
	this.shape_7.setTransform(-79.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-91.1,-19.5,182.1,39.2), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeBxIgcg/IiEAAIgcA/IgSAAIBpjhIAPAAIBoDhgAA6AjIg6iBIg7CBIB1AAg");
	this.shape.setTransform(55.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABhCKIAAg0IjBAAIgCA0IgPAAIAAhDIAYAAQAMgQAIgZQAIgYAEgeQAEgeAAgjIAAgwICIAAIAADQIAeAAIgDBDgAgkhNQAAAegFAcQgDAcgIAXQgHAXgLAQICJAAIAAjAIhnAAg");
	this.shape_1.setTransform(30.5,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBwIAAjfICLAAIAAAPIh6AAIAADQg");
	this.shape_2.setTransform(10.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPBwIAAjfICeAAIAAAPIiOAAIAABYIB/AAIAAAPIh/AAIAABaICPAAIAAAPg");
	this.shape_3.setTransform(-10.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBkQgZgPgPgaQgOgaAAghQAAgfAOgbQAPgZAZgQQAZgPAggBQAUAAAPAFQAPAEAMAJQAMAIAMALIgLALQgOgPgSgIQgTgKgYAAQgbAAgVANQgVAOgMAWQgMAXgBAcQAAAdANAXQAMAWAVAOQAWANAaAAQAYAAASgJQASgJARgRIALALQgRARgWALQgVAKgdABQgfgBgZgPg");
	this.shape_4.setTransform(-32.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBwIAAjfIBcAAQAWAAAQAHQAQAGAJANQAJAMAAASQAAAPgGALQgFAKgJAGQgJAIgJADQAOACALAHQAMAHAHALQAHAKAAAQQAAASgKAOQgKAOgSAIQgSAHgZAAgAhHBhIBQAAQAdAAARgNQAQgMABgVQAAgWgSgLQgRgLghAAIhLAAgAhHgIIBJAAQARAAANgFQAMgFAIgKQAHgLAAgPQAAgTgOgMQgPgKgbgBIhKAAg");
	this.shape_5.setTransform(-56.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-70.3,-19.6,140.6,39.2), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBwIAAjfIAQAAIAABaIBBAAQAWAAATAGQASAHALANQAMAOAAAYQAAAVgKAQQgKAPgSAIQgSAJgYAAgAhBBhIBBAAQAeAAARgOQARgNABgbQgBgZgRgMQgSgLgfgBIg/AAg");
	this.shape.setTransform(35.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABgCKIAAg0Ii/AAIgDA0IgPAAIAAhDIAYAAQAMgQAIgZQAIgYAEgeQAEgeAAgjIAAgwICJAAIAADQIAdAAIgCBDgAglhNQAAAegDAcQgEAcgIAXQgHAXgKAQICIAAIAAjAIhoAAg");
	this.shape_1.setTransform(11.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBwQgIgCgIgDIAGgPIANAFQAHABAJAAQAOABANgKQANgJALgVIhlisIATAAIBZCbIBNibIASAAIhZCxQgNAbgQAMQgRALgSAAQgLAAgIgCg");
	this.shape_2.setTransform(-11.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWBwIAAjfICcAAIAAAPIiLAAIAABQIBLAAQAXAAASAGQASAHALAMQALAOAAAXQgBAggVARQgUARglAAgAhFBhIBJAAQAgAAAQgNQARgMAAgaQAAgZgRgLQgSgLgfAAIhIAAg");
	this.shape_3.setTransform(-33.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-47.8,-19.6,95.6,39.2), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAzIAAgMIAJAAIAAAMgAgBAYIgChAIAAgKIAHAAIAAAKIgCBAg");
	this.shape.setTransform(41.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg8AAIgMAdIgIAAIAvhnIAGAAIAwBngAAbAQIgbg6IgaA6IA1AAg");
	this.shape_1.setTransform(33.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA/IAAgXIhVAAIAAhmIAIAAIAABfIA/AAIAAhfIAIAAIAABfIAOAAIgCAeg");
	this.shape_2.setTransform(22.6,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhAAAIAAAwIgJAAIAAhlIAJAAIAAAvIBAAAIAAgvIAHAAIAABlg");
	this.shape_3.setTransform(10.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_4.setTransform(-1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhAzIgpgzIgaAZIAAAaIgIAAIAAhlIAIAAIAABCIBAhCIALAAIgsAtIAuA4g");
	this.shape_5.setTransform(-11.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_6.setTransform(-28.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsA/IAAgXIhXAAIgCAXIgGAAIAAgeIALAAQAFgIAEgLQAEgMABgNQADgNAAgQIAAgWIA9AAIAABfIAOAAIgCAegAgQgjQAAAOgCANQgCAMgDALQgEAKgEAIIA+AAIAAhYIgvAAg");
	this.shape_7.setTransform(-40.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-47.5,-10,95,20.1), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape.setTransform(55.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAzIgGgCIADgGIAEABIAFABIAGgBQADgBADgFQADgEACgIQADgIABgPIACgiIAAgUIA+AAIAABmIgIAAIAAhfIgvAAIAAANQAAAWgBAOQgCAPgDAKQgDAJgEAFQgDAFgFABQgEACgEAAIgHgBg");
	this.shape_1.setTransform(43.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAHIhAAAIAAAoIA5AAIAAAGIg5AAIAAApIBBAAIAAAHg");
	this.shape_2.setTransform(33.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsA/IAAgXIhXAAIgCAXIgGAAIAAgeIALAAQAFgIAEgLQAEgMABgNQADgNAAgQIAAgWIA9AAIAABfIAOAAIgCAegAgQgjQAAAOgCANQgCAMgDALQgEAKgEAIIA+AAIAAhYIgvAAg");
	this.shape_3.setTransform(22.9,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAzIAAhaIhCBaIgIAAIAAhlIAIAAIAABaIBChaIAHAAIAABlg");
	this.shape_4.setTransform(7.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAzIAAheIgkAAIAAgHIBOAAIAAAHIgjAAIAABeg");
	this.shape_5.setTransform(-2.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgGgMgBgPQABgOAGgMQAGgMAMgHQALgHAOAAQAKAAAGACQAIACAFAEIALAJIgFAFQgHgHgIgEQgIgEgMAAQgLAAgKAGQgJAGgGAKQgGALAAAMQAAANAGAKQAFALAKAGQAKAGALAAQALAAAJgEQAIgEAIgIIAFAFQgIAIgKAFQgKAFgNAAQgNAAgMgHg");
	this.shape_6.setTransform(-12.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAHIhAAAIAAAoIA5AAIAAAGIg5AAIAAApIBBAAIAAAHg");
	this.shape_7.setTransform(-23,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoAzIAAhlIAqAAQAKAAAHADQAIADAEAGQAEAFAAAIQAAAHgDAFQgCAFgEADIgIAFQAGAAAFADQAFADAEAFQADAFAAAHQAAAJgFAGQgEAGgJAEQgIADgLAAgAggAsIAkAAQAOAAAHgFQAIgGAAgKQAAgKgIgFQgIgFgPAAIgiAAgAgggDIAhAAQAIAAAGgCQAGgDADgFQADgEAAgHQAAgJgGgFQgHgFgMAAIgiAAg");
	this.shape_8.setTransform(-33.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_9.setTransform(-45,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsA/IAAgXIhXAAIgCAXIgGAAIAAgeIALAAQAFgIAEgLQADgMACgNQACgNABgQIAAgWIA9AAIAABfIAOAAIgBAegAgQgjQAAAOgCANQgCAMgDALQgDAKgFAIIA+AAIAAhYIgvAAg");
	this.shape_10.setTransform(-56.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-64.2,-10,128.5,20.1), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAuQgLgGgGgLQgGgMAAgOIgXAAIAAAwIgIAAIAAhlIAIAAIAAAvIAXAAQABgOAGgLQAGgLAKgHQAKgGAOAAQAOAAALAHQAKAHAGAMQAGAMAAAOQAAAPgGAMQgGAMgLAHQgKAHgPAAQgOAAgJgHgAgEgnQgJAGgFAKQgFALAAAMQAAANAFALQAFAKAJAGQAIAGAMAAQALAAAJgGQAJgGAFgKQAFgLAAgNQAAgMgFgLQgFgKgJgGQgJgGgMAAQgLAAgIAGg");
	this.shape.setTransform(62.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAHIhAAAIAAAoIA5AAIAAAGIg5AAIAAApIBBAAIAAAHg");
	this.shape_1.setTransform(49.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgAzIAAheIg/AAIAABeIgIAAIAAhlIBPAAIAABlg");
	this.shape_2.setTransform(39,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgHQAMgHANAAQAJAAAIACQAGACAGAEIALAJIgFAFQgHgHgIgEQgIgEgMAAQgLAAgKAGQgKAGgFAKQgGALAAAMQAAANAGAKQAGALAKAGQAJAGALAAQALAAAJgEQAIgEAIgIIAFAFQgIAIgJAFQgKAFgOAAQgOAAgLgHg");
	this.shape_3.setTransform(28.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAzIgHgCIADgHIAGACIAHABQAGAAAGgEQAGgEAFgKIguhOIAJAAIAoBGIAjhGIAJAAIgpBRQgGAMgHAFQgIAFgIAAIgJgBg");
	this.shape_4.setTransform(17.4,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg8AAIgMAdIgIAAIAvhnIAHAAIAvBngAAbAQIgbg6IgaA6IA1AAg");
	this.shape_5.setTransform(1.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsA/IAAgXIhXAAIgCAXIgGAAIAAgeIALAAQAFgIAEgLQAEgMABgNQADgNAAgQIAAgWIA9AAIAABfIAOAAIgCAegAgQgjQAAAOgCANQgCAMgDALQgEAKgEAIIA+AAIAAhYIgvAAg");
	this.shape_6.setTransform(-9.5,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAzIAAhlIA/AAIAAAHIg3AAIAABeg");
	this.shape_7.setTransform(-18.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAHIhAAAIAAAoIA5AAIAAAGIg5AAIAAApIBBAAIAAAHg");
	this.shape_8.setTransform(-28.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgHQAMgHANAAQAKAAAGACQAIACAFAEIALAJIgFAFQgGgHgJgEQgIgEgMAAQgLAAgKAGQgJAGgGAKQgGALAAAMQAAANAGAKQAFALALAGQAJAGALAAQALAAAJgEQAIgEAIgIIAFAFQgIAIgJAFQgLAFgNAAQgNAAgMgHg");
	this.shape_9.setTransform(-38.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAzIAAhlIAqAAQAKAAAHADQAIADAEAGQAEAFAAAIQAAAHgDAFQgCAFgEADIgIAFQAGAAAFADQAFADAEAFQADAFAAAHQAAAJgFAGQgEAGgJAEQgIADgLAAgAggAsIAkAAQAOAAAHgFQAIgGAAgKQAAgKgIgFQgIgFgPAAIgiAAgAgggDIAhAAQAIAAAGgCQAGgDADgFQADgEAAgHQAAgJgGgFQgHgFgMAAIgiAAg");
	this.shape_10.setTransform(-49.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiAzIAAgpIgiAAIgfApIgKAAIAhgqQgJgBgGgEQgHgEgDgFQgEgHAAgIQAAgJAFgHQAEgGAIgEQAIgEAMAAIAqAAIAABlgAgWglQgHAGAAALQAAAIAEAFQAEAFAGACQAHADAIAAIAiAAIAAguIgiAAQgOAAgIAGg");
	this.shape_11.setTransform(-64.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-71.7,-10,143.5,20.1), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAzIAAhlIAMAAIAAAnIAaAAQAKAAAJAEQAJADAFAFQAFAHABALQAAAKgFAHQgFAHgIAEQgJAEgLAAgAgaApIAaAAQANAAAHgGQAHgFAAgLQAAgKgHgFQgIgEgMAAIgaAAg");
	this.shape.setTransform(49.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAzIAAhbIgiAAIAAgKIBQAAIAAAKIgjAAIAABbg");
	this.shape_1.setTransform(39.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeAzIAAhUIg8BUIgLAAIAAhlIALAAIAABUIA9hUIALAAIAABlg");
	this.shape_2.setTransform(29.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAzIAAhlIAqAAQAJAAAHACQAGACAFAFIAFAHQABAEAAAFQAAAHgCAFQgCAEgEAEQgDADgEABIALAEQAEADAEAFQACAFAAAHQAAAJgFAGQgEAHgJADQgIADgLAAgAgdApIAiAAQALAAAHgFQAHgFAAgJQgBgIgGgFQgIgEgMAAIggAAgAgdgFIAdAAQALAAAGgEQAHgFAAgJQAAgIgGgEQgGgFgLAAIgeAAg");
	this.shape_3.setTransform(18.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_4.setTransform(7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_5.setTransform(-4.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoA0IgMgbIg3AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_6.setTransform(-16.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAzIAAhbIgjAAIAAgKIBQAAIAAAKIgiAAIAABbg");
	this.shape_7.setTransform(-26.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgHQALgHAPAAQAJAAAHACQAHACAGAEIAKAIIgHAJQgHgHgHgDQgIgEgLAAQgKAAgJAFQgJAGgFAJQgFAKAAALQAAAMAFAJQAFAKAJAGQAJAFAKAAQALAAAIgEQAHgDAIgHIAHAIQgFAFgGAEQgGAEgHACQgIACgJAAQgOAAgLgHg");
	this.shape_8.setTransform(-36.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_9.setTransform(-48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-56.7,-10.1,113.4,20.2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424449").s().dr(-150,-300,300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape.setTransform(55,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_1.setTransform(43.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA+AzIgkgyIgUAXIAAAbIgLAAIAAgbIgUgXIgkAyIgOAAIAqg5IgogsIAPAAIA1A7IAAg7IALAAIAAA7IA1g7IAPAAIgoAsIAqA5g");
	this.shape_2.setTransform(29.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_3.setTransform(15.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA0IgIgBIgGgCIADgJIAEABIAFABIAFgBIAGgGQADgDACgJQACgIACgOQABgMAAgVIAAgTIBCAAIAABmIgMAAIAAhbIgrAAIAAALQAAAVgBAOQgCAPgDAJQgDAJgEAFQgDAFgFABQgDACgEAAIgCAAg");
	this.shape_4.setTransform(2.8,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgHQALgHAPAAQAJAAAHACQAHACAGAEIAKAIIgHAJQgHgHgHgDQgIgEgLAAQgKAAgJAFQgJAGgFAJQgFAKAAALQAAAMAFAJQAFAKAJAGQAJAFAKAAQALAAAIgEQAHgDAIgHIAHAIQgFAFgGAEQgGAEgHACQgIACgJAAQgOAAgLgHg");
	this.shape_5.setTransform(-7.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfAzIAAgnIgdAAIgeAnIgOAAIAggpQgIgBgGgEQgGgEgEgGQgDgGgBgIQAAgGACgGQACgFAEgEQAFgFAIgCQAHgDAKAAIArAAIAABlgAgTgiQgHAGAAAJQAAAHAEAFQADAFAGACQAGACAHAAIAfAAIAAgqIgfAAQgMAAgHAGg");
	this.shape_6.setTransform(-23,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_7.setTransform(-33.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAKIg9AAIAAAjIA3AAIAAAKIg3AAIAAAkIA+AAIAAAKg");
	this.shape_8.setTransform(-43.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmAzIAAhSIgmA2IAAAAIgkg2IAABSIgMAAIAAhlIAMAAIAkA3IAmg3IALAAIAABlg");
	this.shape_9.setTransform(-55.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-63.5,-10.1,127,20.2), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIALQAFgBACgDQACgDAAgEIAAAAIgFAAIAAgQIANAAIAAAOQAAAHgEAFQgEAFgHACg");
	this.shape.setTransform(72.1,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_1.setTransform(64.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBJAAIAAAKIg+AAIAAAjIA3AAIAAAKIg3AAIAAAkIA/AAIAAAKg");
	this.shape_2.setTransform(54.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbAzIAAgsIgKAFIgLAEIgKACQgKAAgHgEQgIgDgEgHQgEgGAAgKIAAgmIALAAIAAAkQABAKAFAFQAGAGALAAQAGAAAJgDIAPgGIAAgwIALAAIAABlg");
	this.shape_3.setTransform(44.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAzIAAhlIBKAAIAAAKIg+AAIAAAjIA3AAIAAAKIg3AAIAAAkIA/AAIAAAKg");
	this.shape_4.setTransform(34.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA0IgIgBIgGgCIADgJIAEABIAFABIAFgBIAGgGQADgDACgJQACgIACgOQABgMAAgVIAAgTIBCAAIAABmIgMAAIAAhbIgrAAIAAALQAAAVgBAOQgCAPgDAJQgDAJgEAFQgDAFgFABQgDACgEAAIgCAAg");
	this.shape_5.setTransform(23.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAzIAAhlIArAAQAJAAAHACQAHACAEAFIAFAHQACAEAAAFQAAAHgDAFQgCAEgEAEQgEADgDABIAKAEQAFADAEAFQACAFAAAHQAAAJgEAGQgFAHgJADQgHADgMAAgAgdApIAhAAQAMAAAHgFQAGgFAAgJQABgIgIgFQgGgEgNAAIggAAgAgdgFIAeAAQAKAAAHgEQAFgFABgJQAAgIgGgEQgGgFgLAAIgeAAg");
	this.shape_6.setTransform(13.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAzIgIgDIAEgJIAHACIAGABQAGAAAFgEQAGgDAEgJIgthNIANAAIAkBCIAhhCIANAAIgoBQQgHAMgHAGQgHAFgKAAQgFAAgEgBg");
	this.shape_7.setTransform(2.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfAzIAAgnIgdAAIgeAnIgOAAIAggpQgIgBgGgEQgGgEgEgGQgDgGgBgIQAAgGACgGQACgFAEgEQAFgFAIgCQAHgDAKAAIArAAIAABlgAgTgiQgHAGAAAJQAAAHAEAFQADAFAGACQAGACAHAAIAfAAIAAgqIgfAAQgMAAgHAGg");
	this.shape_8.setTransform(-13.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoA0IgMgbIg3AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_9.setTransform(-28.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqA/IAAgXIhSAAIgCAXIgKAAIAAgiIAKAAQAIgMAEgRQAEgTAAgZIAAgSIBCAAIAABbIANAAIgCAigAgPgmQAAANgCANQgBAMgDALQgDALgFAHIA5AAIAAhQIgrAAg");
	this.shape_10.setTransform(-39.6,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAKIg1AAIAABbg");
	this.shape_11.setTransform(-49,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_12.setTransform(-59.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdAzIgmgxIgWAWIAAAbIgMAAIAAhlIAMAAIAAA8IA6g8IAPAAIgrAtIAtA4g");
	this.shape_13.setTransform(-70.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-78.7,-10.1,157.4,20.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+BKIgTgpIhVAAIgTApIgMAAIBFiTIAJAAIBFCTgAAnAXIgnhUIgmBUIBNAAg");
	this.shape.setTransform(66.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBJIAAiHIgzAAIAAgKIBxAAIAAAKIg0AAIAACHg");
	this.shape_1.setTransform(51.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAGgOAJgKQAKgLAOgGQANgGAQAAQARAAAOAGQANAGAKALQAKAKAFAOQAFANAAAPQAAAPgFAOQgGAOgJAKQgKALgOAGQgNAGgRAAQgQAAgNgGgAggg4QgOAJgHAOQgIAPgBASQABATAIAPQAIAOAOAJQAOAJARAAQATAAAOgJQAOgJAIgOQAIgPAAgTQAAgSgJgPQgIgOgOgJQgOgJgSAAQgRAAgPAJg");
	this.shape_2.setTransform(35.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BJIAAiRIBmAAIAAAKIhbAAIAAA0IAwAAQAQgBAMAFQAMAEAHAIQAHAKAAAOQgBAVgNAMQgNALgZgBgAgtA/IAwAAQAUABALgJQALgHAAgSQAAgQgLgHQgLgIgVABIgvAAg");
	this.shape_3.setTransform(20.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+BKIgTgpIhVAAIgTApIgMAAIBFiTIAJAAIBFCTgAAnAXIgnhUIgmBUIBNAAg");
	this.shape_4.setTransform(4.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BJIAAiRIA1AAQAQgBAMAGQAMAFAHAKQAHALAAAOQAAAPgIALQgIAJgNAFQgNAGgOgBIgoAAIAAA3gAgqAJIAoAAQANgBAKgEQALgEAFgIQAGgIAAgLQAAgMgGgHQgFgIgKgFQgKgDgMAAIgqAAg");
	this.shape_5.setTransform(-10.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBJIAAg6IgxAAIgtA6IgOAAIAvg8QgMgCgKgFQgJgGgFgIQgFgJAAgMQAAgNAGgKQAGgJAMgGQAMgGAQABIA9AAIAACRgAgfg1QgLAJAAAPQAAALAFAIQAGAHAKAEQAJAEAMAAIAxAAIAAhDIgxAAQgUgBgLAKg");
	this.shape_6.setTransform(-32,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAGgOAJgKQAKgLAOgGQANgGAQAAQARAAAOAGQANAGAKALQAKAKAFAOQAFANAAAPQAAAPgFAOQgGAOgJAKQgKALgOAGQgNAGgRAAQgQAAgNgGgAggg4QgOAJgHAOQgIAPgBASQABATAIAPQAIAOAOAJQAOAJARAAQATAAAOgJQAOgJAIgOQAIgPAAgTQAAgSgJgPQgIgOgOgJQgOgJgSAAQgRAAgPAJg");
	this.shape_7.setTransform(-47.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA6BJIAAh+Ig6BTIAAAAIg6hTIAAB+IgKAAIAAiRIAKAAIA6BVIA7hVIAKAAIAACRg");
	this.shape_8.setTransform(-65.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-76.7,-13.5,153.4,27.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxBJIAAg6IgxAAIgtA6IgOAAIAvg8QgMgCgKgFQgJgGgFgIQgFgJAAgMQAAgNAGgKQAGgJAMgGQAMgGAQABIA9AAIAACRgAgfg1QgLAJAAAPQAAALAFAIQAGAHAKAEQAJAEAMAAIAxAAIAAhDIgxAAQgUgBgLAKg");
	this.shape.setTransform(79,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBCQgQgKgKgSQgJgQAAgWQAAgUAJgRQAKgSAQgJQAQgLAVAAQANAAAKADQAKADAHAGQAJAFAHAHIgHAHQgKgJgLgGQgMgGgQAAQgRAAgOAJQgOAIgIAPQgIAPgBASQABATAIAPQAIAPAOAIQAOAJARAAQAQAAAMgFQAMgGALgLIAGAHQgKALgOAHQgPAHgSAAQgVAAgQgKg");
	this.shape_1.setTransform(64.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFBJIAAiHIgzAAIAAgKIBxAAIAAAKIg0AAIAACHg");
	this.shape_2.setTransform(50.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBJIAAiBIheCBIgLAAIAAiRIALAAIAACBIBfiBIAKAAIAACRg");
	this.shape_3.setTransform(35.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BJIAAiRIA7AAQAPgBAKAFQALAEAGAJQAGAIAAALQAAAKgEAHQgEAHgFAEQgGAFgGACQAJABAHAEQAIAFAEAHQAFAHAAALQAAALgGAKQgHAIgMAGQgMAEgQAAgAgvA/IA1AAQATABALgJQALgHAAgPQAAgOgLgHQgMgIgWAAIgxAAgAgvgFIAwAAQALABAJgEQAIgEAFgGQAFgIAAgJQAAgMgKgIQgJgHgSAAIgxAAg");
	this.shape_4.setTransform(20.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+BKIgTgpIhVAAIgTApIgMAAIBFiTIAJAAIBFCTgAAnAXIgnhUIgmBUIBNAAg");
	this.shape_5.setTransform(4.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BJIAAiRIA1AAQAQgBAMAGQAMAFAHAKQAHALAAAOQAAAPgIALQgIAJgNAFQgNAGgOgBIgoAAIAAA3gAgqAJIAoAAQANgBAKgEQALgEAFgIQAGgIAAgLQAAgMgGgHQgFgIgKgFQgKgDgMAAIgqAAg");
	this.shape_6.setTransform(-10.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBJIAAhFIhdAAIAABFIgLAAIAAiRIALAAIAABDIBdAAIAAhDIALAAIAACRg");
	this.shape_7.setTransform(-25.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BJIAAiRIBoAAIAAAKIhdAAIAAA5IBTAAIAAAJIhTAAIAAA7IBeAAIAAAKg");
	this.shape_8.setTransform(-46,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvBJIAAhFIhdAAIAABFIgLAAIAAiRIALAAIAABDIBdAAIAAhDIALAAIAACRg");
	this.shape_9.setTransform(-61.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6BJIAAh+Ig6BTIAAAAIg6hTIAAB+IgKAAIAAiRIAKAAIA6BVIA7hVIAKAAIAACRg");
	this.shape_10.setTransform(-78.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-89.2,-13.5,178.5,27.1), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPCiIAAiBIAcAAIAAAxICDAAIAAAeIiDAAIAAAygAhPAAIAAghIBMgwIhMgxIAAgfICfAAIAAAeIhxAAIBMAxIAAADIhMAxIBxAAIAAAeg");
	this.shape.setTransform(7.9,-44.5,0.126,0.126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmWGnQimitAAj7QAAj6ClisQClisDyAAQDxAACmCuQCmCtAAD6QAAD7ilCrQilCsjzAAQjwAAimitgAjdjQQhaBWAAB8QAACABXBTQBYBTCIAAQCDAABbhXQBahWAAh8QAAh/hYhTQhZhTiHAAQiCAAhbBWg");
	this.shape_1.setTransform(2,-5.5,0.126,0.126);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmWGnQimitAAj7QAAj7CliqQClisDyAAQDxAACmCtQCmCtAAD6QAAD6ilCsQilCsjzAAQjwAAimitgAjdjQQhaBWAAB8QAACABXBSQBYBUCIAAQCDAABbhXQBahWAAh8QAAh/hYhUQhZhTiHAAQiCABhbBWg");
	this.shape_2.setTransform(2,-35,0.126,0.126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArPH0IAAk0ISHAAIAAqzIEYAAIAAPng");
	this.shape_3.setTransform(-0.1,40.2,0.126,0.126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmXGbQilioAAj6QAAiKAuhwQAvhvBYhNQB9hrC5gaIFCMJQBahbAAiZQAAhagYhBQgYhFhFheICTjBQBZBNA8CMQA/CUAACWQAAESihCtQihCtj7AAQj0AAijiogAkficQgrA/AABQQAABJAdA9QAdA8A0AnQBuBSCbgUIjcoTQhHAigpA7g");
	this.shape_4.setTransform(2,26.3,0.126,0.126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AopETILykTIrykSIAAlcIRTHIIAAFNIxTHIg");
	this.shape_5.setTransform(2,-20.2,0.126,0.126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AogIuIAAkxICfAAQhVg/gwhnQgsheAAhkQAAjIB8h+QB7h8DBAAIKuAAIAAEwIp2AAQhoAAhEBRQg+BLAABkQgBBzBLBHQBEBBBcgBIJ2AAIAAExg");
	this.shape_6.setTransform(1.8,10.6,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-9.2,-46.5,18.4,93.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().dr(-150,-300,300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("Eg1mBhcMAApjDOMBqkAAXMgApDDOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-343.1,-625.8,686.3,1251.8), null);


(lib.txt22 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol23();
	this.t3.parent = this;
	this.t3.setTransform(-20,13.2);

	this.t2 = new lib.Symbol22();
	this.t2.parent = this;
	this.t2.setTransform(-48.7,-2.9);

	this.t1 = new lib.Symbol20();
	this.t1.parent = this;
	this.t1.setTransform(-65.7,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(-137.5,-29,165,52.3), null);


(lib.txt3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol26();
	this.t3.parent = this;
	this.t3.setTransform(-58.7,33.1);

	this.t2 = new lib.Symbol25();
	this.t2.parent = this;
	this.t2.setTransform(-79.5,-2);

	this.t1 = new lib.Symbol24();
	this.t1.parent = this;
	this.t1.setTransform(-102,-37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-149.8,-56.7,182.2,109.5), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol18();
	this.t3.parent = this;
	this.t3.setTransform(-61.8,22.9);

	this.t2 = new lib.Symbol16();
	this.t2.parent = this;
	this.t2.setTransform(-63,6.7);

	this.t1 = new lib.Symbol15();
	this.t1.parent = this;
	this.t1.setTransform(-55.8,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-134.5,-19.6,157.4,52.6), null);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(17,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222527").s().p("AizImIAAxLIFnAAIAARLg");
	this.shape.setTransform(18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11copy, new cjs.Rectangle(0,-55,36,110), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(-19,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E42527").s().p("AizImIAAxLIFnAAIAARLg");
	this.shape.setTransform(-18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-36,-55,36,110), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.t2 = new lib.Symbol14();
	this.t2.parent = this;
	this.t2.setTransform(-54.5,-1.4);

	this.t1 = new lib.Symbol13();
	this.t1.parent = this;
	this.t1.setTransform(-42,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-131.2,-38,261,75.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizolIFnAAIAARLIlnAAg");

	// b
	this.b = new lib.Symbol11copy();
	this.b.parent = this;
	this.b.setTransform(-18,0);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(1));

	// r
	this.r = new lib.Symbol11();
	this.r.parent = this;
	this.r.setTransform(18,0);

	var maskedShapeInstanceList = [this.r];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.r).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-18,-55,36,110), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// d2
	this.d2 = new lib.Symbol34();
	this.d2.parent = this;
	this.d2.setTransform(-74.2,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.d2).wait(1));

	// d1
	this.d1 = new lib.Symbol33();
	this.d1.parent = this;
	this.d1.setTransform(-74.2,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.d1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA6QgMgGgIgKIAKgJQAIAIAJAFQAJAFALABQAIAAAFgEQAHgDADgGQAEgFAAgHQAAgJgFgFQgEgGgIgCQgHgDgKAAIgIAAIgDgIIAngtIg9AAIAAgMIBPAAIAAAKIgnAtQALAAAKAEQAJAEAGAHQAFAHAAAMQABALgGAJQgGAIgJAGQgKAEgLAAQgQAAgLgGg");
	this.shape.setTransform(5.7,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGA/IAAhuIgWAHIgEgMIAfgLIAKAAIAAB+g");
	this.shape_1.setTransform(-3.6,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABGPOIAAhzQgBAqg8AiQg4AghMAGQhSAGg0geQg9gjAAhMIAA0dQAAhMA9gjQA0gfBSAHQBMAGA4AgQA8AiABAqIAAnhID5AAIAAebgAgpl/QgUAQAAAgIAAQNQAAAgAUAQQAUAPAZgFQAbgFATgXQAUgaAAgpIAAvDQAAgpgUgaQgTgYgbgEIgMgBQgSAAgPALg");
	this.shape_2.setTransform(-18.9,0.3,0.156,0.156);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj/MBQg8gmAAhJIAApEQAAhNA8g0QAYgVBsg9QBag0Aog1QA8hNAAh3IAAhRQAAgmgTgYQgSgWgWAAIgIAAQgXAAgRAWQgTAYAAAmIAAEpIj5AAIAAkpQAAiQBkhMQBUhAB8AAIAIAAQB8AABUBAQBkBMAACQIAAUhIj5AAIAAiIQgCA7g6AmQg2AlhMADIgPABQhFAAgwgfgAgHAqQguArAAAoIAAGiQAAA7A8gFQAXgCASgOQATgOAAgUIAAo2QgyAlgYAYg");
	this.shape_3.setTransform(-30.6,3,0.156,0.156);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak/POIAA+bIETAAQDFgBBbBYQBMBKAACKIAAH0QAACKhMBIQhbBXjFABIAANSgAgsheQA1AAAegYQAagWAAgiIAAn0QAAgjgagVQgegZg1AAg");
	this.shape_4.setTransform(-42.1,0.3,0.156,0.156);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwMRIiktLICZrWIEFAAIiZLWICkNLg");
	this.shape_5.setTransform(-51.9,3.2,0.156,0.156);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah8POIAA+bID5AAIAAebg");
	this.shape_6.setTransform(-57.1,0.3,0.156,0.156);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA+McIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA4gID5AAIAABfQAwhEBFgeQBBgcA/AMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_7.setTransform(-65.7,3.1,0.156,0.156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA+POIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA+bID5AAIAAHaQAwhEBEgeQBBgcBAAMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_8.setTransform(-83,0.3,0.156,0.156);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah7MRIAA4hID3AAIAAYhg");
	this.shape_9.setTransform(-74.3,3.2,0.156,0.156);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiJPOIAA6XIj4AAIAAkEIMDAAIAAEEIj5AAIAAaXg");
	this.shape_10.setTransform(-95.5,0.3,0.156,0.156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-101.5,-16.1,115,31.7), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.note1();
	this.instance.parent = this;
	this.instance.setTransform(-285,-237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.green = new lib.green();
	this.green.parent = this;
	this.green.setTransform(443.5,-439.8,1,1,-37,0,0,343.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-481.1,-939.7,1300.8,1412.8), null);


(lib.mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var logo1 = this.logo1;
		var red1 = this.red1;
		var red2 = this.red2;
		var logo2 = this.logo2;
		var pic1 = this.pic1;
		var pic2 = this.pic2;
		var pic3 = this.pic3;
		var pic4 = this.pic4;
		var txt1 = this.txt1;
		var txt2 = this.txt2;
		var txt22 = this.txt22;
		var txt3 = this.txt3;
		var txt4 = this.txt4;
		var gray = this.gray;
		
		var N=0; 
		
		var scaner = this.scaner;
		
		
		var master = new TimelineMax({repeat: -1, delay:0.1})
		
		master.add( frame1() )
		     // .add( frame2(), "-=0.5")
		
		function frame1() {
			
		var frame1 = new TimelineMax();
		
		frame1.from(pic1, 2.2, {scaleX:1.4, scaleY:1.4, alpha:0, ease:Expo.easeInOut}, "-=0.0")
		
		      .to(logo2.b, 1.2, {x:18, scaleX:0.5, ease:Expo.easeInOut}, "-=1.2")
		      .from(logo2.r, 1.2, {x:-18, scaleX:0.5, ease:Expo.easeInOut}, "-=1.2")
			  
		      //.to(logo1.d1, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	  
		      //.from(logo1.d2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	
			  
		      //.to(logo1.s1, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	  
		      //.from(logo1.s2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")		  
			  
		      .from(txt1.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")	  
		      .from(txt1.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
		
		      .to(txt1.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=0.4")		  
		      .to(txt1.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")		  
			  
		      .to(logo2.b, 1.2, {x:-18, scaleX:1, ease:Expo.easeInOut}, "-=0.8")
		      .to(logo2.r, 1.2, {x:-18, scaleX:1, ease:Expo.easeInOut}, "-=1.2")	 	  
			  
		      .from(pic2, 1.8, {x:"+=350", ease:Expo.easeInOut}, "-=1.2")
		      .from(gray, 1.8, {alpha:0, ease:Expo.easeInOut}, "-=1.8")
		      .to(pic1, 2.0, {scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut}, "-=1.8")	  
		
			  
		      //.to(logo1.d1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      //.to(logo1.d2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")	
			  
		      //.to(logo1.s1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      //.to(logo1.s2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")		  
			  
		      .from(txt2.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")	
		      .from(txt2.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  .from(txt2.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")
		      .from(txt22.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
		      .from(txt22.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  .from(txt22.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  
			  //.from(scaner, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")
			  //.to(scaner.s2, 0.8, {y:"-=80", ease:Expo.easeOut})
			  //.to(scaner.s1, 0.8, {y:"-=80", ease:Expo.easeOut}, "-=0.8")
			  //.to(scaner, 0.8, {y:"+=80", ease:Expo.easeOut}, "-=0.8")
			  
			  .to(txt2.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=0.8")	
		      .to(txt2.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(txt2.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")
			  //.to(scaner, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
		      .to(txt22.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
		      .to(txt22.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(txt22.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(pic2, 0.8, {x:"-=400", ease:Expo.easeIn}, "-=0.7")
			  
			  .from(pic3, 1.8, {x:"+=400", ease:Expo.easeInOut}, "-=0.8")
			  .from(pic4, 1.8, {x:"+=400", ease:Expo.easeInOut}, "-=1.7")
			  
			  .from(txt3.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.0")	
		      .from(txt3.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt3.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")
			   
		      .to(txt3.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=1.4")		  
		      .to(txt3.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	  
		      .to(txt3.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")		  
		      .to(pic3, 0.8, {x:"-=300", alpha:0, ease:Expo.easeIn}, "-=0.7") 
			  .to(pic4, 0.8, {x:"-=300", alpha:0, ease:Expo.easeIn}, "-=0.7") 
		      	  
		return frame1;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt3
	this.txt3 = new lib.txt3();
	this.txt3.parent = this;
	this.txt3.setTransform(19.5,-162.2);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// txt2
	this.txt22 = new lib.txt22();
	this.txt22.parent = this;
	this.txt22.setTransform(99.3,188.6);

	this.txt2 = new lib.txt2();
	this.txt2.parent = this;
	this.txt2.setTransform(5.6,-194.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt22}]}).wait(1));

	// logo2
	this.logo2 = new lib.Symbol3();
	this.logo2.parent = this;
	this.logo2.setTransform(132,18.7);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// logo1
	this.logo1 = new lib.Symbol2();
	this.logo1.parent = this;
	this.logo1.setTransform(-26,-258);

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(1));

	// pic3
	this.pic3 = new lib.Symbol29();
	this.pic3.parent = this;
	this.pic3.setTransform(-79.2,108.8);

	this.pic4 = new lib.Symbol28();
	this.pic4.parent = this;
	this.pic4.setTransform(66.4,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pic4},{t:this.pic3}]}).wait(1));

	// pic2
	this.pic2 = new lib.pic2();
	this.pic2.parent = this;
	this.pic2.setTransform(158.7,95.3,1,1,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.pic2).wait(1));

	// gray
	this.gray = new lib.Symbol17();
	this.gray.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.gray).wait(1));

	// txt1
	this.txt1 = new lib.Symbol4();
	this.txt1.parent = this;
	this.txt1.setTransform(1,-178);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// pic1
	this.pic1 = new lib.Symbol1();
	this.pic1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pic1).wait(1));

	// bg
	this.red1 = new lib.Symbol10();
	this.red1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.red1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(-322.9,-844.8,1300.8,1412.8), null);


// stage content:
(lib.index_300x600_google = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686866").s().p("EgG3Au4IAAgKIeJAAMAAAg7hIAKAAMAAAA7rgEgXbAu4MAAAg7rIAKAAMAAAA7hIQaAAIAAAKgAXSszIAA1FIAKAAIAAVFgA3bszIAA1FIAKAAIAAVFgEAXSgh4IAAs1I+JAAIAAgKIeTAAIAAM/gEgXbgh4IAAs/IQkAAIAAAKIwaAAIAAM1g");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mc
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-244.8,1300.8,1412.8);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/note1.png?1505387438472", id:"note1"},
		{src:"images/note2.png?1505387438472", id:"note2"},
		{src:"images/note3.png?1505387438472", id:"note3"},
		{src:"images/pic.jpg?1505387438472", id:"pic"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;