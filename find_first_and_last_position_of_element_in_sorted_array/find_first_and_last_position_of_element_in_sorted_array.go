package find_first_and_last_position_of_element_in_sorted_array

func searchRange(nums []int, target int) []int {
	midIdx := binSearch(nums, target)
	length := len(nums)
	if midIdx == -1 {
		return []int{-1, -1}
	}
	left := midIdx
	right := midIdx

	for left > 0 && nums[left-1] == target {
		left = left - 1
	}
	for right < (length-1) && nums[right+1] == target {
		right = right + 1
	}
	return []int{left, right}
}

func binSearch(nums []int, target int) int {
	length := len(nums)

	var (
		left  = 0
		right = length - 1
	)

	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] < target {
			left = mid + 1
		} else if nums[mid] > target {
			right = mid - 1
		} else {
			return mid
		}
	}
	return -1
}
