import {expect} from 'chai';
import {Shape} from "../src/inheritance/Shape";
import {Rectangle} from "../src/inheritance/Rectangle";
import {Triangle} from "../src/inheritance/Triangle";
import {Circle} from "../src/inheritance/Circle";

describe('Inheritance test', () => {
  
  let rectangle: Shape;
  let triangle: Shape;
  let circle: Shape;
  
  before(() => {
    rectangle = new Rectangle("red", 5, 8);
    triangle = new Triangle("green", 3.5, 6);
    circle = new Circle("blue", 3);
  });
  
  it('It should return a rectangle with area equals to 40', () => {
    expect(rectangle.area()).to.approximately(40, 0.01);
  });
  
  it('It should return "red"', () => {
    expect(rectangle.color).to.equals("red");
  });
  
  it('It should return a triangle with area equals to 10.5', () => {
    expect(triangle.area()).to.approximately(10.5, 0.01);
  });
  
  it('It should return "green"', () => {
    expect(triangle.color).to.equals("green");
  });
  
  it('It should return a circle with area equals to 28.26', () => {
    expect(circle.area()).to.approximately(28.26, 0.03);
  });
  
  it('It should return "blue"', () => {
    expect(circle.color).to.equals("blue");
  });
  
});