import {expect} from 'chai';
import {Asynchronous} from "../src/async/Asynchronous";

describe('Async test', () => {
  
  let asynch: Asynchronous;
  
  before(() => {
    asynch = new Asynchronous();
  });
  
  it('It should get all ids', (done) => {
    asynch.getIds().then((ids: number[])=>{
      expect(ids).to.members([1, 2 , 3 , 4]);
      done();
    });
  });
  
  it('It should resolve the promise', (done) => {
    asynch.success(true).then((response: string)=>{
      expect(response).to.equals("pass");
      done();
    });
  });
  
  it('It should reject the promise', (done) => {
    asynch.success(false)
      .then((response: string)=>{})
      .catch((error: string) => {
        expect(error).to.equals("fail");
        done();
    });
  });
  
  it('It should return 10', (done) => {
    asynch.summation().then((result: number)=>{
      expect(result).to.equals(10);
      done();
    });
  });
  
  it('It should return "Hello World!"', (done) => {
    asynch.helloWorld().then((helloWorld: string)=>{
      expect(helloWorld).to.equals("Hello World!");
      done();
    });
  });
  
  it('It should return "Hello World!" using await', (done) => {
    asynch.awaitHelloWorld().then((helloWorld: string)=>{
      expect(helloWorld).to.equals("Hello World!");
      done();
    });
  });
  
  it('It should return "Hello World!" using Promise.all()', (done) => {
    asynch.parallelHelloWorld().then((helloWorld: string)=>{
      expect(helloWorld).to.equals("Hello World!");
      done();
    });
  });
});