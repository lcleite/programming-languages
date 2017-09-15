import {expect} from 'chai';
import {Point} from "../src/class/Point";

describe('Class test', () => {
  
  it('It should create a point', () => {
    let point: Point = new Point(0,0);
    
    expect(point.constructor.name).to.equal(Point.name);
  });
  
  it('It should create a 2d point', () => {
    let point: Point = new Point(3,7);
    
    let sum: number = point.x + point.y;
    
    expect(sum).to.equal(10);
  });
  
  it('It should create a 3d point', () => {
    let point: Point = new Point(10, 5, 5);
    
    let sum: number = point.x + point.y + point.z;
    
    expect(sum).to.equal(20);
  });
  
});