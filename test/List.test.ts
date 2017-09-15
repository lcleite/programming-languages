import {expect} from 'chai';
import {List} from "../src/list/List";

describe('List test', () => {
  
  let list: List;
  
  before(() => {
    list = new List();
  });
  
  it('It should match an empty list', () => {
    expect(list.getElements()).to.members([]);
  });
  
  it('It should match ["A", "B", "C"]', () => {
    list.addItem("A");
    list.addItem("B");
    list.addItem("C");
    
    expect(list.getElements()).to.members(["A", "B", "C"]);
  });
  
  it('It should remove item "B"', () => {
    list.removeItemAtIndex(1);
    
    expect(list.getElements()).to.members(["A", "C"]);
  });
  
  it('It should add item "B" and match ["A", "B", "C"] again', () => {
    list.addItemAtIndex("B", 1);
    
    expect(list.getElements()).to.members(["A", "B", "C"]);
  });
  
  it('It should return length 3', () => {
    expect(list.getLength()).to.equals(3);
  });
});