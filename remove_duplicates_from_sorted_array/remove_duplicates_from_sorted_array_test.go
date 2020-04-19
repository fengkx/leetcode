package remove_duplicates_from_sorted_array

import "testing"

func Test_removeDuplicates(t *testing.T) {
	tests := []struct {
		args []int
		want int
	}{
		{
			[]int{1, 1, 2},
			2,
		},
		{
			[]int{1, 2, 3},
			3,
		},
	}
	for _, tt := range tests {
		if got := removeDuplicates(tt.args); got != tt.want {
			t.Errorf("removeDuplicates() = %v, want %v", got, tt.want)
		}
	}
}
