package power_of_two

func isPowerOfTwo(n int) bool {
	return (n&(n-1) == 0) && n != 0
}
