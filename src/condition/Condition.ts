export class Condition{
  
  compare(a: number, b: number): string{
    if(a > b)
      return ">";
    else if(a < b)
      return "<";
    else
      return "=";
  }
}