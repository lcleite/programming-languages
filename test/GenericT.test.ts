import {expect} from 'chai';
import {List} from "../src/list/List";
import {GenericList} from "../src/generics/GenericList";

describe('Generic <T> test', () => {
  
  let list: GenericList<number>;
  
  before(() => {
    list = new GenericList<number>();
  });
  
  it('It should match an empty list', () => {
    expect(list.getElements()).to.members([]);
  });
  
  it('It should match [1, 2, 3]', () => {
    list.addItem(1);
    list.addItem(2);
    list.addItem(3);
    
    expect(list.getElements()).to.members([1, 2, 3]);
  });
  
  it('It should remove item 2', () => {
    list.removeItemAtIndex(1);
    
    expect(list.getElements()).to.members([1, 3]);
  });
  
  it('It should add item 2 and match [1, 2, 3] again', () => {
    list.addItemAtIndex(2, 1);
    
    expect(list.getElements()).to.members([1, 2, 3]);
  });
  
  it('It should return length 3', () => {
    expect(list.getLength()).to.equals(3);
  });
});