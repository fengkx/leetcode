package longest_common_prefix

import "testing"

func Test_longestCommonPrefix(t *testing.T) {
	inputs := [][]string{
		{"flower", "flow", "flight"},
		{"dog", "racecar", "car"},
		{},
	}

	expected := []string{
		"fl",
		"",
		"",
	}

	for i := 0; i < len(inputs); i++ {
		if ret := longestCommonPrefix(inputs[i]); ret != expected[i] {
			t.Fatalf("case %d failed\nactual: %s, expect: %s\n", i, ret, expected[i])
		}
	}
}
