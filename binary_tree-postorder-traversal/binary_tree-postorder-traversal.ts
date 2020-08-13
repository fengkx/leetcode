function postorderTraversal(root: TreeNode | null): number[] {
  function postOrderTraversalInner(
    root: TreeNode | null,
    outputs: number[]
  ): number[] {
    if (!root) return outputs;
    postOrderTraversalInner(root.left, outputs);
    postOrderTraversalInner(root.right, outputs);
    outputs.push(root.val);
    return outputs;
  }
  return postOrderTraversalInner(root, []);
}

function postorderTraversalIter(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  const hasPoped = new WeakMap<TreeNode, boolean>();
  if (!root) return result;
  let node: TreeNode | null = root;
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length > 0) {
      const top = stack.pop();
      if (top) {
        if (!hasPoped.has(top)) {
          hasPoped.set(top, true);
          stack.push(top);
          node = top.right;
        } else {
          result.push(top.val);
          node = null;
        }
      }
    }
  }
  return result;
}
