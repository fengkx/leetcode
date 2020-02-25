package remove_nth_node_from_end_of_list

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

/**
Implementation using two pointer
Time O(n)
Space O(1)
*/

func removeNthFromEndWithTwoPointer(head *ListNode, n int) *ListNode {
	var (
		h = &ListNode{
			Val:  0,
			Next: head,
		}
		slow = h
		fast = h
	)
	for i := 0; i < n; i++ {
		fast = fast.Next
	}

	for fast.Next != nil {
		slow = slow.Next
		fast = fast.Next
	}
	slow.Next = slow.Next.Next
	return h.Next
}
