package implement_strstr

import "testing"

func Test_strStr(t *testing.T) {
	type args struct {
		haystack string
		needle   string
	}
	tests := []struct {
		args args
		want int
	}{
		{
			args{
				"hello",
				"ll",
			},
			2,
		},
		{
			args{
				"mississippi",
				"issi",
			},
			1,
		},
		{
			args{
				"aaaaaa",
				"bb",
			},
			-1,
		},
		{
			args{
				"aaaaaa",
				"",
			},
			0,
		},
		{
			args{
				"a",
				"a",
			},
			0,
		},
	}
	for i, tt := range tests {
		if got := strStr(tt.args.haystack, tt.args.needle); got != tt.want {
			t.Fatalf("case %d strStr() = %v, want %v", i, got, tt.want)
		}
	}
}
