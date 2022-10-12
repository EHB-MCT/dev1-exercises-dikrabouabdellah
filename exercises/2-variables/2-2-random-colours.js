"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;


drawRectangles(100,100,500)
drawRectangles(125,125,450)
drawRectangles(150,150,400)
drawRectangles(175,175,350)
drawRectangles(200,200,300)
drawRectangles(225,225,250)
drawRectangles(250,250,200)
drawRectangles(275,275,150)




function drawRectangles(x,y,size) {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+ r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(x,y,size,size);
}