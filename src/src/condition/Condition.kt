package condition

class Condition{

  fun compare(a: Int, b: Int): String{
    if(a > b)
      return ">"
    else if(a < b)
      return "<"
    else
      return "="
  }
}
