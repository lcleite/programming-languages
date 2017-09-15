import {expect} from 'chai';
import {Ls} from "../src/implementation/Ls";
import {Cd} from "../src/implementation/Cd";
import {Rm} from "../src/implementation/Rm";

describe('Implementation test', () => {
  
  let ls: Ls;
  let cd: Cd;
  let rm: Rm;
  
  before(() => {
    ls = new Ls();
    cd = new Cd();
    rm = new Rm();
  });
  
  it('It should return all files in "/home/user"', () => {
    expect(ls.execute()).to.equals('Desktop/ Documents/ Downloads/ Music/ Public/ Videos/');
  });
  
  it('It should return all files in "/home/user/Music"', () => {
    expect(cd.execute("Music")).to.equals('blink182-All The Small Things.mp3    blink182-I Miss You.mp3');
  });
  
  it('It should remove all files in "/home/user/Music"', () => {
    expect(rm.execute("*")).to.equals('..');
  });
});