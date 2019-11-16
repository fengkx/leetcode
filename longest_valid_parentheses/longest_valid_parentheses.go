package longest_valid_parentheses

func longestValidParentheses(s string) int {
	length := len(s)
	if length < 2 {
		return 0
	}
	dp := make([]int, length)
	dp[0] = 0
	maxL := 0

	for i := 1; i < length; i++ {
		if s[i] == ')' {
			if s[i-1] == '(' {
				if i < 2 {
					dp[i] = 2
				} else {
					dp[i] = dp[i-2] + 2
				}
				if maxL < dp[i] {
					maxL = dp[i]
				}
			} else {
				index := i - 1 - dp[i-1]
				if index >= 0 && s[index] == '(' {
					dp[i] = dp[i-1] + 2
					if index-1 >= 0 {
						dp[i] += dp[index-1]
					}
					if maxL < dp[i] {
						maxL = dp[i]
					}
				}
			}
		}
	}

	return maxL
}
