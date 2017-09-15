import {expect} from 'chai';
import {Parameter} from "../src/parameter/Parameter";

describe('Parameter test', () => {
  
  let parameter: Parameter;
  
  before(() => {
    parameter = new Parameter();
  });
  
  it('It should return "default" string', () => {
    let str: string = parameter.defaultParameter();
  
    expect(str).to.equal("default");
  });
  
  it('It should return "parameter" for default() method', () => {
    let str: string = parameter.defaultParameter("parameter");
  
    expect(str).to.equal("parameter");
  });
  
  it('It should return "null" string', () => {
    let str: string = parameter.optionalParameter();
  
    expect(str).to.equal("null");
  });
  
  it('It should return "parameter" for optional() method', () => {
    let str: string = parameter.optionalParameter("parameter");
  
    expect(str).to.equal("parameter");
  });
  
});