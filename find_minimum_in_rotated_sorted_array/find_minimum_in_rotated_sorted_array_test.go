package find_minimum_in_rotated_sorted_array

import "testing"

func Test_findMin(t *testing.T) {
	tests := [][]int{
		[]int{3, 4, 5, 1, 2},
		[]int{4, 5, 6, 7, 0, 1, 2},
		[]int{5, 6, 7, 8, 9, 1, 2, 3, 4},
		[]int{1, 2, 3, -1},
		[]int{1, 2, 3},
		[]int{1, 2, 3, 4, 5},
		[]int{2, 1},
		[]int{4, 5, 1, 2, 3},
	}
	results := []int{
		1,
		0,
		1,
		-1,
		1,
		1,
		1,
		1,
	}

	for i := 0; i < len(tests); i++ {
		if ret := findMin(tests[i]); ret != results[i] {
			t.Fatalf("case %d %v fails: %v\n", i, tests[i], ret)
		}
	}
}
