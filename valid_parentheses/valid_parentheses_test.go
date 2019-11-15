package valid_parentheses

import "testing"

func Test_isValid(t *testing.T) {
	tests := []string{
		"()",
		"()[]{}",
		"(]",
		"{[]}",
		"()()()()",
		"[()]",
		"[(])",
		"]",
		"",
	}
	result := []bool{
		true,
		true,
		false,
		true,
		true,
		true,
		false,
		false,
		true,
	}
	for i, cs := range tests {
		if r := isValid(cs); r != result[i] {
			t.Fatalf("case %d actually %v excepted %v", i, r, result[i])
		}
	}
}
