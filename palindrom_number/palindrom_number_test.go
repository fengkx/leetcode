package palindrom_number

import (
	"testing"
)

func Test_reverse(t *testing.T) {
	tests := []int{
		123,
		121,
		1,
		-121,
		0,
		210,
		1534236469,
	}
	result := []bool{
		false,
		true,
		true,
		false,
		true,
		false,
		false,
	}
	length := len(tests)
	for i := 0; i < length; i++ {
		r := isPalindrome(tests[i])
		if r != result[i] {
			t.Fatalf("case %d actually %v excepted %v", i, r, result[i])
		}
	}
}
