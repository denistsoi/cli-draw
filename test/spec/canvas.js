const Canvas = require('../../lib/commands/canvas');
// const canvasToString = require('../../lib/helpers/canvasToString');
// const createBorder = require('../../lib/helpers/createBorder');

const expect = require('expect');
const should = require('chai').should();

describe('Canvas', () => {
  it('should create an internal canvas with width 4, height 5', () => {

    let canvas = new Canvas(4,5);
    expect(canvas.width).toEqual(4);
    expect(canvas.height).toEqual(5);
  })

  it('should create an internal canvas with width 20, height 4', () => {
    
    let canvas = new Canvas(20,4);
    
    expect(canvas.width).toEqual(20);
    expect(canvas.height).toEqual(4);
  });

  it('should throw if params are missing', () => {
    (() => {
      let canvas = new Canvas();
    }).should.throw('width is undefined');

    (() => {
      let canvas = new Canvas(4);
    }).should.throw('height is undefined');

    // should not throw if params are defined
    (() => {
      let canvas = new Canvas(4,4);
    }).should.not.throw('width/height is undefined');
  });

  it('should return a canvas to string', () => {
    let canvas = new Canvas(2,2);
    canvas.printCanvas().should.equal('----\n'+'|  |\n'+'|  |\n'+'----\n');
  })
})