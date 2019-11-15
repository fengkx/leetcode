package implement_strstr

func strStr(haystack string, needle string) int {
	needleLen := len(needle)
	length := len(haystack)
	for i := 0; i < length-needleLen+1; i++ {
		if haystack[i:i+needleLen] == needle {
			return i
		}
	}
	return -1
}
