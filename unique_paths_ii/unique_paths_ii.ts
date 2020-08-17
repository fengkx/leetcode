/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;
  const dp: number[][] = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = obstacleGrid[0][0];
    }
  }
  dp[0][0] = 1;
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] === 1 && obstacleGrid[i][0] === 0 ? 1 : 0;
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] === 1 && obstacleGrid[0][i] === 0 ? 1 : 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
      else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
}
// @lc code=end
