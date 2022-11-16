"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = cross;

/**
 *
 * @param {MouseEvent} eventData
 */

function cross(eventData) {
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";

	let x = eventData.pageX;
	let y = eventData.pageY;

	context.lineWidth = "10";
	context.strokeStyle = "red";
	Utils.drawLine(x, 0, x, height);
	Utils.drawLine(0, y, width, y);
}
