import {expect} from 'chai';
import {Person} from "../src/gettersetter/Person";

describe('Getter and Setter test', () => {
  
  let person: Person;
  
  before(() => {
    person = new Person("Unnamed");
  });
  
  it('It should create a person named "Unnamed"', () => {
    expect(person.name).to.equal("Unnamed");
  });
  
  it('It should rename the person to "Leandro"', () => {
    person.name = "Leandro";
  
    expect(person.name).to.equal("Leandro");
  });
});