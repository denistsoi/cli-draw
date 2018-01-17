/**
 * createCanvas
 * @description create an emptyCanvas based on width, height
 * @param {Number} width canvas width
 * @param {Number} height canvas height
 * 
 * @return {Array} canvas 
 */

const createCanvas = function(width, height) {
  // define rows "height" of canvas
  let canvas = new Array(width);

  // define cells in row based on width
  for (let i = 0; i < canvas.length; i++) {
    canvas[i] = new Array(height);
    // fill canvas cells with whitespace
    canvas[i].fill(' ');
  }

  return canvas;
}

exports = module.exports = createCanvas;