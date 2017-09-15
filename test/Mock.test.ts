import {expect} from 'chai';
import * as sinon from 'sinon';
import {Sum} from "../src/mock/Sum";
import {SinonStub} from "sinon";

describe('Mock test', () => {
  
  let operator: Sum;
  let stubObject: SinonStub;
  
  before(() => {
    operator = new Sum();
    stubObject = sinon.stub();
  });
  
  it('It should return a + b', () => {
    expect(operator.sum(5,5)).to.equals(10);
  });
  
  it('It should return a * b', () => {
    stubObject = sinon.stub(operator,"calculate").callsFake((a: number, b: number): number => {
      return a * b;
    });
    
    expect(operator.sum(5,5)).to.equals(25);
    stubObject.restore();
  });
  
  it('It should return 0', () => {
    stubObject = sinon.stub(operator,"calculate").returns(0);
    
    expect(operator.sum(5,5)).to.equals(0);
    stubObject.restore();
  });
});