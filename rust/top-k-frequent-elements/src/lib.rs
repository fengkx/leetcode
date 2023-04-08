struct Solution;
impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        use std::collections::HashMap;
        let mut m = HashMap::<i32, i32>::new();
        for n in nums {
            m.entry(n)
                .and_modify(|e| {
                    *e += 1;
                })
                .or_insert(1);
        }
        let mut arr = m.into_iter().collect::<Vec<(i32, i32)>>();
        arr.sort_by(|a, b| b.1.cmp(&a.1));
        let k = k as usize;
        let mut result = vec![0; k];
        for i in 0..k {
            result[i] = arr[i].0;
        }
        result
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_top_k_frequent() {
        let nums = vec![1, 1, 1, 2, 2, 3];
        let k = 2;
        let expected = vec![1, 2];
        assert_eq!(Solution::top_k_frequent(nums, k), expected);

        let nums = vec![1];
        let k = 1;
        let expected = vec![1];
        assert_eq!(Solution::top_k_frequent(nums, k), expected);
    }
}
