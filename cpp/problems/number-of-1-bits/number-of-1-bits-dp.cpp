#include "headers.h"

class Solution {
 public:
  int hammingWeight(uint32_t n) {
    auto dp = vector<int>(n + 1, 0);
    dp[0] = 0;
    dp[1] = 1;
    for (uint32_t i = 2; i <= n; i++) {
      if (i % 2 == 0) {
        dp[i] = dp[i >> 1];
      } else {
        dp[i] = dp[i - 1] + 1;
      }
    }
    return dp.back();
  }
};
TEST(numberOfOneBits, hammingWeight) {
  Solution s;
  EXPECT_EQ(s.hammingWeight(11), 3);
  EXPECT_EQ(s.hammingWeight(128), 1);
  EXPECT_EQ(s.hammingWeight(4294967293), 31);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
