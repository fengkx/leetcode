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




function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast && slow) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
        if (slow === fast) {
            let ptr = head;
            while (ptr !== fast) {
                if (!ptr || !fast) {
                    return null;
                }
                ptr = ptr.next;
                fast = fast.next;
            }
            return ptr;
        }

    }
    return null
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;
    test("detectCycle: example 1", () => {
        const head = new ListNode(3);
        const node1 = new ListNode(2);
        const node2 = new ListNode(0);
        const node3 = new ListNode(-4);
        head.next = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node1;
        expect(detectCycle(head)).toBe(node1);
    });

    test("detectCycle: example 2", () => {
        const head = new ListNode(1);
        const node1 = new ListNode(2);
        head.next = node1;
        node1.next = head;
        expect(detectCycle(head)).toBe(head);
    });

    test("detectCycle: example 3", () => {
        const head = new ListNode(1);
        expect(detectCycle(head)).toBeNull();
    });

    test("detectCycle: empty list", () => {
        expect(detectCycle(null)).toBeNull();
    });

}