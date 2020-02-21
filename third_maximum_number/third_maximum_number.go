package third_maximum_number

import "math"

func thirdMax(nums []int) int {
	var (
		min = math.MinInt64
		mid = math.MinInt64
		max = math.MinInt64
	)

	for _, x := range nums {
		if x > max {
			min = mid
			mid = max
			max = x
		} else if x > mid && x < max {
			min = mid
			mid = x
		} else if x > min && x < mid {
			min = x
		}
	}
	if min != math.MinInt64 {
		return min
	} else {
		return max
	}
}
