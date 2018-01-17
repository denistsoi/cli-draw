#!/usr/bin/env node

/**
 * Drawing Program
 */

/**
 * import external dependencies
 */

/**
 * import helper commands
 */

const bucket = require('./lib/commands/bucket');
const createCanvas = require('./lib/commands/canvas');
const line = require('./lib/commands/line');
const quit = require('./lib/commands/quit');
const rectangle = require('./lib/commands/rectangle');

// let c = canvas(4,4);
// console.log(c);
let height = 4;
let width = 20;

let canvas = createCanvas(width, height);

console.log('h: ', height, canvas[0].length);
console.log('w: ', width, canvas.length);


let border = {
  topLength: canvas.length + 2, 
  sideLength: canvas[0].length,
}

// draw line?
let topBorder = new Array(border.topLength).fill('-');
let sideBorder = new Array(border.sideLength).fill('|');


// horizonal section
// length can not be greater than slicedCanvas
// position < rowlength - line.length 
// slicedCanvas.slice(position, slicedCanvas.length - line.length).concat(line)

// let drawLine = (params) => { return topBorder };
// let drawRectangle = (params) => { 
//   return 
// }

console.log('full c: ', topBorder.length, sideBorder.length);