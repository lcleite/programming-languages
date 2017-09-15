import {Time} from "./Time";

export class JsonMapper{
  
  toJson(object: Time): string{
    return JSON.stringify(object);
  }
  
  toObject(json: string): Time{
    let jsonObject: any = JSON.parse(json);
    return this.mapTime(jsonObject);
  }
  
  private mapTime(jsonObject: any): Time{
    let hour: number = jsonObject.hour;
    let minute: number = jsonObject.minute;
    let second: number = jsonObject.second;
    
    return new Time(hour, minute, second);
  }
}