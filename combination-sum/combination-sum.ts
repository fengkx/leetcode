import expect = require("expect");

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  function dfs(
    target: number,
    start: number,
    path: number[],
    results: number[][]
  ) {
    if (target < 0) return;
    if (target === 0) {
      results.push(path);
      return;
    }
    for (let i = start, len = candidates.length; i < len; i++) {
      if (candidates[i] > target) {
        break;
      }
      dfs(target - candidates[i], i, [...path, candidates[i]], results);
    }
  }
  const results = [];
  dfs(target, 0, [], results);
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

/*
target  start   path
7   0   []
5   0   [2]
3   0   [2,2]

*/
