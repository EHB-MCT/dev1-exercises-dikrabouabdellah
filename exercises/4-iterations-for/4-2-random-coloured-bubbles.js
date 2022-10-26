"use strict";

import context from "../../scripts/context.js";
import * as utils from '../../scripts/utils.js';

let margin= 200;

draw();

function draw() {
    context.beginPath
    context.fillStyle = "black";
    context.fillRect(0, 0, innerWidth, innerHeight);
}

drawBubbles();

function drawBubbles() {

    for (let i= 0; i< 100; i++) {
        let x = Math.random() * (innerWidth - margin *2);
        let y = Math.random() * (innerHeight - margin*2);
        let radius = Math.random() * 80;
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let a = 0.5;
        utils.fillCircle (x + margin, y + margin, radius, radius);
        let color = utils.rgba(r,g,b,a);
        context.fillStyle = color;
    }
}