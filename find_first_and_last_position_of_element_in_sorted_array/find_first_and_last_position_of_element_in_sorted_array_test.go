package find_first_and_last_position_of_element_in_sorted_array

import (
	"testing"

	"github.com/stretchr/testify/assert"
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
		assert.Equal(t, expected[i], searchRange(inputs[i], toFound[i]))
	}
}
