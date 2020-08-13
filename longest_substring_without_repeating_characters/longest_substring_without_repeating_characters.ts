function lengthOfLongestSubstring(s: string): number {
  const map: { [key: string]: number } = {};
  let left = 0;
  const result = s.split("").reduce((maxLen, chr, idx) => {
    if (map[chr] >= left) left = map[chr] + 1;
    map[chr] = idx;
    return Math.max(maxLen, idx - left + 1);
  }, 0);
  return result;
}
