package find_first_and_last_position_of_element_in_sorted_array

import (
	"testing"
)

func Test_searchRange(t *testing.T) {
	inputs := [][]int{
		{5, 7, 7, 8, 8, 10},
		{5, 7, 7, 8, 8, 10},
		{5, 5, 7, 7, 8, 8, 10},
	}

	toFound := []int{
		8,
		6,
		5,
	}

	expected := [][]int{
		{3, 4},
		{-1, -1},
		{0, 1},
	}

	for i := 0; i < len(expected); i++ {
		if ret := searchRange(inputs[i], toFound[i]); ret[0] == expected[i][0] && ret[1] == expected[i][1] {
			t.Fatalf("case %d failed\nactual: %d, expect: %d\n", i, ret, expected[i])
		}
	}
}
