export class Point{
  x: number;
  y: number;
  z: number;
  
  /*
   Default:
   constructor(x: number, y: number)
   constructor(x: number, y: number, z: number = 0)
   */
  constructor(x: number, y: number, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}