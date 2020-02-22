package single_number

func singleNumber(nums []int) int {
	var r = 0
	for _, x := range nums {
		r ^= x
	}
	return r
}
