package longest_palindromic_substring

/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"
*/

func longestPalindrome(s string) string {
	if len(s) < 2 {
		return s
	}
	d := len(s)
	dp := make([][]bool, d)
	for i := range dp {
		dp[i] = make([]bool, d)
	}
	var l, r int
	for i := d - 1; i >= 0; i-- {
		dp[i][i] = true
		for j := i + 1; j < d; j++ {
			if s[i] == s[j] && ((j-i) <= 2 || dp[i+1][j-1]) {
				dp[i][j] = true
				if (j - i) > (r - l) {
					l = i
					r = j
				}
			}
		}
	}
	return s[l : r+1]
}
