package plus_one

object Solution {
  def plusOne(digits: Array[Int]): Array[Int] = {
    def helper(rdigits: List[Int]): List[Int] = {
      if (rdigits.isEmpty) return List(1)
      val addOne = rdigits.head + 1
      if (addOne < 10)
        addOne :: rdigits.tail
      else {
        val remain = addOne % 10
        remain :: helper(rdigits.tail)
      }
    }

    helper(digits.reverse.toList).toArray.reverse
  }
}
