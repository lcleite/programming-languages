import enum.DayOfWeek
import org.testng.AssertJUnit.assertEquals
import org.testng.annotations.Test

class EnumTest{

  @Test
  fun `It should return true`(){
    assertEquals(DayOfWeek.isWeekendDay(DayOfWeek.SUNDAY), true)
  }

  @Test
  fun `It should return false`(){
    assertEquals(DayOfWeek.isWeekendDay(DayOfWeek.FRIDAY), false)
  }
}