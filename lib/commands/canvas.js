/**
 * Canvas
 * @description canvas functions
 */


// import helper functions
const isNumber = require('../helpers/isNumber');

/**
 * createCanvas
 * @description create an emptyCanvas based on width, height
 * @param {Number} width canvas width
 * @param {Number} height canvas height
 * 
 * @return {Array} canvas 
 */
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


/**
 * addBorders
 * @description takes an innerCanvas object and returns borderedCanvas
 * @param {Canvas} Canvas Canvas Class
 *   @param {Number} width Canvas.width
 *   @param {Number} height Canvas.height
 *   @param {Array} canvas Canvas.canvas (an array representation of inner canvas)
 * 
 * @return {Array} borderedCanvas (an array representaiton with borders)
 */
const addBorders = function(_) {
  let width = _.width;
  let height = _.height;
  let canvas = [ ..._.canvas ];

  // add side borders
  canvas = canvas.map(row => {
    return ['|', ...row, '|']
  });

  // add top/bottom borders
  let border = new Array(_.width + 2).fill('-');
  canvas = [border, ...canvas, border];

  return canvas;
}

/**
 * canvasToString
 * @description takes a canvas Array and outputs to String
 * @param {Array} canvas (an array representation of canvas)
 * @return {String} canvasString (a stringed representation of canvas)
 */
const canvasToString = function(canvas) {
  let canvasString = canvas.map(row => 
    row.join('').concat('\n')
  ).join('');

  return canvasString;
}

class Canvas {
  constructor(width, height) {
    this.width = isNumber(width, 'width');
    this.height = isNumber(height, 'height');
    this.canvas = createCanvas(this.width, this.height);
  }

  // returns a string representation for bordered canvas
  printCanvas() {
    return canvasToString(addBorders(this));
  }
}

exports = module.exports = Canvas;