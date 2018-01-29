/**
 * bucket
 * fills any cell using floodfill 4-way, similar to scanline
 */

const isNumber = require('../helpers/isNumber');

function draw(canvas, coord, replacementColour) {
  let x = coord.x;
  let y = coord.y;
  
  canvas.canvas[y][x] = replacementColour;
  // console.log(canvas.printCanvas())
}

/**
 * fillNorth
 * @description look at every northern point of current position and fill bucket with left/right offset
 * @param {Object} Canvas 
 * @param {Object} coord 
 *   @param {Number} coord.x
 *   @param {Number} coord.y
 * @param {string} replacementColour 
 * @param {string} targetColour
 */

function fillNorth(canvas, coord, replacementColour, targetColour) {
  let x = coord.x;
  let y = coord.y;
  
  for (let i = y; i >= 0; i--) {
    if (canvas.canvas[i][x] == targetColour) {
      // fill current cell with replacement colour
      draw(canvas, {x, y: i}, replacementColour);


      // look left and right to check if there are spaces
      // fill Left/Right
      fillLeftRight(canvas, {x, y: i}, replacementColour, targetColour)      
    } else {
      // hits boundary
      return canvas;
    }
  }
}

/**
 * fillLeftRight
 * @description init bucket with left/right offset
 * @param {Object} Canvas 
 * @param {Object} coord 
 *   @param {Number} coord.x
 *   @param {Number} coord.y
 * @param {string} replacementColour 
 * @param {string} targetColour
 */
function fillLeftRight(canvas, coord, replacementColour, targetColour) {
  let x = coord.x;
  let y = coord.y;

  // look right
  if (canvas.canvas[y][x+1] == targetColour) {
    bucket(canvas, {x: x+2, y: y+1}, replacementColour, targetColour);
  } 
  // look left
  if (canvas.canvas[y][x-1] == targetColour) {      
    bucket(canvas, {x, y: y+1}, replacementColour, targetColour);
  }

  return canvas;
}


/**
 * fillSouth 
 * @description look at every southern point of current position and fill bucket with left/right offset
 * @param {Object} Canvas  
 * @param {Object} coord 
 *   @param {Number} coord.x
 *   @param {Number} coord.y
 * @param {string} replacementColour 
 * @param {string} targetColour
 */

function fillSouth(canvas, coord, replacementColour, targetColour) { 
  let x = coord.x;
  let y = coord.y;

  for (let i = y; i < canvas.height; i++) {
    if (canvas.canvas[i][x] == targetColour) {
      draw(canvas, {x, y: i}, replacementColour);
      // fill Left/Right
      fillLeftRight(canvas, {x, y: i}, replacementColour, targetColour)
    } else {
      return canvas;
    }
  }
}

/**
 * bucket
 * @description fill any target cell with replacementColour, keep going until we hit a boundary
 * @param {Object} Canvas 
 * @param {Object} coord 
 *   @param {Number} coord.x
 *   @param {Number} coord.y
 * @param {string} replacementColour 
 * @param {string} targetColour
 */
const bucket = function(canvas, coords, replacementColour, targetColour) {
  let x = isNumber(coords.x, 'x');
  let y = isNumber(coords.y, 'y'); 

  if (replacementColour === undefined) {
    throw `replacement colour is undefined`;
  }

  // normalise x and y
  x = x-1;
  y = y-1;
  
  if (!targetColour) {
    targetColour = canvas.canvas[y][x];
  }

  // find most northern boundary
  fillNorth(canvas, {x,y}, replacementColour, targetColour);
  // find most southern boundary
  fillSouth(canvas, {x, y: y+1}, replacementColour, targetColour);

  return canvas;
}

exports = module.exports = bucket;