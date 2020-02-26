package merge_two_sorted_lists

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	cur1 := l1
	cur2 := l2
	var r = &ListNode{
		Val: -1,
	}
	cur := r

	for cur1 != nil && cur2 != nil {
		if cur1.Val < cur2.Val {
			cur.Next = cur1
			cur1 = cur1.Next
		} else {
			cur.Next = cur2
			cur2 = cur2.Next
		}
		cur = cur.Next

	}
	if cur1 != nil {
		cur.Next = cur1
	} else if cur2 != nil {
		cur.Next = cur2
	}
	return r.Next

}
