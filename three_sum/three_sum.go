package three_sum

import "sort"

func threeSum(nums []int) [][]int {
	ret := make([][]int, 0)
	sort.Ints(nums)
	length := len(nums)

	var (
		left  int
		right int
	)
	for i := 0; i < length; i++ {
		t := -nums[i]
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left = i + 1
		right = length - 1
		for left < right {
			twoSum := nums[left] + nums[right]
			if twoSum < t {
				left++
			} else if twoSum > t {
				right--
			} else {
				ret = append(ret, []int{nums[i], nums[left], nums[right]})
				for left < right && nums[left+1] == nums[left] {
					left++
				}
				for left < right && nums[right] == nums[right-1] {
					right--
				}
				left++
				right--
			}
		}
	}
	return ret
}
