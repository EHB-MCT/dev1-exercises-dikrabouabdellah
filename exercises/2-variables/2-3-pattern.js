"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;



context.fillStyle = "#0096FF";
context.fillRect(0, 0, width, height)

context.fillStyle = "#36454F";
context.fillRect(0, 0, width, (height /3) * 2)

context.fillStyle = "#E5E4E2";
context.fillRect(width /3, 0, width /3, height)

context.fillStyle = "#EE4B2B";
context.fillRect(0, height /5, width, height /3)
