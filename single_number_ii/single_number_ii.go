package single_number_ii

func singleNumber(nums []int) int {
	var counts = make([]int, 64)
	var negCounts = make([]int, 64)
	for _, num := range nums {
		if num >= 0 {
			var n = num
			var c = 0
			for n != 0 {
				bit := n & 1
				counts[c] += bit
				c++
				n = n >> 1
				if n == (n >> 1) {
					break
				}
			}
		} else {
			for i := 0; i < 64; i++ {
				negCounts[i] += (num >> i) & 1
			}
		}
	}
	var r = 0
	for i, c := range counts {
		if c%3 != 0 {
			r |= (1 << i)
		}
	}
	if r != 0 {
		return r
	}
	for i, c := range negCounts {
		if c%3 != 0 {
			r |= (1 << i)
		}
	}
	return r
}

// [2,2,3,2]

// 011
// 010
// 010
// 010

// 011

// [0,0,0,1,1,1,3]
// 000
// 000
// 000
// 001
// 001
// 001
// 011

// 128 64 32 16 8 4 2 1
// [0,0,0,1,1,1,99]

// 000 0000
// 000 0000
// 000 0000
// 000 0001
// 000 0001
// 000 0001
// 110 0011
