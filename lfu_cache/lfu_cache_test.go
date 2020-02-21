package lfu_cache

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestNewFreqNode(t *testing.T) {
	t.Run("test 1", func(t *testing.T) {

		cache := Constructor(2)
		cache.Put(1, 1)                   // 1[1]
		cache.Put(2, 2)                   // 2[1] 1[1]
		assert.Equal(t, 1, cache.Get(1))  // 2[1] 1[2]
		cache.Put(3, 3)                   // 3[1] 1[2]
		assert.Equal(t, -1, cache.Get(2)) // -1
		assert.Equal(t, 3, cache.Get(3))  // 3[2] 1[2]
		cache.Put(4, 4)                   // 4[1] 3[2]
		assert.Equal(t, -1, cache.Get(1))

		assert.Equal(t, 3, cache.Get(3))
		assert.Equal(t, 4, cache.Get(4))
	})

	t.Run("test 2", func(t *testing.T) {
		cache := Constructor(2)
		cache.Put(3, 1) // 3[1]
		cache.Put(2, 1) // 2[1] 3[1]
		cache.Put(2, 2) // 3[1] 2[2]
		cache.Put(4, 4) // 4[1] 2[2]
		assert.Equal(t, 2, cache.Get(2))
	})

	t.Run("test capacity 0", func(t *testing.T) {
		cache := Constructor(0)
		cache.Put(0, 0)
		assert.Equal(t, -1, cache.Get(0))
	})

	t.Run("test 3", func(t *testing.T) {

		cache := Constructor(2)
		cache.Put(1, 1)
		cache.Put(2, 2)
		assert.Equal(t, 1, cache.Get(1))
		cache.Put(3, 3)
		assert.Equal(t, -1, cache.Get(2))
		assert.Equal(t, 3, cache.Get(3))
		cache.Put(4, 4)
		assert.Equal(t, -1, cache.Get(1))
		assert.Equal(t, 3, cache.Get(3))
		assert.Equal(t, 4, cache.Get(4))
	})

	t.Run("test 4", func(t *testing.T) {
		//["LFUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
		//[[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
		//[null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,14,null,null,18,null,null,11,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,11,null,null,null,null,29,null,null,null,null,17,-1,18,null,null,null,-1,null,null,null,20,null,null,null,29,18,18,null,null,null,null,20,null,null,null,null,null,null,null]
		cache := Constructor(10)
		cache.Put(10, 13)
		cache.Put(3, 17)
		cache.Put(6, 11)
		cache.Put(10, 5)
		cache.Put(9, 10)
		// 9[1] 6[1] 3[1]
		// 10[2]
		assert.Equal(t, -1, cache.Get(13))
		cache.Put(2, 19)
		// 2[1] 9[1] 6[1] 3[1]
		// 10[2]
		assert.Equal(t, 19, cache.Get(2))
		// 9[1] 6[1] 3[1]
		// 2[2] 10[2]
		assert.Equal(t, 17, cache.Get(3))
		// 9[1] 6[1]
		// 3[2] 2[2] 10[2]
		cache.Put(5, 25)
		// 5[1] 9[1] 6[1]
		// 3[2] 2[2] 10[2]
		assert.Equal(t, -1, cache.Get(8))
		cache.Put(9, 22)
		// 5[1] 6[1]
		// 9[2] 3[2] 2[2] 10[2]
		cache.Put(5, 5)
		// 6[1]
		// 5[2] 9[2] 3[2] 2[2] 10[2]
		cache.Put(1, 30)
		// 1[1] 6[1]
		// 5[2] 9[2] 3[2] 2[2] 10[2]
		assert.Equal(t, -1, cache.Get(11))
		cache.Put(9, 12)
		// 1[1] 6[1]
		// 5[2] 3[2] 2[2] 10[2]
		// 9[3]
		assert.Equal(t, -1, cache.Get(7))
		assert.Equal(t, 5, cache.Get(5))
		// 1[1] 6[1]
		// 3[2] 2[2] 10[2]
		// 5[3] 9[3]
		assert.Equal(t, -1, cache.Get(8))
		assert.Equal(t, 12, cache.Get(9))
		// 1[1] 6[1]
		// 3[2] 2[2] 10[2]
		// 5[3]
		// 9[4]
		cache.Put(4, 30)
		// 4[1] 1[1] 6[1]
		// 3[2] 2[2] 10[2]
		// 5[3]
		// 9[4]
		cache.Put(9, 3)
		// 4[1] 1[1] 6[1]
		// 3[2] 2[2] 10[2]
		// 5[3]
		// 9[5]
		assert.Equal(t, 3, cache.Get(9))
		// 4[1] 1[1] 6[1]
		// 3[2] 2[2] 10[2]
		// 5[3]
		// 9[6]
		assert.Equal(t, 5, cache.Get(10))
		assert.Equal(t, 5, cache.Get(10))
		cache.Put(6, 14)
		cache.Put(3, 1)
		assert.Equal(t, 1, cache.Get(3))
		cache.Put(10, 11)
		assert.Equal(t, -1, cache.Get(8))
		cache.Put(2, 14)
		assert.Equal(t, 30, cache.Get(1))
		assert.Equal(t, 5, cache.Get(5))
		assert.Equal(t, 30, cache.Get(4))
		cache.Put(11, 4)
		cache.Put(12, 24)
		cache.Put(5, 18)
		assert.Equal(t, -1, cache.Get(13))
		cache.Put(7, 23)
		assert.Equal(t, -1, cache.Get(8))
		assert.Equal(t, 24, cache.Get(12))
		cache.Put(3, 27)
		cache.Put(2, 12)
		assert.Equal(t, 18, cache.Get(5))
		cache.Put(2, 9)
		cache.Put(13, 4)
		cache.Put(8, 18)
		cache.Put(1, 7)
		assert.Equal(t, 14, cache.Get(6))
		cache.Put(9, 29)
		cache.Put(8, 21)
		assert.Equal(t, 18, cache.Get(5))
		cache.Put(6, 30)
		cache.Put(1, 12)
		assert.Equal(t, 11, cache.Get(10))
		cache.Put(4, 15)
		cache.Put(7, 22)
		cache.Put(11, 26)
		cache.Put(8, 17)
		cache.Put(9, 29)
		assert.Equal(t, 18, cache.Get(5))
		cache.Put(3, 4)
		cache.Put(11, 30)
		assert.Equal(t, -1, cache.Get(12))
		cache.Put(4, 29)
		assert.Equal(t, 4, cache.Get(3))
		assert.Equal(t, 29, cache.Get(9))
		assert.Equal(t, 30, cache.Get(6))
		cache.Put(3, 4)
		assert.Equal(t, 12, cache.Get(1))
		assert.Equal(t, 11, cache.Get(10))
		cache.Put(3, 29)
		cache.Put(10, 28)
		cache.Put(1, 20)
		cache.Put(11, 13)
		assert.Equal(t, 29, cache.Get(3))
		cache.Put(3, 12)
		cache.Put(3, 8)
		cache.Put(10, 9)
		cache.Put(3, 26)
		assert.Equal(t, 17, cache.Get(8))
		assert.Equal(t, -1, cache.Get(7))
		assert.Equal(t, 18, cache.Get(5))
		cache.Put(13, 17)
		cache.Put(2, 27)
		cache.Put(11, 15)
		assert.Equal(t, -1, cache.Get(12))
		cache.Put(9, 19)
		cache.Put(2, 15)
		cache.Put(3, 16)
		assert.Equal(t, 20, cache.Get(1))
		cache.Put(12, 17)
		cache.Put(9, 1)
		cache.Put(6, 19)
		assert.Equal(t, 29, cache.Get(4))
		assert.Equal(t, 18, cache.Get(5))
		assert.Equal(t, 18, cache.Get(5))
		cache.Put(8, 1)
		cache.Put(11, 7)
		cache.Put(5, 2)
		cache.Put(9, 28)
		assert.Equal(t, 20, cache.Get(1))
		cache.Put(2, 2)
		cache.Put(7, 4)
		cache.Put(4, 22)
		cache.Put(7, 24)
		cache.Put(9, 26)
		cache.Put(13, 28)
		cache.Put(11, 26)

	})
}
