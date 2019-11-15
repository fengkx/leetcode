package container_with_most_water

import "testing"

func Test_maxArea(t *testing.T) {
	tests := [][]int{
		{1, 8, 6, 2, 5, 4, 8, 3, 7},
	}
	result := []int{
		49,
	}
	for i, cs := range tests {
		if r := maxArea(cs); r != result[i] {
			t.Fatalf("case %d actually %d excepted %d", i, r, result[i])
		}
	}
}
