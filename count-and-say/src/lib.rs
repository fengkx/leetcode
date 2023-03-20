struct Solution;

impl Solution {
    pub fn count_and_say(n: i32) -> String {
        if n <= 1 {
            return "1".to_string();
        }
        Self::count_and_say_string(Self::count_and_say(n - 1).as_ref())
    }

    fn count_and_say_string(n: &str) -> String {
        if n.is_empty() {
            return "1".to_string();
        }
        let mut result = String::new();
        let len = n.len();
        let mut i = 0;
        while i < len {
            let cur = n.chars().nth(i).unwrap();
            let mut cnt = 0;
            while i < len && n.chars().nth(i).unwrap() == cur {
                i += 1;
                cnt += 1;
            }
            result.push_str(&format!("{}{}", cnt, cur));
        }
        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_count_and_say() {
        let test_cases = vec![(1, "1"), (2, "11"), (3, "21"), (4, "1211"), (5, "111221")];

        for (n, expected) in test_cases {
            assert_eq!(Solution::count_and_say(n), expected.to_string());
        }
    }
    #[test]
    fn test_count_and_say_string() {
        assert_eq!(
            Solution::count_and_say_string("11223"),
            "212213".to_string()
        );
        assert_eq!(
            Solution::count_and_say_string("3322251"),
            "23321511".to_string()
        );
    }

    #[test]
    fn test_additional_cases() {
        assert_eq!(Solution::count_and_say(2), "11".to_string());
        assert_eq!(Solution::count_and_say_string("1"), "11".to_string());
        assert_eq!(Solution::count_and_say_string("11"), "21".to_string());
        assert_eq!(Solution::count_and_say(3), "21".to_string());
        assert_eq!(Solution::count_and_say(4), "1211".to_string());
        assert_eq!(Solution::count_and_say(5), "111221".to_string());
    }
}
