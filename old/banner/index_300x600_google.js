(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.lap1 = function() {
	this.initialize(img.lap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,18);


(lib.lap2 = function() {
	this.initialize(img.lap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,18);


(lib.nout1 = function() {
	this.initialize(img.nout1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,310);


(lib.nout2 = function() {
	this.initialize(img.nout2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,270);// helper functions:

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


(lib.Symbol37copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E32627").s().p("AgfA/IAug/Igtg+IARAAIAjAxIABAAIACACIAIALIgJAJIglAzIAAAAIgDADg");
	this.shape.setTransform(-2.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMA/Igog2IAJgJIgIgLIAlgzIARAAIguA9IAwBAg");
	this.shape_1.setTransform(2.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37copy, new cjs.Rectangle(-5.7,-6.3,11.4,12.6), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoA/Igog2IgmAzIAAAAIgCADIgQAAIAwg/Igvg+IARAAIAkAxIABAAIABACIAngzIAQAAIgvA9IAxBAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-5.7,-6.3,11.4,12.6), null);


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


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTBpIAAi1IhTB3IAAAAIhTh3IAAC1IgPAAIAAjRIAPAAIBTB7IBUh7IAPAAIAADRg");
	this.shape.setTransform(76.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBkQgTgJgOgPQgOgPgHgUQgIgTAAgWQAAgVAIgTQAHgTAOgQQAOgPAUgJQATgJAXAAQAYAAAUAJQATAIAOAQQAOAPAHAUQAIATAAAVQAAAWgIATQgHATgPAQQgNAPgUAJQgTAIgYABQgXAAgUgJgAgthRQgVAMgLAWQgMAVAAAaQAAAaAMAWQAMAVAUANQAUANAZgBQAbABATgNQAVgMALgWQAMgVAAgbQgBgZgLgWQgMgVgUgNQgUgNgaAAQgaAAgTANg");
	this.shape_1.setTransform(50.8,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBeQgYgPgNgYQgOgZAAgeQAAgdAOgZQANgYAYgPQAXgPAeAAQATAAAOAFQAOAEAMAIQALAHALAKIgKALQgOgNgRgJQgRgIgXgBQgZAAgUANQgTANgMAUQgMAWAAAaQABAbALAVQAMAWAUAMQAUANAYgBQAXAAARgIQARgIAPgQIALAKQgQARgUAJQgUALgbAAQgeAAgXgPg");
	this.shape_2.setTransform(27.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBpIAAjRICUAAIAAAOIiFAAIAABTIB4AAIAAANIh4AAIAABVICHAAIAAAOg");
	this.shape_3.setTransform(6.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDBpIAAhjIiFAAIAABjIgQAAIAAjRIAQAAIAABhICFAAIAAhhIAQAAIAADRg");
	this.shape_4.setTransform(-15.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBlQgUgJgTgRIAKgLQARAPASAIQASAHAWAAQAPAAAMgFQANgGAHgJQAHgLAAgNQAAgVgQgMQgQgLgeAAIgWAAIAAgNIAWAAQAQAAANgFQANgFAHgKQAHgKAAgOQAAgNgGgJQgHgJgMgGQgMgFgPgBQgQAAgQAHQgQAFgOANIgKgNQAQgNASgGQARgHAWAAQAUAAAPAIQAQAHAIAMQAIANABARQgBAOgFAKQgGAKgJAGQgJAGgKADQANAEAKAGQAKAHAGAKQAGAKAAAPQAAAQgJANQgJANgQAJQgQAHgVABQgYgBgVgHg");
	this.shape_5.setTransform(-36.7,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABEBpIAAi7IiHC7IgQAAIAAjRIAQAAIAAC7ICIi7IAPAAIAADRg");
	this.shape_6.setTransform(-57.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhQBpIAAjRICRAAIAAAOIiCAAIAABLIBGAAQAWAAARAGQARAGAKAMQAKANAAAUQAAAfgTAQQgTAQgjAAgAhBBbIBGAAQAcAAAQgMQAQgLAAgaQAAgVgQgMQgQgKgeAAIhEAAg");
	this.shape_7.setTransform(-78.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-92,-18,183.8,37), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGBpIAAhUIhHAAIg/BUIgUAAIBChWQgRgDgOgIQgNgIgIgMQgGgNAAgSQAAgRAJgOQAIgOARgIQARgIAXAAIBYAAIAADRgAguhMQgPAMAAAXQAAAPAIALQAIAKAOAGQANAGASAAIBGAAIAAhhIhHAAQgdAAgQAOg");
	this.shape.setTransform(98.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABEBpIAAi7IiHC7IgQAAIAAjRIAQAAIAAC7ICIi7IAPAAIAADRg");
	this.shape_1.setTransform(77.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDBpIAAhjIiFAAIAABjIgQAAIAAjRIAQAAIAABhICFAAIAAhhIAQAAIAADRg");
	this.shape_2.setTransform(54.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBpIAAjRICUAAIAAAOIiFAAIAABTIB4AAIAAANIh4AAIAABVICHAAIAAAOg");
	this.shape_3.setTransform(33.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBqIgNgCIgMgDIAFgNIAJACQAFACAGAAQAFAAAGgDQAGgCAGgIQAGgJAGgRQAEgRAEgdQADgcAAgsIAAgoICAAAIAADRIgPAAIAAjDIhiAAIAAAaQAAAugDAeQgDAfgHATQgFATgIAJQgIAKgJAEQgHADgIAAIgDAAg");
	this.shape_4.setTransform(9.7,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSBpIAAjRIBVAAQAVAAAPAHQAQAGAIAMQAJALAAAQQgBAPgFAJQgFAKgIAGQgJAGgIAEQAMADALAFQALAHAGAKQAHAKAAAPQAAARgKANQgJANgRAHQgQAHgXAAgAhDBbIBMAAQAbAAAQgMQAPgLAAgVQAAgTgQgLQgQgLggAAIhGAAgAhDgHIBEAAQAQAAAMgFQANgFAGgKQAIgKgBgOQAAgRgNgLQgNgLgaAAIhGAAg");
	this.shape_5.setTransform(-10.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABYBqIgag7Ih8AAIgaA7IgRAAIBijTIAPAAIBiDTgAA3AhIg3h5Ig3B5IBuAAg");
	this.shape_6.setTransform(-33.8,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMBpIAAjRIBMAAQAWAAASAIQARAHAKAOQAKAPAAAUQAAAXgLAOQgMAPgSAHQgTAIgVgBIg5AAIAABPgAg9ANIA6AAQATgBAOgGQAPgGAIgMQAIgLABgQQgBgRgIgLQgIgLgOgGQgOgGgSAAIg8AAg");
	this.shape_7.setTransform(-54.9,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABCBpIAAjDIiDAAIAADDIgQAAIAAjRICjAAIAADRg");
	this.shape_8.setTransform(-76.9,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBrQgKAAgIgCQgIgCgHgDIAGgOIAMAFQAGABAJAAQANABANgJQAMgIAKgUIhfiiIATAAIBTCRIBIiRIARAAIhTCnQgNAZgPAKQgPALgQAAIgCAAg");
	this.shape_9.setTransform(-99.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-112,-18,224.6,37), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBpIAAjRIAPAAIAABUIA+AAQAUAAARAHQASAFAKANQALANAAAWQAAAUgJAPQgKAOgRAIQgQAIgXAAgAg9BbIA9AAQAcAAAQgNQARgMAAgZQAAgYgRgMQgRgKgcAAIg8AAg");
	this.shape.setTransform(75.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBpIAAjDIhJAAIAAgOIChAAIAAAOIhJAAIAADDg");
	this.shape_1.setTransform(54.7,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBeQgYgPgNgYQgOgZAAgeQAAgdAOgZQANgYAYgPQAXgPAeAAQATAAAOAFQAOAEAMAIQALAHALAKIgKALQgOgNgRgJQgRgIgXgBQgZAAgUANQgTANgMAUQgMAWAAAaQABAbALAVQAMAWAUAMQAUANAYgBQAXAAARgIQARgIAPgQIALAKQgQARgUAJQgUALgbAAQgeAAgXgPg");
	this.shape_2.setTransform(34.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBkQgUgJgOgPQgNgPgIgUQgHgTAAgWQAAgVAHgTQAIgTANgQQAPgPATgJQAUgJAXAAQAXAAATAJQAUAIAOAQQAOAPAHAUQAIATgBAVQABAWgIATQgIATgOAQQgOAPgTAJQgUAIgXABQgXAAgTgJgAguhRQgTAMgMAWQgLAVAAAaQAAAaALAWQALAVAVANQAUANAagBQAZABAVgNQATgMAMgWQAMgVAAgbQAAgZgNgWQgKgVgVgNQgUgNgaAAQgZAAgVANg");
	this.shape_3.setTransform(10,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDBpIhVhpIg1AzIAAA2IgPAAIAAjRIAPAAIAACJICFiJIAWAAIhbBcIBeB1g");
	this.shape_4.setTransform(-12.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBBpIAAjRICDAAIAAAOIhzAAIAADDg");
	this.shape_5.setTransform(-32.1,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKBpIAAjRICUAAIAAAOIiFAAIAABTIB4AAIAAANIh4AAIAABVICGAAIAAAOg");
	this.shape_6.setTransform(-51.2,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBqIgOgCIgMgDIAFgNIAJACQAFACAGAAQAFAAAGgDQAGgCAGgIQAGgJAGgRQAFgRADgdQADgcAAgsIAAgoICAAAIAADRIgPAAIAAjDIhiAAIAAAaQAAAugDAeQgDAfgHATQgFATgIAJQgIAKgJAEQgHADgIAAIgCAAg");
	this.shape_7.setTransform(-75,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-87,-18,173.6,37), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nout1();
	this.instance.parent = this;
	this.instance.setTransform(-133,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-133,-155,267,310), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nout2();
	this.instance.parent = this;
	this.instance.setTransform(-111,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-111,-135,259,270), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA1QgLgFgHgHQgIgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgJALgFQALgEALAAQANAAALAEQAKAFAIAJQAHAHAEALQAEAKAAALQAAAMgEAKQgEAKgHAJQgJAHgKAFQgLAFgMAAQgMAAgKgFgAgWgnQgKAGgFALQgGAKAAAMQAAANAGALQAGAKAKAGQAJAGAMAAQANAAAKgGQAKgGAFgKQAGgLAAgNQAAgMgGgKQgGgLgJgGQgKgGgNgBQgMABgKAGg");
	this.shape.setTransform(51.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgA4Igqg2IgYAYIAAAeIgNAAIAAhvIANAAIAABCIA/hCIAQAAIgvAxIAyA+g");
	this.shape_1.setTransform(39.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIBHAAIAAALIg6AAIAABkg");
	this.shape_2.setTransform(28.9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAAKIg8AAIAAAnIBEAAIAAAMg");
	this.shape_3.setTransform(18.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA4IgGgCIACgKIAFABIAFAAIAGgBQADgBADgEQADgFADgJQACgJACgPQACgOAAgWIAAgVIBHAAIAABvIgNAAIAAhjIguAAIAAAMQAAAXgCAPQgCARgDAJQgDAKgEAGQgEAFgFACQgFACgFAAIgJgBg");
	this.shape_4.setTransform(6.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApA4IAAhaIgpA7IAAAAIgog6IAABZIgNAAIAAhvIANAAIAoA8IApg8IAMAAIAABvg");
	this.shape_5.setTransform(-11,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhA4IAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvg");
	this.shape_6.setTransform(-24.1,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgA4IAAgzIg/AAIAAAzIgNAAIAAhvIANAAIAAAyIA/AAIAAgyIANAAIAABvg");
	this.shape_7.setTransform(-36.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAyQgNgHgIgNQgGgNAAgRQAAgPAGgNQAIgNANgIQANgIAPAAQAKAAAIACQAIACAFAFIANAJIgJAJQgHgGgJgFQgIgEgLgBQgLABgLAGQgJAGgGALQgFAKgBAMQAAANAHALQAFAKAJAGQALAGALAAQALAAAIgEQAJgEAIgIIAJAJQgHAGgGAEQgHAEgHADQgJACgJAAQgQAAgMgIg");
	this.shape_8.setTransform(-52.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-61,-11,121.5,21.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIAMAAIAAArIAdAAQALABAKADQAJADAGAHQAGAGAAANQAAAKgFAJQgFAHgJAEQgKAFgMAAgAgdAsIAdAAQAOAAAIgFQAHgHAAgLQAAgLgIgGQgIgEgNgBIgdAAg");
	this.shape.setTransform(48.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA4IAAhkIglAAIAAgLIBXAAIAAALIglAAIAABkg");
	this.shape_1.setTransform(37.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArA4IgNgdIg8AAIgNAdIgNAAIAzhvIALAAIAzBvgAAZAQIgZg5IgZA5IAyAAg");
	this.shape_2.setTransform(25.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApA4IAAhaIgpA7IAAAAIgog6IAABZIgNAAIAAhvIANAAIAoA8IApg8IAMAAIAABvg");
	this.shape_3.setTransform(12.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhA4IAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvg");
	this.shape_4.setTransform(-0.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgA4IAAgzIg/AAIAAAzIgNAAIAAhvIANAAIAAAyIA/AAIAAgyIANAAIAABvg");
	this.shape_5.setTransform(-12.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhA4IAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvg");
	this.shape_6.setTransform(-25.1,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIApAAQANAAAJAFQAJADAGAIQAFAJAAALQAAAMgGAHQgGAIgKAFQgKADgLAAIgbAAIAAAogAgcAFIAbAAQANAAAJgGQAIgGAAgMQAAgMgIgGQgIgHgNAAIgcAAg");
	this.shape_7.setTransform(-36.2,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgA4IAAhkIg+AAIAABkIgNAAIAAhvIBXAAIAABvg");
	this.shape_8.setTransform(-48,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-56,-11,111.3,21.7), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiA4IAAgrIggAAIggArIgQAAIAjgtQgJgCgGgEQgHgEgEgGQgEgHAAgJQAAgHACgGQACgGAEgEQAGgFAIgDQAIgDALAAIAvAAIAABvgAgVglQgHAGAAALQAAAHADAFQAEAFAHADQAGACAIAAIAiAAIAAguIgiAAQgNAAgIAHg");
	this.shape.setTransform(78.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhA4IAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvg");
	this.shape_1.setTransform(66.9,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgA4IAAgyIhAAAIAAAyIgMAAIAAhvIAMAAIAAAxIBAAAIAAgxIANAAIAABvg");
	this.shape_2.setTransform(54.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAALIg8AAIAAAmIBEAAIAAAMg");
	this.shape_3.setTransform(43.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHA4IAAhvIAMAAIAABjIA2AAIAAhjIALAAIAABjIA2AAIAAhjIAMAAIAABvg");
	this.shape_4.setTransform(29,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAALIg8AAIAAAmIBEAAIAAAMg");
	this.shape_5.setTransform(15.2,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIApAAQANAAAJAEQAJAFAGAIQAFAHAAAMQAAAMgGAHQgGAIgKAEQgKAFgLAAIgbAAIAAAngAgcAFIAbAAQANAAAJgGQAIgGAAgMQAAgMgIgGQgIgGgNgBIgcAAg");
	this.shape_6.setTransform(4.6,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAALIg8AAIAAAmIBEAAIAAAMg");
	this.shape_7.setTransform(-11,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArA4IAAhvIANAAIAABvgAg3A4IAAhvIANAAIAAAsIAcAAQAMgBAJAEQAKADAGAGQAFAHABAMQgBAMgFAHQgFAIgJAFQgJAEgMAAgAgqAsIAeAAQAMABAIgHQAIgFAAgNQAAgKgIgGQgIgEgNAAIgdAAg");
	this.shape_8.setTransform(-23.8,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA4IAAgyIhAAAIAAAyIgMAAIAAhvIAMAAIAAAxIBAAAIAAgxIANAAIAABvg");
	this.shape_9.setTransform(-37,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABDA4Igng3IgWAZIAAAeIgLAAIAAgeIgXgZIgnA3IgPAAIAug/IgsgwIAQAAIA7BBIAAhBIALAAIAABBIA7hBIAPAAIgrAwIAuA/g");
	this.shape_10.setTransform(-51.8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArA5IgNgeIg8AAIgNAeIgNAAIAzhxIALAAIAzBxgAAZAPIgZg3IgZA3IAyAAg");
	this.shape_11.setTransform(-66.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIAuAAQAKAAAHACQAIADAFAFQADAEACAEQACAFAAAFQAAAIgDAEQgCAGgEADIgJAFQAHABAFADQAGAEADAFQADAFAAAJQAAAJgFAHQgFAHgJAEQgJADgNAAgAggAsIAlAAQANABAHgGQAHgFAAgJQAAgKgHgFQgIgFgPAAIgiAAgAgggFIAgAAQAMAAAHgFQAHgFAAgLQAAgIgGgEQgHgGgMAAIghAAg");
	this.shape_12.setTransform(-78.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-86.7,-10.8,173.6,21.7), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBHIAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvgAgOg3QgGgFgBgJIAIgBQACAFADADQAEADAFAAQAGAAADgDQADgDACgFIAJABQgCAJgGAFQgGAGgJAAQgJAAgGgGg");
	this.shape.setTransform(45.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWA1QgLgFgHgHQgIgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgJALgFQALgEALAAQANAAALAEQAKAFAIAJQAHAHAEALQAEAKAAALQAAAMgEAKQgEAKgHAJQgJAHgKAFQgLAFgMAAQgMAAgKgFgAgWgnQgKAGgFALQgGAKAAAMQAAANAGALQAGAKAKAGQAJAGAMAAQANAAAKgGQAKgGAFgKQAGgLAAgNQAAgMgGgKQgGgLgJgGQgKgGgNgBQgMABgKAGg");
	this.shape_1.setTransform(32.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgA4Igqg2IgYAYIAAAeIgNAAIAAhvIANAAIAABCIA/hCIAQAAIgvAxIAyA+g");
	this.shape_2.setTransform(20.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA4IgJgEIAFgKIAHADIAHABQAGAAAGgEQAGgEAFgJIgxhVIANAAIApBIIAkhIIANAAIgsBXQgHAOgHAGQgJAGgKAAIgKgBg");
	this.shape_3.setTransform(8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA4IAAhvIApAAQANAAAJAFQAJADAGAIQAFAJAAALQAAAMgGAHQgGAIgKAFQgKADgLAAIgbAAIAAAogAgcAFIAbAAQANAAAJgGQAIgGAAgMQAAgMgIgGQgIgHgNAAIgcAAg");
	this.shape_4.setTransform(-2.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBFIAAgaIhaAAIgCAaIgLAAIAAglIALAAQAJgNAEgUQAEgTAAgcIAAgTIBJAAIAABjIAOAAIgCAlgAgQgpQAAAOgCAPIgFAZQgEALgEAIIA+AAIAAhYIgvAAg");
	this.shape_5.setTransform(-19.4,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA1QgKgFgIgHQgHgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAHgHQAJgJAKgFQAKgEAMAAQANAAAKAEQALAFAHAJQAIAHAEALQAEAKAAALQAAAMgEAKQgEAKgIAJQgHAHgLAFQgLAFgMAAQgMAAgLgFgAgWgnQgKAGgGALQgFAKAAAMQAAANAGALQAFAKAKAGQAKAGAMAAQANAAAKgGQAKgGAFgKQAGgLAAgNQAAgMgGgKQgFgLgLgGQgJgGgNgBQgMABgKAGg");
	this.shape_6.setTransform(-32.2,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA4IAAhkIg+AAIAABkIgMAAIAAhvIBXAAIAABvg");
	this.shape_7.setTransform(-45,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-53,-11,106.4,21.7), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArA4IgNgdIg8AAIgNAdIgNAAIAzhvIALAAIAzBvgAAZAQIgZg5IgZA5IAyAAg");
	this.shape.setTransform(86.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBFIAAgaIhaAAIgCAaIgLAAIAAglIALAAQAJgNAEgUQAEgTAAgcIAAgTIBJAAIAABjIAOAAIgCAlgAgQgpQAAAOgCAPIgFAZQgEALgEAIIA+AAIAAhYIgvAAg");
	this.shape_1.setTransform(74.3,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIBHAAIAAALIg6AAIAABkg");
	this.shape_2.setTransform(64.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAAKIg8AAIAAAnIBEAAIAAAMg");
	this.shape_3.setTransform(53.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAyQgMgHgHgNQgIgNAAgRQAAgPAIgNQAHgNAMgIQAOgIAPAAQAKAAAIACQAIACAFAFIAMAJIgIAJQgHgGgIgFQgJgEgLgBQgLABgKAGQgKAGgGALQgGAKABAMQAAANAFALQAGAKAKAGQAKAGALAAQALAAAJgEQAIgEAIgIIAIAJQgGAGgGAEQgHAEgIADQgHACgLAAQgPAAgNgIg");
	this.shape_4.setTransform(42.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIAuAAQAKAAAHACQAIADAFAFQADADACAFQACAEAAAGQAAAHgDAGQgCAFgEADIgJAFQAHABAFAEQAGADADAGQADAFAAAHQAAAKgFAHQgFAGgJAEQgJAEgNAAgAggAsIAlAAQANAAAHgEQAHgGAAgKQAAgJgHgFQgIgFgPAAIgiAAgAgggFIAgAAQAMAAAHgFQAHgGAAgKQAAgIgGgFQgHgEgMgBIghAAg");
	this.shape_5.setTransform(31,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAyQgMgHgIgNQgGgNgBgRQABgPAGgNQAIgNAMgIQANgIAQAAQAKAAAIACQAIACAFAFIANAJIgJAJQgHgGgIgFQgJgEgLgBQgMABgKAGQgJAGgGALQgFAKAAAMQgBANAHALQAFAKAJAGQAKAGAMAAQALAAAJgEQAIgEAIgIIAJAJQgHAGgGAEQgHAEgHADQgJACgJAAQgQAAgNgIg");
	this.shape_6.setTransform(14.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA4IAAhvIBQAAIAAALIhDAAIAAAnIA8AAIAAAKIg8AAIAAAnIBEAAIAAAMg");
	this.shape_7.setTransform(3.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgA4IAAgzIhAAAIAAAzIgMAAIAAhvIAMAAIAAAyIBAAAIAAgyIANAAIAABvg");
	this.shape_8.setTransform(-8.4,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA1QgLgEgKgJIAIgJQAIAIAJAEQAKAEALAAQAHAAAGgDQAGgCADgFQAEgFAAgHQAAgHgEgEQgEgFgHgCQgHgCgIAAIgMAAIAAgJIAMAAQAIgBAGgCQAGgCAEgFQADgFAAgHQAAgGgDgEQgDgFgGgCQgGgCgHgBQgJAAgIADQgIAEgHAGIgIgJQAJgHAJgEQAKgEAMAAQALAAAJAEQAIAEAFAHQAFAGAAAJQAAAHgDAGQgDAFgFAEQgEADgGABQAHABAFAEQAGAEADAGQADAEAAAIQAAAJgFAHQgFAIgJADQgIAFgMAAQgOAAgLgFg");
	this.shape_9.setTransform(-19.8,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhA4IAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvg");
	this.shape_10.setTransform(-30.9,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIBPAAIAAALIhCAAIAAAjIAgAAQALAAAKAEQAKADAGAGQAFAIAAALQAAALgFAHQgFAHgKAEQgJAEgMAAgAgeAsIAgAAQANAAAIgEQAJgGAAgMQAAgKgJgGQgIgFgNAAIggAAg");
	this.shape_11.setTransform(-42.4,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBHIAAhcIhCBcIgMAAIAAhvIANAAIAABcIBChcIAMAAIAABvgAgOg3QgGgFgBgJIAIgBQACAFADADQAEADAFAAQAGAAADgDQADgDACgFIAJABQgCAJgGAFQgGAGgJAAQgJAAgGgGg");
	this.shape_12.setTransform(-59.3,-1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWA1QgLgFgHgHQgIgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgJALgFQALgEALAAQANAAALAEQAKAFAIAJQAHAHAEALQAEAKAAALQAAAMgEAKQgEAKgHAJQgJAHgKAFQgLAFgMAAQgMAAgKgFgAgWgnQgKAGgFALQgGAKAAAMQAAANAGALQAGAKAKAGQAJAGAMAAQANAAAKgGQAKgGAFgKQAGgLAAgNQAAgMgGgKQgGgLgJgGQgKgGgNgBQgMABgKAGg");
	this.shape_13.setTransform(-72.3,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApA4IAAhaIgpA7IAAAAIgog6IAABZIgNAAIAAhvIANAAIAoA8IApg8IAMAAIAABvg");
	this.shape_14.setTransform(-86,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-95,-11,190.3,21.7), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA4Ig2hGIAABGIgYAAIAAhvIAXAAIAzBEIAAhEIAZAAIAABvg");
	this.shape.setTransform(88.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyQgNgIgIgNQgHgNAAgQQgBgPAJgNQAHgOANgHQAOgIAQAAQARAAAOAIQANAHAIAOQAHANAAAPQABAQgJANQgHANgNAIQgOAIgRAAQgQAAgOgIgAgRgeQgIAFgEAIQgDAIgBAJQABAKADAIQAFAHAHAFQAIAFAJAAQAKAAAHgFQAIgEAFgIQADgIAAgKQAAgJgDgHQgFgJgIgFQgHgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(75.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA4IAAhvIA0AAQAJAAAIADQAHACAFAFQAEADACAGQACAEAAAHQgBAJgEAGQgEAFgHAEQALACAFAHQAGAGAAAMQgBAJgEAIQgGAGgJAEQgKADgMAAgAgWAjIAcAAQAIAAAEgEQAFgDAAgGQAAgGgEgDQgEgDgKAAIgbAAgAgWgJIAWAAQAHAAAFgEQAFgDAAgGQAAgFgEgEQgFgDgHAAIgXAAg");
	this.shape_2.setTransform(63.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUA4IgYgkIgTAAIAAAkIgYAAIAAhvIAyAAQALAAAIADQAIADAGAGQAEAEADAGQACAHAAAIQAAAOgHAHQgGAJgLAEIAbAogAgXAAIAYAAQAJAAAFgFQAFgFAAgHQAAgHgFgEQgFgFgJAAIgYAAg");
	this.shape_3.setTransform(51.8,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiA5IgLgZIguAAIgKAZIgZAAIAwhxIAVAAIAwBxgAAOAJIgOgjIgOAjIAcAAg");
	this.shape_4.setTransform(39.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAyQgNgIgHgNQgIgMAAgRQAAgPAIgNQAHgOANgHQANgIARAAQAKAAAIADQAIACAGAEQAGAEAFAFIgPARIgIgGQgEgEgFgBIgMgBQgIAAgHAEQgIAFgEAIQgEAIAAAJQAAAKAEAIQAEAHAIAFQAHAFAIAAQAKAAAHgEQAGgDAHgGIAQARIgNAKQgGAEgIADQgJACgKAAQgQAAgNgIg");
	this.shape_5.setTransform(27.2,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA5IAAhXIgSAEIgGgUIAggKIARAAIAABxg");
	this.shape_6.setTransform(12.5,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA4IgZgmIgZAmIgcAAIAog4Igmg3IAdAAIAWAlIAYglIAcAAIglA3IAmA4g");
	this.shape_7.setTransform(3.8,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzA4IAAhvIAsAAQARAAANAHQANAIAIANQAHAMABAPQgBAQgHAMQgIANgNAHQgNAIgRAAgAgaAiIATAAQAKgBAHgEQAHgEAFgHQAEgIAAgKQAAgJgEgHQgFgIgHgEQgHgFgKAAIgTAAg");
	this.shape_8.setTransform(-12.9,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiA5IgLgZIguAAIgKAZIgZAAIAwhxIAVAAIAwBxgAAOAJIgOgjIgOAjIAcAAg");
	this.shape_9.setTransform(-25.7,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIAsAAQAOAAAJAFQAKAFAFAJQAFAJAAALQAAANgGAIQgGAJgKAEQgKAFgMgBIgTAAIAAAigAgTABIATAAQAJAAAFgFQAFgEAAgIQAAgIgFgEQgFgFgJAAIgTAAg");
	this.shape_10.setTransform(-37,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVA4IghgvIgOANIAAAiIgYAAIAAhvIAYAAIAAAxIAtgxIAeAAIguAwIAwA/g");
	this.shape_11.setTransform(-48,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdA4Ig2hGIAABGIgYAAIAAhvIAXAAIAzBEIAAhEIAZAAIAABvg");
	this.shape_12.setTransform(-60.8,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLA4IAAhvIAXAAIAABvg");
	this.shape_13.setTransform(-69.8,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXA4IAAgtIgtAAIAAAtIgYAAIAAhvIAYAAIAAAtIAtAAIAAgtIAYAAIAABvg");
	this.shape_14.setTransform(-78.6,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA4IAAhZIgiAAIAAgWIBbAAIAAAWIgiAAIAABZg");
	this.shape_15.setTransform(-89.8,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-97,-11,194.2,22.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApA4IAAhaIgpA7IAAAAIgog6IAABZIgNAAIAAhvIANAAIAoA8IApg8IAMAAIAABvg");
	this.shape.setTransform(56.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWA1QgLgFgHgHQgIgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAIgJAKgFQAKgEAMAAQANAAAKAEQALAFAHAJQAIAHAEALQAEAKAAALQAAAMgEAKQgEAKgIAJQgIAHgKAFQgKAFgNAAQgMAAgKgFgAgWgnQgKAGgGALQgFAKAAAMQAAANAGALQAFAKALAGQAJAGAMAAQANAAAKgGQAKgGAGgKQAFgLAAgNQAAgMgFgKQgHgLgJgGQgKgGgNgBQgMABgKAGg");
	this.shape_1.setTransform(42.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgA4Igqg2IgYAYIAAAeIgNAAIAAhvIANAAIAABCIA/hCIAQAAIgvAxIAyA+g");
	this.shape_2.setTransform(30.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA4IgJgEIAFgKIAHADIAHABQAGAAAGgEQAGgEAEgJIgwhVIANAAIApBIIAkhIIANAAIgsBXQgHAOgHAGQgJAGgKAAIgKgBg");
	this.shape_3.setTransform(18.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIBPAAIAAALIhCAAIAAAjIAfAAQANAAAJAEQAKADAFAGQAGAIAAALQAAALgFAHQgFAHgJAEQgKAEgMAAgAgeAsIAgAAQANAAAJgEQAHgGABgMQgBgKgHgGQgJgFgOAAIgfAAg");
	this.shape_4.setTransform(7.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFA4IAAhkIgmAAIAAgLIBXAAIAAALIgmAAIAABkg");
	this.shape_5.setTransform(-3.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4IgJgEIAFgKIAGADIAIABQAGAAAGgEQAFgEAGgJIgyhVIAPAAIAoBIIAjhIIAPAAIgtBXQgHAOgIAGQgIAGgKAAIgKgBg");
	this.shape_6.setTransform(-14.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA1QgLgFgHgHQgIgJgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgJALgFQAKgEAMAAQANAAAKAEQALAFAHAJQAIAHAEALQAEAKAAALQAAAMgEAKQgEAKgIAJQgHAHgLAFQgKAFgNAAQgMAAgKgFgAgWgnQgKAGgGALQgFAKAAAMQAAANAGALQAFAKAKAGQAKAGAMAAQANAAAKgGQAKgGAGgKQAFgLAAgNQAAgMgFgKQgHgLgKgGQgJgGgNgBQgMABgKAGg");
	this.shape_7.setTransform(-27.4,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgA4IAAgzIhAAAIAAAzIgMAAIAAhvIAMAAIAAAyIBAAAIAAgyIANAAIAABvg");
	this.shape_8.setTransform(-40.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAyQgMgHgIgNQgHgNAAgRQAAgPAHgNQAIgNAMgIQAOgIAPAAQAKAAAIACQAIACAFAFIAMAJIgIAJQgHgGgIgFQgJgEgLgBQgLABgLAGQgJAGgGALQgGAKABAMQAAANAFALQAGAKAJAGQALAGALAAQALAAAJgEQAIgEAIgIIAIAJQgGAGgGAEQgHAEgIADQgHACgLAAQgPAAgNgIg");
	this.shape_9.setTransform(-56.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-65,-11,130.6,21.7), null);


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
	this.shape.graphics.f("#E32627").s().dr(-376.8,-259.3,753.6,518.6);
	this.shape.setTransform(-16.6,249.9,1,1.702,0,-0.4,-1,-20.6,253.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-379,-628.8,759.9,895.5), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lap1();
	this.instance.parent = this;
	this.instance.setTransform(-134,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-134,-9,269,18), null);


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
	this.shape.graphics.f("#E32627").s().dr(-150,-300,300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBJIgvg/IguA/IgTAAIA4hKIg2hIIATAAIAsA9IAtg9IATAAIg2BIIA5BKg");
	this.shape.setTransform(54.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BKIgRgnIhPAAIgSAnIgRAAIBDiTIAPAAIBDCTgAAhAVIghhKIghBKIBCAAg");
	this.shape_1.setTransform(38.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBJIg4hHIgfAgIAAAnIgRAAIAAiSIARAAIAABXIBUhXIAVAAIg+BBIBABRg");
	this.shape_2.setTransform(23.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8BaIAAghIh2AAIgDAhIgOAAIAAgwIAPAAQALgRAFgaQAGgaAAgkIAAgaIBfAAIAACDIATAAIgCAwgAgWg3QAAAUgCASQgCASgFAPQgEAQgGAKIBSAAIAAh0Ig/AAg");
	this.shape_3.setTransform(6.8,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBGQgQgGgNgMIALgLQAKALANAEQANAGAOAAQAJAAAIgDQAIgEAFgGQAEgHAAgIQAAgKgFgGQgFgGgJgDQgJgDgLABIgPAAIAAgOIAPAAQAKAAAJgDQAHgDAFgGQAFgHAAgIQAAgIgFgFQgEgHgHgDQgIgEgKAAQgLAAgLAFQgKADgKAJIgKgLQALgKANgFQAMgFARAAQAPAAALAFQALAGAGAIQAHAJAAALQgBALgEAGQgEAHgGAEQgFAFgHACQAIACAHAFQAHAEAFAHQADAIAAAJQAAAMgGAJQgHAKgLAGQgMAFgPAAQgSAAgOgGg");
	this.shape_4.setTransform(-7.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BJIAAiSIBpAAIAAAQIhZAAIAAAyIBPAAIAAAOIhPAAIAAA0IBaAAIAAAOg");
	this.shape_5.setTransform(-20.9,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAFgNAKgLQALgLAOgGQANgGAQAAQARAAANAGQAOAGAKAKQAKALAGAOQAEAOABAOQgBAQgEANQgGAOgKAKQgKALgOAGQgOAGgQAAQgQAAgOgGgAgdg0QgNAJgIANQgHAOAAAQQAAARAHAOQAIANANAIQANAJAQAAQARAAANgJQANgIAHgNQAIgOgBgRQABgQgIgNQgHgOgOgJQgNgHgQgBQgQABgNAHg");
	this.shape_6.setTransform(-37.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBJIAAiCIhRAAIAACCIgRAAIAAiSIBzAAIAACSg");
	this.shape_7.setTransform(-54.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-64,-14,128,27.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBJIgvg/IguA/IgTAAIA4hKIg2hIIATAAIAsA9IAtg9IATAAIg2BIIA4BKg");
	this.shape.setTransform(59.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BJIAAiSIARAAIAACSgAhIBJIAAiSIARAAIAAA5IAlAAQAPAAAMAFQANAFAIAIQAIAKgBAOQABAPgHALQgHAKgMAGQgMAGgQgBgAg3A7IAmAAQASgBAJgHQALgJAAgPQAAgOgLgHQgKgHgSAAIglAAg");
	this.shape_1.setTransform(42.9,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6BJIAAiSIA9AAQANABAKADQAJADAHAGQAEAFADAGQACAGAAAHQAAAKgDAHQgEAGgFAFQgFAEgGADQAJABAHAFQAHAEAEAHQAEAHAAALQAAAMgGAJQgHAJgMAFQgMAEgQAAgAgqA7IAwAAQARgBAKgGQAJgIAAgMQAAgMgKgGQgJgHgUAAIgtAAgAgqgHIAqAAQAQAAAJgGQAJgIAAgNQAAgLgIgGQgJgHgPABIgsAAg");
	this.shape_2.setTransform(26.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgKgLQgJgKgGgOQgFgNAAgQQAAgOAFgOQAGgNAJgLQAKgLAOgGQAOgGAQAAQARAAAOAGQANAGAKAKQAKALAFAOQAGAOAAAOQAAAQgGANQgFAOgKAKQgKALgOAGQgNAGgRAAQgQAAgOgGgAgeg0QgNAJgGANQgIAOAAAQQAAARAIAOQAHANANAIQANAJAQAAQARAAANgJQANgIAHgNQAHgOABgRQgBgQgHgNQgHgOgNgJQgNgHgRgBQgRABgNAHg");
	this.shape_3.setTransform(9.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBKIgLgBIgIgCIAEgNIAFABIAHABIAIgCQAEgCAEgFQAEgGADgMQAEgLABgUQADgTAAgeIAAgaIBeAAIAACSIgRAAIAAiDIg+AAIAAAQQAAAfgCAUQgCAVgEANQgFANgFAHQgGAHgGACQgFACgGAAIgCAAg");
	this.shape_4.setTransform(-8.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BJIAAiSIBpAAIAAAQIhYAAIAAAyIBPAAIAAAOIhPAAIAAA0IBZAAIAAAOg");
	this.shape_5.setTransform(-22.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA8BaIAAghIh2AAIgDAhIgOAAIAAgwIAPAAQALgRAFgaQAGgaAAgkIAAgaIBfAAIAACDIATAAIgCAwgAgWg3QAAAUgCASQgCASgFAPQgEAQgGAKIBSAAIAAh0Ig/AAg");
	this.shape_6.setTransform(-37.7,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BJIAAiSIA9AAQANABAKADQAJADAHAGQAEAFADAGQACAGAAAHQAAAKgDAHQgEAGgFAFQgFAEgGADQAJABAHAFQAHAEAEAHQAEAHAAALQAAAMgGAJQgHAJgMAFQgMAEgQAAgAgqA7IAwAAQARgBAKgGQAJgIAAgMQAAgMgKgGQgJgHgUAAIgtAAgAgqgHIAqAAQAQAAAJgGQAJgIAAgNQAAgLgIgGQgJgHgPABIgsAAg");
	this.shape_7.setTransform(-59,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-69,-14,138.8,27.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBLQgHAAgGgCIgMgEIAHgNIAJADIAKABQAHAAAHgFQAIgFAHgMIhBhwIATAAIA1BfIAvhfIASAAIg6BzQgJASgLAIQgKAIgMAAIgCAAg");
	this.shape.setTransform(52.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABZBJIg0hHIgdAgIAAAnIgPAAIAAgnIgdggIg0BHIgUAAIA8hTIg4g/IAUAAIBNBWIAAhWIAPAAIAABWIBNhWIAVAAIg5A/IA8BTg");
	this.shape_1.setTransform(33.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAFgNAKgLQALgLAOgGQANgGAQAAQARAAAOAGQAOAGAJAKQAKALAGAOQAEAOABAOQgBAQgEANQgGAOgKAKQgKALgOAGQgOAGgQAAQgQAAgOgGgAgdg0QgOAJgGANQgIAOAAAQQAAARAIAOQAHANANAIQANAJAQAAQARAAANgJQANgIAHgNQAIgOAAgRQAAgQgIgNQgHgOgOgJQgNgHgQgBQgQABgNAHg");
	this.shape_2.setTransform(12.8,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BJIAAiSIA9AAQANABAKADQAJADAHAGQAEAFADAGQACAGAAAHQAAAKgDAHQgEAGgFAFQgFAEgGADQAJABAHAFQAHAEAEAHQAEAHAAALQAAAMgGAJQgHAJgMAFQgMAEgQAAgAgqA7IAwAAQARgBAKgGQAJgIAAgMQAAgMgKgGQgJgHgUAAIgtAAgAgqgHIAqAAQAQAAAJgGQAJgIAAgNQAAgLgIgGQgJgHgPABIgsAAg");
	this.shape_3.setTransform(-3.3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgKgLQgJgKgGgOQgFgNAAgQQAAgOAFgOQAGgNAJgLQAKgLAOgGQAOgGAQAAQARAAAOAGQANAGAKAKQAKALAFAOQAGAOAAAOQAAAQgGANQgFAOgKAKQgKALgOAGQgNAGgRAAQgQAAgOgGgAgeg0QgNAJgGANQgIAOAAAQQAAARAIAOQAHANANAIQANAJAQAAQARAAANgJQANgIAHgNQAHgOABgRQgBgQgHgNQgHgOgNgJQgNgHgRgBQgRABgNAHg");
	this.shape_4.setTransform(-20.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BJIAAiSIA2AAQAQABANAFQAMAGAHAKQAHALAAAOQAAAQgIAKQgIALgNAFQgNAGgPAAIgkAAIAAAzgAgmAHIAkAAQASAAALgIQALgJAAgQQAAgPgLgIQgKgIgSAAIglAAg");
	this.shape_5.setTransform(-35.6,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBJIAAiCIhRAAIAACCIgRAAIAAiSIBzAAIAACSg");
	this.shape_6.setTransform(-51.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-61,-14,123,27.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBJIAAh4IhXB4IgQAAIAAiSIAQAAIAAB6IBXh6IAQAAIAACSg");
	this.shape.setTransform(45.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBJIAAhCIhUAAIAABCIgQAAIAAiSIAQAAIAABCIBUAAIAAhCIARAAIAACSg");
	this.shape_1.setTransform(29.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BJIAAiSIBoAAIAAAQIhYAAIAAAyIBPAAIAAAOIhPAAIAAA0IBaAAIAAAOg");
	this.shape_2.setTransform(15,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2BJIAAh2Ig2BOIAAAAIg1hOIAAB2IgQAAIAAiSIAQAAIA1BQIA1hQIARAAIAACSg");
	this.shape_3.setTransform(-1.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BJIAAiSIBpAAIAAAQIhZAAIAAAyIBPAAIAAAOIhPAAIAAA0IBaAAIAAAOg");
	this.shape_4.setTransform(-17.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BJIAAiSIA2AAQAQABANAFQAMAGAHAKQAHALAAAOQAAAQgIAKQgIALgNAFQgNAGgPAAIgkAAIAAAzgAgmAHIAkAAQASAAALgIQALgJAAgQQAAgPgLgIQgLgIgRAAIglAAg");
	this.shape_5.setTransform(-31.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BJIAAiSIA9AAQANABAKADQAJADAHAGQAEAFADAGQACAGAAAHQAAAKgDAHQgEAGgFAFQgFAEgGADQAJABAHAFQAHAEAEAHQAEAHAAALQAAAMgGAJQgHAJgMAFQgMAEgQAAgAgqA7IAwAAQARgBAKgGQAJgIAAgMQAAgMgKgGQgJgHgUAAIgtAAgAgqgHIAqAAQAQAAAJgGQAJgIAAgNQAAgLgIgGQgJgHgPABIgsAAg");
	this.shape_6.setTransform(-46,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-56,-14,111.9,27.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgJgLQgLgKgFgOQgFgNAAgQQAAgOAFgOQAFgNALgLQAKgLANgGQAOgGAQAAQARAAANAGQAPAGAJAKQAKALAGAOQAFAOAAAOQAAAQgFANQgGAOgKAKQgKALgOAGQgNAGgRAAQgQAAgOgGgAgeg0QgNAJgHANQgHAOAAAQQAAARAHAOQAIANANAIQANAJAQAAQARAAANgJQANgIAHgNQAHgOAAgRQAAgQgHgNQgIgOgNgJQgNgHgQgBQgQABgOAHg");
	this.shape.setTransform(39.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBJIAAiSIBdAAIAAAQIhMAAIAACCg");
	this.shape_1.setTransform(25.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAFgNAKgLQALgLAOgGQANgGAQAAQARAAAOAGQAOAGAJAKQAKALAFAOQAFAOABAOQgBAQgFANQgFAOgKAKQgKALgOAGQgOAGgQAAQgRAAgNgGgAgdg0QgOAJgGANQgIAOAAAQQAAARAIAOQAHANANAIQANAJAQAAQARAAANgJQANgIAHgNQAIgOAAgRQAAgQgIgNQgHgOgNgJQgOgHgQgBQgQABgNAHg");
	this.shape_2.setTransform(9.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBJIAAhCIhTAAIAABCIgRAAIAAiSIARAAIAABCIBTAAIAAhCIARAAIAACSg");
	this.shape_3.setTransform(-7.2,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA2BJIAAh2Ig2BOIAAAAIg1hOIAAB2IgQAAIAAiSIAQAAIA1BQIA1hQIARAAIAACSg");
	this.shape_4.setTransform(-24.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtBJIAAg4IgrAAIgqA4IgUAAIAug6QgMgDgJgFQgJgGgFgIQgFgJgBgMQAAgJADgIQADgHAGgFQAGgHALgFQALgEAOAAIA+AAIAACSgAgcgxQgKAIAAAOQAAAJAFAIQAFAGAIAEQAJADALAAIAtAAIAAg8IgtAAQgSAAgKAIg");
	this.shape_5.setTransform(-48,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-57,-14,108,27.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol32();
	this.t3.parent = this;
	this.t3.setTransform(-28,28);

	this.t2 = new lib.Symbol31();
	this.t2.parent = this;
	this.t2.setTransform(-7,-5);

	this.t1 = new lib.Symbol30();
	this.t1.parent = this;
	this.t1.setTransform(-33,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-120,-56,225.6,103), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.o2 = new lib.Symbol28();
	this.o2.parent = this;
	this.o2.setTransform(49,9);

	this.o1 = new lib.Symbol27();
	this.o1.parent = this;
	this.o1.setTransform(-82,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.o1},{t:this.o2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-193,-164,376,328), null);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t1 = new lib.Symbol25();
	this.t1.parent = this;
	this.t1.setTransform(9,-9);

	this.t2 = new lib.Symbol24();
	this.t2.parent = this;
	this.t2.setTransform(30,9);

	this.t3 = new lib.Symbol23();
	this.t3.parent = this;
	this.t3.setTransform(9,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t2},{t:this.t1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-77.7,-20,173.6,57.9), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t4 = new lib.Symbol22();
	this.t4.parent = this;
	this.t4.setTransform(-22.1,28.7);

	this.t3 = new lib.Symbol21();
	this.t3.parent = this;
	this.t3.setTransform(10.9,9.6);

	this.t2 = new lib.Symbol20();
	this.t2.parent = this;
	this.t2.setTransform(-0.1,-9.6);

	this.t1 = new lib.Symbol19();
	this.t1.parent = this;
	this.t1.setTransform(-40.7,-28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-105.7,-39.7,211.8,79.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lap2();
	this.instance.parent = this;
	this.instance.setTransform(-139,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131,1.1,1,1,0,0,0,383.8,251.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-631.8,-879.6,771.8,895.5), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 15
	this.o2 = new lib.Symbol15();
	this.o2.parent = this;
	this.o2.setTransform(-14.7,0,1,1,0,0,0,-134.5,0);

	this.timeline.addTween(cjs.Tween.get(this.o2).wait(1));

	// Symbol 14
	this.o1 = new lib.Symbol14();
	this.o1.parent = this;
	this.o1.setTransform(-0.8,2.3,1,1,0,0,0,128.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.o1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E32627").s().p("Eg7kgneMB1ugCDMABaBRAMh1tACDg");
	this.shape.setTransform(363.6,-443.5,1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-760.8,-895.3,1505.6,911.2), null);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t5 = new lib.Symbol9();
	this.t5.parent = this;
	this.t5.setTransform(-66,24);

	this.t4 = new lib.Symbol8();
	this.t4.parent = this;
	this.t4.setTransform(60,0);

	this.t3 = new lib.Symbol7();
	this.t3.parent = this;
	this.t3.setTransform(-69,0);

	this.t2 = new lib.Symbol6();
	this.t2.parent = this;
	this.t2.setTransform(37,-24);

	this.t1 = new lib.Symbol5();
	this.t1.parent = this;
	this.t1.setTransform(-73,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-130,-38,259.8,75.3), null);


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

	// s2
	this.s2 = new lib.Symbol37copy();
	this.s2.parent = this;
	this.s2.setTransform(-3.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s1
	this.s1 = new lib.Symbol37();
	this.s1.parent = this;
	this.s1.setTransform(-3.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqA/IhRhnIAABnIgNAAIAAh9IANAAIBOBkIAAhkIAOAAIAAB9g");
	this.shape.setTransform(91.6,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA8QgLgFgJgJQgIgJgEgMQgFgMgBgNQABgMAFgMQAEgMAIgIQAJgKAMgFQAMgFANAAQAOAAAMAFQAMAFAJAJQAIAJAEAMQAFALABANQgBANgFAMQgEALgIAKQgJAJgMAFQgMAFgOAAQgOAAgMgFgAgZgsQgLAHgGAMQgGAMAAANQAAAOAGAMQAHAMALAHQAKAHAOAAQAOAAAMgHQALgHAGgLQAGgNABgOQgBgOgGgLQgHgMgLgHQgLgHgOAAQgNAAgMAHg");
	this.shape_1.setTransform(76.9,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyA/IAAh9IA1AAQALAAAIADQAIACAGAGQAEAEACAFQACAGAAAFQAAAJgDAGQgDAFgFAEQgEAEgFACQAHABAGAEQAGAEAEAGQAEAGAAAJQAAALgGAHQgGAIgKAEQgKAEgOAAgAgkAyIApAAQAPAAAIgGQAIgFAAgLQAAgLgIgGQgJgFgQAAIgnAAgAgkgGIAkAAQANAAAIgGQAIgGAAgKQAAgKgHgFQgHgGgOgBIglAAg");
	this.shape_2.setTransform(63.1,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA/IgjgxIgkAAIAAAxIgOAAIAAh9IA1AAQALAAAKADQAJADAGAGQAEAFADAGQADAHAAAIQAAAKgFAIQgFAHgHAEQgHAEgKACIAmA0gAglABIAmAAQAJAAAHgCQAIgDAEgGQAEgGAAgIQAAgMgJgHQgIgGgPAAIgmAAg");
	this.shape_3.setTransform(50.2,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxA/IgPghIhDAAIgQAhIgOAAIA6h+IAMAAIA5B+gAAdARIgdg/IgcA/IA5AAg");
	this.shape_4.setTransform(36.1,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA4QgOgIgJgPQgHgOgBgTQABgRAHgPQAJgPAOgIQAOgJASAAQALAAAJADQAJACAGAFQAHAEAHAGIgJAKQgJgIgJgEQgJgFgNAAQgOAAgKAHQgMAHgFAMQgHALAAAOQAAAOAHANQAGALALAHQALAHANAAQANAAAJgFQAJgEAKgJIAJAKQgHAHgHAEQgIAFgIADQgKACgLAAQgRAAgOgJg");
	this.shape_5.setTransform(22.6,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGA/IAAhuIgWAHIgEgMIAfgLIAKAAIAAB+g");
	this.shape_6.setTransform(6.4,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGPOIAAhzQgBAqg8AiQg4AghMAGQhSAGg0geQg9gjAAhMIAA0dQAAhMA9gjQA0gfBSAHQBMAGA4AgQA8AiABAqIAAnhID5AAIAAebgAgpl/QgUAQAAAgIAAQNQAAAgAUAQQAUAPAZgFQAbgFATgXQAUgaAAgpIAAvDQAAgpgUgaQgTgYgbgEIgMgBQgSAAgPALg");
	this.shape_7.setTransform(-18.9,0.3,0.156,0.156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj/MBQg8gmAAhJIAApEQAAhNA8g0QAYgVBsg9QBag0Aog1QA8hNAAh3IAAhRQAAgmgTgYQgSgWgWAAIgIAAQgXAAgRAWQgTAYAAAmIAAEpIj5AAIAAkpQAAiQBkhMQBUhAB8AAIAIAAQB8AABUBAQBkBMAACQIAAUhIj5AAIAAiIQgCA7g6AmQg2AlhMADIgPABQhFAAgwgfgAgHAqQguArAAAoIAAGiQAAA7A8gFQAXgCASgOQATgOAAgUIAAo2QgyAlgYAYg");
	this.shape_8.setTransform(-30.6,3,0.156,0.156);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ak/POIAA+bIETAAQDFgBBbBYQBMBKAACKIAAH0QAACKhMBIQhbBXjFABIAANSgAgsheQA1AAAegYQAagWAAgiIAAn0QAAgjgagVQgegZg1AAg");
	this.shape_9.setTransform(-42.1,0.3,0.156,0.156);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwMRIiktLICZrWIEFAAIiZLWICkNLg");
	this.shape_10.setTransform(-51.9,3.2,0.156,0.156);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah8POIAA+bID5AAIAAebg");
	this.shape_11.setTransform(-57.1,0.3,0.156,0.156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA+McIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA4gID5AAIAABfQAwhEBFgeQBBgcA/AMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_12.setTransform(-65.7,3.1,0.156,0.156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA+POIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA+bID5AAIAAHaQAwhEBEgeQBBgcBAAMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_13.setTransform(-83,0.3,0.156,0.156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah7MRIAA4hID3AAIAAYhg");
	this.shape_14.setTransform(-74.3,3.2,0.156,0.156);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiJPOIAA6XIj4AAIAAkEIMDAAIAAEEIj5AAIAAaXg");
	this.shape_15.setTransform(-95.5,0.3,0.156,0.156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-101.5,-16.1,202.4,31.7), null);


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
		var txt1 = this.txt1;
		var txt2 = this.txt2;
		var txt3 = this.txt3;
		var txt4 = this.txt4;
		var gray = this.gray;
		
		
		var master = new TimelineMax({repeat: -1, delay:0.1})
		
		master.add( frame1() )
		     // .add( frame2(), "-=0.5")
		
		
		
		function frame1() {
			
		var frame1 = new TimelineMax();
		
		frame1.from(pic1, 2.2, {scaleX:1.4, scaleY:1.4, alpha:0, ease:Expo.easeInOut}, "-=0.0")
		
		      .to(logo2.b, 1.2, {x:18, scaleX:0.5, ease:Expo.easeInOut}, "-=1.2")
		      .from(logo2.r, 1.2, {x:-18, scaleX:0.5, ease:Expo.easeInOut}, "-=1.2")
			  
		      .to(logo1.d1, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	  
		      .from(logo1.d2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	
			  
		      .to(logo1.s1, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")	  
		      .from(logo1.s2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.2")		  
			  
		      .from(txt1.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")	  
		      .from(txt1.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
		      .from(txt1.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt1.t4, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt1.t5, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")
		
		      .to(txt1.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=0.4")		  
		      .to(txt1.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")		  
		      .to(txt1.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")	  
		      .to(txt1.t4, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")	  
		      .to(txt1.t5, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")
			  
		      .to(logo2.b, 1.2, {x:-18, scaleX:1, ease:Expo.easeInOut}, "-=0.8")
		      .to(logo2.r, 1.2, {x:-18, scaleX:1, ease:Expo.easeInOut}, "-=1.2")	 	  
			  
		      .from(pic2, 1.8, {x:"+=300", ease:Expo.easeInOut}, "-=1.2")
		      .from(gray, 1.8, {alpha:0, ease:Expo.easeInOut}, "-=1.8")
		      .to(pic1, 2.0, {scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut}, "-=1.8")	  
		      .from(pic2.o1, 2.0, {rotation:"+=90", ease:Expo.easeInOut}, "-=1.8")
			  
		      .to(logo1.d1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      .to(logo1.d2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")	
			  
		      .to(logo1.s1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      .to(logo1.s2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")		  
			  
		      .from(txt2.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")	
		      .from(txt2.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt2.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
		      .from(txt2.t4, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  
		      .from(txt3.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeOut}, "-=0.0")	
		      .from(txt3.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt3.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeOut}, "-=0.7")
			  
		      .to(txt3.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=1.4")		  
		      .to(txt3.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")	  
		      .to(txt3.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")		  
		      .to(pic2, 1.8, {x:"-=300", ease:Expo.easeInOut}, "-=0.6") 
		      .to(txt2.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=1.88")		  
		      .to(txt2.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=1.86")	  
		      .to(txt2.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=1.84")	 	  
		      .to(txt2.t4, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=1.82")
			  
		      .from(pic3.o1, 1.2, {x:"+=360", ease:Expo.easeOut}, "-=0.7") 	  
		      .from(pic3.o2, 1.2, {x:"+=360", ease:Expo.easeOut}, "-=1.1") 
			  
		      .from(txt4.t1, 1.2, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")		  
		      .from(txt4.t2, 1.2, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.4")		  
		      .from(txt4.t3, 1.2, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.4")	
			  
		      .to(pic3.o1, 1.2, {x:"-=360", ease:Expo.easeIn}, "+=1.5") 	
		      .to(pic3.o2, 1.2, {x:"-=360", ease:Expo.easeIn}, "-=1.1")
		 	  
		      .to(txt4.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.8")		  
		      .to(txt4.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")	  
		      .to(txt4.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.78")		  
			  
		return frame1;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt4
	this.txt4 = new lib.Symbol29();
	this.txt4.parent = this;
	this.txt4.setTransform(-6,-145);

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(1));

	// txt3
	this.txt3 = new lib.Symbol18copy();
	this.txt3.parent = this;
	this.txt3.setTransform(-44,183);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// txt2
	this.txt2 = new lib.Symbol18();
	this.txt2.parent = this;
	this.txt2.setTransform(18,-138);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// logo2
	this.logo2 = new lib.Symbol3();
	this.logo2.parent = this;
	this.logo2.setTransform(132,36);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// logo1
	this.logo1 = new lib.Symbol2();
	this.logo1.parent = this;
	this.logo1.setTransform(-26,-258);

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(1));

	// pic3
	this.pic3 = new lib.Symbol26();
	this.pic3.parent = this;
	this.pic3.setTransform(-46,106);

	this.timeline.addTween(cjs.Tween.get(this.pic3).wait(1));

	// txt1
	this.txt1 = new lib.Symbol4();
	this.txt1.parent = this;
	this.txt1.setTransform(1,-178);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// pic2
	this.pic2 = new lib.Symbol13();
	this.pic2.parent = this;
	this.pic2.setTransform(-3.9,48.4,1,1,62,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.pic2).wait(1));

	// gray
	this.gray = new lib.Symbol17();
	this.gray.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.gray).wait(1));

	// pic1
	this.pic1 = new lib.Symbol1();
	this.pic1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pic1).wait(1));

	// red1
	this.red1 = new lib.Symbol10();
	this.red1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.red1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(-375.1,-1036.6,1511.3,1746.2), null);


// stage content:
(lib.index_300x600_google = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
p.nominalBounds = new cjs.Rectangle(-75.2,-436.6,1511.4,1746.2);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1504198819574", id:"bg"},
		{src:"images/lap1.png?1504198819574", id:"lap1"},
		{src:"images/lap2.png?1504198819574", id:"lap2"},
		{src:"images/nout1.png?1504198819574", id:"nout1"},
		{src:"images/nout2.png?1504198819574", id:"nout2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;