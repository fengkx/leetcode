package edit_distance

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_editDistance(t *testing.T) {
	assert.Equal(t, 3, minDistance("horse", "ros"))
	assert.Equal(t, 0, minDistance("", ""))
	assert.Equal(t, 4, minDistance("afljaw", "asdsww"))
}
