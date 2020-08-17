// function uniquePaths(m: number, n: number): number {
//     const dp: number[][] = [];
//     for (let i = 0; i < m; i++) {
//       if (i === 0) dp[i] = Array(n).fill(1);
//       else dp[i] = Array(n);
//     }
//     for (let i = 0; i < m; i++) dp[i][0] = 1;
//     function subUniquePath(x: number, y: number): number {
//       const a = x - 1,
//         b = y - 1;
//       if (dp[a][b]) {
//         return dp[a][b];
//       }
//       const result = subUniquePath(x - 1, y) + subUniquePath(x, y - 1);
//       dp[a][b] = result;
//       return result;
//     }
//     return subUniquePath(m, n);
//   }

function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;
  const dp = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[n - 1];
}
