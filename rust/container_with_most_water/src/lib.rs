struct Solution;
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let len = height.len();
        let mut left = 0;
        let mut right = len - 1;

        let mut maxArea = 0 as i32;

        while left < right {
            let mut short_border = height[left] as i32;
            if short_border > height[right] {
                short_border = height[right];
                right -= 1;
            } else {
                left += 1;
            }
            let result: i32 = (right as i32 - left as i32 + 1) * short_border;
            if result > maxArea {
                maxArea = result;
            }
        }
        return maxArea;
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_max_area() {
        assert_eq!(Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
        assert_eq!(Solution::max_area(vec![1, 1]), 1);
        assert_eq!(Solution::max_area(vec![4, 3, 2, 1, 4]), 16);
        assert_eq!(Solution::max_area(vec![1, 2, 1]), 2);
    }
}
