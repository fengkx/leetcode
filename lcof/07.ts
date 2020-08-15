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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);
    const rootInorderPos = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, 1 + rootInorderPos), inorder.slice(0, rootInorderPos));
    root.right = buildTree(preorder.slice(1 + rootInorderPos), inorder.slice(rootInorderPos + 1))
    return root;
};
