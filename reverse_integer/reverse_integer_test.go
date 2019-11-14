package reverse_integer

import "testing"

func Test_reverse(t *testing.T) {
	tests := []int{
		123,
		31,
		1,
		-123,
		0,
		210,
		1534236469,
	}
	result := []int{
		321,
		13,
		1,
		-321,
		0,
		12,
		0,
	}
	length := len(tests)
	for i := 0; i < length; i++ {
		r := reverse(tests[i])
		if r != result[i] {
			t.Fatalf("case %d actually %d excepted %d", i, r, result[i])
		}
	}
}
