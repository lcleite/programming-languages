import condition.Condition
import org.testng.annotations.Test
import org.testng.AssertJUnit.assertEquals

class ConditionTest{
  var condition: Condition = Condition()

  @Test
  fun `It should return a greater than b`(){
    assertEquals(condition.compare(10, 1), ">")
  }

  @Test
  fun `It should return a less than b`(){
    assertEquals(condition.compare(1, 10), "<")
  }

  @Test
  fun `It should return a equals to b`(){
    assertEquals(condition.compare(10, 10), "=")
  }
}