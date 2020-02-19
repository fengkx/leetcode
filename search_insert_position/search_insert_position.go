package search_insert_position

func searchInsert(nums []int, target int) int {
	length := len(nums)
	if target < nums[0] {
		return 0
	}
	if target > nums[length-1] {
		return length
	}

	var (
		left  = 0
		right = length - 1
		idx   = (left + right) / 2
		cur   = nums[idx]
	)

	for left <= right {
		idx = (left + right) / 2
		cur = nums[idx]
		if cur < target {
			left = idx + 1
		} else if cur > target {
			right = idx - 1
		} else {
			return idx
		}
	}
	return left
}
