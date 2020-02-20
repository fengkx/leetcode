package plus_one

import Solution.plusOne

class SolutionTest extends org.scalatest.flatspec.AnyFlatSpec {
  it should "correct when number has no carry" in {
    assertResult(Array(1,2,4))(plusOne(Array(1,2,3)))
  }

  it should "correct when number has a carry" in {
    assertResult(Array(1,3,0))(plusOne(Array(1,2,9)))
  }

  it should "correct when number plusOne produce a extra number" in {
    val r = plusOne(Array(9,9,9))
    assertResult(Array(1,0,0,0))(r)
    assertResult(Array(1,0,0))(plusOne(Array(9, 9)))
  }

  it should "correct when number may overflow" in {
    val r = plusOne(Array(9,8,7,6,5,4,3,2,1,0))
    assertResult(Array(9,8,7,6,5,4,3,2,1,1))(r)
  }
}
