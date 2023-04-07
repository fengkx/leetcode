struct Solution;
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        use std::collections::HashMap;
        let mut mapS = HashMap::new();
        let mut mapT = HashMap::new();
        for ch in s.chars() {
            mapS.entry(ch).and_modify(|e| *e += 1).or_insert(1);
        }
        for ch in t.chars() {
            mapT.entry(ch).and_modify(|e| *e += 1).or_insert(1);
        }
        if mapS.len() != mapT.len() {
            return false;
        }
        for e in mapS.iter() {
            match mapT.get(e.0) {
                Some(num) => {
                    if num != e.1 {
                        return false;
                    }
                }
                _ => return false,
            }
        }
        return true;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_anagram() {
        assert_eq!(
            Solution::is_anagram("anagram".to_string(), "nagaram".to_string()),
            true
        );
        assert_eq!(
            Solution::is_anagram("rat".to_string(), "car".to_string()),
            false
        );
        assert_eq!(Solution::is_anagram("".to_string(), "".to_string()), true);
    }
}
