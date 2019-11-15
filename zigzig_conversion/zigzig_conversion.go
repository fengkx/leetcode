package zigzig_conversion

import (
	"math"
)

func convert(s string, numRows int) string {
	length := len(s)
	if numRows == 1 {
		return s
	}
	needCol := numRows - 1
	numCols := int(math.Ceil(float64(length)/float64(2*numRows-2))) * needCol
	table := make([][]byte, numRows)
	for i := range table {
		table[i] = make([]byte, numCols)
	}
	j := 0
	c := 0

	down := true

	for i := 0; i < numCols; i++ {
		if down {
			for j < numRows {
				table[j][i] = s[c]
				c++
				if c == length {
					goto finish
				}
				j++
			}
			down = !down
			j--
		} else {
			if j > 0 {
				j--
			}
			table[j][i] = s[c]
			c++
			if c == length {
				goto finish
			}
			if j == 0 {
				down = !down
				i--
				j++
			}
		}
	}
finish:
	buf := make([]byte, length)
	c = 0
	for i := 0; i < numRows; i++ {
		for j := 0; j < numCols; j++ {
			if table[i][j] != 0 {
				buf[c] = table[i][j]
				c++
			}
		}
	}
	return string(buf)
}
