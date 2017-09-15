import {expect} from 'chai';
import {Mathematics} from "../src/math/Mathematics";

describe('Math test', () => {
  
  let math: Mathematics;
  
  before(() => {
    math = new Mathematics();
  });
  
  it('It should return a number between 1 and 10', () => {
    let random: number = math.randomFrom1to10();
    expect(random).to.oneOf([1, 2, 3, 4, 5, 6, 7 , 8, 9, 10])
  });
  
  it('It should return 4', () => {
    expect(math.round(4.4)).to.approximately(4, 0.01);
  });
  
  it('It should return 5', () => {
    expect(math.round(4.6)).to.approximately(5, 0.01);
  });
  
  it('It should return 4', () => {
    expect(math.roundFloor(4.4)).to.approximately(4, 0.01);
  });
  
  it('It should return 5', () => {
    expect(math.roundCeil(4.6)).to.approximately(5, 0.01);
  });
});