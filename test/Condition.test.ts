import {expect} from 'chai';
import {Condition} from "../src/condition/Condition";

describe('Condition test', () => {
  
  let condition: Condition;
  
  before(() => {
    condition = new Condition();
  });
  
  it('It should return a > b', () => {
    expect(condition.compare(10, 1)).to.equal(">");
  });
  
  it('It should return a < b', () => {
    expect(condition.compare(1, 10)).to.equal("<");
  });
  
  it('It should return a = b', () => {
    expect(condition.compare(10, 10)).to.equal("=");
  });
});