#include "headers.h"
/* dp[i] is the max product of i I get
 *
 * Transfer Function
 * dp[i] =
 *
 * Inital Value
 * dp[2] = 1 // 1 1
 * dp[3] = 2 // 1 2
 * dp[4] = 4 // 2 2
 * dp[5] = 6 // 2 3
 * dp[6] = 9 // 3 3
 * dp[7] = 12 // 3 4
 * dp[8] = 18 // 3 3 2
 * dp[9] = 27 // 3 3 3
 */
class Solution {
 public:
  int integerBreak(int n) {
    auto dp = vector<int>(n + 1, 0);
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
      for (int j = 1; j < i; j++) {
        dp[i] = max(dp[i], j * max(i - j, dp[i - j]));
      }
    }
    return dp[n];
  }
};
TEST(integerBreak, integerBreak) {
  Solution s;
  EXPECT_EQ(s.integerBreak(2), 1);
  EXPECT_EQ(s.integerBreak(17), 486);
  EXPECT_EQ(s.integerBreak(10), 36);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
