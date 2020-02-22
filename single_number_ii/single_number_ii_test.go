package single_number_ii

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_singleNumber(t *testing.T) {
	t.Run("postive number", func(t *testing.T) {
		assert.Equal(t, 3, singleNumber([]int{2, 2, 3, 2}))
		assert.Equal(t, 3, singleNumber([]int{0, 1, 0, 1, 0, 1, 3}))
		assert.Equal(t, 99, singleNumber([]int{0, 1, 0, 1, 0, 1, 99}))
	})

	t.Run("negative number", func(t *testing.T) {
		assert.Equal(t, -4, singleNumber([]int{-2, -2, 1, 1, -3, 1, -3, -3, -4, -2}))
		assert.Equal(t, -2, singleNumber([]int{-2, -4, 1, 1, -3, 1, -3, -3, -4, -4}))
		assert.Equal(t, -99, singleNumber([]int{-99, -4, 1, 1, -3, 1, -3, -3, -4, -4}))
	})
}
