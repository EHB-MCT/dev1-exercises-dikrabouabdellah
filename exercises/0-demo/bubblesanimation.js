"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubblesAmount = 50;

let xPos = [];
let yPos = [];
let sizes = [];

let ySpeeds = [];

setup();

function setup() {
	for (let i = 0; i < 50; i++) {
		xPos[i] = width / 2;
		yPos[i] = height;
		sizes[i] = Utils.randomNumber(25, 50);
		ySpeeds[i] = Utils.randomNumber(2, 10);
	}

	console.log(xPos);

	update();
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	console.log("updating");

	for (let i = 0; i < bubblesAmount; i++) {
		yPos[i] -= ySpeeds[i];
		xPos[i] += Utils.randomNumber(-10, 10);
		drawBubble(xPos[i], yPos[i], sizes[i], 180);
	}

	requestAnimationFrame(update);
}

function drawBubble(x, y, size, hue) {
	context.fillStyle = Utils.hsl(hue, 50, 50);
	Utils.fillCircle(x, y, size);
	context.fillStyle = Utils.hsl(hue, 50, 75);
	Utils.fillCircle(x + size / 3, y - size / 3, size / 4);
}
