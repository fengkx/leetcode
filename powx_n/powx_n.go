package powx_n

func myPow(x float64, n int) float64 {
	if n < 0 {
		return 1 / myPow(x, -n)
	}
	if n == 0 {
		return 1
	}
	if n == 1 {
		return x
	}
	if n == 2 {
		return x * x
	} else {
		if n%2 == 0 {
			pow := myPow(x, n/2)
			return pow * pow
		} else {
			pow := myPow(x, n/2)
			return pow * pow * x
		}
	}
}
