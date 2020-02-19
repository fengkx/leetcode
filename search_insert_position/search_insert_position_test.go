package search_insert_position

import "testing"

func Test_searchInsert(t *testing.T) {
	inputs := [][]int{
		{1, 3, 5, 6},
		{1, 3, 5, 6},
		{1, 3, 5, 6},
		{1, 3, 5, 6},
		{1, 3, 5, 6},
		{1, 3},
	}
	toFound := []int{
		5,
		2,
		7,
		0,
		1,
		1,
	}

	expected := []int{
		2,
		1,
		4,
		0,
		0,
		0,
	}
	for i := 0; i < len(inputs); i++ {
		if ret := searchInsert(inputs[i], toFound[i]); expected[i] != ret {
			t.Fatalf("case %d failed\nactual: %d, expect: %d\n", i, ret, expected[i])
		}
	}
}
