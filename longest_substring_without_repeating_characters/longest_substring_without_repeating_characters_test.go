package longest_substring_without_repeating_characters

import (
	"testing"
)

func TestLengthOfLongestSubstring(t *testing.T) {
	tests := []string{
		"abcabcbb",
		"aaaaaaaa",
		"abcde",
		"",
		"pwwkew",
		"aab",
	}
	results := []int{
		3,
		1,
		5,
		0,
		3,
		2,
	}
	for i := 0; i < len(tests); i++ {
		if ret := lengthOfLongestSubstring(tests[i]); ret != results[i] {
			t.Fatalf("case %d failed\nactual: %d, expect: %d\n", i, ret, results[i])
		}
	}
}
