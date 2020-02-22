package letter_combinations_of_a_phone_number

func letterCombinations(digits string) []string {
	cache := make(map[string][]string)
	cache["2"] = []string{"a", "b", "c"}
	cache["3"] = []string{"d", "e", "f"}
	cache["4"] = []string{"g", "h", "i"}
	cache["5"] = []string{"j", "k", "l"}
	cache["6"] = []string{"m", "n", "o"}
	cache["7"] = []string{"p", "q", "r", "s"}
	cache["8"] = []string{"t", "u", "v"}
	cache["9"] = []string{"w", "x", "y", "z"}

	var helper func(cache map[string][]string, remain string) []string
	helper = func(cache map[string][]string, remain string) []string {
		if len(remain) == 0 {
			return []string{}
		}
		if v, ok := cache[remain]; ok {
			return v
		}
		var headV = helper(cache, remain[0:1])
		var tailV = helper(cache, remain[1:])

		var result = make([]string, 0, len(headV)*len(tailV))
		for _, h := range headV {
			for _, t := range tailV {
				result = append(result, h+t)
			}
		}
		return result
	}
	return helper(cache, digits)
}
