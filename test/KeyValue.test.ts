import {expect} from 'chai';
import {CharCount} from "../src/keyvalue/CharCount";

describe('Key Value test', () => {
  
  let charCount: CharCount;
  
  before(() => {
    charCount = new CharCount();
    charCount.count("Typescript");
  });
  
  it('It should match ["t", "y", "p", "e", "s", "c", "r", "i"]', () => {
    expect(charCount.getAllChars()).to.members(["t", "y", "p", "e", "s", "c", "r", "i"]);
  });
  
  it('It should return 2 for char "T"', () => {
    expect(charCount.getCharCount("T")).to.equals(2);
  });
  
  it('It should return 2 for char "t"', () => {
    expect(charCount.getCharCount("t")).to.equals(2);
  });
});