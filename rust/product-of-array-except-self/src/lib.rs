struct Solution;
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len();
        let mut result = vec![1; len];
        let mut cumulative_prefix_product = 1;
        for i in 0..len {
            result[i] = cumulative_prefix_product;
            cumulative_prefix_product *= nums[i];
        }
        // result[i] = product 0 ~ i without i

        let mut cumulative_suffix_product = 1;
        for i in (0..len).rev() {
            result[i] *= cumulative_suffix_product;
            cumulative_suffix_product *= nums[i]
        }
        // len-1 .. i without i
        result
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_product_except_self() {
        assert_eq!(
            Solution::product_except_self(vec![1, 2, 3, 4]),
            vec![24, 12, 8, 6]
        );
        assert_eq!(
            Solution::product_except_self(vec![0, 1, 2, 3]),
            vec![6, 0, 0, 0]
        );
        assert_eq!(Solution::product_except_self(vec![1, 2]), vec![2, 1]);
        assert_eq!(Solution::product_except_self(vec![1]), vec![1]);
    }
}
