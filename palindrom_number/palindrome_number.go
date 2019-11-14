package palindrom_number

import "strconv"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	s := strconv.Itoa(x)
	length := len(s)
	if length <= 1 {
		return true
	}

	for i := 0; i < length; i++ {
		if s[i] != s[length-1-i] {
			return false
		}
	}
	return true
}
