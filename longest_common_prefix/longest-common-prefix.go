package longest_common_prefix

import "strings"

func longestCommonPrefix(strs []string) string {
	lengthOfStrs := len(strs)
	if lengthOfStrs <= 0 {
		return ""
	}
	minLen := len(strs[0])
	for i := 1; i < lengthOfStrs; i++ {
		l := len(strs[i])
		if l < minLen {
			minLen = l
		}
	}

	var sb strings.Builder
	for i := 0; i < minLen; i++ {
		if everyStrEqOnIdx(strs, i, lengthOfStrs) {
			sb.WriteByte(strs[0][i])
		} else {
			break
		}
	}
	return sb.String()
}

func everyStrEqOnIdx(strs []string, idx int, lengthOfStrs int) bool {
	var r = true
	var c = strs[0][idx]
	for i := 1; i < lengthOfStrs; i++ {
		if strs[i][idx] != c {
			r = false
			break
		}
	}
	return r
}
