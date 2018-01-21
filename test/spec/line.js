const drawLine = require('../../lib/commands/line');
const Canvas = require('../../lib/commands/canvas');

const expect = require('expect');
const should = require('chai').should();

describe('drawLine', () => {
  it('should draw a line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 1, y1: 1, x2: 3, y2: 1})
    console.log(canvas);
  })
})