import {expect} from 'chai';
import {Utils} from "../src/static/Utils";

describe('Static test', () => {
  it('It should return true because object is null', () => {
    let object: any = null;
    expect(Utils.isNullOrUndefined(object)).to.be.true;
  });
  
  it('It should return true because object is undefined', () => {
    let object: any;
    expect(Utils.isNullOrUndefined(object)).to.be.true;
  });
  
  it('It should return false', () => {
    let object: any = {};
    expect(Utils.isNullOrUndefined(object)).to.be.false;
  });
  
});