(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,305);


(lib.pic = function() {
	this.initialize(img.pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.pic2 = function() {
	this.initialize(img.pic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,301);


(lib.pic3 = function() {
	this.initialize(img.pic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,300);// helper functions:

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


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeBxIgdg/IiDAAIgcA/IgSAAIBpjhIAPAAIBoDhgAA6AjIg6iBIg7CBIB1AAg");
	this.shape.setTransform(68.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBlQgZgQgOgaQgPgaAAghQAAgfAPgbQAOgaAZgPQAZgPAggBQATAAAQAFQAPAEAMAJQANAIALALIgLALQgOgPgTgJQgRgIgagBQgaABgVANQgVANgNAXQgMAWAAAcQAAAdANAWQAMAXAVANQAWANAaABQAXAAATgJQASgJARgRIALALQgRARgWALQgVAKgdABQgfAAgZgPg");
	this.shape_1.setTransform(44.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPBwIAAjfICeAAIAAAQIiOAAIAABYIB/AAIAAANIh/AAIAABaICPAAIAAAQg");
	this.shape_2.setTransform(21.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABIBwIAAhpIiPAAIAABpIgQAAIAAjfIAQAAIAABoICPAAIAAhoIAQAAIAADfg");
	this.shape_3.setTransform(-1.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBrQgWgJgUgSIALgNQASARAUAJQATAIAXAAQAQAAAOgGQANgGAHgLQAIgLAAgOQAAgWgSgNQgRgMgfAAIgXAAIAAgOIAXAAQARAAANgFQAOgGAIgKQAIgLAAgPQAAgNgIgKQgGgKgNgGQgNgGgQAAQgRAAgRAGQgRAHgPAMIgLgMQARgOATgHQASgHAYAAQAVAAARAIQAQAIAJANQAJAOAAARQAAAPgGALQgGALgKAGQgKAHgLADQAOADALAHQALAIAHALQAGALABAPQgBARgJAPQgKAOgRAIQgRAJgXAAQgZAAgXgJg");
	this.shape_4.setTransform(-24.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABJBwIAAjHIiRDHIgQAAIAAjfIAQAAIAADHICRjHIAQAAIAADfg");
	this.shape_5.setTransform(-46.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhWBwIAAjfICcAAIAAAQIiLAAIAABPIBKAAQAYAAASAGQASAGALAOQALAOgBAWQAAAggVARQgUARglAAgAhFBgIBJAAQAgABAQgMQARgMAAgbQAAgYgRgMQgSgLgfAAIhIAAg");
	this.shape_6.setTransform(-69,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-83,-19.5,166,39.2), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBrQgUgJgPgRQgPgQgIgVQgIgUAAgYQAAgWAIgVQAIgUAPgRQAPgQAVgKQAVgJAYAAQAaAAAUAJQAVAKAPAQQAPAQAIAVQAHAVABAWQgBAXgIAVQgIAVgPAQQgOAQgVAKQgVAJgZAAQgZAAgVgJgAgxhWQgVANgMAXQgMAWgBAcQABAcAMAXQAMAXAWANQAVAOAbAAQAcAAAVgOQAWgNAMgXQAMgWAAgdQAAgbgMgXQgNgXgVgNQgWgOgbAAQgbAAgWAOg");
	this.shape.setTransform(61.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBwIAAjfICLAAIAAAPIh6AAIAADQg");
	this.shape_1.setTransform(39.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPBwIAAjfICeAAIAAAPIiOAAIAABYIB/AAIAAAPIh/AAIAABaICPAAIAAAPg");
	this.shape_2.setTransform(19.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNBwIAAjfIAQAAIAADQIB2AAIAAjQIAPAAIAADQIB2AAIAAjQIARAAIAADfg");
	this.shape_3.setTransform(-9.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABeBxIgcg/IiEAAIgcA/IgSAAIBpjhIAPAAIBoDhgAA6AjIg6iBIg7CBIB1AAg");
	this.shape_4.setTransform(-39.9,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBwIAAjfIBcAAQAWAAAQAHQAQAGAJANQAJAMAAASQAAAPgGALQgFAKgJAGQgJAIgJADQAOACALAHQAMAHAHALQAHAKAAAQQAAASgKAOQgKAOgSAIQgSAHgZAAgAhHBhIBQAAQAdAAARgNQAQgMABgVQAAgWgSgLQgRgLghAAIhLAAgAhHgIIBJAAQARAAANgFQAMgFAIgKQAHgLAAgPQAAgTgOgMQgPgKgbgBIhKAAg");
	this.shape_5.setTransform(-63.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-77.7,-19.6,155.4,39.2), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgCKIAAg0Ii/AAIgEA0IgNAAIAAhDIAXAAQAMgQAIgZQAIgYAEgeQAEgeAAgjIAAgwICJAAIAADQIAdAAIgCBDgAglhNQAAAegDAcQgEAcgIAXQgHAXgKAQICIAAIAAjAIhoAAg");
	this.shape.setTransform(88.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBrQgUgJgPgRQgPgQgIgVQgIgUAAgYQAAgWAIgVQAIgUAPgRQAPgQAVgKQAVgJAYAAQAaAAAUAJQAVAKAPAQQAPAQAIAVQAHAVABAWQgBAXgIAVQgIAVgPAQQgOAQgVAKQgVAJgZAAQgZAAgVgJgAgxhWQgVANgMAXQgMAWgBAcQABAcAMAXQAMAXAWANQAVAOAbAAQAcAAAVgOQAWgNAMgXQAMgWAAgdQAAgbgMgXQgNgXgVgNQgWgOgbAAQgbAAgWAOg");
	this.shape_1.setTransform(62.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHBwIhbhwIg3A3IAAA5IgRAAIAAjfIARAAIAACSICNiSIAXAAIhhBjIBlB8g");
	this.shape_2.setTransform(39.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAJIAAgRIBVAAIAAARg");
	this.shape_3.setTransform(19.9,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBkQgZgPgPgaQgOgaAAghQAAgfAOgbQAPgZAZgQQAZgPAggBQATAAAQAFQAPAEAMAJQAMAIAMALIgLALQgPgPgRgIQgSgKgaAAQgZAAgWANQgVAOgNAWQgMAXAAAcQABAdAMAXQAMAWAWAOQAVANAaAAQAXAAATgJQATgJAQgRIALALQgRARgVALQgWAKgdABQgfgBgZgPg");
	this.shape_4.setTransform(2.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBkQgZgPgPgaQgOgaAAghQAAgfAOgbQAPgZAZgQQAZgPAggBQAUAAAPAFQAPAEAMAJQAMAIAMALIgLALQgOgPgSgIQgTgKgYAAQgaAAgWANQgVAOgMAWQgMAXgBAcQAAAdANAXQAMAWAWAOQAVANAaAAQAYAAASgJQASgJARgRIALALQgRARgWALQgUAKgeABQgfgBgZgPg");
	this.shape_5.setTransform(-21.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPBwIAAjfICeAAIAAAPIiOAAIAABYIB/AAIAAAPIh/AAIAABaICPAAIAAAPg");
	this.shape_6.setTransform(-43.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRBwIAAjfIBRAAQAYAAASAIQATAIALAPQAKAQAAAWQAAAXgMARQgMAPgTAHQgVAJgWgBIg9AAIAABUgAhBANIA+AAQATAAAQgHQAQgGAJgMQAJgNAAgRQAAgRgJgMQgJgNgPgFQgPgHgTAAIhAAAg");
	this.shape_7.setTransform(-65.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABhCKIAAg0IjBAAIgDA0IgOAAIAAhDIAYAAQAMgQAIgZQAIgYAEgeQAEgeAAgjIAAgwICIAAIAADQIAfAAIgEBDgAgkhNQAAAegFAcQgEAcgHAXQgHAXgLAQICJAAIAAjAIhnAAg");
	this.shape_8.setTransform(-89,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-102.7,-19.6,205.5,39.2), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(-183.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-183.5,-150,367,300), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-206.3,56.3,1,1,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-206.3,-205.4,412.7,410.8), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhgBcQgLgBgIgKQgIgJABgKQABgJAJgIQBahKAvg2QACgDAGgCIAHgEQATABAMARIArA9QATAcgWAPQgMAIgMgDQgMgEgHgMQgPgcgRADQgKACgXAWQgOAPgYATIgpAhQgJAIgJAAIgCgBg");
	this.shape.setTransform(2.8,26.7,0.442,0.442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjuE4QgLgUAOgMIAfgQQCThOBgiMQBRh1A3i0QAJgkAFgRQAKgcAZAHQAXAHgEAfQg2DniACnQhjCFiLBEQgbAOgFABIgGAAQgOAAgJgPg");
	this.shape_1.setTransform(-8.2,6.4,0.442,0.442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AkADRQgKgSANgMQAEgEAYgNQC/hlBojUIASgkIAOgbQAJgNARADQAQADAGAPQADAIABAWQADA4AVBCQAYBMAtA3QAMAOACAKQADANgMALQgOALgOgGQgKgFgNgPQgxg+gbhSIgRg0QgOAIgJAPQgKASgFAIQhmCeilBaQgZANgGACIgFAAQgPAAgIgRg");
	this.shape_2.setTransform(1.1,19.3,0.442,0.442);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiyGyQgHgPAIgLQAGgIAQgIQClhTBnibQBXiDA0jHQAOg0AFgzQAEgrgRgdQgRgbgkgKQgigKgeAQQgeAPgTAmQgKAVgKApQhJEpj9C9QgQALgOAHQgVALgOgTQgOgSATgSQAEgEAcgUQDpivBBkPQAShJAcgkQAigrAtgNQAugOAxATQAvARAVAqQAXAtgCBRQglDbhWCaQhoC8i4BuQgTAMgZALQgQAHgKAAQgOAAgIgPg");
	this.shape_3.setTransform(-6.3,5.3,0.442,0.442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AGgHMQgJgFgNgPQgug4gXhKQgUg9gHhTIgBggIABghQgCgzAIhBIASh0QAVh4hEhQQhEhQhxAJQhKAFg2A3Qg4A4gTBYQgzDji0CgQgRAQguAhQgcAUgQgYQgOgVAbgVIAvglQCtiTA0jhQAtjACogqQCNgjBlBcQBlBcgOCVQgFA1gPBpQgKBdAFBCQAGBJARA3QAVBAAnAyQAMAPACAIQAEAOgNALQgJAIgJAAQgFAAgEgCg");
	this.shape_4.setTransform(-3.4,0.5,0.442,0.442);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AHRGeQgLhMAWh1QAdicgeh0QgniXh5hcQh5hciggBQiegBh/BpQiABpgnClQgNA0gNAkQgRAvgXAkQgMAUgIAFQgOAKgRgKQgQgKAEgPQABgHANgUQATgfAPgoQALgdANguQBdldE4hEQB9gbB5AhQBzAgBZBQQBZBRAsBvQAuB1gNCAQgEAwgQBfQgLBWAFA7QADAdgaAEIgFABQgXAAgEgfg");
	this.shape_5.setTransform(0,-11,0.442,0.442);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AHFHNQgHgGgKgSQgZgxgKg8QgJgxAAhBQABhNAXiDQAZiPhDhxQhEhwiDgjQiOgmh5BOQh7BOglCbQgxDFh+B5IgWAUQgaAUgSgVQgQgSAWgWIAngmQBmhqAjibQAhiRBpheQBphfCEgFQC3gIB6CCQB6CCgTC4QgEAugPBeQgLBUAEA6QAFBhAfA+QAKATABAJQABAPgRAIQgHAEgHAAQgIAAgGgGg");
	this.shape_6.setTransform(-2.3,-4.7,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-24.3,-30.7,48.6,61.5), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFDFE").s().p("AhgBcQgLgBgIgKQgIgJABgKQABgJAJgIQBahKAvg2QACgDAGgCIAHgEQATABAMARIArA9QATAcgWAPQgMAIgMgDQgMgEgHgMQgPgcgRADQgKACgXAWQgOAPgYATIgpAhQgJAIgJAAIgCgBg");
	this.shape.setTransform(2.8,26.7,0.442,0.442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFEFE").s().p("AjuE4QgLgUAOgMIAfgQQCThOBgiMQBRh1A3i0QAJgkAFgRQAKgcAZAHQAXAHgEAfQg2DniACnQhjCFiLBEQgbAOgFABIgGAAQgOAAgJgPg");
	this.shape_1.setTransform(-8.2,6.4,0.442,0.442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFEFE").s().p("AkADRQgKgSANgMQAEgEAYgNQC/hlBojUIASgkIAOgbQAJgNARADQAQADAGAPQADAIABAWQADA4AVBCQAYBMAtA3QAMAOACAKQADANgMALQgOALgOgGQgKgFgNgPQgxg+gbhSIgRg0QgOAIgJAPQgKASgFAIQhmCeilBaQgZANgGACIgFAAQgPAAgIgRg");
	this.shape_2.setTransform(1.1,19.3,0.442,0.442);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AiyGyQgHgPAIgLQAGgIAQgIQClhTBnibQBXiDA0jHQAOg0AFgzQAEgrgRgdQgRgbgkgKQgigKgeAQQgeAPgTAmQgKAVgKApQhJEpj9C9QgQALgOAHQgVALgOgTQgOgSATgSQAEgEAcgUQDpivBBkPQAShJAcgkQAigrAtgNQAugOAxATQAvARAVAqQAXAtgCBRQglDbhWCaQhoC8i4BuQgTAMgZALQgQAHgKAAQgOAAgIgPg");
	this.shape_3.setTransform(-6.3,5.3,0.442,0.442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AGgHMQgJgFgNgPQgug4gXhKQgUg9gHhTIgBggIABghQgCgzAIhBIASh0QAVh4hEhQQhEhQhxAJQhKAFg2A3Qg4A4gTBYQgzDji0CgQgRAQguAhQgcAUgQgYQgOgVAbgVIAvglQCtiTA0jhQAtjACogqQCNgjBlBcQBlBcgOCVQgFA1gPBpQgKBdAFBCQAGBJARA3QAVBAAnAyQAMAPACAIQAEAOgNALQgJAIgJAAQgFAAgEgCg");
	this.shape_4.setTransform(-3.4,0.5,0.442,0.442);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AHRGeQgLhMAWh1QAdicgeh0QgniXh5hcQh5hciggBQiegBh/BpQiABpgnClQgNA0gNAkQgRAvgXAkQgMAUgIAFQgOAKgRgKQgQgKAEgPQABgHANgUQATgfAPgoQALgdANguQBdldE4hEQB9gbB5AhQBzAgBZBQQBZBRAsBvQAuB1gNCAQgEAwgQBfQgLBWAFA7QADAdgaAEIgFABQgXAAgEgfg");
	this.shape_5.setTransform(0,-11,0.442,0.442);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AHFHNQgHgGgKgSQgZgxgKg8QgJgxAAhBQABhNAXiDQAZiPhDhxQhEhwiDgjQiOgmh5BOQh7BOglCbQgxDFh+B5IgWAUQgaAUgSgVQgQgSAWgWIAngmQBmhqAjibQAhiRBpheQBphfCEgFQC3gIB6CCQB6CCgTC4QgEAugPBeQgLBUAEA6QAFBhAfA+QAKATABAJQABAPgRAIQgHAEgHAAQgIAAgGgGg");
	this.shape_6.setTransform(-2.3,-4.7,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-24.3,-30.7,48.6,61.5), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiAzIAAhaIhCBaIgIAAIAAhlIAIAAIAABaIBChaIAHAAIAABlg");
	this.shape.setTransform(90.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhAzIAAhaIhBBaIgIAAIAAhlIAIAAIAABaIBBhaIAIAAIAABlg");
	this.shape_1.setTransform(79.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA/IAAgXIhVAAIAAhmIAIAAIAABfIA/AAIAAhfIAIAAIAABfIAOAAIgCAeg");
	this.shape_2.setTransform(68.5,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg8AAIgMAdIgJAAIAwhnIAGAAIAxBngAAbAQIgbg6IgaA6IA1AAg");
	this.shape_3.setTransform(56.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApAzIAAhYIgpA6IAAAAIgog6IAABYIgIAAIAAhlIAIAAIAoA7IApg7IAHAAIAABlg");
	this.shape_4.setTransform(44.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAzIAAhlIAlAAQALAAAJADQAIAEAFAHQAFAHAAAKQAAALgGAHQgFAHgJADQgJAEgKAAIgcAAIAAAmgAgdAGIAcAAQAJAAAHgDQAHgDAEgFQAEgGAAgIQAAgIgEgFQgEgGgHgDQgHgCgIAAIgdAAg");
	this.shape_5.setTransform(33.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_6.setTransform(22,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDA3IAAgMIgDAAIgCAAQgPAAgKgFQgLgHgFgJQgGgLAAgLQAAgLAGgLQAFgJALgHQAKgFAPAAIACAAIADAAIAAgLIAHAAIAAALIADAAIABAAQAQAAAKAFQALAHAFAJQAGALAAALQAAALgGALQgFAJgLAHQgKAFgQAAIgBAAIgDAAIAAAMgAAEAlIAEAAQANgBAJgFQAJgEAEgIQAFgJAAgKQAAgKgFgJQgEgIgJgEQgJgFgNgBIgEAAgAgdgfQgJAEgEAIQgFAJAAAKQAAAKAFAJQAEAIAJAEQAJAFAMABIAFAAIAAhKIgFAAQgMABgJAFg");
	this.shape_7.setTransform(9.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhAAAIAAAwIgIAAIAAhlIAIAAIAAAvIBAAAIAAgvIAIAAIAABlg");
	this.shape_8.setTransform(-2.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhAzIAAhaIhBBaIgIAAIAAhlIAIAAIAABaIBBhaIAIAAIAABlg");
	this.shape_9.setTransform(-13.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiBBIAAhbIhCBbIgIAAIAAhmIAIAAIAABaIBChaIAHAAIAABmgAgMgyQgFgFgBgIIAGgBQABAFADADQADADAFAAQAGAAADgDQADgDACgFIAGABQgBAIgFAFQgGAEgIAAQgGAAgGgEg");
	this.shape_10.setTransform(-29.2,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_11.setTransform(-41,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhAAAIAAAwIgIAAIAAhlIAIAAIAAAvIBAAAIAAgvIAIAAIAABlg");
	this.shape_12.setTransform(-52.8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABCAzIgogzIgWAYIAAAbIgHAAIAAgbIgXgYIgnAzIgJAAIArg5IgogsIAJAAIA7BAIAAhAIAHAAIAABAIA6hAIAKAAIgoAsIArA5g");
	this.shape_13.setTransform(-66.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg7AAIgOAdIgHAAIAvhnIAHAAIAvBngAAaAQIgag6IgbA6IA1AAg");
	this.shape_14.setTransform(-79.8,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoAzIAAhlIAqAAQAKAAAHADQAIADAEAGQAEAFAAAIQAAAHgDAFQgCAFgEADIgIAFQAGAAAFADQAFADAEAFQADAFAAAHQAAAJgFAGQgEAGgJAEQgIADgLAAgAggAsIAkAAQAOAAAHgFQAIgGAAgKQAAgKgIgFQgIgFgPAAIgiAAgAgggDIAhAAQAIAAAGgCQAGgDADgFQADgEAAgHQAAgJgGgFQgHgFgMAAIgiAAg");
	this.shape_15.setTransform(-90.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-98.2,-10,196.5,20.1), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAzIAAhlIAIAAIAAApIAdAAQAKAAAJADQAIADAFAFQAGAHAAAKQAAAKgFAHQgEAIgJADQgIAEgLAAgAgdAsIAdAAQAOAAAIgGQAIgGAAgMQAAgMgIgFQgJgFgNAAIgdAAg");
	this.shape.setTransform(67.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAzIAAheIgkAAIAAgHIBOAAIAAAHIgjAAIAABeg");
	this.shape_1.setTransform(57.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgGgMgBgPQABgOAGgMQAGgMAMgHQALgHAOAAQAKAAAGACQAIACAFAEIALAJIgFAFQgHgHgIgEQgIgEgMAAQgLAAgKAGQgJAGgGAKQgGALAAAMQAAANAGAKQAFALAKAGQAKAGALAAQALAAAJgEQAIgEAIgIIAFAFQgIAIgKAFQgKAFgNAAQgNAAgMgHg");
	this.shape_2.setTransform(48,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_3.setTransform(36.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhAAAIAAAwIgJAAIAAhlIAJAAIAAAvIBAAAIAAgvIAIAAIAABlg");
	this.shape_4.setTransform(24.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhBAAIAAAwIgIAAIAAhlIAIAAIAAAvIBBAAIAAgvIAHAAIAABlg");
	this.shape_5.setTransform(13.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg7AAIgOAdIgIAAIAwhnIAGAAIAxBngAAbAQIgbg6IgbA6IA2AAg");
	this.shape_6.setTransform(1.9,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAzIAAhlIAlAAQALAAAJADQAIAEAFAHQAFAHAAAKQAAALgGAHQgFAHgJADQgJAEgKAAIgcAAIAAAmgAgdAGIAcAAQAJAAAHgDQAHgDAEgFQAEgGAAgIQAAgIgEgFQgEgGgHgDQgHgCgIAAIgdAAg");
	this.shape_7.setTransform(-8.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkAzIgkgvIgjAvIgJAAIAogzIgngyIAJAAIAiAtIAjgtIAJAAIgoAyIAqAzg");
	this.shape_8.setTransform(-19,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_9.setTransform(-30.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgHQALgHAOAAQAJAAAIACQAGACAGAEIALAJIgFAFQgHgHgIgEQgIgEgMAAQgLAAgKAGQgJAGgGAKQgGALAAAMQAAANAGAKQAGALAKAGQAJAGALAAQAMAAAIgEQAIgEAIgIIAFAFQgIAIgJAFQgLAFgNAAQgOAAgLgHg");
	this.shape_10.setTransform(-41.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArA0IgNgdIg8AAIgNAdIgIAAIAwhnIAGAAIAxBngAAbAQIgbg6IgaA6IA1AAg");
	this.shape_11.setTransform(-57.7,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAxQgKgEgJgIIAFgGQAIAHAJAEQAJAEAKAAQAHAAAGgDQAGgCAEgGQADgFAAgGQAAgKgIgGQgIgFgOAAIgKAAIAAgGIAKAAQAIAAAGgCQAGgDAEgFQADgFAAgHQAAgGgDgFQgDgEgGgCQgGgEgHAAQgIAAgHAEQgIADgHAFIgFgGQAIgGAJgDQAIgDAKAAQAKAAAIADQAHAEAEAGQAEAGAAAIQAAAHgDAFQgCAFgFADQgEADgFABQAGABAFAEQAFADADAFQADAFAAAHQAAAIgEAHQgFAGgIAEQgHAEgLAAQgLAAgKgEg");
	this.shape_12.setTransform(-68.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-74.6,-10,149.3,20.1), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhAzIAAgwIhAAAIAAAwIgIAAIAAhlIAIAAIAAAvIBAAAIAAgvIAIAAIAABlg");
	this.shape.setTransform(40.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAHIhAAAIAAAoIA6AAIAAAGIg6AAIAAApIBBAAIAAAHg");
	this.shape_1.setTransform(30.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_2.setTransform(19.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAzIgpgzIgaAZIAAAaIgIAAIAAhlIAIAAIAABCIBAhCIALAAIgsAtIAuA4g");
	this.shape_3.setTransform(8.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgGgIQgHgHgEgKQgEgJAAgLQAAgKAEgJQAEgKAHgHQAGgHAKgFQAJgEALAAQAMAAAJAEQAKAEAHAIQAGAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgGAHgKAFQgJAEgMAAQgLAAgJgEgAgWgnQgJAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAJAGAMAAQANAAAKgGQAKgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgJgGQgKgGgNAAQgMAAgKAGg");
	this.shape_4.setTransform(-3.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgAzIAAheIg/AAIAABeIgIAAIAAhlIBPAAIAABlg");
	this.shape_5.setTransform(-15.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgGgMQgHgMAAgPQAAgOAHgMQAGgMAMgHQAMgHANAAQAJAAAHACQAHACAGAEIALAJIgFAFQgGgHgJgEQgIgEgMAAQgLAAgKAGQgJAGgGAKQgGALAAAMQAAANAGAKQAFALALAGQAJAGALAAQALAAAJgEQAIgEAIgIIAFAFQgIAIgJAFQgKAFgOAAQgNAAgMgHg");
	this.shape_6.setTransform(-26,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiAzIAAgpIgiAAIgfApIgKAAIAhgqQgJgBgGgEQgHgEgDgFQgEgHAAgIQAAgJAFgHQAEgGAIgEQAIgEAMAAIAqAAIAABlgAgWglQgHAGAAALQAAAIAEAFQAEAFAGACQAHADAIAAIAiAAIAAguIgiAAQgOAAgIAGg");
	this.shape_7.setTransform(-41.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-48.6,-10,97.3,20.1), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIALQAFgBACgDQACgDAAgEIAAAAIgFAAIAAgQIANAAIAAAOQAAAHgEAFQgEAFgHACg");
	this.shape.setTransform(73.5,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBJAAIAAAKIg+AAIAAAjIA3AAIAAAKIg3AAIAAAkIA/AAIAAAKg");
	this.shape_1.setTransform(67.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_2.setTransform(55.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_3.setTransform(44,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_4.setTransform(32.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBJAAIAAAKIg+AAIAAAjIA3AAIAAAKIg3AAIAAAkIA/AAIAAAKg");
	this.shape_5.setTransform(22.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqA/IAAgXIhSAAIgCAXIgKAAIAAgiIAKAAQAIgMAEgRQAEgTAAgZIAAgSIBCAAIAABbIANAAIgCAigAgPgmQAAANgCANQgBAMgDALQgDALgFAHIA5AAIAAhQIgrAAg");
	this.shape_6.setTransform(11.9,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfAzIAAhUIg9BUIgLAAIAAhlIALAAIAABUIA9hUIALAAIAABlg");
	this.shape_7.setTransform(0.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAzIAAhlIArAAQAJAAAHACQAGACAFAFIAFAHQABAEAAAFQAAAHgCAFQgCAEgEAEQgDADgFABIALAEQAGADACAFQADAFABAHQgBAJgFAGQgEAHgIADQgJADgLAAgAgdApIAiAAQALAAAHgFQAHgFgBgJQAAgIgGgFQgIgEgNAAIgfAAgAgdgFIAdAAQALAAAGgEQAGgFABgJQAAgIgGgEQgGgFgLAAIgeAAg");
	this.shape_8.setTransform(-9.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqA/IAAgXIhSAAIgCAXIgKAAIAAgiIAKAAQAIgMAEgRQAEgTAAgZIAAgSIBCAAIAABbIANAAIgCAigAgPgmQAAANgCANQgBAMgDALQgDALgFAHIA5AAIAAhQIgrAAg");
	this.shape_9.setTransform(-21,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAKIg9AAIAAAjIA3AAIAAAKIg3AAIAAAkIA+AAIAAAKg");
	this.shape_10.setTransform(-31.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglAzIAAhlIAlAAQAMAAAIAEQAJAEAFAHQAEAHAAALQAAALgFAGQgGAIgJADQgJAEgKAAIgZAAIAAAkgAgaAFIAZAAQAMgBAIgFQAHgGAAgKQAAgLgHgGQgIgGgLAAIgaAAg");
	this.shape_11.setTransform(-40.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdAzIAAhbIg5AAIAABbIgLAAIAAhlIBQAAIAABlg");
	this.shape_12.setTransform(-51.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBIAAIAAAKIg9AAIAAAjIA3AAIAAAKIg3AAIAAAkIA+AAIAAAKg");
	this.shape_13.setTransform(-61.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAtIA7AAIAAgtIALAAIAABlg");
	this.shape_14.setTransform(-72.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-80,-10.1,160.1,20.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAzIAAgnIgdAAIgeAnIgOAAIAggpQgIgBgGgEQgGgEgEgGQgDgGgBgIQAAgGACgGQACgFAEgEQAFgFAIgCQAHgDAKAAIArAAIAABlgAgTgiQgHAGAAAJQAAAHAEAFQADAFAGACQAGACAHAAIAfAAIAAgqIgfAAQgMAAgHAGg");
	this.shape.setTransform(97.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgHQALgHAPAAQAJAAAHACQAHACAGAEIAKAIIgHAJQgHgHgHgDQgIgEgLAAQgKAAgJAFQgJAGgFAJQgFAKAAALQAAAMAFAJQAFAKAJAGQAJAFAKAAQALAAAIgEQAHgDAIgHIAHAIQgFAFgGAEQgGAEgHACQgIACgJAAQgOAAgLgHg");
	this.shape_1.setTransform(87.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAzIAAhbIgjAAIAAgKIBQAAIAAAKIgiAAIAABbg");
	this.shape_2.setTransform(77.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAzIAAhlIBJAAIAAAKIg+AAIAAAjIA3AAIAAAKIg3AAIAAAkIA/AAIAAAKg");
	this.shape_3.setTransform(67.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoA0IgMgbIg3AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_4.setTransform(56.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbAzIAAgsIgKAFIgMAEIgJACQgKAAgIgEQgHgDgEgHQgFgGAAgKIAAgmIAMAAIAAAkQAAAKAGAFQAGAGAKAAQAIAAAIgDIAPgGIAAgwIAMAAIAABlg");
	this.shape_5.setTransform(45.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAzIgIgDIAFgJIAFACIAHABQAFAAAGgEQAGgDAEgJIgthNIANAAIAkBCIAihCIAMAAIgoBQQgHAMgHAGQgIAFgJAAQgFAAgEgBg");
	this.shape_6.setTransform(35.4,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjA0IgIgBIgGgCIADgJIAEABIAFABIAFgBIAGgGQADgDACgJQACgIACgOQABgMAAgVIAAgTIBCAAIAABmIgMAAIAAhbIgrAAIAAALQAAAVgBAOQgCAPgDAJQgDAJgEAFQgDAFgFABQgDACgEAAIgCAAg");
	this.shape_7.setTransform(23.6,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAuQgMgHgHgMQgGgMAAgPQAAgOAGgMQAHgMAMgHQALgHAPAAQAJAAAHACQAHACAGAEIAKAIIgHAJQgHgHgHgDQgIgEgLAAQgKAAgJAFQgJAGgFAJQgFAKAAALQAAAMAFAJQAFAKAJAGQAJAFAKAAQALAAAIgEQAHgDAIgHIAHAIQgFAFgGAEQgGAEgHACQgIACgJAAQgOAAgLgHg");
	this.shape_8.setTransform(13.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoA0IgMgbIg3AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_9.setTransform(-2.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqA/IAAgXIhSAAIgCAXIgKAAIAAgiIAKAAQAIgMAEgRQAEgTAAgZIAAgSIBCAAIAABbIANAAIgCAigAgPgmQAAANgCANQgBAMgDALQgDALgFAHIA5AAIAAhQIgrAAg");
	this.shape_10.setTransform(-13.6,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAKIg1AAIAABbg");
	this.shape_11.setTransform(-23,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAxQgKgEgHgIQgHgHgEgKQgDgJAAgLQAAgKADgJQAEgKAHgHQAHgIAKgEQAJgEALAAQAMAAAKAEQAJAEAHAIQAHAHAEAKQADAJAAAKQAAALgDAJQgEAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEgAgUgkQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAGQAJAFALAAQAMAAAJgFQAJgGAFgKQAFgJAAgMQAAgLgFgJQgFgKgJgGQgJgFgMAAQgLAAgJAFg");
	this.shape_12.setTransform(-33.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdAzIgmgxIgWAWIAAAbIgMAAIAAhlIAMAAIAAA8IA6g8IAPAAIgrAtIAtA4g");
	this.shape_13.setTransform(-44.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAzIAAhlIBJAAIAAAKIg9AAIAAAjIA3AAIAAAKIg3AAIAAAkIA+AAIAAAKg");
	this.shape_14.setTransform(-59.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA+AzIgkgyIgUAXIAAAbIgLAAIAAgbIgUgXIgkAyIgOAAIAqg5IgogsIAPAAIA1A7IAAg7IALAAIAAA7IA1g7IAPAAIgoAsIAqA5g");
	this.shape_15.setTransform(-72.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAoA0IgMgbIg3AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_16.setTransform(-86.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAqA/IAAgXIhSAAIgCAXIgKAAIAAgiIAKAAQAIgMAEgRQAEgTAAgZIAAgSIBCAAIAABbIANAAIgCAigAgPgmQAAANgCANQgBAMgDALQgDALgFAHIA5AAIAAhQIgrAAg");
	this.shape_17.setTransform(-98,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-105.4,-10.1,210.9,20.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBdIAAiDIheCDIgLAAIAAiTIALAAIAACDIBfiDIAKAAIAACTgAgRhJQgIgGgCgLIAJgCQACAIAEADQAFAFAHAAQAIAAAFgFQAFgDACgIIAIACQgBALgIAGQgHAHgMAAQgKAAgHgHg");
	this.shape.setTransform(49.8,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgKgLQgKgLgFgNQgFgOAAgPQAAgOAFgOQAGgNAJgLQAKgKAOgHQANgGAQAAQARAAAOAGQANAGAKALQAKALAFANQAFAOAAAOQAAAPgFAOQgGANgJALQgKAKgOAHQgNAGgRAAQgQAAgNgGgAggg4QgOAIgHAQQgIAPgBARQABASAIAPQAIAQAOAIQAOAJARAAQATAAAOgJQAOgIAIgQQAIgPAAgSQAAgRgJgPQgIgQgOgIQgOgJgSgBQgRABgPAJg");
	this.shape_1.setTransform(33,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFBKIAAiJIgzAAIAAgKIBxAAIAAAKIg0AAIAACJg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBKIAAiDIheCDIgKAAIAAiTIAKAAIAACDIBfiDIALAAIAACTg");
	this.shape_3.setTransform(2.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABcBaIAAghIjDAAIAAiSIALAAIAACIIBNAAIAAiIIALAAIAACIIBNAAIAAiIIAKAAIAACIIAUAAIgCArg");
	this.shape_4.setTransform(-16,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+BKIgTgpIhVAAIgTApIgMAAIBFiTIAJAAIBFCTgAAnAXIgnhUIgmBUIBNAAg");
	this.shape_5.setTransform(-36.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBGQgPgGgNgMIAHgIQAMALANAGQANAFAOAAQALAAAJgEQAIgDAFgIQAFgGAAgLQAAgOgLgHQgLgJgVAAIgPAAIAAgIIAPAAQALgBAJgDQAJgDAFgIQAFgGAAgLQAAgIgEgHQgFgGgIgEQgIgEgLAAQgLAAgLAEQgLAEgLAIIgGgIQALgJAMgEQAMgFAPAAQAPAAAKAFQALAGAGAIQAGAJAAALQAAALgEAGQgFAHgGAFQgGAEgHACQAJACAHAEQAHAFAEAIQAFAHAAAKQAAAMgHAJQgGAJgLAFQgLAGgPAAQgRAAgOgGg");
	this.shape_6.setTransform(-51.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-59.9,-13.5,119.8,27.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA/BaIAAghIh9AAIgCAhIgKAAIAAgrIAQAAQAIgLAFgQQAFgQADgTQADgUAAgXIAAgfIBZAAIAACIIAUAAIgCArgAgYgyQAAAUgCASQgDASgFAPQgEAQgHAKIBZAAIAAh+IhEAAg");
	this.shape.setTransform(16.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgKgLQgKgLgFgNQgFgOAAgPQAAgOAFgOQAGgNAJgLQAKgKAOgHQANgGAQAAQARAAAOAGQANAGAKALQAKALAFANQAFAOAAAOQAAAPgFAOQgGANgJALQgKAKgOAHQgNAGgRAAQgQAAgNgGgAggg4QgOAIgHAQQgIAPgBARQABASAIAPQAIAQAOAIQAOAJARAAQATAAAOgJQAOgIAIgQQAIgPAAgSQAAgRgJgPQgIgQgOgIQgOgJgSgBQgRABgPAJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBKIAAiJIhbAAIAACJIgLAAIAAiTIBxAAIAACTg");
	this.shape_2.setTransform(-16.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-26.5,-13.5,53,27.1), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+BKIgTgpIhVAAIgTApIgMAAIBFiTIAJAAIBFCTgAAnAXIgnhUIgmBUIBNAAg");
	this.shape.setTransform(35.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/BaIAAghIh9AAIgCAhIgKAAIAAgrIAQAAQAIgLAFgQQAFgQADgTQADgUAAgXIAAgfIBZAAIAACIIAUAAIgCArgAgYgyQAAAUgCASQgDASgFAPQgEAQgHAKIBZAAIAAh+IhEAAg");
	this.shape_1.setTransform(19.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBJIAAiRIBbAAIAAAKIhQAAIAACHg");
	this.shape_2.setTransform(6.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BJIAAiRIBoAAIAAAKIhdAAIAAA5IBTAAIAAAJIhTAAIAAA7IBeAAIAAAKg");
	this.shape_3.setTransform(-6.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBCQgRgKgJgSQgKgQAAgWQAAgUAKgRQAJgSARgJQAQgLAVAAQANAAAKADQAJADAJAGQAIAFAIAHIgIAHQgJgJgMgGQgMgGgRAAQgQAAgOAJQgOAIgIAPQgIAPgBASQABATAIAPQAIAPAOAIQAOAJARAAQAQAAALgFQAMgGALgLIAIAHQgMALgOAHQgNAHgUAAQgUAAgQgKg");
	this.shape_4.setTransform(-21.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BJIAAiRIA7AAQAPgBAKAFQALAEAGAJQAGAIAAALQAAAKgEAHQgEAHgFAEQgGAFgGACQAJABAHAEQAIAFAEAHQAFAHAAALQAAALgGAKQgHAIgMAGQgMAEgQAAgAgvA/IA1AAQATABALgJQALgHAAgPQAAgOgLgHQgMgIgWAAIgxAAgAgvgFIAwAAQALABAJgEQAIgEAFgGQAFgIAAgJQAAgMgKgIQgJgHgSAAIgxAAg");
	this.shape_5.setTransform(-36.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-46.2,-13.5,92.5,27.1), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBCQgRgKgJgSQgKgQAAgWQAAgUAKgRQAJgSARgJQAQgLAVAAQANAAAKADQAJADAJAGQAIAFAIAHIgIAHQgJgJgMgGQgMgGgRAAQgQAAgOAJQgOAIgIAPQgIAPgBASQABATAIAPQAIAPAOAIQAOAJARAAQAQAAALgFQAMgGALgLIAIAHQgMALgNAHQgOAHgUAAQgUAAgQgKg");
	this.shape.setTransform(36.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BJIAAiRIBoAAIAAAKIhdAAIAAA5IBTAAIAAAJIhTAAIAAA7IBeAAIAAAKg");
	this.shape_1.setTransform(22.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvBJIAAhFIhdAAIAABFIgLAAIAAiRIALAAIAABDIBdAAIAAhDIALAAIAACRg");
	this.shape_2.setTransform(7.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBGQgPgFgNgMIAHgIQAMALANAFQANAFAOAAQALAAAJgDQAIgEAFgHQAFgHAAgKQAAgOgLgJQgLgHgVgBIgPAAIAAgJIAPAAQALABAJgEQAJgEAFgGQAFgIAAgJQAAgJgEgHQgFgHgIgEQgIgDgLAAQgLAAgLAEQgLAFgLAHIgGgIQALgJAMgFQAMgEAPAAQAPAAAKAFQALAFAGAJQAGAJAAAMQAAAJgEAIQgFAGgGAEQgGAFgHADQAJABAHAFQAHAFAEAHQAFAHAAAKQAAALgHAJQgGAKgLAGQgLAFgPAAQgRAAgOgGg");
	this.shape_3.setTransform(-7.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBJIAAiBIhfCBIgLAAIAAiRIALAAIAACBIBfiBIAKAAIAACRg");
	this.shape_4.setTransform(-21.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BJIAAiRIBmAAIAAAKIhbAAIAAA0IAwAAQAQgBAMAFQAMAEAHAIQAHAKAAAOQgBAVgNAMQgNALgZgBgAgtA/IAwAAQAUABALgJQALgHAAgSQAAgQgLgHQgLgIgVABIgvAAg");
	this.shape_5.setTransform(-36.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-46.3,-13.5,92.6,27.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBcIAAiBIheCBIgLAAIAAiRIALAAIAACBIBfiBIAKAAIAACRgAgRhIQgIgIgCgKIAJgBQACAGAEAFQAFADAHAAQAIAAAFgDQAFgFACgGIAIABQgBAKgIAIQgHAGgMAAQgKAAgHgGg");
	this.shape.setTransform(17.9,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBGQgOgGgKgLQgKgKgFgOQgFgNAAgQQAAgOAFgOQAGgOAJgKQAKgLAOgGQANgGAQAAQARAAAOAGQANAGAKALQAKAKAFAOQAFANAAAPQAAAPgFAOQgGAOgJAKQgKALgOAGQgNAGgRAAQgQAAgNgGgAggg4QgOAJgHAOQgIAPgBASQABATAIAPQAIAOAOAJQAOAJARAAQATAAAOgJQAOgJAIgOQAIgPAAgTQAAgSgJgPQgIgOgOgJQgOgJgSAAQgRAAgPAJg");
	this.shape_1.setTransform(1.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6BJIAAh+Ig6BTIAAAAIg6hTIAAB+IgKAAIAAiRIAKAAIA6BVIA7hVIAKAAIAACRg");
	this.shape_2.setTransform(-16.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-27.9,-13.5,55.8,27.1), null);


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
	this.shape.graphics.f("#5BAF46").s().dr(-150,-300,300,600);

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
	this.shape.graphics.f("#5BAF46").s().p("Eg1mBhcMAApjDOMBqkAAXMgApDDOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-343.1,-625.8,686.3,1251.8), null);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol23();
	this.t3.parent = this;
	this.t3.setTransform(-39.2,19);

	this.t2 = new lib.Symbol22();
	this.t2.parent = this;
	this.t2.setTransform(-62.8,0);

	this.t1 = new lib.Symbol21();
	this.t1.parent = this;
	this.t1.setTransform(-88.8,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(-137.5,-29,196.5,58.1), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol32();
	this.t3.parent = this;
	this.t3.setTransform(-66.8,37.1);

	this.t2 = new lib.Symbol31();
	this.t2.parent = this;
	this.t2.setTransform(-72.1,0);

	this.t1 = new lib.Symbol30();
	this.t1.parent = this;
	this.t1.setTransform(-47,-37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-149.8,-56.7,205.5,113.5), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol20();
	this.t2.parent = this;
	this.t2.setTransform(-54.4,9.6);

	this.t1 = new lib.Symbol19();
	this.t1.parent = this;
	this.t1.setTransform(-29,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-134.5,-19.6,210.9,39.3), null);


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
	this.t5 = new lib.Symbol18();
	this.t5.parent = this;
	this.t5.setTransform(-16.5,1.5);

	this.t4 = new lib.Symbol16();
	this.t4.parent = this;
	this.t4.setTransform(-104.7,1.5);

	this.t3 = new lib.Symbol15();
	this.t3.parent = this;
	this.t3.setTransform(67.2,-24.5);

	this.t2 = new lib.Symbol14();
	this.t2.parent = this;
	this.t2.setTransform(-27.2,-24.5);

	this.t1 = new lib.Symbol13();
	this.t1.parent = this;
	this.t1.setTransform(-103.3,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsQgKgDgIgHIAIgJQAHAFAIADQAIADAHAAQAJAAAFgEQAGgEAAgHQgBgEgDgDQgDgDgFgCIgLgEIgOgFQgHgCgFgFQgEgFAAgJQAAgIAEgGQAEgGAHgDQAHgDAIAAQAJAAAJACQAJADAHAFIgHAKQgGgEgHgCQgHgDgHAAQgIAAgEAEQgFAEAAAGQAAAEADADQAEADAFACIALAEIAOAFQAHACAFAGQAEAFAAAIQAAAJgEAGQgFAHgIADQgHADgKAAQgIAAgLgEg");
	this.shape.setTransform(45.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA4QgMgJgHgOQgGgPAAgSQAAgNAEgLQADgMAIgJQAHgJAJgFQAKgFALAAQARAAALAJQAMAIAHAPQAGAPAAARQAAANgEAMQgDAMgHAJQgHAJgKAFQgKAFgMAAQgPAAgMgJgAgTgsQgJAHgFAMQgEALAAAOQAAAOAEAMQAFAMAJAHQAIAHALABQAMgBAJgHQAIgHAFgMQAEgMAAgOQAAgNgEgMQgFgLgJgIQgIgHgMgBQgLABgIAHg");
	this.shape_1.setTransform(34.7,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA/IA4hwIhFAAIAAgNIBVAAIAAAKIg4Bzg");
	this.shape_2.setTransform(23,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATA/IAAgeIhCAAIgEgJIBHhXIAMAAIAABVIAUAAIAAALIgUAAIAAAegAghAWIA0AAIAAhAg");
	this.shape_3.setTransform(11.4,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA/IAAhwIgpAAIAAgNIBiAAIAAANIgrAAIAABwg");
	this.shape_4.setTransform(-0.3,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGPOIAAhzQgBAqg8AiQg4AghMAGQhSAGg0geQg9gjAAhMIAA0dQAAhMA9gjQA0gfBSAHQBMAGA4AgQA8AiABAqIAAnhID5AAIAAebgAgpl/QgUAQAAAgIAAQNQAAAgAUAQQAUAPAZgFQAbgFATgXQAUgaAAgpIAAvDQAAgpgUgaQgTgYgbgEIgMgBQgSAAgPALg");
	this.shape_5.setTransform(-18.9,0.3,0.156,0.156);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Aj/MBQg8gmAAhJIAApEQAAhNA8g0QAYgVBsg9QBag0Aog1QA8hNAAh3IAAhRQAAgmgTgYQgSgWgWAAIgIAAQgXAAgRAWQgTAYAAAmIAAEpIj5AAIAAkpQAAiQBkhMQBUhAB8AAIAIAAQB8AABUBAQBkBMAACQIAAUhIj5AAIAAiIQgCA7g6AmQg2AlhMADIgPABQhFAAgwgfgAgHAqQguArAAAoIAAGiQAAA7A8gFQAXgCASgOQATgOAAgUIAAo2QgyAlgYAYg");
	this.shape_6.setTransform(-30.6,3,0.156,0.156);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ak/POIAA+bIETAAQDFgBBbBYQBMBKAACKIAAH0QAACKhMBIQhbBXjFABIAANSgAgsheQA1AAAegYQAagWAAgiIAAn0QAAgjgagVQgegZg1AAg");
	this.shape_7.setTransform(-42.1,0.3,0.156,0.156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwMRIiktLICZrWIEFAAIiZLWICkNLg");
	this.shape_8.setTransform(-51.9,3.2,0.156,0.156);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah8POIAA+bID5AAIAAebg");
	this.shape_9.setTransform(-57.1,0.3,0.156,0.156);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA+McIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA4gID5AAIAABfQAwhEBFgeQBBgcA/AMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_10.setTransform(-65.7,3.1,0.156,0.156);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA+POIAA0SQAAgcgQgSQgPgRgXgCQg1gDgZBEIAAUSIj5AAIAA+bID5AAIAAHaQAwhEBEgeQBBgcBAAMQBAAMAnAxQAqA0AABQIAAVyg");
	this.shape_11.setTransform(-83,0.3,0.156,0.156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah7MRIAA4hID3AAIAAYhg");
	this.shape_12.setTransform(-74.3,3.2,0.156,0.156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiJPOIAA6XIj4AAIAAkEIMDAAIAAEEIj5AAIAAaXg");
	this.shape_13.setTransform(-95.5,0.3,0.156,0.156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-101.5,-16.1,153.8,31.7), null);


(lib.scaner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlVGWIAAsrIKrAAIAAMrg");
	mask.setTransform(0.4,-78);

	// Layer 1
	this.s1 = new lib.Symbol26();
	this.s1.parent = this;

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlVGWIAAsrIKrAAIAAMrg");
	mask_1.setTransform(0.4,3.6);

	// Layer 2
	this.s2 = new lib.Symbol27();
	this.s2.parent = this;

	var maskedShapeInstanceList = [this.s2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

}).prototype = getMCSymbolPrototype(lib.scaner, new cjs.Rectangle(-24.3,-30.7,48.6,61.5), null);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic2();
	this.instance.parent = this;
	this.instance.setTransform(-291,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.green = new lib.green();
	this.green.parent = this;
	this.green.setTransform(409,224.4,1,1,29,0,0,343.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2_1, new cjs.Rectangle(-494.8,-655.6,1207.1,1427.4), null);


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
			  
		      .from(pic2, 1.8, {x:"+=350", ease:Expo.easeInOut}, "-=1.2")
		      .from(gray, 1.8, {alpha:0, ease:Expo.easeInOut}, "-=1.8")
		      .to(pic1, 2.0, {scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut}, "-=1.8")	  
		
			  
		      //.to(logo1.d1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      //.to(logo1.d2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")	
			  
		      //.to(logo1.s1, 0.4, {alpha:1, ease:Expo.easeInOut}, "-=1.1")	  
		      //.to(logo1.s2, 0.4, {alpha:0, ease:Expo.easeInOut}, "-=1.1")		  
			  
		      .from(txt2.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.8")	
		      .from(txt2.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")		  
		      .from(txt22.t1, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
		      .from(txt22.t2, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  .from(txt22.t3, 0.8, {x:"+=20", alpha:0, ease:Expo.easeOut}, "-=0.7")	
			  
			  .from(scaner, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, "-=0.7")
			  .to(scaner.s2, 0.8, {y:"-=80", ease:Expo.easeOut})
			  .to(scaner.s1, 0.8, {y:"-=80", ease:Expo.easeOut}, "-=0.8")
			  .to(scaner, 0.8, {y:"+=80", ease:Expo.easeOut}, "-=0.8")
			  
			  .to(txt2.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "+=0.8")	
		      .to(txt2.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(scaner, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
		      .to(txt22.t1, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
		      .to(txt22.t2, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(txt22.t3, 0.8, {x:"-=20", alpha:0, ease:Expo.easeIn}, "-=0.7")	
			  .to(pic2, 0.8, {x:"-=350", ease:Expo.easeIn}, "-=0.7")
			  
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
	this.scaner = new lib.scaner();
	this.scaner.parent = this;
	this.scaner.setTransform(-104.2,237.7);

	this.txt22 = new lib.txt22();
	this.txt22.parent = this;
	this.txt22.setTransform(76.7,236.4);

	this.txt2 = new lib.txt2();
	this.txt2.parent = this;
	this.txt2.setTransform(5.6,-194.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt22},{t:this.scaner}]}).wait(1));

	// logo2
	this.logo2 = new lib.Symbol3();
	this.logo2.parent = this;
	this.logo2.setTransform(132,152);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// logo1
	this.logo1 = new lib.Symbol2();
	this.logo1.parent = this;
	this.logo1.setTransform(-26,-258);

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(1));

	// pic3
	this.pic3 = new lib.Symbol29();
	this.pic3.parent = this;
	this.pic3.setTransform(-45.5,85);

	this.pic4 = new lib.Symbol28();
	this.pic4.parent = this;
	this.pic4.setTransform(206.4,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pic4},{t:this.pic3}]}).wait(1));

	// pic2
	this.pic2 = new lib.pic2_1();
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

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(-336.5,-560.8,1207,1427.5), null);


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
p.nominalBounds = new cjs.Rectangle(-36.5,39.1,1207,1427.4);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png?1504710058107", id:"back"},
		{src:"images/pic.jpg?1504710058107", id:"pic"},
		{src:"images/pic2.png?1504710058107", id:"pic2"},
		{src:"images/pic3.png?1504710058107", id:"pic3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;