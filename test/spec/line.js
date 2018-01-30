const drawLine = require('../../lib/commands/line');
const Canvas = require('../../lib/commands/canvas');

const expect = require('expect');
const should = require('chai').should();

describe('drawLine', () => {
  it('should draw a horizontal line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 2, y1: 1, x2: 3, y2: 1 })

    canvas.printCanvas().should.equal([
      '------',
      '| xx |',
      '|    |',
      '|    |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  
  it('should draw a horizontal line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 1, y1: 1, x2: 3, y2: 1 })

    canvas.printCanvas().should.equal([
      '------',
      '|xxx |',
      '|    |',
      '|    |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  it('should draw a horizontal line from 4,1 to 5,1 on canvas', () => {
    let canvas = new Canvas(5,4);

    drawLine(canvas, { x1: 4, y1: 1, x2: 5, y2: 1 })

    canvas.printCanvas().should.equal([
      '-------',
      '|   xx|',
      '|     |',
      '|     |',
      '|     |',
      '-------\n',
    ].join('\n'));    
  });

  it('should draw a vertical line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 2, y1: 1, x2: 2, y2: 3})

    canvas.printCanvas().should.equal([
      '------',
      '| x  |',
      '| x  |',
      '| x  |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  it('should draw a vertical line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 2, y1: 2, x2: 2, y2: 3})

    canvas.printCanvas().should.equal([
      '------',
      '|    |',
      '| x  |',
      '| x  |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  it('should draw two lines line to a canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 1, y1: 1, x2: 3, y2: 1})
    drawLine(canvas, { x1: 2, y1: 1, x2: 2, y2: 3})

    canvas.printCanvas().should.equal([
      '------',
      '|xxx |',
      '| x  |',
      '| x  |',
      '|    |',
      '------\n',
    ].join('\n'));
  });


  it('should draw two lines line to a canvas', () => {
    let canvas = new Canvas(6,6);

    drawLine(canvas, { x1: 2, y1: 2, x2: 2, y2: 4})

    canvas.printCanvas().should.equal([
      '--------',
      '|      |',
      '| x    |',
      '| x    |',
      '| x    |',
      '|      |',
      '|      |',
      '--------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 3, y1: 2, x2: 4, y2: 2})

    canvas.printCanvas().should.equal([
      '--------',
      '|      |',
      '| xxx  |',
      '| x    |',
      '| x    |',
      '|      |',
      '|      |',
      '--------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 4, y1: 2, x2: 4, y2: 4})

    canvas.printCanvas().should.equal([
      '--------',
      '|      |',
      '| xxx  |',
      '| x x  |',
      '| x x  |',
      '|      |',
      '|      |',
      '--------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 2, y1: 4, x2: 4, y2: 4})

    canvas.printCanvas().should.equal([
      '--------',
      '|      |',
      '| xxx  |',
      '| x x  |',
      '| xxx  |',
      '|      |',
      '|      |',
      '--------\n',
    ].join('\n'));    
  });

  it('should draw a horizontal line but not go over canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 2, y1: 1, x2: 5, y2: 1 })

    canvas.printCanvas().should.equal([
      '------',
      '| xxx|',
      '|    |',
      '|    |',
      '|    |',
      '------\n',
    ].join('\n'));    
  });

  it('should draw a vertical line but not go over canvas', () => {
    let canvas = new Canvas(4,4);

    drawLine(canvas, { x1: 3, y1: 3, x2: 3, y2: 5 })

    canvas.printCanvas().should.equal([
      '------',
      '|    |',
      '|    |',
      '|  x |',
      '|  x |',
      '------\n',
    ].join('\n'));    
  });
})