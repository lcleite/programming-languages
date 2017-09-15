import {Shape} from "./Shape";

export class Rectangle extends Shape{
  
  private _width:number;
  private _height: number;
  
  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  area(): number {
    return this.width * this.height;
  }
  
  get width(): number {
    return this._width;
  }
  
  set width(value: number) {
    this._width = value;
  }
  
  get height(): number {
    return this._height;
  }
  
  set height(value: number) {
    this._height = value;
  }
}