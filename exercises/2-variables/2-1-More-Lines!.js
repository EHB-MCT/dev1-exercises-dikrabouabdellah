"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines() {

    context.lineWidth = "5"
    context.beginPath();
    context.moveTo(margin,margin);
    context.lineTo(width - margin, margin);
    context.stroke();

    context.beginPath();
    context.moveTo(width - margin, margin);
    context.lineTo(margin, margin + 2 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, margin + 2 * margin);
    context.lineTo(width - margin, margin + 2 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(width - margin, margin + 2 * margin);
    context.lineTo(margin, margin + 4 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, margin + 4 * margin);
    context.lineTo(width - margin, margin + 4 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(width - margin, margin + 4 * margin);
    context.lineTo(margin, margin + 6 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, margin + 6 * margin);
    context.lineTo(width - margin, margin + 6 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(width - margin, margin + 6 * margin);
    context.lineTo(margin, margin + 8 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, margin + 8 * margin);
    context.lineTo(width - margin, margin + 8 * margin);
    context.stroke();

    context.beginPath();
    context.moveTo(width - margin, margin + 8 * margin);
    context.lineTo(margin,margin);
    context.stroke();
}