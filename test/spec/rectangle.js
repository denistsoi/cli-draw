const Canvas = require('../../lib/commands/canvas');
const rectangle = require('../../lib/commands/rectangle');

const expect = require('expect');
const should = require('chai').should();

describe('rectangle', () => {
  it('should draw a rectangle on to a canvas', () => {
    let canvas = new Canvas(4,4);

    rectangle(canvas, { x1: 1, y1: 1, x2: 3, y2: 3 })

    canvas.printCanvas().should.equal([
      '------',
      '|xxx |',
      '|x x |',
      '|xxx |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  it('should draw a rectangle on to a canvas', () => {
    let canvas = new Canvas(20,5);

    rectangle(canvas, { x1: 14, y1: 2, x2: 18, y2: 4})
    
    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|             xxxxx  |',
      '|             x   x  |',
      '|             xxxxx  |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));
  });

  it('should draw a two rectangles on to a canvas', () => {
    let canvas = new Canvas(7,4);
    
    rectangle(canvas, { x1: 1, y1: 2, x2: 3, y2: 4 })
    rectangle(canvas, { x1: 5, y1: 2, x2: 7, y2: 4 })  

    canvas.printCanvas().should.equal([
      '---------',
      '|       |',
      '|xxx xxx|',
      '|x x x x|',
      '|xxx xxx|',
      '---------\n',
    ].join('\n'));  
  });
})