/**
 * Definition for node.
 */
class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}


function helper(subRoot: Node | null, result: number[]) {
  if (subRoot === null) return;
  result.push(subRoot.val);
  subRoot.children.forEach(child => {
    helper(child, result);
  })
}
function preorderRecursive(root: Node | null): number[] {
  const result = [];
  helper(root, result);
  return result

};

function preorder(root: Node | null): number[] {
  const result = [];
  if (!root) return result;
  const stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (cur) {

    }
    result.push(cur.val);
    for (let i = cur.children.length - 1; i >= 0; i--) {
      stack.push(cur.children[i]);
    }
  }
  return result;
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;
  test('preorder of null is []', () => {
    expect(preorder(null)).toEqual([]);
  });

  test('preorder of single node is [1]', () => {
    const root = new Node(1);
    expect(preorder(root)).toEqual([1]);
  });

  test('preorder of tree with multiple levels', () => {
    const root = new Node(1);
    const child1 = new Node(2);
    const child2 = new Node(3);
    const grandchild1 = new Node(4);
    const grandchild2 = new Node(5);
    const grandchild3 = new Node(6);
    const grandchild4 = new Node(7);
    root.children = [child1, child2];
    child1.children = [grandchild1, grandchild2];
    child2.children = [grandchild3, grandchild4];
    expect(preorder(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  test('preorder of n-ary tree with null values', () => {
    const root1 = new Node(1);
    const child1 = new Node(3);
    const child2 = new Node(2);
    const child3 = new Node(4);
    const grandchild1 = new Node(5);
    const grandchild2 = new Node(6);
    root1.children = [child1, child2, child3];
    child1.children = [grandchild1, grandchild2];
    expect(preorder(root1)).toEqual([1, 3, 5, 6, 2, 4]);

    const root2 = new Node(1);
    const child4 = new Node(2);
    const child5 = new Node(3);
    const child6 = new Node(4);
    const child7 = new Node(5);
    const grandchild3 = new Node(6);
    const grandchild4 = new Node(7);
    const grandchild5 = new Node(8);
    const grandchild6 = new Node(9);
    const grandchild7 = new Node(10);
    const grandchild8 = new Node(11);
    const grandchild9 = new Node(12);
    const grandchild10 = new Node(13);
    const grandchild11 = new Node(14);
    root2.children = [
      child4, child5, child6, child7
    ]
    child5.children = [
      grandchild3,
      grandchild4,
    ]
    child6.children = [
      grandchild5
    ]
    child7.children = [
      grandchild6,
      grandchild7
    ]
    grandchild4.children = [
      grandchild8
    ]
    grandchild5.children = [
      grandchild9
    ]
    grandchild6.children = [
      grandchild10
    ]
    grandchild8.children = [
      grandchild11
    ]
    expect(preorder(root2)).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
  });

}