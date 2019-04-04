package longest_substring_without_repeating_characters

/*Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

func lengthOfLongestSubstring(s string) int {
	if t := len(s); t <= 1 {
		return t
	}
	var table charSet
	var l int
	r := 1
	result := 1
	table.Set(s[0])
	for r < len(s) {
		c := s[r]
		if !table.Has(c) {
			table.Set(s[r])
			r++
		} else {
			table.Unset(s[l])
			l++
		}
		tempLen := r - l
		if result < tempLen {
			result = tempLen
		}
	}
	return result
}

type charSet struct {
	words [2]uint64
}

func (s *charSet) Has(num byte) bool {
	result := false
	wIndex := num / 64
	bIndex := num % 64
	if s.words[wIndex]&(1<<bIndex) != 0 {
		result = true
	}
	return result
}

func (s *charSet) Set(num byte) {
	wIndex := num / 64
	bIndex := num % 64
	s.words[wIndex] = s.words[wIndex] | (1 << bIndex)
}

func (s *charSet) Unset(num byte) {
	wIndex := num / 64
	bIndex := num % 64
	s.words[wIndex] = s.words[wIndex] & (^(1 << bIndex))
}
