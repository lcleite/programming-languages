import {DivisionByZeroError} from "./DivisionByZeroError";

export class Division{
  
  private a: number;
  private b: number;
  
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  
  divide(): number{
    if (this.b == 0){
      throw new DivisionByZeroError();
    }
    
    return this.a / this.b;
  }
}