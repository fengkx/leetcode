package median_of_two_sorted_arrays

/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	len1 := len(nums1)
	len2 := len(nums2)
	mid := (len1 + len2) / 2

	var count, i1, i2 int

	var last2 [2]int
	lastIndex := 1

	for i1 < len1 && i2 < len2 {
		if nums1[i1] < nums2[i2] {
			last2[1-lastIndex] = nums1[i1]
			lastIndex = 1 - lastIndex
			i1++
		} else {
			last2[1-lastIndex] = nums2[i2]
			lastIndex = 1 - lastIndex
			i2++
		}
		count++
		if count == mid+1 {
			break
		}
	}
	var nums []int
	if i1 == len1 {
		nums = nums2
		i1 = i2
	} else {
		nums = nums1
		i2 = i1
	}
	for i1 < len(nums) && count < mid+1 {
		last2[1-lastIndex] = nums[i1]
		lastIndex = 1 - lastIndex
		i1++
		count++
	}

	if (len1+len2)%2 == 0 {
		return float64(last2[0]+last2[1]) / 2.0
	} else {
		if len1+len2 < 2 {
			return float64(last2[0] + last2[1])
		}
		return float64(last2[lastIndex])
	}

}
