package powx_n

import (
	"math"
	"testing"
)

func Test_myPow(t *testing.T) {
	type args struct {
		x float64
		n int
	}
	tests := []struct {
		args args
		want float64
	}{
		{
			args{
				2.0,
				10,
			},
			1024,
		}, {
			args{
				2.1,
				3,
			},
			9.26100,
		}, {
			args{
				x: 2,
				n: -2,
			},
			0.25,
		}, {
			args{
				x: 0.00001,
				n: 2147483647,
			},
			math.Pow(0.00001, 2147483647),
		},
	}
	for _, tt := range tests {
		if got := myPow(tt.args.x, tt.args.n); float64(int(got*1000))/1000 != tt.want {
			t.Errorf("myPow() = %v, want %v", got, tt.want)
		}
	}
}
