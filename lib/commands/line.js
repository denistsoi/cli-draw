/**
 * drawLine
 * @description draws a line
 * @param {Object} Canvas Object
 * @param {Object} coords Object
 *    @param {Number} coords.x1 x1 coordinate
 *    @param {Number} coords.y1 y1 coordinate
 *    @param {Number} coords.x2 x2 coordinate
 *    @param {Number} coords.y2 y2 coordinate
 * 
 * @param {String} [character] - 
 * @return {Object} Canvas Object
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

  if (y1 === y2) {
    // horizontal line
    size = (x2 - x1) + 1;

    // loop over length of line;
    for (var i = 0; i < size; i++) {
      if (x1 + i - 1 > canvas.width - 1) {
        return;
      }
      canvas.canvas[y1 - 1][x1 + i - 1] = character;
    }
  } else {
    // vertical line
    size = (y2 - y1) + 1;
    // loop over length of line
    for (var i = 0; i < size; i++) {
      if (y1 + i - 1 > canvas.height - 1) {
        return;
      }
      canvas.canvas[y1 + i - 1][x1 - 1] = character;
    }
  }
  
  return canvas;
}

exports = module.exports = drawLine;