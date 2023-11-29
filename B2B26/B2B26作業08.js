(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B2B26作業08_atlas_1", frames: [[0,0,623,434],[625,0,623,434],[1614,0,278,280],[1614,282,278,280],[602,436,153,408],[757,436,153,408],[1250,0,180,465],[1432,0,180,465],[912,436,192,322],[1106,467,192,322],[1300,572,231,138],[1533,669,231,138],[0,436,299,231],[301,436,299,231],[1300,467,312,103],[1614,564,312,103],[1894,0,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_17 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B2B26作業08_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhpMBGJMAAAiMRMDSZAAAMAAACMRg");
	mask.setTransform(673.325,448.9);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1758,0.1758);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1346.5,897.7), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(673.3,448.9,1,1,0,0,0,673.3,448.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,1346.7,897.8), null);


// stage content:
(lib.B2B26作業08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 筆11
	this.instance = new lib.手握筆();
	this.instance.setTransform(570.05,507.45,1,1,0,0,0,673.3,448.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(1).to({x:583.8,y:523.4},0).wait(1).to({x:573.35,y:549.8},0).wait(1));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_71 = new cjs.Graphics().p("AhLCWQgtgXgYgpQgcguAFg1QAEgvAegpQAegoAtgQQAtgRAwAKQAxALAiAiQAiAhAMAxQALAwgQAtQgQAtgnAfQgoAfgwAFIgQABQgmAAglgTg");
	var mask_graphics_72 = new cjs.Graphics().p("AgsD1QgtgXgZgqQgZgrACgwQABgZAHgWQgcgVgSgdQgbgtAEg2QAEgwAegoQAfgoAtgRQAsgRAxALQAxALAiAhQAiAiALAxQALAvgOArIAPAMQAkAgAMAxQANAygPAtQgPAugoAgQgnAggwAFIgSABQglAAgmgSg");
	var mask_graphics_73 = new cjs.Graphics().p("AgjF5QgvgXgZgpQgNgWgGgWQgFgRgBgTQgCgxAagsQAOgYATgRQgbgUgRgdQgZgrABgwQABgYAIgXQgcgUgSgeQgcguAFg2QAEgvAegpQAegoAtgQQAtgRAxAKQAwALAiAiQAiAhAMAxQALAvgOArIAPANQAjAgANAyQANAxgQAtQgNAqgjAfIAHAFQAmAfAPAyQAPAxgOAvQgNAvgnAhQgnAigxAGIgWACQgkAAgjgRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:311.0588,y:288.2692}).wait(1).to({graphics:mask_graphics_72,x:314.1149,y:297.72}).wait(1).to({graphics:mask_graphics_73,x:314.6631,y:310.7737}).wait(1));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).wait(3));

	// 筆10
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(430.05,465.15,1,1,0,0,0,673.3,448.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).wait(1).to({x:422.35,y:469.55},0).wait(1).to({x:426.75,y:464.05},0).wait(1).to({x:426.2,y:458.55},0).wait(1).to({x:430.05},0).to({_off:true},1).wait(3));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_66 = new cjs.Graphics().p("AgnBKQgZgOgMgbQgLgcAIgaQAHgbAYgSQAZgSAbABQAUABASAKQARAKALAQQAQAXgCAeQgCAegTAUQgTAVgeAFIgPABQgUAAgSgKg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AhNB2QgegLgPgaQgPgaAGggQAHgeAXgTQAXgSAgABIANABQABgJACgJQAIgbAXgSQAYgSAcABQAUABASAKQASAKALAQQAPAXgCAfQgCAegTATQgTAVgeAFQgPACgOgCQgBAXgNATQgPAWgYAKQgOAFgOAAQgPAAgPgFg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Ag/B2QgegLgPgaQgGgMgDgNQgMgLgIgPQgKgTAAgUQABgVAKgUQALgUASgLQATgMAWgBQAXgBATAKQAIAEAHAFQAIgRAQgMQAZgSAcABQAUABASAKQARAKALAQQAQAXgCAfQgCAegTATQgTAVgeAFQgQACgOgCQgBAXgNATQgOAWgYAKQgOAFgPAAQgPAAgPgFg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ag0COQgegLgPgaQgHgLgCgNQgMgLgIgPQgKgUAAgUQAAgKADgJQgPgPgHgUQgIgeAOgeQAOgeAdgMQASgIAVACQAUACARAKQARAKALASQAKASABATIABAFQAHgJAJgHQAYgRAcABQAUABASAKQASAKALAQQAPAXgCAeQgCAdgTAVQgTAUgeAFQgPADgOgDQgBAYgNATQgPAWgZAJQgNAGgOAAQgPAAgPgGg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Ag0CRQgegLgPgaQgHgLgCgNQgMgLgIgPQgKgUAAgUQAAgLADgIQgPgPgHgUQgIgeAOgeQAOgeAdgMQASgIAVACQARACAOAHQAZgRAaACQAcADAWAUQARAPAGATQAPACANAIQASAKALAQQAPAXgCAeQgCAdgTAVQgTAUgeAFQgPADgOgDQgBAYgNATQgPAWgZAJQgNAGgOAAQgPAAgPgGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_1_graphics_66,x:179.9473,y:263.2381}).wait(1).to({graphics:mask_1_graphics_67,x:174.9736,y:267.1473}).wait(1).to({graphics:mask_1_graphics_68,x:173.5364,y:267.1473}).wait(1).to({graphics:mask_1_graphics_69,x:172.4509,y:264.655}).wait(4).to({graphics:mask_1_graphics_73,x:172.4509,y:264.3644}).wait(1));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(66).to({_off:false},0).wait(8));

	// 筆下唇
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(505.7,481.45,1,1,0,0,0,673.3,448.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).wait(1).to({x:522.5,y:476.2},0).to({_off:true},1).wait(8));

	// 遮色片下唇 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_64 = new cjs.Graphics().p("AgRD9QhNgFg/gzQhAgzgWhKQgVhIAXhJQAXhLA5gvQA6gvBOgJQBNgIBBAjQA8AfAlA8QAlA8ACBEQABA5gXA0QggBGhGAqQg+AlhDAAIgRAAg");
	var mask_2_graphics_65 = new cjs.Graphics().p("ACUEdQhKgFg/gwQgbgVgUgaQhFAphMgFQhNgFg/gzQhAgzgWhKQgVhHAXhKQAXhLA5gvQA6gvBOgJQBOgIBBAjQAwAZAiAtQAXgOAagJQBHgXBMAUQBMAVAxA5QAxA4AKBOQAKBNghBDQgiBDhEAnQg9AjhBAAIgRAAg");
	var mask_2_graphics_73 = new cjs.Graphics().p("ACUEdQhKgFg/gwQgbgVgUgaQhFAphMgFQhNgFg/gzQhAgzgWhKQgVhHAXhKQAXhLA5gvQA6gvBOgJQBOgIBBAjQAwAZAiAtQAXgOAagJQBHgXBMAUQBMAVAxA5QAxA4AKBOQAKBNghBDQgiBDhEAnQg9AjhBAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_2_graphics_64,x:226.8009,y:268.8763}).wait(1).to({graphics:mask_2_graphics_65,x:243.2401,y:272.0778}).wait(8).to({graphics:mask_2_graphics_73,x:243.2401,y:272.0778}).wait(1));

	// 下唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAiQgWgWgpggIgsglQgJgJACgHIBNAKIgEABQAYgBA7ASQBEATANACQAXAFApgEIA6gGIA/AHIAAACQAEAEgHAIIgWAUIgkAmQgdAYggAAQiSAAgogog");
	this.shape_1.setTransform(243.4159,274.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(64).to({_off:false},0).wait(10));

	// 筆上唇
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(498.3,466.8,1,1,0,0,0,673.3,448.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(1).to({x:520.35,y:477.3},0).to({_off:true},1).wait(10));

	// 遮色片上唇 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_62 = new cjs.Graphics().p("AgXD9QhLgIg9gyQg9gygWhIQgOgwAFgwQAGhLAzg9QAxg9BIgWQBHgWBLAWQBMAXAwA6QAvA6AIBPQAIBNgjBCQgjBChGAmQg7Afg9AAIgXgBg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AiqEgQhKgHg9gyQg9gzgWhHQgPgxAFgxQAHhJAyg9QAyg+BHgWQBIgWBMAXIAZAJQAlguA0gYQBGgfBPAOQBPAOA2A1QA3A1APBPQAQBPgdBFQgeBGhDArQhEAshMgCQgvgCgsgTQgeAlgtAYQg6Afg+AAIgYgBg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AiqEgQhKgHg9gyQg9gzgWhHQgPgxAFgxQAHhJAyg9QAyg+BHgWQBIgWBMAXIAZAJQAlguA0gYQBGgfBPAOQBPAOA2A1QA3A1APBPQAQBPgdBFQgeBGhDArQhEAshMgCQgvgCgsgTQgeAlgtAYQg6Afg+AAIgYgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_62,x:218.4345,y:269.0119}).wait(1).to({graphics:mask_3_graphics_63,x:233.0672,y:265.4879}).wait(10).to({graphics:mask_3_graphics_73,x:233.0672,y:265.4879}).wait(1));

	// 上唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("AB8A8IAegCQgwgwgMAAQgmAFgVAAQgLAAgQgFQgPgGgLAAQgMAAgwAJIg6ALIhLgKQABgEAGgCQAwgUAmgVQBKgnAkAAQAGAAASAIQAUAIAJAAQAEAAAXgIQARgGARAHQAaAKAhAmQAmArAIAnQACACgCAEg");
	this.shape_2.setTransform(243.4571,265.975);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(62).to({_off:false},0).wait(12));

	// 筆08
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(534.4,567,1,1,0,0,0,673.3,448.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).wait(1).to({x:500.8,y:584.85},0).wait(1).to({x:461.95,y:599.55},0).wait(1).to({x:423.1,y:604.8},0).wait(1).to({x:409.45,y:603.75},0).to({_off:true},1).wait(12));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_57 = new cjs.Graphics().p("AgVD9QhKgHg+gxQg+gxgWhIQgPgwAEgwQAGhKAxg+QAxg+BIgXQBHgXBLAWQBMAVAwA6QAxA5AJBOQAIBOgiBCQgiBDhFAmQg7Ahg/AAIgWgBg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AkJEnQg6gUgpgqQgogrgTg5QgSg6AJg6QALhIA1g6QA0g6BIgTQBJgSBKAaQAbAJAXAOQANgbAUgaQAwg+BIgXQBHgXBMAWQBMAWAwA5QAxA5AJBPQAIBOgiBCQgiBDhFAmQhGAmhLgHQg8gFgzghIgMAXQgdAzgyAiQgzAig6AHQgPACgPAAQgrAAgqgPg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AmZGLQhHgLg5gyQg4gxgUhFQgIgYgCgfQgCgXADgXQADgdALgfQAZhCA8gtQA8guBIgGQBHgGBDAjIAKAFQAMhHAzg5QA1g6BIgSQBHgTBKAaQAbAKAXAOQANgcAUgZQAyg+BHgXQBIgXBLAWQBMAVAxA6QAwA5AJBOQAJBPgiBCQgjBChFAmQhFAnhLgHQg8gGg0ggIgLAXQgdAzgzAhQgzAig6AHQg5AHg6gUQgXgIgUgLQgJA3gfAuQgoA7hFAeQgyAVgzAAQgUAAgTgDg");
	var mask_4_graphics_60 = new cjs.Graphics().p("ApwHWQhEgUgvgxQgtgvgRhCQgQhBAQg/QARg/AxgxQAwgwBAgSQA/gSBDARQAhAJAcAOQAEgOAFgQQAZhDA8gtQA8guBIgGQBHgGBDAjIAKAFQAMhHAyg5QA1g6BIgSQBIgTBKAaQAbAKAXAOQANgcAUgZQAyg+BHgXQBIgXBLAWQBMAVAxA6QAwA5AJBOQAJBPgiBCQgjBDhFAmQhFAmhLgHQg8gFg0ggIgLAWQgdAzgzAhQgzAig6AHQg6AHg6gUQgXgIgUgLQgJA3gfAuQgnA7hFAeQhFAehHgMQgtgGgmgXIgBABQgPBCgyAzQgyAzhCASQggAJggAAQgjAAgkgKg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AnQHWQhEgUgvgxIgBAAQgvAeg2AHQhAAJg+gZQg/gYgpgyQgogwgMhAQgNg/ASg8QASg8AtguQAugtA8gSQA7gSBAAMQBAANAwAoQAMAJALAMQAfgUAlgKQA/gSBDARQAhAJAcAOQAEgOAFgQQAZhDA8gtQA8guBIgGQBGgGBDAjIAKAFQAMhHAzg5QA1g6BIgSQBIgTBKAaQAbAKAXAOQANgcAUgZQAyg+BHgXQBIgXBLAWQBMAVAxA6QAwA5AJBOQAJBPgiBCQgjBDhFAmQhFAmhLgHQg8gFg0ggIgLAWQgdAzgzAhQgzAig6AHQg6AHg6gUQgXgIgUgLQgJA3gfAuQgoA7hFAeQhFAehGgMQgtgGgngXIAAABQgPBCgyAzQgyAzhCASQggAJggAAQgjAAgkgKg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnQHWQhEgUgvgxIgBAAQgvAeg2AHQhAAJg+gZQg/gYgpgyQgogwgMhAQgNg/ASg8QASg8AtguQAugtA8gSQA7gSBAAMQBAANAwAoQAMAJALAMQAfgUAlgKQA/gSBDARQAhAJAcAOQAEgOAFgQQAZhDA8gtQA8guBIgGQBGgGBDAjIAKAFQAMhHAzg5QA1g6BIgSQBIgTBKAaQAbAKAXAOQANgcAUgZQAyg+BHgXQBIgXBLAWQBMAVAxA6QAwA5AJBOQAJBPgiBCQgjBDhFAmQhFAmhLgHQg8gFg0ggIgLAWQgdAzgzAhQgzAig6AHQg6AHg6gUQgXgIgUgLQgJA3gfAuQgoA7hFAeQhFAehGgMQgtgGgngXIAAABQgPBCgyAzQgyAzhCASQggAJggAAQgjAAgkgKg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_4_graphics_57,x:300.901,y:357.6661}).wait(1).to({graphics:mask_4_graphics_58,x:282.6377,y:363.228}).wait(1).to({graphics:mask_4_graphics_59,x:263.785,y:372.0966}).wait(1).to({graphics:mask_4_graphics_60,x:245.2725,y:380.2567}).wait(1).to({graphics:mask_4_graphics_61,x:229.2874,y:380.2567}).wait(12).to({graphics:mask_4_graphics_73,x:229.2874,y:380.2567}).wait(1));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_3();
	this.instance_7.setTransform(153.35,351.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},57).to({state:[{t:this.instance_7}]},16).wait(1));

	// 筆07
	this.instance_8 = new lib.手握筆();
	this.instance_8.setTransform(532.95,524.25,1,1,0,0,0,673.3,448.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).wait(1).to({x:553.95,y:550.5},0).wait(1).to({x:585.45,y:547.35},0).wait(1).to({x:616.95,y:542.1},0).wait(1).to({x:650.55,y:555.75},0).wait(1).to({x:674.7,y:593.55},0).wait(1).to({x:675.75,y:600.9},0).to({_off:true},1).wait(17));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_50 = new cjs.Graphics().p("AhYDuQg+gXgsg1Qgsg2gLhBQgDgVAAgWQgBgUAEgUQAJg7AkgyQAkgyA2gbQA1gbA9AAQA+AAA1AbQA1AbAkAyQAkAyAKA7QAKBBgYBBQgYBAg0AqQgzArhEALQgWAEgVAAQgsAAgqgQg");
	var mask_5_graphics_51 = new cjs.Graphics().p("Ah5GhQg+gdglg2QgZglgMgrQgLgrADgsQAFg0AZgvQAagvApggIgNgOQgsg2gLhBQgDgVAAgWQAAgVADgUQAJg7AlgyQAkgyA1gbQA2gbA8AAQA+AAA1AbQA1AbAlAyQAkAyAJA7QALBCgZBBQgYBAgzApIgFAEQARARANAUQAkA3AEBFQAFBEgdA8QgeA7g4AmQg5AnhCAFIgSAAQg3AAg2gZg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AA2H/Qg9gXgqgwQghgmgQgwIgYADQhBAFg/geQg+gdglg2QgZglgMgrQgLgrADgsQAFg0AZguQAagvApghIgNgOQgsg2gLhBQgDgVAAgWQAAgVADgUQAJg7AlgyQAkgyA1gbQA2gbA9AAQA+AAA1AbQA0AbAlAyQAkAyAJA7QALBCgZBBQgYBAgzAqIgFAEQARARANAUQASAcAKAeQAPgCAQgBQBCgDA5AbQA5AcAnA2QAmA1AIA/QAGAxgNAwQgOAxgdAnQgeAngrAaQgrAZgxAHQgSADgTAAQgsAAgsgQg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AhtH/Qg/gXgqgwQgggmgQgwIgYADQhCAFg+geQg+gdgmg2QgZglgLgrQgMgrAEgsQAEg0AaguQAZgvAqghIgNgOQgsg2gLhBQgDgVAAgWQgBgVAEgUQAJg7AkgyQAkgyA2gbQA1gbA+AAQA+AAA1AbQA1AbAkAyQAkAyAKA7QAKBCgYBBQgYBAg0AqIgFAEQARARANAUQATAcAKAeQAPgCAPgBQBBgDA5AbQAPAHANAJIAEgFQA0g5BJgTQBIgTBKAaQBKAZAtA7QAeAoANAzQANAygIAyQgLBLg3A6Qg2A6hKARQhJARhLgdQgXgJgUgMQgbAhgnAXQgrAZgwAHQgSADgSAAQgsAAgsgQg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AkYH/Qg+gXgqgwQghgmgQgwIgYADQhBAFg/geQg+gdglg2QgZglgMgrQgLgrADgsQAFg0AZguQAagvApghIgNgOQgsg2gLhBQgDgVAAgWQAAgVADgUQAJg7AlgyQAkgyA1gbQA2gbA9AAQA+AAA1AbQA1AbAlAyQAkAyAJA7QALBCgZBBQgYBAgzAqIgFAEQARARANAUQASAcAKAeQAPgCAQgBQBCgDA5AbQAOAHAOAJIAEgFQAzg5BIgTQBIgTBKAaQAuAPAjAdQAwguA/gRQBAgRBEASQBDASAvAuQAvAvASBEQARBDgRBBQgSBAgyAxQgyAxhAAQQhBARhDgTQg3gPgqgkQgzAyhDAPQhKARhKgdQgXgJgUgMQgbAhgmAXQgrAZgxAHQgSADgSAAQgtAAgsgQg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AIoJ3Qg3gTgqgrQgrgsgRg3QgJgZgDgeQgDgfAGgiIACgNIgIACQhAARhDgTQg4gQgqgjQgzAyhDAPQhIARhLgdQgXgJgUgNQgbAignAXQgrAZgwAHQg/AKg+gXQg/gXgqgwQghgmgQgwIgXADQhCAFg+geQg+gdgmg2QgZglgLgrQgMgrAEgrQAEg0AagvQAZgvAqghIgNgOQgsg2gLhBQgDgVAAgWQgBgVAEgUQAJg7AkgyQAkgyA2gbQA1gbA+AAQA+AAA1AbQA1AbAkAyQAkAyAKA7QAKBCgYBBQgYBAg0AqIgFAEQARARANAUQASAcALAfQAPgCAPgBQBCgDA5AbQAPAHANAJIAEgFQA0g6BJgTQBIgTBJAaQAuAQAiAcQAwguA/gRQBBgRBDASQBDASAvAvQAvAvASBDQAQA8gNA7QAwgOA2AGQBDAIA0AmQA0AmAcA9QAdA9gFBAQgEA7gfA0QgfA0gxAgQgwAgg8AHQgQABgQAAQgrAAgogOg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AKhL7QhLgHg9gzQg8gygWhIQgNgtADgvQgcgRgYgYQgqgsgSg3QgIgZgDgeQgDgfAFgiIADgNIgIACQhBARhDgTQg3gQgqgjQgzAyhCAPQhKARhKgdQgXgJgUgNQgcAigmAXQgrAZgxAHQg/AKg+gXQg+gXgqgwQghgmgQgwIgYADQhBAFg/geQg+gdglg2QgZgkgMgrQgLgrADgsQAFg0AZgvQAagvApghIgNgOQgsg2gLhBQgDgVAAgWQAAgVADgUQAJg7AlgyQAkgyA1gbQA2gbA9AAQA+AAA1AbQA1AbAlAyQAkAyAJA7QALBCgZBBQgYBAgzAqIgFAEQARARANAUQASAcAKAfQAPgCAQgBQBCgDA5AbQAOAHAOAJIAEgFQA0g6BIgTQBIgTBKAaQAtAQAjAcQAwguA/gRQBAgRBEASQBDASAvAvQAvAvASBEQAPA8gMA6QAwgOA1AGQBDAIA0AmQA0AmAdA9QAcA9gFBAIAAABQAmAWAdAjQAvA5AIBPQAIBPgjBCQgkBChFAmQg7Aeg9AAIgZgBg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AKhL7QhLgHg9gzQg8gygWhIQgNgtADgvQgcgRgYgYQgqgsgSg3QgIgZgDgeQgDgfAFgiIADgNIgIACQhBARhDgTQg3gQgqgjQgzAyhCAPQhKARhKgdQgXgJgUgNQgcAigmAXQgrAZgxAHQg/AKg+gXQg+gXgqgwQghgmgQgwIgYADQhBAFg/geQg+gdglg2QgZgkgMgrQgLgrADgsQAFg0AZgvQAagvApghIgNgOQgsg2gLhBQgDgVAAgWQAAgVADgUQAJg7AlgyQAkgyA1gbQA2gbA9AAQA+AAA1AbQA1AbAlAyQAkAyAJA7QALBCgZBBQgYBAgzAqIgFAEQARARANAUQASAcAKAfQAPgCAQgBQBCgDA5AbQAOAHAOAJIAEgFQA0g6BIgTQBIgTBKAaQAtAQAjAcQAwguA/gRQBAgRBEASQBDASAvAvQAvAvASBEQAPA8gMA6QAwgOA1AGQBDAIA0AmQA0AmAdA9QAcA9gFBAIAAABQAmAWAdAjQAvA5AIBPQAIBPgjBCQgkBChFAmQg7Aeg9AAIgZgBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_5_graphics_50,x:279.3544,y:295.8139}).wait(1).to({graphics:mask_5_graphics_51,x:278.0167,y:314.6362}).wait(1).to({graphics:mask_5_graphics_52,x:290.9289,y:323.1138}).wait(1).to({graphics:mask_5_graphics_53,x:307.3748,y:323.1138}).wait(1).to({graphics:mask_5_graphics_54,x:324.4217,y:323.1138}).wait(1).to({graphics:mask_5_graphics_55,x:340.3965,y:334.9425}).wait(1).to({graphics:mask_5_graphics_56,x:346.5327,y:346.8382}).wait(17).to({graphics:mask_5_graphics_73,x:346.5327,y:346.8382}).wait(1));

	// lady07
	this.instance_9 = new lib.CachedBmp_4();
	this.instance_9.setTransform(270.45,282.15,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_5();
	this.instance_10.setTransform(270.45,282.15,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},50).to({state:[{t:this.instance_10}]},23).wait(1));

	// 筆06
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(533.65,492.25,1,1,0,0,0,673.3,448.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45).to({_off:false},0).wait(1).to({x:502.15,y:515.35},0).wait(1).to({x:466.45,y:501.7},0).wait(1).to({x:443.35,y:470.2},0).wait(1).to({x:437.05,y:449.2},0).to({_off:true},1).wait(24));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_45 = new cjs.Graphics().p("AgCD9QgwAAgtgTQgugSgjgiQgwgugThDQgThDARhAQAOg5AoguQAoguA2gXQA3gWA7AEQA9AEAzAeQAzAeAhA0QAhAzAGA7QAGA5gVA5QgVA6gsAoQgjAgguASQgrARguAAIgEAAg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AjhGFQhJgegqg+QgYgjgLgrQgLgrAEgqQAEg0AZgvQAZguApggQApghA0gNQAngLAnACQgOg8APg6QAPg5AnguQAogvA2gWQA2gXA9AFQA9AEAzAeQAyAeAhAzQAhAzAHA7QAGA7gVA5QgWA5grAnQgkAhgtASQguASgwgBIgLgBIABAGQAKAzgKAxQgOBJg4A4Qg2A4hJAOQgZAFgYAAQgxAAgwgTg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AlsHMQg/gMgzgrQgzgrgXg8QgLgcgEgfQgFgjAHgoQAHgsAXgoQAXgnAigdQAxgoBCgNQBBgNA9AUQAgAKAcATIAKgUQAZgvApggQApghA0gNQAmgLAnACQgOg8APg6QAOg5AoguQAogvA2gWQA3gXA8AFQA9AEAzAeQAzAeAhAzQAhAzAGA7QAGA7gVA5QgVA5gsAoQgjAgguASQguASgwgBIgLAAIABAFQALAzgKAxQgOBJg4A4Qg4A4hJAOQhJAPhIgdQgWgJgTgMQgRAqggAhQgsAuhAAUQgnANgnAAQgYAAgYgFg");
	var mask_6_graphics_48 = new cjs.Graphics().p("Ai9HMQg+gMgzgrQgzgrgXg8QgLgcgEgfIgCgYQgbALgdAFQg+AKg5gTQgpgNgjgbQgjgagXgkQgYgkgKgrQgLgqAEgqQAHhDAog4QApg5A8gbQA9gcBFAHQBFAHA3AnQAwAjAdA3QAaA0ACA4QAXgJAZgFQBCgNA9AUQAgAKAbATIAJgUQAZgvApggQApghA0gNQAngLAnACQgOg8APg6QAPg5AnguQAogvA3gWQA2gXA9AFQA9AEAzAeQAyAeAhAzQAhAzAHA7QAGA7gVA5QgWA5grAoQgkAggtASQguASgwgBIgMAAIACAFQAKAzgKAxQgOBJg4A4Qg3A4hJAOQhJAPhJgdQgWgJgUgMQgRAqggAhQgsAug+AUQgoANgnAAQgYAAgYgFg");
	var mask_6_graphics_49 = new cjs.Graphics().p("Ah1IAQg+gNgzgrQgzgrgXg7QgLgdgEgfIgCgXQgbALgdAEQg+AKg5gSQgpgOgjgaQgjgbgXgkQgYgkgKgqQgLgrAEgrQACgUAGgVQgZgLgXgRQhAgugahGQgSgyADg2QAFhKAvg/QAwg+BGgZQBHgZBMAUQBMATAyA4QAyA3ALBOQAIA2gNAxQAZALAXAPQAwAjAdA3QAbA1ABA3QAXgJAZgFQBCgNA8AUQAgAKAcASIAJgUQAZguApggQApggA0gOQAngKAnACQgOg8APg7QAPg5AnguQAoguA3gXQA2gWA9AEQA9AEAzAeQAyAeAhA0QAhAzAHA7QAGA6gVA5QgWA6grAnQgkAggtASQguASgwgBIgLAAIABAGQAKAygKAyQgOBJg4A4Qg3A3hJAPQhJAPhJgeQgWgJgUgMQgRAqggAhQgsAvg/AUQgnANgnAAQgYAAgYgFg");
	var mask_6_graphics_73 = new cjs.Graphics().p("Ah1IAQg+gNgzgrQgzgrgXg7QgLgdgEgfIgCgXQgbALgdAEQg+AKg5gSQgpgOgjgaQgjgbgXgkQgYgkgKgqQgLgrAEgrQACgUAGgVQgZgLgXgRQhAgugahGQgSgyADg2QAFhKAvg/QAwg+BGgZQBHgZBMAUQBMATAyA4QAyA3ALBOQAIA2gNAxQAZALAXAPQAwAjAdA3QAbA1ABA3QAXgJAZgFQBCgNA8AUQAgAKAcASIAJgUQAZguApggQApggA0gOQAngKAnACQgOg8APg7QAPg5AnguQAoguA3gXQA2gWA9AEQA9AEAzAeQAyAeAhA0QAhAzAHA7QAGA6gVA5QgWA6grAnQgkAggtASQguASgwgBIgLAAIABAGQAKAygKAyQgOBJg4A4Qg3A3hJAPQhJAPhJgeQgWgJgUgMQgRAqggAhQgsAvg/AUQgnANgnAAQgYAAgYgFg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_6_graphics_45,x:291.9582,y:269.0151}).wait(1).to({graphics:mask_6_graphics_46,x:278.9244,y:284.4903}).wait(1).to({graphics:mask_6_graphics_47,x:260.358,y:290.1742}).wait(1).to({graphics:mask_6_graphics_48,x:242.8365,y:290.1742}).wait(1).to({graphics:mask_6_graphics_49,x:235.6202,y:285.0046}).wait(24).to({graphics:mask_6_graphics_73,x:235.6202,y:285.0046}).wait(1));

	// lady06
	this.instance_12 = new lib.CachedBmp_6();
	this.instance_12.setTransform(179.55,246.75,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_7();
	this.instance_13.setTransform(179.55,246.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},45).to({state:[{t:this.instance_13}]},28).wait(1));

	// 筆05
	this.instance_14 = new lib.手握筆();
	this.instance_14.setTransform(442.25,509.8,1,1,0,0,0,673.3,448.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40).to({_off:false},0).wait(1).to({x:444.35,y:556},0).wait(1).to({x:425.45,y:589.6},0).wait(1).to({x:387.65,y:604.3},0).wait(1).to({x:353,y:633.7},0).to({_off:true},1).wait(29));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_40 = new cjs.Graphics().p("AgmD7Qg3gJgwggQgwgggcgwQgWgkgJgqQgJgrAGgpQAIg+Amg2QAng1A4gbQA5gcBBAEQBBADA2AgQA2AhAhA4QAiA5ACA/QACA3gXA1QgXA1gqAlQgqAlg2AQQglALgjAAQgTAAgTgDg");
	var mask_7_graphics_41 = new cjs.Graphics().p("AhQHEQhEgggmg8QgXgkgKgqQgKgpAEgrQAHhHAug7QAYggAggWQgbgKgYgQQgwgggcgwQgWgkgJgqQgJgrAGgqQAIg+Amg2QAng1A4gbQA5gcBCAEQBAADA2AgQA2AhAhA4QAiA5ACA/QACA4gXA1QgXA1gqAlQgMAKgNAJQAxARAmAlQAzAxASBJQASBJgXBEQgXBDg6AwQg6AvhHAJQgQACgPAAQg2AAg1gZg");
	var mask_7_graphics_42 = new cjs.Graphics().p("AAVKlQgvAAgugTQgtgTgjghQgwgvgThDQgThEARhBQAOg5AoguQARgUAUgPQghgagXgkQgXgjgKgqQgKgqAEgpQAHhHAug7QAYghAggWQgbgKgYgQQgwgggcgwQgWglgJgqQgJgrAGgqQAIg+Amg1QAng1A4gcQA5gbBCADQBAADA2AhQA2AgAhA5QAiA4ACA/QACA4gXA1QgXA1gqAlQgMALgNAIQAxATAmAkQAzAyASBJQASBIgXBDQgXBEg6AvIgHAFQAhAaAYAlQAhAzAHA7QAGA7gVA5QgWA5grAoQgjAhguASQgtARgvAAIgDAAg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AilMrQhJAAg7glQg7gkghhBQghhBAFhFQAEg1AagwQAagwAqggQAqghA1gNQA1gNA0AKQAPACAOAFQgFguAMgtQAOg5AoguQARgUATgPQgggagXgkQgXgigKgqQgKgqAEgqQAHhHAug7QAYghAfgWQgagKgYgQQgwgggcgwQgWglgJgqQgJgrAGgqQAIg+Amg1QAng1A3gcQA5gbBCADQBBADA2AhQA2AgAhA5QAiA4ACA/QACA4gXA1QgXA1gqAlQgMALgNAIQAxATAmAkQAzAyASBJQASBJgXBDQgXBDg6AvIgHAFQAhAaAYAlQAhAzAHA7QAGA7gVA5QgWA5grAoQgjAhguASQguASgxgBQgkAAgkgLQAFAsgKAqQgMAxgeAqQgfApgqAaQg7AjhHAAIgCAAg");
	var mask_7_graphics_44 = new cjs.Graphics().p("AmFOBQg1gFgxgcQgwgbgfgsQgbglgNgtQgMgtAEguQAGhAAlg3QAmg4A5gdQA6gdBDACQBDACA3AhIATANQAGgtAWgpQAagwAqghQAqggA1gNQA0gNA0AJQAPADAPAEQgGguAMgsQAOg5AoguQASgUAUgPQgigZgXgkQgXgkgKgqQgKgpAEgrQAHhHAug7QAZggAfgWQgagKgZgRQgwgggcgwQgWgkgJgqQgJgrAGgqQAIg+Amg2QAng1A4gbQA5gcBCAEQBBADA2AgQA2AhAhA4QAiA5ACA/QACA4gXA1QgXA1gqAlQgMAKgMAJQAxASAlAlQAzAxASBJQASBJgXBEQgXBDg6AwIgGAEQAhAaAXAlQAhAzAHA6QAGA7gVA5QgWA5grAoQgjAhguASQguASgxAAQgkgBgjgKQAEAsgKAqQgMAwgeAqQgfAqgrAaQg8AjhIAAQhIgBg7gkIgPgKQgFAhgNAhQgWAzgoAlQgnAkg1ASQgoAOgpAAIgZgCg");
	var mask_7_graphics_73 = new cjs.Graphics().p("AmFOBQg1gFgxgcQgwgbgfgsQgbglgNgtQgMgtAEguQAGhAAlg3QAmg4A5gdQA6gdBDACQBDACA3AhIATANQAGgtAWgpQAagwAqghQAqggA1gNQA0gNA0AJQAPADAPAEQgGguAMgsQAOg5AoguQASgUAUgPQgigZgXgkQgXgkgKgqQgKgpAEgrQAHhHAug7QAZggAfgWQgagKgZgRQgwgggcgwQgWgkgJgqQgJgrAGgqQAIg+Amg2QAng1A4gbQA5gcBCAEQBBADA2AgQA2AhAhA4QAiA5ACA/QACA4gXA1QgXA1gqAlQgMAKgMAJQAxASAlAlQAzAxASBJQASBJgXBEQgXBDg6AwIgGAEQAhAaAXAlQAhAzAHA6QAGA7gVA5QgWA5grAoQgjAhguASQguASgxAAQgkgBgjgKQAEAsgKAqQgMAwgeAqQgfAqgrAaQg8AjhIAAQhIgBg7gkIgPgKQgFAhgNAhQgWAzgoAlQgnAkg1ASQgoAOgpAAIgZgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_7_graphics_40,x:180.2037,y:283.4247}).wait(1).to({graphics:mask_7_graphics_41,x:182.8408,y:305.729}).wait(1).to({graphics:mask_7_graphics_42,x:182.8408,y:325.7809}).wait(1).to({graphics:mask_7_graphics_43,x:169.0368,y:339.1806}).wait(1).to({graphics:mask_7_graphics_44,x:148.9201,y:347.9196}).wait(29).to({graphics:mask_7_graphics_73,x:148.9201,y:347.9196}).wait(1));

	// lady05
	this.instance_15 = new lib.CachedBmp_8();
	this.instance_15.setTransform(96.75,268.65,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_9();
	this.instance_16.setTransform(96.75,268.65,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},40).to({state:[{t:this.instance_16}]},33).wait(1));

	// 筆04
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(414.8,369.15,1,1,0,0,0,673.3,448.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(32).to({_off:false},0).wait(1).to({x:379.1,y:382.8},0).wait(1).to({x:361.25,y:421.65},0).wait(1).to({x:381.2,y:455.25},0).wait(1).to({x:377,y:490.95},0).wait(1).to({x:395.9,y:523.5},0).wait(1).to({x:393.8,y:562.35},0).wait(1).to({x:422.15,y:593.85},0).to({_off:true},1).wait(34));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_32 = new cjs.Graphics().p("AgcD9Qg8gHgxghQgfgTgZgdQghgmgPgsQgIgZgCggQgDggAEgbQAJhGAug4QAug5BCgXQBCgXBGAPQBIAQAyAwQAzAxASBHQATBGgVBCQgRA5gpAsQgqAtg3AUQgqAPgtAAQgNAAgPgBg");
	var mask_8_graphics_33 = new cjs.Graphics().p("Aj3EbQhAgQgxgwQgygwgShAQgUhCAThEQAShGAygwQAvguBDgRQBCgRBAARQAvANAnAeQAKgQAMgOQAtg5BCgXQBCgXBHAPQBIAQAyAwQAzAxASBHQATBHgVBBQgRA5gpAsQgqAtg3AUQg3AUg9gGQg8gHgxghIgPgLQgQAbgVAWQguAvhCASQgkAKgjAAQgeAAgegHg");
	var mask_8_graphics_34 = new cjs.Graphics().p("AnUGHQhIghgng/QgXglgJgrQgKgqAGgrQAHg0AcgvQAbgtArgfQArgeA2gLQA1gKAzALQAaAGAZALQgDgqALgrQAThGAxgwQAvguBDgRQBDgRA/ASQAvANAnAeQAJgQAMgPQAug5BCgXQBCgXBIAQQBHAPAzAxQAyAwATBHQASBHgUBDQgRA4gqAsQgpAsg3AUQg4AVg8gHQg9gHgxggIgPgLQgQAagVAWQguAvhDATQhBAShAgQQgXgFgVgKQADAmgIAmQgRBJg5A2Qg6A3hKAMQgUADgTAAQg3AAg0gYg");
	var mask_8_graphics_35 = new cjs.Graphics().p("Al9JoQg0gDgxgYQgxgYghgoQgggngQgxQgPgxAFgzQAGhAAlg2QAagmAigZQgggagWgkQgXgkgJgrQgKgqAGgrQAHg0AcguQAbgvArgeQArgfA2gKQA1gLAzAMQAaAFAZALQgDgpALgrQAThGAxgwQAvguBDgRQBCgRBAARQAvANAnAeQAJgPAMgPQAug5BCgXQBCgXBIAPQBHAQAzAwQAyAxATBHQASBHgUBCQgRA5gqAsQgpAtg3AUQg4AUg8gGQg9gHgxghIgPgLQgQAbgVAWQguAvhDASQhCATg/gQQgXgGgVgKQADAmgIAlQgRBJg5A3QgMALgMAJQAiAbAXAoQAiA4ACBAQADA0gUAzQgUAygmAlQglAlgzAUQgtARguAAIgMAAg");
	var mask_8_graphics_36 = new cjs.Graphics().p("AkZLaQg6ghgig8Qgjg8AAhDQAAgXAEgVQgogGgmgTQgxgYghgoQgggngQgxQgPgxAFgzQAGhAAlg2QAaglAigaQgggZgWgkQgXgkgJgrQgKgrAGgrQAHg0AcguQAbgvArgeQArgfA2gKQA1gLAzAMQAaAGAZALQgDgqALgrQAThGAxgwQAvguBDgRQBCgRBAARQAvANAnAeQAJgPAMgPQAug5BCgXQBCgXBIAPQBHAQAzAwQAyAxATBHQASBHgUBCQgRA5gqAsQgpAtg3AUQg4AUg8gGQg9gHgxghIgPgKQgQAagVAWQguAvhDASQhCATg/gQQgXgGgVgKQADAngIAlQgRBJg5A3QgMAKgMAJQAiAcAXAnQAiA4ACBAQABAcgFAcQA7AHAwAgQAzAjAeA5QAfA6AAA+QgBBDgiA8QgjA8g5AhQg6AhhFAAQhGAAg5gig");
	var mask_8_graphics_37 = new cjs.Graphics().p("AlBOpQhCgegqhBQgphBAAhJQABg+Aeg4QAfg5AzgiIAPgJQgRgUgOgYQgjg8AAhDQAAgYAEgVQgogFgmgTQgxgYghgoQgggngQgxQgPgxAFgyQAGhAAlg2QAagmAigZQgggagWgkQgXgkgJgrQgKgrAGgrQAHg0AcguQAbgvArgeQArgfA2gKQA1gLAzAMQAaAFAZALQgDgpALgrQAThGAxgwQAvguBDgRQBCgRBAARQAvANAnAeQAJgQAMgOQAug5BCgXQBCgXBIAPQBHAQAzAwQAyAxATBHQASBHgUBCQgRA5gqAsQgpAtg3AUQg4AUg8gGQg9gHgxghIgPgLQgQAbgVAWQguAvhDASQhCATg/gQQgXgGgVgKQADAmgIAmQgRBJg5A3QgMAKgMAKQAiAbAXAoQAiA4ACA/QABAcgFAbQA7AIAwAgQAzAjAeA5QAfA6AAA+QgBBDgiA8QgjA8g5AhIgBAAIAGAHQApAxANA9QAOBBgWBDQgWBDgxAsQg3AxhMALQgVADgUAAQg2AAgwgWg");
	var mask_8_graphics_38 = new cjs.Graphics().p("AhIRZQhHgJg7gxQg6gwgWhFQgJgZgCgdQgCgVABgXQACgZAGgVQgSgFgRgIQhCgegqhBQgphBAAhJQABg+Aeg4QAfg5AzgiIAPgJQgRgUgOgYQgjg8AAhDQAAgXAEgVQgogGgmgTQgxgYghgoQgggmgQgxQgPgxAFgzQAGhAAlg2QAaglAigaQgggagWgkQgXgkgJgrQgKgrAGgrQAHg0AcguQAbgvArgeQArgfA2gKQA1gLAzAMQAaAGAZALQgDgqALgrQAThGAxgwQAvguBDgRQBCgRBAARQAvANAnAeQAJgPAMgPQAug5BCgXQBCgXBIAPQBHAQAzAwQAyAxATBHQASBHgUBCQgRA5gqAsQgpAtg3AUQg4AUg8gGQg9gHgxghIgPgKQgQAagVAWQguAvhDASQhCATg/gQQgXgGgVgKQADAngIAlQgRBJg5A3QgMALgMAJQAiAcAXAnQAiA4ACBAQABAcgFAcQA7AHAwAgQAzAjAeA4QAfA6AAA+QgBBDgiA8QgjA8g5AhIgBAAIAGAHQApAxANA9QANA7gRA9QARAFASAIQBFAfAnA8QAoA9ABBMQABBMgnA9QgmA9hFAhQg2Aag2AAQgPAAgQgCg");
	var mask_8_graphics_39 = new cjs.Graphics().p("Ag8T8QhEgdgshBQgshCAAhKQAAguAQgsQAKgeASgaQgPgJgPgMQg6gxgWhEQgJgZgCgdQgCgVABgYQACgYAGgVQgSgFgRgIQhCgfgqhAQgphBAAhJQABg+Aeg5QAfg4AzgiIAPgKQgRgUgOgYQgjg8AAhBQAAgYAEgVQgogGgmgSQgxgYghgpQgggmgQgyQgPgxAFgyQAGhAAlg3QAaglAigaQgggagWgjQgXglgJgrQgKgqAGgrQAHg0AcgvQAbguArgfQArgeA2gLQA1gKAzALQAaAGAZALQgDgqALgrQAThGAxgwQAvguBDgRQBCgRBAASQAvANAnAeQAJgQAMgPQAug5BCgXQBCgXBIAQQBHAPAzAxQAyAwATBHQASBHgUBDQgRA4gqAtQgpAsg3AUQg4AVg8gHQg9gHgxggIgPgLQgQAagVAWQguAvhDATQhCASg/gQQgXgFgVgKQADAmgIAmQgRBJg5A2QgMALgMAJQAiAcAXAnQAiA5ACA/QABAcgFAcQA7AHAwAhQAzAjAeA5QAfA5AAA/QgBBBgiA8QgjA8g5AhIgBABIAGAHQApAxANA8QANA8gRA8QARAFASAIQBFAfAnA9QAoA8ABBMQABBMgnA+IgEAGQAiAUAbAfQAfAjAQArQAbBGgSBNQgRBNg2AzQg2A0hNAOQgaAFgZAAQgwAAgugUg");
	var mask_8_graphics_73 = new cjs.Graphics().p("Ag8T8QhEgdgshBQgshCAAhKQAAguAQgsQAKgeASgaQgPgJgPgMQg6gxgWhEQgJgZgCgdQgCgVABgYQACgYAGgVQgSgFgRgIQhCgfgqhAQgphBAAhJQABg+Aeg5QAfg4AzgiIAPgKQgRgUgOgYQgjg8AAhBQAAgYAEgVQgogGgmgSQgxgYghgpQgggmgQgyQgPgxAFgyQAGhAAlg3QAaglAigaQgggagWgjQgXglgJgrQgKgqAGgrQAHg0AcgvQAbguArgfQArgeA2gLQA1gKAzALQAaAGAZALQgDgqALgrQAThGAxgwQAvguBDgRQBCgRBAASQAvANAnAeQAJgQAMgPQAug5BCgXQBCgXBIAQQBHAPAzAxQAyAwATBHQASBHgUBDQgRA4gqAtQgpAsg3AUQg4AVg8gHQg9gHgxggIgPgLQgQAagVAWQguAvhDATQhCASg/gQQgXgFgVgKQADAmgIAmQgRBJg5A2QgMALgMAJQAiAcAXAnQAiA5ACA/QABAcgFAcQA7AHAwAhQAzAjAeA5QAfA5AAA/QgBBBgiA8QgjA8g5AhIgBABIAGAHQApAxANA8QANA8gRA8QARAFASAIQBFAfAnA9QAoA8ABBMQABBMgnA+IgEAGQAiAUAbAfQAfAjAQArQAbBGgSBNQgRBNg2AzQg2A0hNAOQgaAFgZAAQgwAAgugUg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_8_graphics_32,x:181.4117,y:163.0912}).wait(1).to({graphics:mask_8_graphics_33,x:162.8135,y:166.684}).wait(1).to({graphics:mask_8_graphics_34,x:144.8879,y:179.223}).wait(1).to({graphics:mask_8_graphics_35,x:144.2869,y:199.2772}).wait(1).to({graphics:mask_8_graphics_36,x:144.2869,y:214.063}).wait(1).to({graphics:mask_8_graphics_37,x:144.2869,y:233.5954}).wait(1).to({graphics:mask_8_graphics_38,x:144.2869,y:249.1606}).wait(1).to({graphics:mask_8_graphics_39,x:144.2869,y:267.2297}).wait(34).to({graphics:mask_8_graphics_73,x:144.2869,y:267.2297}).wait(1));

	// lady04
	this.instance_18 = new lib.CachedBmp_10();
	this.instance_18.setTransform(99.25,158.25,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_11();
	this.instance_19.setTransform(99.25,158.25,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},32).to({state:[{t:this.instance_19}]},41).wait(1));

	// 筆03
	this.instance_20 = new lib.手握筆();
	this.instance_20.setTransform(450.3,392.25,1,1,0,0,0,673.3,448.9);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(25).to({_off:false},0).wait(1).to({x:419.85,y:415.35},0).wait(1).to({x:389.4,y:439.5},0).wait(1).to({x:407.25,y:465.75},0).wait(1).to({x:418.8,y:502.5},0).wait(1).to({y:543.45},0).wait(1).to({x:416.7,y:555},0).to({_off:true},1).wait(42));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_25 = new cjs.Graphics().p("Ag8D2QhJgSgxg0QgXgYgQgdQgRgggIgkQgNg5AOg7QAPg+AtgxQAtgwA9gVQA8gUBBAMQBBAMAyApQAxAoAZA+QAZA+gIA+QgIBIgwA6QgvA6hFAXQgmANgoAAQgeAAgggIg");
	var mask_9_graphics_26 = new cjs.Graphics().p("AimGaQhFgcgpg5QgbglgNgtQgMgtAEguQAHhGAsg7QAtg7BCgZIAHgDQgMgagHgdQgNg6AOg7QAQg+AtgxQAtgwA8gVQA8gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA4hCAXQAKAUAGAXQAUBIgUBEQgUBDg4AyQg3AxhFAMQgVADgVAAQgwAAgwgTg");
	var mask_9_graphics_27 = new cjs.Graphics().p("AkRISQhGgLg4gvQg4gvgWhCQgJgcgDgcQgCgcADgZQAFguATgmQAfg/A+gnQA+gnBGgBQAqAAAoANQAIg+Apg2QAtg8BBgZIAHgDQgLgagHgdQgNg6AOg7QAPg+AtgxQAtgwA8gVQA9gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA4hCAYQAKAUAGAWQAUBIgUBEQgUBDg4AyQg3AxhGAMQg9AKg9gUQgIA+gjAzQgoA5hEAdQgxAUgyAAQgTAAgSgCg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AnBKXQg9gdgng6Qgng5gEhDQgCgbADgWQAGgwAYgsQAZgsAmgfQAzgpBDgLQgEgSgCgSQgCgcADgZQAFguATgmQAfg+A+gnQA+gnBGgBQAqAAAoANQAIg/Apg2QAsg8BCgZIAHgDQgMgagHgdQgNg6AOg7QAQg+AtgxQAtgwA8gVQA9gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA4hCAYQAKAUAGAXQAUBIgUBEQgUBCg4AyQg3AxhGAMQg9AKg9gUQgIA+gkAzQgoA5hDAdQgdAMgdAFQAEATACAUQAGBDgeA/QgeA/g3AmQg3AmhGAFIgWAAQg5AAgygYg");
	var mask_9_graphics_29 = new cjs.Graphics().p("Ah8MnQhFgQgxguQgxgugUhEQgKgkAAgjQhFAFg7gdQg9gdgng6Qgng5gEhDQgCgbADgWQAGgwAYgsQAZgsAmgfQAzgpBDgLQgEgSgCgSQgCgbADgZQAFguATgmQAfg/A+gnQA+gnBGgBQAqAAAoANQAIg/Apg2QAsg8BCgZIAHgCQgMgbgHgdQgNg6AOg7QAQg+AtgxQAtgwA8gVQA9gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA5hCAXQAKAVAGAWQAUBIgUBEQgUBDg4AyQg3AwhGAMQg9AKg9gUQgIA/gkAyQgoA5hDAdQgdAMgdAFQAEATACAUIABAVQAqgCArAMQBDASAvAxQA0A2AOBOQAOBPgfBFQgWAxgpAkQgpAlgzARQgjALgmAAQgdAAgegHg");
	var mask_9_graphics_30 = new cjs.Graphics().p("AglP6QhIgDg+gtQg/gtgbhEQgRgtAAguQgBgZAFgZQAOhIA1g3IANgNQgagPgWgUQgxgvgUhDQgKgkAAgkQhFAGg7geQg9gdgng5Qgng6gEhDQgCgbADgVQAGgxAYgrQAZgsAmgeQAzgpBDgLQgEgSgCgTQgCgbADgZQAFguATgmQAfg/A+gnQA+gnBGgBQAqAAAoANQAIhAApg2QAsg7BCgZIAHgDQgMgagHgdQgNg7AOg6QAQg+AtgxQAtgxA8gUQA9gUBBAMQBCAMAxAoQAxApAZA+QAZA+gIA/QgIBHgvA6QgvA5hCAYQAKAUAGAXQAUBHgUBEQgUBEg4AxQg3AxhGAMQg9ALg9gVQgIA/gkAyQgoA5hDAcQgdANgdAFQAEATACAUIABAVQAqgDArAMQBDATAvAwQA0A3AOBOQAOBOgfBFQgVAwgoAkQArAYAfAnQAtA6AHBMQAHBMgiBBQghBAhDAmQg8AkhCAAIgMgBg");
	var mask_9_graphics_31 = new cjs.Graphics().p("Ai0ScQhCgbgsg9Qgsg9gEhHQgEhHAkhCQAdg3AwghQgUgagMgfQgRguAAgtQgBgZAFgaQAOhHA1g3IANgNQgagPgWgVQgxgugUhEQgKgkAAgjQhFAFg7gdQg9gdgng6Qgng5gEhCQgCgbADgWQAGgwAYgsQAZgsAmgfQAzgpBDgLQgEgSgCgSQgCgcADgZQAFguATgmQAfg/A+gnQA+gnBGgBQAqAAAoANQAIg/Apg2QAsg8BCgZIAHgCQgMgbgHgdQgNg6AOg7QAQg+AtgxQAtgwA8gVQA9gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA5hCAXQAKAVAGAWQAUBIgUBEQgUBDg4AyQg3AxhGAMQg9AKg9gUQgIA/gkAyQgoA5hDAdQgdAMgdAFQAEATACAUIABAVQAqgCArAMQBDASAvAwQA0A2AOBOQAOBPgfBFQgVAwgoAkQArAYAfAnQAtA5AHBMQAHBNgiBAQgdA4g2AkQASAZAMAeQAdBFgMBHQgIAtgWAnQgTAggeAdQg1AwhJANQgYAEgYAAQgwAAgsgSg");
	var mask_9_graphics_73 = new cjs.Graphics().p("Ai0ScQhCgbgsg9Qgsg9gEhHQgEhHAkhCQAdg3AwghQgUgagMgfQgRguAAgtQgBgZAFgaQAOhHA1g3IANgNQgagPgWgVQgxgugUhEQgKgkAAgjQhFAFg7gdQg9gdgng6Qgng5gEhCQgCgbADgWQAGgwAYgsQAZgsAmgfQAzgpBDgLQgEgSgCgSQgCgcADgZQAFguATgmQAfg/A+gnQA+gnBGgBQAqAAAoANQAIg/Apg2QAsg8BCgZIAHgCQgMgbgHgdQgNg6AOg7QAQg+AtgxQAtgwA8gVQA9gUBBAMQBCAMAxApQAxAoAZA+QAZA+gIA/QgIBIgvA6QgvA5hCAXQAKAVAGAWQAUBIgUBEQgUBDg4AyQg3AxhGAMQg9AKg9gUQgIA/gkAyQgoA5hDAdQgdAMgdAFQAEATACAUIABAVQAqgCArAMQBDASAvAwQA0A2AOBOQAOBPgfBFQgVAwgoAkQArAYAfAnQAtA5AHBMQAHBNgiBAQgdA4g2AkQASAZAMAeQAdBFgMBHQgIAtgWAnQgTAggeAdQg1AwhJANQgYAEgYAAQgwAAgsgSg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_9_graphics_25,x:197.884,y:164.1201}).wait(1).to({graphics:mask_9_graphics_26,x:190.647,y:181.63}).wait(1).to({graphics:mask_9_graphics_27,x:174.1402,y:191.9413}).wait(1).to({graphics:mask_9_graphics_28,x:163.8438,y:207.4432}).wait(1).to({graphics:mask_9_graphics_29,x:163.8438,y:220.1134}).wait(1).to({graphics:mask_9_graphics_30,x:163.8438,y:240.5646}).wait(1).to({graphics:mask_9_graphics_31,x:163.8438,y:258.5139}).wait(42).to({graphics:mask_9_graphics_73,x:163.8438,y:258.5139}).wait(1));

	// lady03
	this.instance_21 = new lib.CachedBmp_12();
	this.instance_21.setTransform(128,146.85,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_13();
	this.instance_22.setTransform(128,146.85,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_21,this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},25).to({state:[{t:this.instance_22}]},48).wait(1));

	// 筆02
	this.instance_23 = new lib.手握筆();
	this.instance_23.setTransform(531.5,391.15,1,1,0,0,0,673.3,448.9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(16).to({_off:false},0).wait(1).to({x:560.9,y:410.05},0).wait(1).to({x:580.85,y:398.5},0).wait(1).to({x:588.2,y:358.6},0).wait(1).to({x:573.5,y:314.5},0).wait(1).to({x:540.95,y:291.4},0).wait(1).to({x:500,y:289.3},0).wait(1).to({x:465.35,y:306.1},0).wait(1).to({x:451.7,y:320.8},0).to({_off:true},1).wait(49));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_16 = new cjs.Graphics().p("AhrDkQg9gdgmg2QgagkgMgtQgLgsAEgsQAGg+Akg2QAkg2A2gdQA3geBAAAQBBAAA3AdQA7AgAlA6QAiA3ADBEQADBDgdA6QgeA6g4AmQg5AmhBAFIgSABQg3AAg1gag");
	var mask_10_graphics_17 = new cjs.Graphics().p("AA+FiQhCgVgtgyQgrgvgPhAQgEgQgBgRIgIABQhBAFg9gdQg+gegmg1QgagkgLgsQgMgtAEgtQAGg+Akg2QAkg1A3geQA3gdBBAAQBAgBA3AeQA7AfAkA6QAfAxAGA7QAvgFAwAOQBDATAvAxQAvAwAQBDQAQBFgTBAQgTBAg0AwQgzAwhCAPQgaAFgbAAQgoAAgngMg");
	var mask_10_graphics_18 = new cjs.Graphics().p("ADmG/QhCgQgwgsQgwgsgVhAIgCgGIAAAAQhBAOhDgVQhCgVgugyQgqgvgPhAQgEgQgCgQIgHAAQhCAFg9gdQg9gdgmg1QgaglgMgsQgLgtAEgtQAGg+Akg2QAkg1A2geQA3gdBBAAQBBgBA3AeQA7AfAlA6QAeAxAGA7QAugFAwAOQBEATAuAxQArAsASA8QAUgFAWgBQBCgDA5AbQA6AcAmA1QAmA1AIA/QAGAtgLAsQgKAtgZAlQgZAlgkAbQglAcgrAMQghAKgjAAQgeAAgfgHg");
	var mask_10_graphics_19 = new cjs.Graphics().p("ACpG/QhCgQgwgsQgwgsgUhAIgCgGIgBAAQhBAOhDgVQhDgVgtgyQgrgvgPhAQgEgQgCgQIgHAAQhBAFg9gdQg+gdgmg1QgaglgLgsQgMgtAEgtQAGg+Akg2QAkg1A3geQA3gdBBAAQBAgBA3AeQA8AfAkA6QAfAxAFA7QAwgFAwAOQA5ARAqAmQgCgZACgbQAGhBAng3QAmg4A7gdQA6gcBDAEQBEADA2AjQBBApAfBKQAgBKgPBLQgPBKg4A4QgsArg2ASIADAEQAmA1AIA/QAFAtgKAsQgLAtgYAlQgZAlglAbQgkAcgrAMQgiAKgjAAQgeAAgegHg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AClKfQhCgPgwgsQgwgsgUhBIgCgGIAAAAQhCAPhDgVQhCgVgugyQgqgvgPhAQgEgRgCgQIgHABQhCAEg9gdQg9gdgmg2QgagkgMgtQgLgsAEgsQAGg+Akg2QAkg2A2gdQA3geBBAAQBBAAA3AdQA7AgAlA6QAeAxAGA7QAvgFAwANQA5AQArAnQgDgaADgbQAGg/Amg4QAng4A6gcIAEgCIgLgGQgwgcghgsQgcgogMgwQgMgwAHgwQAIg+Amg0QAng0A4gbQA4gcBAADQBBACA1AgQA2AfAiA3QAiA3AEA+QAEA2gVA1QgUA0gnAnQgfAegnASIAWANQBAApAgBKQAfBJgOBLQgPBKg5A4QgsArg2ASIADAEQAmA2AIA/QAGAsgLAtQgKAsgZAlQgZAmgkAbQglAbgrANQgiAJgiAAQgeAAgfgHg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AClM9QhCgPgwgsQgwgsgUhBIgCgGIAAAAQhCAPhDgVQhCgVgugyQgqgvgPhAQgEgRgCgQIgHABQhCAEg9gdQg9gdgmg2QgagkgMgtQgLgsAEgtQAGg+Akg2QAkg1A2gdQA3geBBAAQBBAAA3AdQA7AgAlA5QAeAxAGA6QAvgEAwAOQA5AQArAmQgDgZADgbQAGhAAmg4QAng3A6gcIAEgCIgLgGQgwgcghgsQgcgogMgwQgMgwAHgwIAFgbIgEAAQhKgFg+gwQg+gwgZhGQgRgyAEgzQAGhLAwg+QAxg+BGgYQBHgXBMAUQBMAVAxA5QAxA4AKBOQAGAygLAtQA/ADA0AfQA2AfAiA3QAiA3AEA+QAEA2gVA1QgUA0gnAnQgfAegnASIAWANQBAAoAgBKQAfBKgOBLQgPBKg5A4QgsArg2ASIADAEQAmA2AIA/QAGAsgLAtQgKAsgZAlQgZAmgkAbQglAbgrANQgiAJgiAAQgeAAgfgHg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AClOFQhCgQgwgsQgwgsgUhAIgCgGIAAAAQhCAOhDgVQhCgVgugyQgqgvgPhAQgEgQgCgQIgHAAQhCAFg9gdQg9gegmg1QgaglgMgsQgLgtAEgtQAGg+Akg2QAkg1A2geQA3gdBBAAQBBAAA3AdQA7AfAlA6QAeAxAGA7QAvgEAwANQA5ARArAmQgDgZADgbQAGhBAmg3QAng4A6gdIAEgCIgLgGQgwgaghgtQgcgngMgwQgMgxAHgwIAFgaIgEAAQhKgFg+gwQg+gwgZhHIgCgHIgUALQg8AchGgGQhFgGg3gmQg2gmgdg/Qgeg/AGhCQAGhIAvg8QAug8BEgZQBEgYBKAQQBKARAzA0QAqArATA8IAAAAQAWgOAagIQBHgYBMAVQBMAVAxA4QAxA4AKBPQAGAygLAtQA/ADA0AeQA2AfAiA3QAiA3AEA+QAEA3gVA1QgUA0gnAmQgfAegnASIAWAMQBAApAgBKQAfBKgOBLQgPBKg5A4QgsAsg2ASIADAEQAmA1AIA/QAGAtgLAsQgKAtgZAlQgZAlgkAbQglAcgrAMQgiAKgiAAQgeAAgfgHg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AErOFQhCgQgwgsQgwgsgVhAIgCgGIAAAAQhCAOhCgVQhCgVgugyQgqgvgPhAQgEgQgCgQIgHAAQhCAFg9gdQg9gegmg1QgaglgMgsQgLgtAEgtQAGg+Akg2QAkg1A2geQA3gdBBAAQBBAAA3AdQA7AfAlA6QAdAxAGA7QAvgEAwANQA6ARArAmQgDgZADgbQAGhBAmg3QAng4A6gdIAEgCIgLgGQgwgaghgtQgcgngMgwQgMgxAHgwIAFgaIgEAAQhKgFg/gwQg+gwgZhHIgCgHIgTALQg8AchGgGQhFgGg3gmIgEgDQgeA4gzAiQg+AphPAAQhOgBg+gpQg+gqgehIQgehJAOhJQAJg0AggtQAfgtAtgcQAugbA2gHQA3gHAyAPQAqANAiAaQAKgQAMgPQAug8BEgZQBEgYBKAQQBJARAzA0QAqArATA8IAAAAQAXgOAagIQBHgYBMAVQBMAVAxA4QAxA4AKBPQAGAygLAtQA/ADA0AeQA2AfAiA3QAiA3AEA+QAEA3gVA1QgUA0gnAmQgfAegnASIAWAMQBAApAgBKQAfBKgOBLQgPBKg5A4QgsAsg2ASIADAEQAmA1AIA/QAGAtgLAsQgKAtgZAlQgZAlgkAbQglAcgrAMQghAKgjAAQgeAAgfgHg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AHBOFQhCgQgwgsQgwgsgVhAIgCgGIAAAAQhCAOhDgVQhCgVgugyQgpgvgPhAQgEgQgCgQIgHAAQhCAFg9gdQg9gegmg1QgaglgMgsQgLgtAEgtQAGg+Akg2QAkg1A2geQA3gdBBAAQBBAAA2AdQA7AfAlA6QAeAxAGA7QAvgEAwANQA6ARArAmQgDgZADgbQAGhBAmg3QAng4A6gdIAEgCIgLgGQgwgaghgtQgcgngMgwQgMgxAHgwIAFgaIgEAAQhKgFg/gwQg+gwgZhHIgCgHIgUALQg8AchGgGQhEgGg3gmIgEgDQgeA4gzAiQg+AphPAAQgZAAgXgFQgFAdgLAbQgZA8g2AqQg2AphBAKQhAAJhAgYQg/gZgqgzQgXgdgPgiQgNgggEghQgHgyAOgzQAPgzAggoQAggoAugZQAugYAzgFQAkgDAkAHIABgFQAJg0AggtQAfgtAtgcQAugbA2gHQA3gHAyAPQAqANAiAaQAKgQAMgPQAug8BEgZQBDgYBKAQQBKARAzA0QAqArATA8IAAAAQAXgOAagIQBHgYBMAVQBMAVAxA4QAxA4AKBPQAGAygLAtQA/ADA0AeQA2AfAiA3QAiA3AEA+QAEA3gVA1QgUA0gnAmQgfAegnASIAWAMQBAApAgBKQAfBKgOBLQgPBKg5A4QgsAsg2ASIADAEQAmA1AIA/QAGAtgLAsQgKAtgZAlQgZAlgkAbQglAcgrAMQgiAKgiAAQgeAAgfgHg");
	var mask_10_graphics_73 = new cjs.Graphics().p("AHBOFQhCgQgwgsQgwgsgVhAIgCgGIAAAAQhCAOhDgVQhCgVgugyQgpgvgPhAQgEgQgCgQIgHAAQhCAFg9gdQg9gegmg1QgaglgMgsQgLgtAEgtQAGg+Akg2QAkg1A2geQA3gdBBAAQBBAAA2AdQA7AfAlA6QAeAxAGA7QAvgEAwANQA6ARArAmQgDgZADgbQAGhBAmg3QAng4A6gdIAEgCIgLgGQgwgaghgtQgcgngMgwQgMgxAHgwIAFgaIgEAAQhKgFg/gwQg+gwgZhHIgCgHIgUALQg8AchGgGQhEgGg3gmIgEgDQgeA4gzAiQg+AphPAAQgZAAgXgFQgFAdgLAbQgZA8g2AqQg2AphBAKQhAAJhAgYQg/gZgqgzQgXgdgPgiQgNgggEghQgHgyAOgzQAPgzAggoQAggoAugZQAugYAzgFQAkgDAkAHIABgFQAJg0AggtQAfgtAtgcQAugbA2gHQA3gHAyAPQAqANAiAaQAKgQAMgPQAug8BEgZQBDgYBKAQQBKARAzA0QAqArATA8IAAAAQAXgOAagIQBHgYBMAVQBMAVAxA4QAxA4AKBPQAGAygLAtQA/ADA0AeQA2AfAiA3QAiA3AEA+QAEA3gVA1QgUA0gnAmQgfAegnASIAWAMQBAApAgBKQAfBKgOBLQgPBKg5A4QgsAsg2ASIADAEQAmA1AIA/QAGAtgLAsQgKAtgZAlQgZAlgkAbQglAcgrAMQgiAKgiAAQgeAAgfgHg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_10_graphics_16,x:255.6372,y:175.6048}).wait(1).to({graphics:mask_10_graphics_17,x:269.5641,y:186.8957}).wait(1).to({graphics:mask_10_graphics_18,x:284.5179,y:195.6582}).wait(1).to({graphics:mask_10_graphics_19,x:290.6769,y:195.6582}).wait(1).to({graphics:mask_10_graphics_20,x:291.0489,y:173.2232}).wait(1).to({graphics:mask_10_graphics_21,x:291.0489,y:157.431}).wait(1).to({graphics:mask_10_graphics_22,x:291.0489,y:150.2516}).wait(1).to({graphics:mask_10_graphics_23,x:277.6278,y:150.2516}).wait(1).to({graphics:mask_10_graphics_24,x:262.6475,y:150.2516}).wait(49).to({graphics:mask_10_graphics_73,x:262.6475,y:150.2516}).wait(1));

	// lady02
	this.instance_24 = new lib.CachedBmp_14();
	this.instance_24.setTransform(195.3,77.3,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_15();
	this.instance_25.setTransform(195.3,77.3,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_24,this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},16).to({state:[{t:this.instance_25}]},57).wait(1));

	// 筆01
	this.instance_26 = new lib.手握筆();
	this.instance_26.setTransform(336.05,382.95,1,1,0,0,0,673.3,448.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({x:333.05,y:337.95},0).wait(1).to({x:356.05,y:304.95},0).wait(1).to({x:390.05,y:297.95},0).wait(1).to({x:422.05,y:304.95},0).wait(1).to({x:451.05,y:327.95},0).wait(1).to({x:473.05,y:355.95},0).wait(1).to({x:494.05,y:389.95},0).wait(1).to({x:518.05,y:422.95},0).wait(1).to({x:542.05,y:451.95},0).wait(1).to({x:569.05,y:478.95},0).wait(1).to({x:597.05,y:498.95},0).wait(1).to({x:629.05,y:504.95},0).wait(1).to({x:630.05,y:468.95},0).wait(1).to({x:605.05,y:435.95},0).wait(1).to({x:593.05,y:422.95},0).to({_off:true},1).wait(58));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AhWDtQg1gTgogoQgmgmgTg0QgTg0ADg1QAEg8Agg0QAfg1AygfQAyggA9gGQA8gGA3AVQA3AWApAtQAqAtAPA5QAPA2gKA3QgJA5ggAtQggAugxAdQgyAcg3AFIgWABQgqAAgsgQg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AgKHKQg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUghAagYQghgDgggMQg2gSgngoQgmgmgUg0QgTg0ADg2QAEg7Agg0QAfg1AyggQAyggA9gHQA9gGA2AVQA3AVAqAuQApAtAQA5QAPA1gJA5QgKA4gfAvQgRAXgVAUQAkACAiAOQA3AUApAtQApAuAQA5QAOA1gJA5QgKA4gfAuQggAtgyAdQgxAdg3AFIgWABQgsAAgqgQg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AgKKPQg2gTgngoQgmgmgUg0QgTg0AEg2QAEg8Afg0QAUghAagYQghgDgggMQg2gUgngnQgmgngUgzQgTg0ADg1QAEg7Agg1QAfg1AyggQAUgNAXgJQgagggPgpQgTg0AEg2QAEg7Agg0QAfg1AygfQAyggA8gGQA9gGA3AVQA3AWApAtQApAtAQA5QAPA2gJA4QgKA5ggAuQggAtgxAdQgRAKgRAHQAiApAOAyQAPA2gJA4QgKA4gfAuQgRAYgVATQAkADAiANQA3AWApAtQApAtAQA5QAOA2gJA4QgKA5gfAtQggAugyAdQgxAcg3AFIgWABQgsAAgqgQg");
	var mask_11_graphics_3 = new cjs.Graphics().p("Ah6L6Qg1gUgognQgmgmgTg1QgTg0ADg2QAEg7Agg1QATggAbgZQghgDghgMQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7AfgzQAfg1AyggQAVgOAXgJQgagggPgoQgTg1ADg1QAFg7Afg1QAgg0AyggQAygfA8gGQAXgDAVACQAHgvAZgqQAfg1AyggQAyggA9gGQA9gGA3AVQA3AVAqAuQApAtAQA5QAOA2gJA4QgKA5ggAtQggAugxAdQgyAcg3AFQgUACgUgCIgBADQgKA4gfAuQggAugyAdQgQAJgSAHQAjApAOAyQAPA1gKA5QgJA5ggAuQgQAXgVAUQAjACAiAOQA3AVApAtQAqAuAPA5QAPA1gKA5QgJA4ggAuQggAtgxAdQgyAdg2AFIgWABQgrAAgsgQg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AkaL6Qg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUggAagZQghgDgggMQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7AggzQAfg1AyggQAVgNAWgJQgaghgPgoQgTg1AEg1QAEg7Agg1QAfg0AyggQAygfA9gGQAWgDAVACQAIgvAZgqQAfg1AyggQAyggA8gGQA9gGA4AVQAmAPAfAaQALgKANgIQAxggA9gGQA9gHA3AVQA3AVApAsQAqAtAQA5QAQA1gJA5QgJA5ggAuQgfAugxAdQgxAdg4AGQg3AFg2gTQgqgPgigbQgPAMgTALQgxAcg4AFQgUACgUgBIAAACQgJA4ggAuQggAugxAdQgRAJgRAHQAiApAOAyQAPA1gJA5QgKA5gfAuQgRAXgVAUQAkADAiANQA3AVApAtQAoAuAQA5QAOA1gJA5QgKA4gfAuQgfAtgyAdQgxAdg3AFIgWABQgsAAgrgQg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AnKL6Qg1gUgognQgmgmgTg1QgTg0ADg2QAEg7Agg1QATggAbgZQghgDghgMQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7AfgzQAfg1AyggQAVgNAXgJQgaghgPgoQgTg1ADg1QAFg7Afg1QAgg0AyggQAygfA8gGQAXgDAVACQAHgvAZgqQAgg1AyggQAyggA9gGQA9gGA3AVQAmAPAfAaQALgKAMgIQAyggA8gGQA9gHA3AVQA3AVAqAsQAgAjARAqQApgVAwgFQA9gHA4AVQA3AWAqAtQApAtAQA5QAPA2gJA5QgJA4ggAuQgfAugyAdQgxAdg4AFQg3AGg2gUQg2gTgognQgkglgUgxQgrAWgvAFQg4AFg2gTQgqgPghgbQgPAMgSALQgyAcg3AFQgUACgUgBIgBACQgKA4gfAuQggAugyAdQgQAJgSAHQAjApAOAyQAPA1gKA5QgJA5ggAuQgQAXgWAUQAkADAiANQA3AVApAtQAqAuAPA5QAPA1gKA5QgJA4ggAuQggAtgxAdQgyAdg3AFIgWABQgrAAgsgQg");
	var mask_11_graphics_6 = new cjs.Graphics().p("ApAL6Qg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUggAagZQghgDgggMQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7AggzQAfg1AyggQAVgNAWgJQgaghgPgoQgTg1AEg1QAEg7Agg1QAfg0AyggQAygfA9gGQAWgDAVACQAIgvAZgqQAfg1AyggQAyggA9gGQA9gGA4AVQAmAPAfAaQALgKANgIQAxggA8gGQA9gHA3AVQA3AVApAsQAhAjARAqQApgVAwgFQA9gHA3AVQA4AWApAtQAqAtAQA5QALAogCApQBBAEA1AhQAoAZAdAnQAcAmANAuQAPA1gKA4QgJA4gfAtQggAtgxAdQgwAdg3AFQg3AGg2gTQg1gTgognQgmglgVgzQgTgyACg0QgkgCgjgNQg2gTgngnQglglgTgxQgrAWgwAFQg3AFg1gTQgqgPgigbQgPAMgTALQgxAcg4AFQgUACgUgBIAAACQgKA4ggAuQggAugxAdQgRAJgRAHQAiApAOAyQAPA1gJA5QgKA5gfAuQgRAXgVAUQAkADAiANQA3AVApAtQApAuAQA5QAOA1gJA5QgKA4gfAuQggAtgyAdQgxAdg3AFIgWABQgsAAgrgQg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AqlL6Qg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUggAagZQghgDgggMQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7AggzQAfg1AyggQAUgNAXgJQgaghgPgoQgTg1AEg1QAEg7Agg1QAfg0AyggQAygfA9gGQAWgDAVACQAIgvAZgqQAfg1AyggQAyggA9gGQA9gGA4AVQAlAPAgAaQALgKANgIQAxggA9gGQA9gHA2AVQA3AVApAsQAgAjARAqQAqgVAwgFQA9gHA3AVQA4AWApAtQAqAtAQA5QALAogCApQBBAEA1AhQAoAZAdAnQAcAmANAuQAPA1gKA4QgEAWgHAUQBGALA1ApQA2ArAZBEQAYBEgNBEQgNBEgxA1QgxA2hCATQhDAUhFgSQhGgTgwgxQgmgngTg0QgSgzADg2QADgiALgfQgXgEgXgIQg1gTgognQgmglgVgzQgTgyABg0QgjgCgjgNQg2gTgngnQglglgUgxQgqAWgvAFQg3AFg2gTQgrgPghgbQgQAMgSALQgxAcg4AFQgUACgUgBIAAACQgKA4ggAuQggAugxAdQgRAJgRAHQAiApAOAyQAPA1gJA5QgKA5gfAuQgRAXgVAUQAkADAiANQA3AVApAtQApAuAQA5QAOA1gJA5QgKA4gfAuQggAtgyAdQgxAdg3AFIgWABQgsAAgrgQg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AslL6Qg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUggAagZQghgDgggMQg2gTgngoQgmgmgUg0QgTg0ADg2QAEg7AggzQAfg1AyggQAUgNAXgJQgaghgPgoQgTg1AEg1QAEg7Agg1QAfg0AyggQAygfA9gGQAWgDAVACQAIgvAZgqQAfg1AyggQAyggA9gGQA9gGA4AVQAlAPAgAaQALgKANgIQAxggA9gGQA9gHA3AVQA3AVAoAsQAgAjARAqQAqgVAwgFQA9gHA3AVQA4AWApAtQAqAtAQA5QALAogCApQBBAEA1AhQAoAZAdAnQAcAmANAuQAPA1gKA4QgEAWgHAUQBGALA1ApQA2ArAZBEQAYBEgNBEIgEAQQA1gDAwASQA3AVAqAtQApAuAQA4QAPA2gJA4QgJA5ggAuQgfAugyAcQgxAdg3AFQg3AFg3gTQg1gUgognQgmgmgTg0QgUgzAEg2QABgYAHgYQgmACgmgKQhGgTgwgxQgmgngTg0QgSgzADg2QADgiALgfQgXgEgXgIQg1gTgognQgmglgVgzQgTgyABg0QgjgCgjgNQg2gTgmgnQglglgUgxQgqAWgwAFQg3AFg2gTQgrgPghgbQgQAMgSALQgxAcg4AFQgUACgUgBIAAACQgKA4ggAuQggAugxAdQgRAJgRAHQAiApAOAyQAPA1gJA5QgKA5gfAuQgRAXgVAUQAkADAiANQA3AVApAtQApAuAQA5QAOA1gJA5QgKA4gfAuQggAtgyAdQgxAdg3AFIgWABQgsAAgrgQg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AOJOQQg2gTgngnQgngngTg0QgUg0AEg2QABgQADgQQgogBgngOQg1gUgognQgmgmgTg0QgUgzAEg2QABgYAHgYQgmACgmgKQhGgTgwgxQgmgngTg0QgSgzADg2QADgiALgeQgXgEgXgIQg1gTgognQgmglgVg0QgTgyABg0QgjgCgigNQg2gTgngnQglglgUgxQgqAWgwAFQg3AFg2gTQgrgPghgbQgQAMgSALQgxAcg4AFQgUACgUgBIAAACQgKA4ggAuQggAugxAdQgRAJgRAHQAiApAOAzQAPA1gJA5QgKA4gfAuQgRAXgVAUQAkADAiANQA3AVApAtQApAuAQA5QAOA1gJA5QgKA4gfAuQggAtgyAdQgxAdg3AFQg3AFg2gUQg2gUgngnQgmgmgUg1QgTg0AEg2QAEg7Afg1QAUggAagZQghgDgggMQg2gTgngoQgmgmgUg0QgTgzADg2QAEg7Agg0QAfg1AyggQAUgNAXgJQgaghgPgoQgTg1AEg1QAEg7Agg1QAfg0AyggQAygfA9gGQAWgDAVACQAIgvAZgqQAfg1AyggQAyggA9gGQA9gGA4AVQAlAPAgAaQALgKANgIQAxggA9gGQA9gHA3AVQA3AVApAsQAgAjARAqQAqgVAvgFQA9gHA3AVQA4AWApAtQAqAtAQA5QALAogCApQBBAEA1AhQAoAZAdAnQAcAmANAuQAPA1gKA4QgDAWgIAUQBGALA1AqQA2ArAZBEQAYBDgNBEIgEAQQA1gDAwASQA3AVAqAtQApAuAQA4QAPA2gJA4IgBAIQArABAoAPQA3AVApAtQAqAtAQA5QAPA1gJA5QgKA5gfAuQggAugxAdQgxAdg4AFIgWABQgsAAgrgQg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AP4Q7Qg2gTgognQgmgmgUg0QgUg0ADg3QADglAMgjQgigCgigMQg1gUgognQgmgmgUg0QgTg0ADg2QABgRADgPQgngCgngOQg2gTgngnQgmgngUgzQgTg0ADg1QACgZAGgXQglABgngKQhGgSgwgyQglgmgTgzQgTg0AEg1QACgiAMggQgXgEgXgIQg2gTgngmQgmgmgUgzQgUgzACg0QgjgCgjgMQg2gUgognQgkgkgUgxQgrAVgvAFQg4AGg2gUQgqgPghgbQgQANgSAKQgyAdg3AFQgUACgVgCIAAACQgKA5gfAuQggAtgyAdQgQAKgSAGQAjAqAOAyQAPA2gKA5QgJA4ggAuQgQAYgWATQAkADAiANQA3AWApAsQAqAtAPA5QAPA2gKA4QgJA5ggAtQggAugxAdQgyAcg3AFQg3AFg2gUQg1gTgogoQgmgmgTg0QgTg0ADg2QAEg8Agg0QATghAbgYQghgDghgMQg2gTgngnQgmgngTgzQgUg0AEg2QAEg7Afg1QAfg1AyggQAVgNAWgJQgZgggPgpQgTg0ADg2QAFg7Afg0QAgg1AygfQAyggA8gGQAWgCAWABQAHgvAZgqQAgg1AyggQAyggA9gGQA9gGA3AVQAmAPAfAaQAMgJAMgIQAyggA8gHQA9gGA3AUQA3AVAqAtQAgAjARApQApgVAwgFQA9gGA3AVQA3AVAqAtQApAuAQA5QALAngCApQBBAEA1AiQAoAYAdAnQAdAnANAtQAOA1gJA5QgEAVgHAVQBGAKA1AqQA1AsAZBEQAZBEgOBDIgDAQQA0gDAxATQA3AVApAsQAqAtAQA5QAPA1gJA5IgCAIQArAAAoAPQA3AVAqAuQApAtAQA5QAQA1gKA5QgEAYgIAWQAlACAjANQA4AVApAuQAqAtAQA5QAQA1gKA5QgJA5gfAtQgfAugyAeQgxAdg4AFIgYABQgrAAgqgPg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AR5SuQg2gTgngoQgmgmgUg1QgMgggDghQgvACgugRQg2gTgognQgmgmgUg0QgUg0ADg3QADglAMgjQgigCgigMQg1gUgognQgmgmgUg0QgTg0ADg2QABgRADgPQgngCgngOQg2gTgngnQgmgngUgzQgTg0ADg1QACgZAGgXQglABgngKQhGgRgwgyQglgmgTg0QgSg0AEg1QABgjAMgfQgWgEgXgIQg2gTgngmQgngmgUgzQgUgzACg0QgjgCgjgMQg2gUgognQgkgkgUgxQgrAVgvAFQg4AGg2gUQgqgPghgbQgQANgSAKQgyAdg3AFQgUABgVgBIAAACQgKA5gfAuQggAtgyAdQgQAKgSAGQAiApAPAzQAPA2gKA5QgJA4ggAuQgQAYgWATQAkADAiANQA3AWApAtQAqAtAPA4QAPA2gKA4QgJA5ggAtQggAugxAdQgyAcg3AFQg3AFg2gUQg1gTgogoQgmgmgTg0QgTg0ADg2QAEg8AggzQATghAbgYQghgDghgMQg2gUgngnQgmgngTgzQgUg0AEg2QAEg7Afg1QAfg1AyggQAVgNAWgJQgagggOgpQgTg0ADg2QAFg7Afg0QAgg1AygfQAyggA8gGQAWgCAWABQAHgvAZgqQAgg1AyggQAyggA9gGQA9gGA3AVQAmAPAfAaQAMgJAMgIQAyggA8gHQA9gGA3AUQA3AVAqAtQAgAiARAqQApgVAwgFQA9gGA4AVQA3AVApAtQApAuAQA5QALAngCApQBBAEA1AiQAoAYAdAnQAdAnANAtQAOA1gJA5QgEAVgHAVQBGAKA1AqQA1AsAZBEQAZBEgOBDIgDAQQA0gDAxATQA3AVApAtQAqAtAQA4QAPA1gJA5IgCAIQArAAAoAPQA3AVAqAuQApAtAQA5QAQA1gKA5QgEAXgIAXQAlACAjANQA4AVApAuQAqAtAQA5QAHAXACAXQAzgBAvASQA4AVApAuQApAtAQA5QAPA1gKA5QgJA4ggAuQgfAugyAdQgxAdg4AFIgWABQgsAAgrgQg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AUMT9Qg1gUgognQgmgngTg0IAAAAQgSAEgTACQg3AFg2gUQg2gTgngoQgmgmgUg1QgMgggDghQgvACgugRQg2gTgognQgmgmgUg0QgUg0ADg3QADglAMgiQgigDgigMQg1gUgognQgmgmgUg0QgTg0ADg2QABgRADgPQgngCgngOQg2gTgngnQgmgngUgzQgTg0ADg0QACgZAGgXQgmABgmgKQhFgSgwgyQglgmgTg0QgTg0AEg1QACgiAMggQgYgEgWgIQg2gTgngmQgngmgUgzQgUgyACg0QgkgDgigMQg2gUgognQgkgkgUgxQgrAWgvAEQg4AGg2gUQgqgPghgbQgQANgSAKQgyAdg3AFQgVACgUgCIAAACQgKA5gfAuQggAtgyAdQgRAKgRAHQAiApAPAyQAPA2gKA5QgJA4ggAuQgRAYgVATQAkADAiANQA3AWApAtQAqAtAPA5QAPA2gKA3QgJA5ggAtQggAugxAdQgyAcg3AFQg3AFg2gUQg1gTgogoQgmgmgTg0QgTg0ADg1QAEg8Agg0QATghAbgYQghgDghgMQg2gUgngnQgmgngTgzQgUg0AEg2QAEg7Afg1QAfg1AyggQAVgNAWgJQgagggOgpQgTg0ADg2QAFg7Afg0QAgg1AygfQAyggA8gGQAWgCAWABQAHguAZgrQAgg1AyggQAyggA9gGQA9gGA3AVQAmAPAfAaQALgJANgIQAyggA8gHQA9gGA3AUQA3AVAqAtQAgAjARApQApgVAwgFQA9gGA4AVQA3AVAqAtQApAuAQA5QALAngCAqQBBADA0AiQAoAYAdAnQAdAnANAtQAOA1gJA5QgEAVgHAVQBGAKA1AqQA1AsAZBEQAZBEgOBDIgDAQQA0gDAxATQA3AVApAtQAqAtAQA5QAPA1gJA4IgCAIQArAAAoAPQA3AVAqAuQApAtAQA5QAQA1gKA5QgEAYgIAWQAlACAjANQA4AVApAuQAqAtAQA5QAHAXACAYQAzgCAvASQA4AVApAuQAiAlARAuQARgEASgCQA9gGA3AWQA3AVApAuQAqAtAPA5QAPA2gKA4QgJA5ggAuQggAugyAcQgyAdg3AEIgXABQgsAAgrgQg");
	var mask_11_graphics_13 = new cjs.Graphics().p("ASKT9Qg2gUgngnQgmgngTg0IAAAAQgSAEgTACQg4AFg2gUQg1gTgogoQgmgmgTg1QgMgggDghQgwACgugRQg2gTgngnQgngmgUg0QgUg0AEg3QACglANgiQgigDgigMQg2gUgngnQgngmgTg0QgUg0AEg2QABgRADgPQgngCgogOQg1gTgognQgmgngSgzQgUg0AEg0QACgZAGgXQgmABgmgKQhGgSgwgyQgmgmgTg0QgSg0ADg1QADgiAMggQgYgEgXgIQg1gTgogmQgmgmgVgzQgTgyACg0QgkgDgjgMQg2gUgngnQglgkgTgxQgrAWgwAEQg3AGg2gUQgqgPgigbQgPANgTAKQgxAdg4AFQgUACgUgCIAAACQgKA5ggAuQggAtgxAdQgRAKgRAHQAiApAOAyQAPA2gJA5QgKA4gfAuQgRAYgVATQAkADAiANQA3AWApAtQApAtAQA5QAOA2gJA3QgKA5gfAtQggAugyAdQgxAcg3AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0AEg1QAEg8Afg0QAUghAagYQghgDgggMQg2gUgngnQgmgngUgzQgTg0ADg2QAEg7Agg1QAfg1AyggQAVgNAWgJQgagggPgpQgTg0AEg2QAEg7Agg0QAfg1AygfQAyggA9gGQAWgCAVABQAIguAZgrQAfg1AyggQAyggA9gGQA9gGA4AVQAmAPAfAaQALgJANgIQAxggA9gHQA9gGA3AUQA3AVApAtQAhAjARApQApgVAwgFQA9gGA3AVQA4AVApAtQAqAuAQA5QALAngCAqQBBADA1AiQAoAYAdAnQAbAnANAtQAPA1gKA5QgDAVgHAVQBFAKA1AqQA2AsAZBEQAYBEgNBDIgEAQQA1gDAwATQA3AVAqAtQApAtAQA5QAPA1gJA4IgBAIQArAAAoAPQA3AVApAuQAqAtAQA5QAPA1gJA5QgEAYgIAWQAlACAjANQA3AVAqAuQAqAtAQA5QAHAXACAYQAzgCAvASQA3AVApAuQAjAlAQAuQARgEASgCQAagCAYACQAIgTAKgSQAfg0AyggQAyggA9gGQA9gGA3AVQA3AVApAtQAqAtAQA5QAPA1gKA5QgJA4gfAuQggAtgxAeQgyAdg3AFQgYACgYgCQgKAcgSAZQggAugxAcQgyAdg4AEIgWABQgsAAgrgQg");
	var mask_11_graphics_14 = new cjs.Graphics().p("ASKT9Qg2gUgngnQgmgngTg0IAAAAQgSAEgTACQg4AFg2gUQg1gTgogoQgmgmgTg1QgMgggDghQgwACgugRQg2gTgngnQgngmgUg0QgUg0AEg3QACglANgiQgigDgigMQg2gUgngnQgngmgTg0QgUg0AEg2QABgRADgPQgngCgogOQg1gTgognQgmgngSgzQgUg0AEg0QACgZAGgXQgmABgmgKQhGgSgwgyQgmgmgTg0QgSg0ADg1QADgiAMggQgYgEgXgIQg1gTgogmQgmgmgVgzQgTgyACg0QgkgDgjgMQg2gUgngnQglgkgTgxQgrAWgwAEQg3AGg2gUQgqgPgigbQgPANgTAKQgxAdg4AFQgUACgUgCIAAACQgKA5ggAuQggAtgxAdQgRAKgRAHQAiApAOAyQAPA2gJA5QgKA4gfAuQgRAYgVATQAkADAiANQA3AWApAtQApAtAQA5QAOA2gJA3QgKA5gfAtQggAugyAdQgxAcg3AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0AEg1QAEg8Afg0QAUghAagYQghgDgggMQg2gUgngnQgmgngUgzQgTg0ADg2QAEg7Agg1QAfg1AyggQAVgNAWgJQgagggPgpQgTg0AEg2QAEg7Agg0QAfg1AygfQAyggA9gGQAWgCAVABQAIguAZgrQAfg1AyggQAyggA9gGQA9gGA4AVQAmAPAfAaQALgJANgIQAxggA9gHQA9gGA3AUQA3AVApAtQAhAjARApQApgVAwgFQA9gGA3AVQA4AVApAtQAqAuAQA5QALAngCAqQBBADA1AiQAoAYAdAnQAbAnANAtQAPA1gKA5QgDAVgHAVQBFAKA1AqQA2AsAZBEQAYBEgNBDIgEAQQA1gDAwATQA3AVAqAtQApAtAQA5QAPA1gJA4IgBAIQArAAAoAPQA3AVApAuQAqAtAQA5QAPA1gJA5QgEAYgIAWQAlACAjANQA3AVAqAuQAqAtAQA5QAHAXACAYQAzgCAvASQA3AVApAuQAjAlAQAuQARgEASgCQAagCAYACIAHgQIgHgDQg2gTgngoQgmgmgTg1QgUg0AEg2QAEg7Agg1QAfg0AyggQAyggA9gGQA9gGA3AVQA3AWApAtQAqAtAPA5QAPA1gJA5QgGAkgPAfIAKAEQA3AVApAtQAqAtAQA5QAPA1gKA5QgJA4gfAuQggAtgxAeQgyAdg3AFQgYACgYgCQgKAcgSAZQggAugxAcQgyAdg4AEIgWABQgsAAgrgQg");
	var mask_11_graphics_15 = new cjs.Graphics().p("ASKT9Qg2gUgngnQgmgngTg0IAAAAQgSAEgTACQg4AFg2gUQg1gTgogoQgmgmgTg1QgMgggDghQgwACgugRQg2gTgngnQgngmgUg0QgUg0AEg3QACglANgiQgigDgigMQg2gUgngnQgngmgTg0QgUg0AEg2QABgRADgPQgngCgogOQg1gTgognQgmgngSgzQgUg0AEg0QACgZAGgXQgmABgmgKQhGgSgwgyQgmgmgTg0QgSg0ADg1QADgiAMggQgYgEgXgIQg1gTgogmQgmgmgVgzQgTgyACg0QgkgDgjgMQg2gUgngnQglgkgTgxQgrAWgwAEQg3AGg2gUQgqgPgigbQgPANgTAKQgxAdg4AFQgUACgUgCIAAACQgKA5ggAuQggAtgxAdQgRAKgRAHQAiApAOAyQAPA2gJA5QgKA4gfAuQgRAYgVATQAkADAiANQA3AWApAtQApAtAQA5QAOA2gJA3QgKA5gfAtQggAugyAdQgxAcg3AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0AEg1QAEg8Afg0QAUghAagYQghgDgggMQg2gUgngnQgmgngUgzQgTg0ADg2QAEg7Agg1QAfg1AyggQAVgNAWgJQgagggPgpQgTg0AEg2QAEg7Agg0QAfg1AygfQAyggA9gGQAWgCAVABQAIguAZgrQAfg1AyggQAyggA9gGQA9gGA4AVQAmAPAfAaQALgJANgIQAxggA9gHQA9gGA3AUQA3AVApAtQAhAjARApQApgVAwgFQA9gGA3AVQA4AVApAtQAqAuAQA5QALAngCAqQBBADA1AiQAoAYAdAnQAbAnANAtQAPA1gKA5QgDAVgHAVQBFAKA1AqQA2AsAZBEQAYBEgNBDIgEAQQA1gDAwATQA3AVAqAtQApAtAQA5QAPA1gJA4IgBAIQArAAAoAPQA3AVApAuQAqAtAQA5QAPA1gJA5QgEAYgIAWQAlACAjANQA3AVAqAuQAqAtAQA5QAHAXACAYQAzgCAvASQA3AVApAuQAjAlAQAuQARgEASgCQAagCAYACIAHgQIgHgDQg2gTgngoQgmgmgTg1QgSgxACgzQgSgEgRgGQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg0QAfg1AyggQAxggA9gGQA9gGA3AUQA3AVAqAtQApAtAQA5QAMAngCAqQAUAEATAHQA3AWApAtQAqAtAPA5QAPA1gJA5QgGAkgPAfIAKAEQA3AVApAtQAqAtAQA5QAPA1gKA5QgJA4gfAuQggAtgxAeQgyAdg3AFQgYACgYgCQgKAcgSAZQggAugxAcQgyAdg4AEIgWABQgsAAgrgQg");
	var mask_11_graphics_73 = new cjs.Graphics().p("ASKT9Qg2gUgngnQgmgngTg0IAAAAQgSAEgTACQg4AFg2gUQg1gTgogoQgmgmgTg1QgMgggDghQgwACgugRQg2gTgngnQgngmgUg0QgUg0AEg3QACglANgiQgigDgigMQg2gUgngnQgngmgTg0QgUg0AEg2QABgRADgPQgngCgogOQg1gTgognQgmgngSgzQgUg0AEg0QACgZAGgXQgmABgmgKQhGgSgwgyQgmgmgTg0QgSg0ADg1QADgiAMggQgYgEgXgIQg1gTgogmQgmgmgVgzQgTgyACg0QgkgDgjgMQg2gUgngnQglgkgTgxQgrAWgwAEQg3AGg2gUQgqgPgigbQgPANgTAKQgxAdg4AFQgUACgUgCIAAACQgKA5ggAuQggAtgxAdQgRAKgRAHQAiApAOAyQAPA2gJA5QgKA4gfAuQgRAYgVATQAkADAiANQA3AWApAtQApAtAQA5QAOA2gJA3QgKA5gfAtQggAugyAdQgxAcg3AFQg3AFg2gUQg2gTgngoQgmgmgUg0QgTg0AEg1QAEg8Afg0QAUghAagYQghgDgggMQg2gUgngnQgmgngUgzQgTg0ADg2QAEg7Agg1QAfg1AyggQAVgNAWgJQgagggPgpQgTg0AEg2QAEg7Agg0QAfg1AygfQAyggA9gGQAWgCAVABQAIguAZgrQAfg1AyggQAyggA9gGQA9gGA4AVQAmAPAfAaQALgJANgIQAxggA9gHQA9gGA3AUQA3AVApAtQAhAjARApQApgVAwgFQA9gGA3AVQA4AVApAtQAqAuAQA5QALAngCAqQBBADA1AiQAoAYAdAnQAbAnANAtQAPA1gKA5QgDAVgHAVQBFAKA1AqQA2AsAZBEQAYBEgNBDIgEAQQA1gDAwATQA3AVAqAtQApAtAQA5QAPA1gJA4IgBAIQArAAAoAPQA3AVApAuQAqAtAQA5QAPA1gJA5QgEAYgIAWQAlACAjANQA3AVAqAuQAqAtAQA5QAHAXACAYQAzgCAvASQA3AVApAuQAjAlAQAuQARgEASgCQAagCAYACIAHgQIgHgDQg2gTgngoQgmgmgTg1QgSgxACgzQgSgEgRgGQg2gTgngoQgmgmgTg0QgUg0AEg2QAEg7Afg0QAfg1AyggQAxggA9gGQA9gGA3AUQA3AVAqAtQApAtAQA5QAMAngCAqQAUAEATAHQA3AWApAtQAqAtAPA5QAPA1gJA5QgGAkgPAfIAKAEQA3AVApAtQAqAtAQA5QAPA1gKA5QgJA4gfAuQggAtgxAeQgyAdg3AFQgYACgYgCQgKAcgSAZQggAugxAcQgyAdg4AEIgWABQgsAAgrgQg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:87.6108,y:200.9095}).wait(1).to({graphics:mask_11_graphics_1,x:80.0864,y:178.8996}).wait(1).to({graphics:mask_11_graphics_2,x:80.0864,y:159.1246}).wait(1).to({graphics:mask_11_graphics_3,x:91.2114,y:148.4833}).wait(1).to({graphics:mask_11_graphics_4,x:107.2637,y:148.4718}).wait(1).to({graphics:mask_11_graphics_5,x:124.8171,y:148.4718}).wait(1).to({graphics:mask_11_graphics_6,x:136.6614,y:148.4718}).wait(1).to({graphics:mask_11_graphics_7,x:146.7882,y:148.4718}).wait(1).to({graphics:mask_11_graphics_8,x:159.5921,y:148.4718}).wait(1).to({graphics:mask_11_graphics_9,x:171.6789,y:163.4728}).wait(1).to({graphics:mask_11_graphics_10,x:182.7289,y:180.5323}).wait(1).to({graphics:mask_11_graphics_11,x:195.7326,y:192.0478}).wait(1).to({graphics:mask_11_graphics_12,x:210.6484,y:200.0218}).wait(1).to({graphics:mask_11_graphics_13,x:223.6576,y:200.0218}).wait(1).to({graphics:mask_11_graphics_14,x:223.6576,y:200.0218}).wait(1).to({graphics:mask_11_graphics_15,x:223.6576,y:200.0218}).wait(58).to({graphics:mask_11_graphics_73,x:223.6576,y:200.0218}).wait(1));

	// lady01
	this.instance_27 = new lib.CachedBmp_16();
	this.instance_27.setTransform(69.35,88.6,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_17();
	this.instance_28.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_27,this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_28}]},73).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,93.4,1452.3,989.1999999999999);
// library properties:
lib.properties = {
	id: '372126F6AF1A1346A9BC0DDCC2D53A29',
	width: 474,
	height: 506,
	fps: 9,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1701252285510", id:"Image"},
		{src:"images/B2B26作業08_atlas_1.png?1701252285464", id:"B2B26作業08_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['372126F6AF1A1346A9BC0DDCC2D53A29'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;