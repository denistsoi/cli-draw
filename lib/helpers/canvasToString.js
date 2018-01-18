/**
 * canvasToString
 * @description converts an array of array 'canvas' to string;
 * @param {*} canvas 
 * 
 * @return {string} canvasString
 */

const canvasToString = function(canvas) {
  let canvasString = canvas.map(row => 
    row.join('').concat('\n')
  ).join('');

  return canvasString;
}

exports = module.exports = canvasToString;