export class Loop{
  
  useFor(): number{
    let sum: number = 0;
    
    for(let i = 0; i < 10; i++)
      sum += i;
    
    return sum;
  }
  
  useForEach(): number{
    let sum: number = 0;
    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for(let number of numbers)
      sum += number;
    
    return sum;
  }
  
  useWhile(): number{
    let sum: number = 0;
    let i: number = 0;
    
    while(i < 10){
      sum += i;
      i++;
    }
    
    return sum;
  }
  
}