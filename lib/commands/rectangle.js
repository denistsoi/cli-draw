/**
 * drawRectangle
 * @description draws a rectangle
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 */

const drawLine = require('./line');
const isNumber = require('../helpers/isNumber');

const drawRectangle = function(canvas, coords, character = 'x') {
  // use drawLine 
  let x1 = isNumber(coords.x1, 'x1');
  let y1 = isNumber(coords.y1, 'y1');
  let x2 = isNumber(coords.x2, 'x2');
  let y2 = isNumber(coords.y2, 'y2');

  /**
   * x1 != x2 && x1 < x2
   * y1 != y2 && y1 < y2
   */

  // top left to top right
  drawLine(canvas, { x1: x1, y1: y1, x2: x2, y2: y1 });
  // top left to bottom left
  drawLine(canvas, { x1: x1, y1: y1, x2: x1, y2: y2 });
  // top right to bottom right
  drawLine(canvas,  {x1: x2, y1: y1, x2: x2, y2: y2 });
  // bottom left to bottom right
  drawLine(canvas, { x1: x1, y1: y2, x2: x2, y2: y2 });

  return canvas;
}

exports = module.exports = drawRectangle;