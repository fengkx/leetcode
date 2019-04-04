package add_two_numbers

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var ret *ListNode = new(ListNode)
	p, q, r := l1, l2, ret
	carry := 0
	for p != nil && q != nil {
		sum := p.Val + q.Val + carry
		carry = sum / 10
		r.Val = sum % 10
		p, q = p.Next, q.Next
		if p != nil && q != nil {
			r.Next = new(ListNode)
			r = r.Next
		}
	}

	var last *ListNode

	if p != nil {
		last = p
	} else {
		last = q
	}
	for last != nil {
		sum := last.Val + carry
		carry = sum / 10
		r.Next = new(ListNode)
		r = r.Next
		r.Val = sum % 10
		last = last.Next

	}
	if carry > 0 {
		r.Next = &ListNode{Val: carry}
	}
	return ret
}
