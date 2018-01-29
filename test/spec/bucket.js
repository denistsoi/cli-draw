const Canvas = require('../../lib/commands/canvas');
const bucket = require('../../lib/commands/bucket');
const drawLine = require('../../lib/commands/line');
const rectangle = require('../../lib/commands/rectangle');

const expect = require('expect');
const should = require('chai').should();

describe('floodfill', () => {
  it('should fill an canvas', () => {
    let canvas = new Canvas(4,5);

    canvas.printCanvas().should.equal([
      '------',
      '|    |',
      '|    |',
      '|    |',
      '|    |',
      '|    |',
      '------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 2, y1: 1, x2: 3, y2: 1 })

    canvas.printCanvas().should.equal([
      '------',
      '| xx |',
      '|    |',
      '|    |',
      '|    |',
      '|    |',
      '------\n',
    ].join('\n'));    
    
    drawLine(canvas, { x1: 3, y1: 5, x2: 3, y2: 5 })

    bucket(canvas, { x: 1, y: 3 }, 'o');

    canvas.printCanvas().should.equal([
      '------',
      '|oxxo|',
      '|oooo|',
      '|oooo|',
      '|oooo|',
      '|ooxo|',
      '------\n',
    ].join('\n'));
  })
})