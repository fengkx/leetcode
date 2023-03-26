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

function linkedListToArray(head: ListNode | null): number[] {
    const result = [];
    let cur = head;
    while (cur) {
        result.push(cur.val);
        cur = cur.next;
    }
    return result;
}



function partition(head: ListNode | null, x: number): ListNode | null {
    const dummyLess = new ListNode();
    const dummyGe = new ListNode();

    let less = dummyLess;
    let ge = dummyGe;
    let cur = head;
    while (cur) {
        if (cur.val < x) {
            less.next = cur;
            less = less.next;
        } else {
            ge.next = cur;
            ge = ge.next;
        }
        cur = cur.next;
    }
    // prevent from cycle
    ge.next = null;

    less.next = dummyGe.next;
    return dummyLess.next;
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest
    test('partition', () => {
        const head1 = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
        const x1 = 3;
        const result1 = partition(head1, x1);
        const expected1 = [1, 2, 2, 4, 3, 5];
        expect(linkedListToArray(result1)).toEqual(expected1);

        const head2 = new ListNode(2, new ListNode(1));
        const x2 = 2;
        const result2 = partition(head2, x2);
        const expected2 = [1, 2];
        expect(linkedListToArray(result2)).toEqual(expected2);

        const head3 = new ListNode(2, new ListNode(1));
        const x3 = 1;
        const result3 = partition(head3, x3);
        const expected3 = [2, 1];
        expect(linkedListToArray(result3)).toEqual(expected3);
    });

}