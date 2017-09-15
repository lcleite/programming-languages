import {Shape} from "./Shape";

export class Circle extends Shape {
  
  private _radius: number;
  
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  
  get radius(): number {
    return this._radius;
  }
  
  set radius(value: number) {
    this._radius = value;
  }
}