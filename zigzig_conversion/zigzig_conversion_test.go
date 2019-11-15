package zigzig_conversion

import "testing"

func Test_convert(t *testing.T) {
	type arg struct {
		input      string
		numberRows int
	}

	test := []arg{
		{
			"PAYPALISHIRING",
			3,
		}, {
			"PAYPALISHIRING",
			4,
		}, {
			"ABC",
			1,
		},
	}

	result := []string{
		"PAHNAPLSIIGYIR",
		"PINALSIGYAHRPI",
		"ABC",
	}

	for i, cs := range test {
		if r := convert(cs.input, cs.numberRows); r != result[i] {
			t.Fatalf("case %d actually %v excepted %v", i, r, result[i])
		}
	}
}
