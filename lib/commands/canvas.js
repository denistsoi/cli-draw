/**
 * createCanvas
 * @description create an emptyCanvas based on width, height
 * @param {Number} width canvas width
 * @param {Number} height canvas height
 * 
 * @return {Array} canvas 
 */

const isNumber = require('../helpers/isNumber');

const createCanvas = function(w, h) {
  let width = isNumber(w, 'width');
  let height = isNumber(h, 'height');

  // define rows "height" of canvas
  let canvas = new Array(height);

  // define cells in row based on width
  for (let i = 0; i < canvas.length; i++) {
    canvas[i] = new Array(width);
    // fill canvas cells with whitespace
    canvas[i].fill(' ');
  }

  return canvas;
}

exports = module.exports = createCanvas;