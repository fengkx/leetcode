package power_of_two

import "testing"

func Test_isPowerOfTwo(t *testing.T) {
	if isPowerOfTwo(-1) {
		t.Fatalf("%d is not power of 2", -1)
	}
	if isPowerOfTwo(3) {
		t.Fatalf("%d is not power of 2", -1)
	}
	if isPowerOfTwo(0) {
		t.Fatalf("%d is not power of 2", 0)
	}
	if !isPowerOfTwo(1) {
		t.Fatalf("%d is power of 2", 1)
	}
	if !isPowerOfTwo(1024) {
		t.Fatalf("%d is power of 2", 1024)
	}
}
