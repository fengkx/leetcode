package third_maximum_number

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_thirdMax(t *testing.T) {
	cases := [][]int{
		{3, 2, 1},
		{1, 2, 2, 5, 3, 5},
		{1, 2},
		{2, 2, 3, 1},
		{1, 1, 2},
	}
	expected := []int{
		1,
		2,
		2,
		1,
		2,
	}

	for i, c := range cases {
		assert.Equal(t, expected[i], thirdMax(c))
	}
}
