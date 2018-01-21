/**
 * drawLine
 * @description draws a line
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * 
 * @return 
 */

const isNumber = require('../helpers/isNumber');

const drawLine = function(canvas, coords, character = 'x') {
  let x1 = isNumber(coords.x1, 'x1');
  let y1 = isNumber(coords.y1, 'y1');
  let x2 = isNumber(coords.x2, 'x2');
  let y2 = isNumber(coords.y2, 'y2');
  
  let size;

  // if coords are diagonal
  if (y1 !== y2 && x1 !== x2) {
    throw new Error("only horizontal or vertical lines are supported");
  }

  // let size = y1 === y2 ? x2 - x1 : y2 - y1;
  
  // horizontal line
  if (y1 === y2) {
    size = x2 - x1;
    console.log(size, canvas)
    // let line  = new Array(size).fill(character);
    canvas[x1][y1] = character;
  }

  return canvas;

  // vertical line
  // if (x1 === x2) {
  //   size = y2 - y1;
  // }

  // return line as array with filled character
  // return new Array(size).fill(character);
}

exports = module.exports = drawLine;