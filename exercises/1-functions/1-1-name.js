"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();


function drawName(){
    
    //D

    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(100,50);
    context.lineTo(100,300);
    context.lineTo(250,180);
    context.stroke();

    context.beginPath();
    context.moveTo(100,50);
    context.lineTo(250,180);
    context.stroke();

    

   //I 

   context.strokeStyle = "blue";
   context.lineWidth = 5;
   context.beginPath();
   context.moveTo(300,180);
   context.lineTo(300,300);
   context.stroke();

   //K

   context.strokeStyle = "Yellow";
   context.lineWidth = 5;
   context.beginPath();
   context.moveTo(350,180);
   context.lineTo(350,300);
   context.stroke();

   context.beginPath();
   context.moveTo(350,240);
   context.lineTo(400,180);
   context.stroke();

   context.beginPath();
   context.moveTo(350,240);
   context.lineTo(400,300);
   context.stroke();

   //R

   context.strokeStyle = "green";
   context.lineWidth = 5;
   context.beginPath();
   context.moveTo(450,180);
   context.lineTo(450,300);
   context.stroke();

   context.beginPath();
   context.moveTo(450,180);
   context.lineTo(500,210);
   context.lineTo(450,240);
   context.lineTo(500,300);
   context.stroke();

}