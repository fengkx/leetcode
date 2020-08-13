function inorderTraversal(root: TreeNode | null): number[] {
  function inorderTraversalInner(
    root: TreeNode | null,
    outputs: number[]
  ): number[] {
    if (!root) return [];
    inorderTraversalInner(root.left, outputs);
    outputs.push(root.val);
    inorderTraversalInner(root.right, outputs);
    return outputs;
  }
  return inorderTraversalInner(root, []);
}

function inorderTraversalIter(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];

  if (!root) return result;
  let node: TreeNode | null = root;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length > 0) {
      const top = stack.pop();
      if (top) {
        result.push(top.val);
        node = top.right;
      }
    }
  }
  return result;
}
