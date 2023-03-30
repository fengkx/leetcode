/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function isValidBST(root: TreeNode | null): boolean {
    let cur = root;
    let pre = null
    const stack = [];
    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left
        }
        cur = stack.pop();
        if (pre !== null && cur.val <= pre.val) {
            return false
        }
        pre = cur
        cur = cur.right
    }
    return true;
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('isValidBST', () => {
        test('returns true for empty tree', () => {
            expect(isValidBST(null)).toBe(true);
        });

        test('returns true for single node tree', () => {
            expect(isValidBST(new TreeNode(1))).toBe(true);
        });

        test('returns true for valid BST', () => {
            const root = new TreeNode(5);
            root.left = new TreeNode(3);
            root.right = new TreeNode(7);
            root.left.left = new TreeNode(2);
            root.left.right = new TreeNode(4);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(8);
            expect(isValidBST(root)).toBe(true);
        });

        test('returns false for invalid BST', () => {
            const root = new TreeNode(5);
            root.left = new TreeNode(3);
            root.right = new TreeNode(7);
            root.left.left = new TreeNode(2);
            root.left.right = new TreeNode(4);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(3);
            expect(isValidBST(root)).toBe(false);
        });
    });

}