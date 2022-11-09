"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect() {
	context.beginPath;
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
}

drawMaze();

function drawMaze() {
	for (let j = 0; j < height; j++) {
		let y1 = 0 + 10 * j;
		let y2 = 10 + 10 * j;
		context.lineWidth = 5;

		for (let i = 0; i < width; i++) {
			let color = Utils.hsl(Math.random() * 360, 100, 50);
			context.strokeStyle = color;
			let r = Math.round(Math.random());
			if (r == 0) {
				Utils.drawLine(0 + i * 10, y1, 10 + i * 10, y2);
			} else {
				Utils.drawLine(0 + i * 10, y2, 10 + i * 10, y1);
			}
		}
	}
}
