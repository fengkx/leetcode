package regular_expression_matching

import Solution.isMatch

class SolutionTest extends org.scalatest.FunSuite {
  assert(isMatch("aab", ".*b"))
  assert(isMatch("aab", "a*b"))
  assert(!isMatch("aab", "c*b"))
  assert(!isMatch("aa", "a"))
  assert(isMatch("aa", "a*"))
  assert(isMatch("ab", ".*"))
  assert(isMatch("aab", "c*a*b"))
  assert(!isMatch("mississippi", "mis*is*p*."))
  assert(!isMatch("abcd", "d*"))
  assert(!isMatch("ab", ".*c"))
  assert(isMatch("aaa", "a*a"))
  assert(isMatch("aab", ".*b"))
  assert(isMatch("aaa", "ab*ac*a"))
  assert(isMatch("aa", "a*c*a"))
}
