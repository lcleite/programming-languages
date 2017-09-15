import {expect} from 'chai';
import {Division} from "../src/exception/Division";

describe('Exception test', () => {
  
  it('It should divide normally', () => {
    let division: Division = new Division(10,2);
    
    expect(division.divide()).to.equal(5);
  });
  
  it('It should throw an error when dividing by zero', () => {
    let division: Division = new Division(5,0);
  
    expect(() => {
      division.divide();
    }).to.throw("Can't divide a number by zero!");
  });
  
});