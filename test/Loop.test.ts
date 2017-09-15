import {expect} from 'chai';
import {Point} from "../src/class/Point";
import {Loop} from "../src/loop/Loop";

describe('Loop test', () => {
  
  let loop: Loop;
  
  beforeEach(() => {
    loop = new Loop();
  });
  
  it('It should loop using for()', () => {
    let sum: number = loop.useFor();
  
    expect(sum).to.equal(45);
  });
  
  it('It should loop using for-each()', () => {
    let sum: number = loop.useForEach();
    
    expect(sum).to.equal(45);
  });
  
  it('It should loop using while()', () => {
    let sum: number = loop.useWhile();
  
    expect(sum).to.equal(45);
  });
  
});