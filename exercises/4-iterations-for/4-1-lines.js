"use strict";

import context from "../../scripts/context.js";
import * as utils from '../../scripts/utils.js';

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
    drawLines();
}

drawLines();

function drawLines() {
    let step = width / horizontalLines;
    let steps = height / verticalLines;

    for (let i= 0; i< horizontalLines; i++) {
        utils.drawLine (0 + (step * i), 0, width - (step * i), height);
    }
    for (let i= 0; i<= verticalLines; i++) {
        utils.drawLine (0, 0 + (steps * i), width, height - (steps * i));
    }
}