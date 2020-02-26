package generate_parentheses

func generateParenthesis(n int) []string {
	var backtrack func(ans *[]string, cur string, left, right, max int)
	backtrack = func(ans *[]string, cur string, left, right, max int) {
		if len(cur) == max*2 {
			*ans = append(*ans, cur)
		}
		if left < max {
			backtrack(ans, cur+"(", left+1, right, max)
		}
		if right < left {
			backtrack(ans, cur+")", left, right+1, max)
		}
	}
	var ans []string
	backtrack(&ans, "", 0, 0, n)
	return ans

}
