export enum DayOfWeek{
  
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

export namespace DayOfWeek{
  export function isWeekendDay(day: DayOfWeek): boolean{
    let weekendDay: boolean;
    
    switch (day){
      case DayOfWeek.SUNDAY:
      case DayOfWeek.SATURDAY:
        weekendDay = true;
        break;
      default:
        weekendDay = false;
    }
    
    return weekendDay;
  }
}