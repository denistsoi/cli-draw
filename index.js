#!/usr/bin/env node

/**
 * Drawing Program
 */

/**
 * import dependencies
 */



/**
 * define commands
 */


/**
 * createCanvas
 * @description create an emptyCanvas based on width, height
 * @param {Number} width canvas width
 * @param {Number} height canvas height
 * 
 * @return {Array} 
 */
const createCanvas = function(width, height) {
  // define rows "height" of canvas
  let canvas = new Array(height);

  // define cells in row based on width
  for (let i = 0; i < canvas.length; i++) {
    canvas[i] = new Array(width);
  }
  
  return canvas;
}

/**
 * drawLine
 * @description draw a straight line
 */
const drawLine = function(x1, y1, x2, y2) {

}

/**
 * draw Rectangle
 */
const drawRectangle = function(x1, y1, x2, y2) {
  // use drawLine 
}

const fill = function(x, y, colour) {

}