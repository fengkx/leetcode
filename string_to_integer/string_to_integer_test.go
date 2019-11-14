package string_to_integer

import (
	"math"
	"testing"
)

func Test_atoi(t *testing.T) {
	tests := []string{
		"   123",
		"321",
		"-123",
		"+123",
		"qwe",
		"-91283472332",
		"4193 with words",
		"",
		" ",
		"-2147483649",
	}
	result := []int{
		123,
		321,
		-123,
		123,
		0,
		math.MinInt32,
		4193,
		0,
		0,
		math.MinInt32,
	}

	length := len(tests)
	for i := 0; i < length; i++ {
		r := myAtoi(tests[i])
		if r != result[i] {
			t.Fatalf("case %d actually %d excepted %d", i, r, result[i])
		}
	}
}
