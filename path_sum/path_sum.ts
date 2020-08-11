/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
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

function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if (!root) return false
    if (root.left && root.right) {
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
    }
    if (root.left) {
        return hasPathSum(root.left, sum - root.val)
    }
    if (root.right) {
        return hasPathSum(root.right, sum - root.val)
    }
    return root.val === sum
};
