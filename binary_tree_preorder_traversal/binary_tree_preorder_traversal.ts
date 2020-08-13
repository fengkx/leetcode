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

function preorderTraversal(root: TreeNode | null): number[] {
  function preOrderTraversalInner(root: TreeNode | null, outputs: number[]) {
    if (root === null) {
      return [];
    }
    outputs.push(root.val);
    preOrderTraversalInner(root.left, outputs);
    preOrderTraversalInner(root.right, outputs);
    return outputs;
  }
  const result = preOrderTraversalInner(root, []);
  return result;
}

function preorderTraversalInter(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  if (!root) {
    return result;
  }
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  return result;
}
