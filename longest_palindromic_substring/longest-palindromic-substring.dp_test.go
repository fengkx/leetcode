package longest_palindromic_substring

import (
	"testing"
)

func TestlongestPalindrome(t *testing.T) {
	tests := []string{
		"aaaa",
		"abccba",
		"a",
		"bccd",
	}
	result := []string{
		"aaaa",
		"abccba",
		"a",
		"cc",
	}
	length := len(tests)
	for i := 0; i < length; i++ {
		r := longestPalindrome(tests[i])
		if r != result[i] {
			t.Fatalf("case %d actually %s excepted %s", i, r, result[i])
		}
	}
}
