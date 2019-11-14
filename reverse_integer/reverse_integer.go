package reverse_integer

import "math"

func reverse(x int) int {
	var xx int
	if x < 0 {
		xx = -x
	} else {
		xx = x
	}
	if xx < 10 {
		return x
	}
	ret := 0
	for xx > 0 {
		ret *= 10
		ret += xx % 10
		xx /= 10
	}
	if x < 0 {
		ret = -ret
	}

	if ret > math.MaxInt32 || ret < math.MinInt32 {
		return 0
	}

	return ret
}
