use core::num;

/// 3010. Divide an Array Into Subarrays With Minimum Cost I
/// https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/
///
/// You are given an array of integers nums of length n. The cost of an array is the value
/// of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.
/// You need to divide nums into 3 disjoint contiguous subarrays. Return the minimum possible
/// sum of the cost of these subarrays.
///
/// Constraints:
/// 3 <= n <= 50
/// 1 <= nums[i] <= 50
struct Solution;

impl Solution {
    pub fn minimum_cost(nums: Vec<i32>) -> i32 {
        let mut min = nums[1];
        let mut min2 = nums[2];
        if min > min2 {
            (min, min2) = (min2, min)
        }
        for i in 3..nums.len() {
            let n = nums[i];
            if nums[i] <= min {
                min2 = min;
                min = n
            } else if nums[i] < min2 {
                min2 = n;
            }
        }
        nums[0] + min + min2
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example_1() {
        // nums = [1,2,3,12] -> best: [1], [2], [3,12] -> 1+2+3 = 6
        assert_eq!(Solution::minimum_cost(vec![1, 2, 3, 12]), 6);
    }

    #[test]
    fn test_example_2() {
        // nums = [5,4,3] -> best: [5], [4], [3] -> 5+4+3 = 12
        assert_eq!(Solution::minimum_cost(vec![5, 4, 3]), 12);
    }

    #[test]
    fn test_example_3() {
        // nums = [10,3,1,1] -> best: [10,3], [1], [1] -> 10+1+1 = 12
        assert_eq!(Solution::minimum_cost(vec![10, 3, 1, 1]), 12);
    }

    #[test]
    fn test_boundary_n3() {
        // n = 3: only one way [a], [b], [c] -> a+b+c
        assert_eq!(Solution::minimum_cost(vec![1, 2, 3]), 6);
    }

    #[test]
    fn test_boundary_n4() {
        // n = 4: only one way [a], [b], [c], [d] -> a+b+c+d
        assert_eq!(Solution::minimum_cost(vec![1, 6, 1, 5]), 7);
    }
}
