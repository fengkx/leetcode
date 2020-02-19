package regular_expression_matching

// aab
// a*b
// .ab
object Solution extends App {
  def isMatch(s: String, p: String): Boolean = {
    if (p.isEmpty) s.isEmpty
    else if (p.length == 1) s.nonEmpty && (s.head == p.head || p.head == '.') && isMatch(s.tail, p.tail)
    else {
      val patternNext = p.tail.head
      val firstMatch = s.nonEmpty && (s.head == p.head || p.head == '.')
      if (patternNext == '*') {
        if (isMatch(s, p.drop(2))) {
          true
        }
        else {
          firstMatch && isMatch(s.tail, p)
        }
      } else {
        assert(patternNext != '*')
        firstMatch && isMatch(s.tail, p.tail)
      }
    }
  }

  //  println(isMatch("aab", ".*b"))
  //  println(isMatch("aab", "a*b"))
  println(isMatch("aab", "c*b"))
  //  println(isMatch("aa", "a"))
  //  println(isMatch("aa", "a*"))
  //  println(isMatch("ab", ".*"))
  //  println(isMatch("aab", "c*a*b"))
  //  println(isMatch("mississippi", "mis*is*p*."))
  //  println(isMatch("abcd", "d*"))
  //  println(isMatch("ab", ".*c"))
  //  println(isMatch("aaa", "a*a"))
  //  println(isMatch("aab", ".*b"))
  //  println(isMatch("aaa", "ab*ac*a"))
  //  println(isMatch("aa", "a*c*a"))


}
