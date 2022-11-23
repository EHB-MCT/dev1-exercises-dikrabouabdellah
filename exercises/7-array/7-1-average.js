"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

function setup() {
	let numbers = [];

	for (let i = 0; i < 100; i++) {
		numbers[i] = Utils.randomNumber(0, 100);
	}
	console.log(numbers);
	calculateAverage(numbers);
}

function calculateAverage(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	console.log(sum);
	console.log(sum / array.length);
	return sum / array.length;
}
