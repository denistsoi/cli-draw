const createCanvas = require('../../lib/commands/canvas');
const canvasToString = require('../../lib/helpers/canvasToString');

const expect = require('expect');
const should = require('chai').should();

describe('createCanvas', () => {
  it('should create an internal canvas with width 4, height 5', () => {

    let c = createCanvas(4,5);

    expect(c[0].length).toEqual(4)
    expect(c.length).toEqual(5)
  });

  it('should create an internal canvas with width 20, height 4', () => {
    let c = createCanvas(20,4);
    expect(c[0].length).toEqual(20);
    expect(c.length).toEqual(4);
    // console.log(c);
  });

  it('should throw if params are missing', () => {
    (() => {
      createCanvas()
    }).should.throw('width is undefined');

    (() => {
      createCanvas(4)
    }).should.throw('height is undefined');

    // should not throw if params are defined
    (() => {
      createCanvas(4,4)
    }).should.not.throw('width/height is undefined');
  });
})

describe('canvasToString', () => {
  let c = createCanvas(4, 5);
  // c = canvasToString(c);

  console.log(c);

})
