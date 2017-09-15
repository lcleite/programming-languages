export class Time{
  
  hour: number;
  minute: number;
  second: number;
  
  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  
  getTime(): string{
    return this.hour +":"+ this.minute +":"+ this.second;
  }
}