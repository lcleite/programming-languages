import aclass.Point
import org.testng.AssertJUnit.assertEquals
import org.testng.annotations.Test

class ClassTest{

  @Test
  fun `It should create a point`(){
    val point: Point = Point(0f, 0f)

    assertEquals(point.javaClass.simpleName, Point::class.simpleName)
  }

  @Test
  fun `It should create a 2d point`(){
    val point: Point = Point(3f, 7f)
    val sum: Float = point.x + point.y

    assertEquals(sum, 10f, 0.01f)
  }

  @Test
  fun `It should create a 3d point`(){
    val point: Point = Point(10f, 5f, 5f)
    val sum: Float = point.x + point.y + point.z

    assertEquals(sum, 20f, 0.01f)
  }
}