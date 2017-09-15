export class Mathematics{
  
  randomFrom1to10(): number{
    let limit: number = 10;
    let random: number = Math.random() * limit + 1;
    
    return Math.floor(random);
  }
  
  round(num: number): number{
    return Math.round(num);
  }
  
  roundFloor(num: number): number{
    return Math.floor(num);
  }
  
  roundCeil(num: number): number{
    return Math.ceil(num);
  }
}