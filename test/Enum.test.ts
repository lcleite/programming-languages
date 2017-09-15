import {expect} from 'chai';
import {DayOfWeek} from "../src/enum/DayOfWeek";

describe('Enum test', () => {
  it('It should return true', () => {
    expect(DayOfWeek.isWeekendDay(DayOfWeek.SUNDAY)).to.be.true;
  });
  
  it('It should return false', () => {
    expect(DayOfWeek.isWeekendDay(DayOfWeek.FRIDAY)).to.be.false;
  });
});