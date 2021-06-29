import expect = require("expect");

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  // All candidates are postive, skip numbers larger than target
  let r = candidates.length - 1;
  while (candidates[r] > target) r--;

  const results = [];
  type Target = number;
  type Start = number;
  type Path = number[];
  type StackItem = [Target, Start, Path];
  const stack: StackItem[] = [[target, 0, []]];

  while (stack.length > 0) {
    const [target, start, path] = stack.pop();
    for (let i = start; i <= r; i++) {
      if (candidates[i] === target) {
        results.push([...path, target]);
      } else if (candidates[i] < target) {
        stack.push([target - candidates[i], i, [...path, candidates[i]]]);
      }
    }
  }
  return results;
}

expect(new Set(combinationSum([2, 3, 6, 7], 7))).toEqual(
  new Set([[2, 2, 3], [7]])
);
expect(new Set(combinationSum([2, 3, 5], 8))).toEqual(
  new Set([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ])
);
