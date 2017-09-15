import {Shape} from "./Shape";

export class Triangle extends Shape {
  
  private _height: number;
  private _base: number;
  
  constructor(color: string, height: number, base: number) {
    super(color);
    this.height = height;
    this.base = base;
  }
  
  area(): number {
    return (this.height * this.base) / 2;
  }
  
  get height(): number {
    return this._height;
  }
  
  set height(value: number) {
    this._height = value;
  }
  
  get base(): number {
    return this._base;
  }
  
  set base(value: number) {
    this._base = value;
  }
}