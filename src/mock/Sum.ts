export class Sum{
  sum(a: number, b: number): number{
    return this.calculate(a, b);
  }
  
  private calculate(a: number, b: number): number{
    return a + b;
  }
}