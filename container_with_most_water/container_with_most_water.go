package container_with_most_water

func maxArea(height []int) int {
	length := len(height)
	left := 0
	right := length - 1
	mArea := 0
	for left < right {
		min := height[left]
		if min > height[right] {
			min = height[right]
			right--
		} else {
			left++
		}
		area := (right - left + 1) * min
		if area > mArea {
			mArea = area
		}

	}
	return mArea
}
