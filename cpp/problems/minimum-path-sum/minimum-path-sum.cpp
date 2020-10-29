#include "headers.h"

class Solution {
 public:
  int minPathSum(vector<vector<int>>& grid) {
    auto r = grid.size();
    auto c = grid.front().size();
    auto maxNum = r * c;
    auto dp = vector<vector<int>>(r, vector<int>(c, maxNum));
    int sum = 0;
    for (size_t i = 0; i < c; i++) {
      sum += grid[0][i];
      dp[0][i] = sum;
    };
    sum = 0;
    for (size_t i = 0; i < r; i++) {
      sum += grid[i][0];
      dp[i][0] = sum;
    };
    for (size_t i = 1; i < r; i++) {
      for (size_t j = 1; j < c; j++) {
        dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
    return dp.back().back();
  }
};
TEST(minPathSum, minPathSum) {
  Solution s;
  auto grid1 = vector<vector<int>>{{1, 3, 1}, {1, 5, 1}, {4, 2, 1}};
  EXPECT_EQ(s.minPathSum(grid1), 7);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
