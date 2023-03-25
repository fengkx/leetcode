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

function middleNode(head: ListNode | null): ListNode | null {
    let cnt = 0;
    let cur = head;
    while (cur !== null) {
        cnt++;
        cur = cur.next
    }
    let result = head;
    let middleLenIndex = Math.floor(cnt / 2);
    while (middleLenIndex > 0) {
        result = result.next;
        middleLenIndex--;
    }
    return result;
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;
    test('returns the middle node of the linked list', () => {
        const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(middleNode(head1)?.val).toBe(3);

        const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
        expect(middleNode(head2)?.val).toBe(4);

        const head3 = new ListNode(1);
        expect(middleNode(head3)?.val).toBe(1);
    });
}