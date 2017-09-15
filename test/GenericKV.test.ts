import {expect} from 'chai';
import {GenericMap} from "../src/generics/GenericMap";

describe('Generic <K,V> test', () => {
  
  let map: GenericMap<number, string>;
  
  before(() => {
    map = new GenericMap<number, string>();
  });
  
  
  it('It should return [1, 2, 3]', () => {
    map.addPair(1, "one");
    map.addPair(2, "two");
    map.addPair(3, "three");
    
    expect(map.getAllKeys()).to.members([1, 2, 3]);
  });
  
  it('It should return ["one", "two", "three"]', () => {
    expect(map.getAllValues()).to.members(["one", "two", "three"]);
  });
  
  it('It should return "two"', () => {
    expect(map.getValue(2)).to.equals("two");
  });
  
  it('It should return true', () => {
    expect(map.exists(1)).to.equals(true);
  });
  
  it('It should return false', () => {
    expect(map.exists(10)).to.equals(false);
  });
  
  it('It should return size 3', () => {
    expect(map.getSize()).to.equals(3);
  });
  
  it('It should return ["one", "two"]', () => {
    map.remove(3);
    
    expect(map.getAllValues()).to.members(["one", "two"]);
  });
});