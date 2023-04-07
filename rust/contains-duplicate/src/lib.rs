struct Solution;
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        use std::collections::HashSet;
        let mut map = HashSet::new();
        for num in nums {
            if map.contains(&num) {
                return true;
            }
            map.insert(num);
        }
        return false;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_contains_duplicate() {
        assert_eq!(Solution::contains_duplicate(vec![1, 2, 3, 1]), true);
        assert_eq!(Solution::contains_duplicate(vec![1, 2, 3, 4]), false);
        assert_eq!(
            Solution::contains_duplicate(vec![1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
            true
        );
    }
}
