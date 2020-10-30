package edit_distance

/**
i, j is the length of the sub problem word1 and word2
dp[i,j] = minDistance(word1[0:i], word2[0:j])

Transfer Function
dp[i,j] =
1. if i == 0 -> j
2. if j == 0 -> i
3. if word1[i-1] == word[j-1] -> dp[i-1, j-1]
4. else -> min(
	dp[i-1, j], // delete one char in word1
	dp[i, j-1], // insert one char in word2
	dp[i-1, j-1] // replace one char
)

example:
D("abbc", "acc")
	= D("abb", "ac")
	= 1 + min(
		D("ab", "ac"),
		D("abb", "a"),
		D("ab","a")
	)
**/

func minDistance(word1 string, word2 string) int {
	len1 := len(word1)
	len2 := len(word2)
	var dp [][]int = make([][]int, len1+1)
	for i := 0; i <= len1; i++ {
		dp[i] = make([]int, len2+1)
	}
	for i := 0; i <= len1; i++ {
		dp[i][0] = i
	}
	for j := 0; j <= len2; j++ {
		dp[0][j] = j
	}
	for i := 1; i <= len1; i++ {
		for j := 1; j <= len2; j++ {
			if word1[i-1] == word2[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = 1 + min(
					dp[i-1][j],
					dp[i][j-1],
					dp[i-1][j-1],
				)
			}
		}
	}
	return dp[len1][len2]
}

func min(a int, args ...int) int {
	var min = a
	for _, num := range args {
		if min > num {
			min = num
		}
	}
	return min
}
