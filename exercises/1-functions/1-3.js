"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBoxes();

function drawBoxes(){
    
    //Big red box

    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(50,50,150,150);
    context.stroke();

    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(200,200,150,150);
    context.stroke();

    //Big black box

    context.beginPath();
    context.rect(125,125,150,150);
    context.fill();

    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(125,125,150,150);
    context.stroke();

    //Small red box

    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(275,75,50,50)
    context.stroke();

    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(75,275,50,50);
    context.stroke();

    //Small black box

    context.beginPath();
    context.rect(325,50,25,25)
    context.fill();

    context.beginPath();
    context.rect(50,325,25,25)
    context.fill();

}