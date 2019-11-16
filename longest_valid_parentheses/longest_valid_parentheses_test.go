package longest_valid_parentheses

import "testing"

func Test_longestValidParentheses(t *testing.T) {
	test := []string{
		"(()",
		")()())",
		"((()()))",
		"()",
		"())",
		"()(()",
		"()(())",
		")()(((())))(",
	}

	result := []int{
		2,
		4,
		8,
		2,
		2,
		2,
		6,
		10,
	}
	for i, cs := range test {
		if r := longestValidParentheses(cs); r != result[i] {
			t.Fatalf("case %d actually %d excepted %d", i, r, result[i])
		}
	}
}
