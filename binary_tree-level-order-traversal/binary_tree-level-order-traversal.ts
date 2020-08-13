function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const row = [];
    let rowSize = queue.length;
    for (let i = rowSize; i > 0; i--) {
      const node = queue.shift();
      if (node) {
        row.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    result.push(row);
  }
  return result;
}
