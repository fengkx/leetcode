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

function pathSum(root: TreeNode | null, sum: number): number[][] {
    const paths: number[][] = []

    function findPath(rootNode: TreeNode | null, rest: number, path: number[]) {
        if (!rootNode) {
            return;
        }
        if (!rootNode.left && !rootNode.right) {
            if (rest === rootNode.val) paths.push([...path, rootNode.val])
            return;
        }
        findPath(rootNode.left, rest - rootNode.val, [...path, rootNode.val]);
        findPath(rootNode.right, rest - rootNode.val, [...path, rootNode.val]);
    }

    findPath(root, sum, [])
    return paths
};
