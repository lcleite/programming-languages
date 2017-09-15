package enum

enum class DayOfWeek{
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY;

  companion object {
    fun isWeekendDay(day: DayOfWeek): Boolean {
      val weekendDay: Boolean

      when(day){
        SATURDAY, SUNDAY -> weekendDay = true
        else -> {
          weekendDay = false
        }
      }

      return weekendDay
    }
  }
}