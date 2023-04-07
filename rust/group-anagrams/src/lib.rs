struct Solution;
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        use std::collections::HashMap;
        let mut map: HashMap<String, Vec<String>> = HashMap::new();
        strs.into_iter().for_each(|s| {
            let mut sortedStr = s.chars().collect::<Vec<char>>();
            sortedStr.sort();
            map.entry(sortedStr.into_iter().collect::<String>())
                .or_default()
                .push(s);
        });
        map.into_values().collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_group_anagrams() {
        let input = vec![
            String::from("eat"),
            String::from("tea"),
            String::from("tan"),
            String::from("ate"),
            String::from("nat"),
            String::from("bat"),
        ];
        let expected_output = vec![
            vec![String::from("bat")],
            vec![
                String::from("eat"),
                String::from("tea"),
                String::from("ate"),
            ],
            vec![String::from("tan"), String::from("nat")],
        ];
        let mut actual_output = Solution::group_anagrams(input);
        for group in actual_output.iter_mut() {
            group.sort();
        }
        actual_output.sort();
        let mut expected_output = expected_output;
        for group in expected_output.iter_mut() {
            group.sort();
        }
        expected_output.sort();
        assert_eq!(actual_output, expected_output);
    }
}
