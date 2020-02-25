package remove_nth_node_from_end_of_list

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_removeNthFromEndWithTwoPointer(t *testing.T) {
	n5 := ListNode{
		Val:  5,
		Next: nil,
	}
	n4 := ListNode{
		Val:  4,
		Next: &n5,
	}
	n3 := ListNode{
		Val:  3,
		Next: &n4,
	}
	n2 := ListNode{
		Val:  2,
		Next: &n3,
	}
	n1 := ListNode{
		Val:  1,
		Next: &n2,
	}

	removeNthFromEndWithTwoPointer(&n1, 2)
	assert.Equal(t, 5, n3.Next.Val)

	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n4.Next = &n5
	n5.Next = nil
	removeNthFromEndWithTwoPointer(&n1, 1)
	assert.Nil(t, n4.Next)

	n1.Next = &n2
	n2.Next = &n3
	n3.Next = &n4
	n4.Next = &n5
	n5.Next = nil
	n := removeNthFromEndWithTwoPointer(&n1, 5)
	assert.Equal(t, 2, n.Val)

	n1.Next = &n2
	n2.Next = nil // 2 elements remove last
	nn := removeNthFromEndWithTwoPointer(&n1, 1)
	assert.Equal(t, 1, nn.Val)
	assert.Nil(t, nn.Next)
}
