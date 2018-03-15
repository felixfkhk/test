var picker;
var mark;
var myCanvas;
var wait;
var frame;
var initnumber;

function setup() {

	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.position(0,0);
	myCanvas.parent('myContainer');

	mark = loadGif('../../materials/mark7.gif');
	picker = 11;
	filter(BLUR,2);
	wait=0;
	initnumber = 12;
	imageMode(CENTER);
}

function draw(){
  noCursor();

// blendMode(SOFT_LIGHT);
// 	if (mouseX==pmouseX && mouseY==pmouseY) {
// 		wait++;
// 		if (wait>3 && wait <400) {
// 			picker++;
// 		}else if(wait >=400 &&wait<600) {
// 			picker++;
// 			background(255, 12);
// 		}else if(wait >=600 &&wait<800) {
// 			picker++;
// 			background(255, 24);
// 		}else if(wait >=800 &&wait<1000) {
// 			picker++;
// 			background(255, 36);
// 		}else if(wait >=1200 &&wait<1600) {
// 			picker++;
// 			background(255, 64);
// 		}else if(wait >=1800 &&wait<2000) {
// 			picker++;
// 			background(255, 100);
// 		}else if(wait >=2000 &&wait<2200) {
// 			picker++;
// 			background(255, 160);
// 		}else if(wait >=2200 &&wait<2400) {
// 			picker++;
// 			background(255, 204);
// 		}else if(wait >=2400) {
// 			picker++;
// 			background(255);
// 			wait=0;
// 		}
// 	}

}

function mouseMoved() {

	wait=0;

	if (mouseX > 2 && mouseY >2){

		if (picker % 2 == 0){
			// tint(0, 0, 0, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 50, 50), map(mouseX, 0, width, 50, 50));
			// tint(0, 0, 0, 100);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 50, 50), map(mouseX, 0, width, 50, 50));
		}else if(picker%2 == 1){
			// tint(255, 102,  51, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 50, 50), map(mouseX, 0, width, 50, 50));
			blendMode(MULTIPLY);
			// tint(240, 255, 102, 60);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 50, 50), map(mouseX, 0, width, 50, 50));
			blendMode(BLEND);
		}
	}

}

function mouseReleased() {

	wait=0;

	background(255, 1);

	if (mouseX > 2 && mouseY >2){

		if (picker % 2 == 0){
			tint(255, 204, 102, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 250, 340), map(mouseX, 0, width, 250, 340));
			tint(255, 255, 2, 100);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 250, 340), map(mouseX, 0, width, 250, 340));
			picker++;
		}else if(picker%2 == 1){
			tint(255, 102,  51, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 220, 340), map(mouseX, 0, width, 220, 340));
			blendMode(MULTIPLY);
			tint(240, 255, 102, 60);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 220, 340), map(mouseX, 0, width, 220, 340));
			blendMode(BLEND);
			picker++;
		}
	}

}

function windowResized() {

	resizeCanvas(windowWidth, windowHeight);
	if (picker % 2 == 0){
			// tint(255, 204, 102, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 250, 340), map(mouseX, 0, width, 250, 340));
			tint(255, 255, 2, 100);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 250, 340), map(mouseX, 0, width, 250, 340));
		}else if(picker%2 == 1){
			// tint(255, 102,  51, 200);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 220, 340), map(mouseX, 0, width, 220, 340));
			blendMode(MULTIPLY);
			tint(240, 255, 102, 60);
			image(mark, mouseX, mouseY, map(mouseX, 0, width, 220, 340), map(mouseX, 0, width, 220, 340));
			blendMode(BLEND);
		}


}
