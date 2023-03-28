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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {

        const currentLevelSize = queue.length;
        const levelNodes = [];
        for (let i = 0; i < currentLevelSize; i++) {
            const cur = queue.shift();
            levelNodes.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        result.push(levelNodes);
    }
    return result

};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe('levelOrder', () => {
        test('should return empty array for null root', () => {
            expect(levelOrder(null)).toEqual([]);
        });

        test('should return correct level order traversal for a binary tree', () => {
            const root = new TreeNode(3);
            root.left = new TreeNode(9);
            root.right = new TreeNode(20);
            root.right.left = new TreeNode(15);
            root.right.right = new TreeNode(7);
            expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
        });
        test('should return correct level order traversal for a binary tree with only one node', () => {
            const root = new TreeNode(3);
            expect(levelOrder(root)).toEqual([[3]]);
        });

        test('should return correct level order traversal for a binary tree with only left child', () => {
            const root = new TreeNode(3);
            root.left = new TreeNode(9);
            expect(levelOrder(root)).toEqual([[3], [9]]);
        });

        test('should return correct level order traversal for a binary tree with only right child', () => {
            const root = new TreeNode(3);
            root.right = new TreeNode(20);
            expect(levelOrder(root)).toEqual([[3], [20]]);
        });

        test('should return correct level order traversal for a binary tree with multiple levels', () => {
            const root = new TreeNode(3);
            root.left = new TreeNode(9);
            root.right = new TreeNode(20);
            root.right.left = new TreeNode(15);
            root.right.right = new TreeNode(7);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            expect(levelOrder(root)).toEqual([[3], [9, 20], [4, 5, 15, 7]]);
        });

    });

}

/**
            3
    9               20
4       5        15      7
 */