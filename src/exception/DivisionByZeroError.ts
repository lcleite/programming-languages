export class DivisionByZeroError implements Error{
  name: string;
  message: string;
  
  constructor(){
    this.name = "DivisionByZeroError";
    this.message = "Can't divide a number by zero!";
  }
}