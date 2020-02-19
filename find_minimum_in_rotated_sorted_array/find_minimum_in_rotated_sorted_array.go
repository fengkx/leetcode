package find_minimum_in_rotated_sorted_array

func findMin(nums []int) int {
	length := len(nums)
	var (
		left  = 0
		right = length - 1
	)

	for left < right {
		if (right - left) <= 3 {
			break
		}
		mid := left + (right-left)/2
		if nums[0] < nums[length-1] {
			return nums[0]
		} else {
			if nums[mid] > nums[0] {
				left = mid
			}
			if nums[mid] < nums[length-1] {
				right = mid
			}
		}
	}

	if right < left {
		right, left = left, right
	}
	min := nums[left]
	for i := left + 1; i <= right; i++ {
		if nums[i] < min {
			min = nums[i]
		}
	}
	return min
}
