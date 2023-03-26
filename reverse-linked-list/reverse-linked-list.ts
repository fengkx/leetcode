/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return head
    }
    if (!head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    head.next = null;
    while (fast) {
        const fastNext = fast.next;
        fast.next = slow;
        slow = fast;
        fast = fastNext;
    }

    return slow;
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;
    test('reverseList', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const reversed = reverseList(head);
        expect(reversed.val).toBe(5);
        expect(reversed.next.val).toBe(4);
        expect(reversed.next.next.val).toBe(3);
        expect(reversed.next.next.next.val).toBe(2);
        expect(reversed.next.next.next.next.val).toBe(1);
        expect(reversed.next.next.next.next.next).toBeNull();
    });

    test('reverseList with one element', () => {
        const head = new ListNode(1);
        const reversed = reverseList(head);
        expect(reversed.val).toBe(1);
        expect(reversed.next).toBeNull();
    });

    test('reverseList with no element', () => {
        const head = null;
        const reversed = reverseList(head);
        expect(reversed).toBeNull();
    });

    test('reverseList with two elements', () => {
        const head = new ListNode(1, new ListNode(2));
        const reversed = reverseList(head);
        expect(reversed.val).toBe(2);
        expect(reversed.next.val).toBe(1);
        expect(reversed.next.next).toBeNull();
    });

}