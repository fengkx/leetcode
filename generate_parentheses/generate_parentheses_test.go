package generate_parentheses

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_generateParenthesis(t *testing.T) {
	r := generateParenthesis(3)
	assert.Equal(t, []string{"((()))", "(()())", "(())()", "()(())", "()()()"}, r)
}
