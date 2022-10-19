"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    while (i<7) {
        let step = 100;
        let offset = 75;
        context.strokeRect(offset + (i*25), offset + (i*25), step, step);
        i = i + 1;
    }
}