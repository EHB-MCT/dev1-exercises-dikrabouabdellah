"use strict";

import context from "./context.js";

export function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function drawRect() {
    context.beginPath();
    context.rect(x, y, w, h);
}

export function rgb(r,g,b) {
    let rgb ="rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function rgba(r,g,b,a) {
    let rgba ="rgba(" + r + "," + g + "," + b + "," + a +")";
    return rgba;
}

export function strokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
    context.stroke();
}

export function fillAndStrokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}

export function fillAndStrokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}

export function fillCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
    context.fill();
}
