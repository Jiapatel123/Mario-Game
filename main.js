function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	coin = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	mario_dies = loadSound("mariodie.wav");
	jumps = loadSound("jump.wav");
	kicks = loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("Model Loaded!");
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






