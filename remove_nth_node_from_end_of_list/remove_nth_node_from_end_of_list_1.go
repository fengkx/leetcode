package remove_nth_node_from_end_of_list

/*
 * Implementation using a n size doubled linked List
 * Time O(n)
 * Space O(n)
 * n is the nth node from end of list
 */

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

type DListNode struct {
	Val  *ListNode
	Prev *DListNode
	Next *DListNode
}

type DList struct {
	Head *DListNode
	Tail *DListNode
}

func (dList *DList) InsertHead(val *ListNode) {
	nn := &DListNode{
		Val:  val,
		Next: dList.Head,
	}
	dList.Head = nn
	if nn.Next != nil {
		nn.Next.Prev = nn
	}
	if dList.Tail == nil {
		dList.Tail = nn
	}
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	var dList DList
	var cur *ListNode = head
	var removeHeadFlag = false
	initInsert := 0
	for i := 0; i <= n && cur != nil; i++ { // extra one at least two
		dList.InsertHead(cur)
		initInsert++
		cur = cur.Next
	}
	if cur == nil && initInsert == n {
		removeHeadFlag = true
	}
	// cur is the n+1 element now
	for cur != nil {
		dList.InsertHead(cur)
		dList.Tail = dList.Tail.Prev
		dList.Tail.Next = nil
		cur = cur.Next
	}

	if removeHeadFlag {
		return head.Next
	}
	nodeBefore := dList.Tail

	nodeBefore.Val.Next = nodeBefore.Val.Next.Next
	return head
}
