package letter_combinations_of_a_phone_number

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_letterCombinations(t *testing.T) {
	assert.Equal(t,
		[]string{
			"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"},
		letterCombinations("23"),
	)
	assert.Equal(t,
		[]string{},
		letterCombinations(""))
}
