export abstract class Shape{
  protected _color: string;
  
  constructor(color: string){
    this._color = color;
  }
  
  abstract area(): number;
  
  get color(): string {
    return this._color;
  }
  
  set color(value: string) {
    this._color = value;
  }
}