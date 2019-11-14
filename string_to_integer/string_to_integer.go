package string_to_integer

import (
	"math"
	"unicode"
)

func myAtoi(str string) int {
	length := len(str)
	if length == 0 {
		return 0
	}

	var i int
	sign := 1 // 1 for postive
	for i < length && str[i] == ' ' {
		i++
	}

	if i >= length {
		return 0
	}

	if str[i] == '-' || str[i] == '+' {
		if str[i] == '-' {
			sign = -1
		}
		i++
	} else if !unicode.IsDigit(rune(str[i])) {
		return 0
	}

	ret := 0

	for i < length && unicode.IsDigit(rune(str[i])) {
		d := int(str[i]) - int('0')
		if sign == 1 && ret > (math.MaxInt32-d)/10 {
			return math.MaxInt32
		}
		if sign == -1 && -ret < (math.MinInt32+d)/10 {
			return math.MinInt32
		}
		ret *= 10
		ret += d
		i++
	}

	if sign == -1 {
		ret = -ret
	}
	return ret

}
