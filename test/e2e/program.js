const Canvas = require('../../lib/commands/canvas');
const bucket = require('../../lib/commands/bucket');
const drawLine = require('../../lib/commands/line');
const rectangle = require('../../lib/commands/rectangle');

describe('e2e', () => {
  it('should fill an canvas', () => {
    let canvas = new Canvas(20,4);

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|                    |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 1, y1: 2, x2: 6, y2: 2 })

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|xxxxxx              |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));    
    
    drawLine(canvas, { x1: 6, y1: 3, x2: 6, y2: 4 })
    
    canvas.printCanvas().should.equal([
    '----------------------',
    '|                    |',
    '|xxxxxx              |',
    '|     x              |',
    '|     x              |',
    '----------------------\n',
    ].join('\n'));

    rectangle(canvas, { x1: 14, y1: 1, x2: 18, y2: 3 });

    canvas.printCanvas().should.equal([
      '----------------------',
      '|             xxxxx  |',
      '|xxxxxx       x   x  |',
      '|     x       xxxxx  |',
      '|     x              |',
      '----------------------\n'
    ].join('\n'));

    bucket(canvas, { x: 16, y: 2 }, 'o');

    canvas.printCanvas().should.equal([
      '----------------------',
      '|             xxxxx  |',
      '|xxxxxx       xooox  |',
      '|     x       xxxxx  |',
      '|     x              |',
      '----------------------\n',
    ].join('\n'));

  })  

  it('should fill an canvas', () => {
    let canvas = new Canvas(20,4);

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|                    |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 1, y1: 2, x2: 6, y2: 2 })

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|xxxxxx              |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));    
    
    drawLine(canvas, { x1: 6, y1: 3, x2: 6, y2: 4 })
    
    canvas.printCanvas().should.equal([
    '----------------------',
    '|                    |',
    '|xxxxxx              |',
    '|     x              |',
    '|     x              |',
    '----------------------\n',
    ].join('\n'));

    rectangle(canvas, { x1: 14, y1: 1, x2: 18, y2: 3 });

    canvas.printCanvas().should.equal([
      '----------------------',
      '|             xxxxx  |',
      '|xxxxxx       x   x  |',
      '|     x       xxxxx  |',
      '|     x              |',
      '----------------------\n'
    ].join('\n'));

    bucket(canvas, { x: 10, y: 3 }, 'o');

    canvas.printCanvas().should.equal([
      '----------------------',
      '|oooooooooooooxxxxxoo|',
      '|xxxxxxooooooox   xoo|',
      '|     xoooooooxxxxxoo|',
      '|     xoooooooooooooo|',
      '----------------------\n',
    ].join('\n'));

  });

  it('should fill an canvas', () => {
    let canvas = new Canvas(20,4);

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|                    |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));

    drawLine(canvas, { x1: 1, y1: 2, x2: 6, y2: 2 })

    canvas.printCanvas().should.equal([
      '----------------------',
      '|                    |',
      '|xxxxxx              |',
      '|                    |',
      '|                    |',
      '----------------------\n',
    ].join('\n'));    
    
    drawLine(canvas, { x1: 6, y1: 3, x2: 6, y2: 4 })
    
    canvas.printCanvas().should.equal([
    '----------------------',
    '|                    |',
    '|xxxxxx              |',
    '|     x              |',
    '|     x              |',
    '----------------------\n',
    ].join('\n'));

    rectangle(canvas, { x1: 14, y1: 1, x2: 18, y2: 3 });

    canvas.printCanvas().should.equal([
      '----------------------',
      '|             xxxxx  |',
      '|xxxxxx       x   x  |',
      '|     x       xxxxx  |',
      '|     x              |',
      '----------------------\n'
    ].join('\n'));

    bucket(canvas, { x: 14, y: 1 }, 'o');

    canvas.printCanvas().should.equal([
      '----------------------',
      '|             ooooo  |',
      '|xxxxxx       o   o  |',
      '|     x       ooooo  |',
      '|     x              |',
      '----------------------\n'
    ].join('\n'));

  });  
});