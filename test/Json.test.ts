import {expect} from 'chai';
import {Time} from "../src/json/Time";
import {JsonMapper} from "../src/json/JsonMapper";

describe('Json test', () => {
  
  let jsonMapper: JsonMapper;
  
  before(() => {
    jsonMapper = new JsonMapper();
  });
  
  it('It should return a json object from the time object', () => {
    let time: Time = new Time(17,30,0);
  
    expect(jsonMapper.toJson(time)).to.equals('{"hour":17,"minute":30,"second":0}');
  });
  
  it('It should recreate a time object from the json object', () => {
    let json: string = '{"hour":18,"minute":20,"second":0}';
    let time: Time = jsonMapper.toObject(json);
    
    expect(time.getTime()).to.equals("18:20:0");
  });
});