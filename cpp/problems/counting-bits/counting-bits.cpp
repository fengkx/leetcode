#include "headers.h"
/***
 * memo[i] how many 1 in i's binary form
 *
 * Transfer Function
 * memo[i] =
 * | i % 2 != 0 -> memo[i-1] + 1
 * | i % 2 == 0 -> memo[i/2] // it is just a shift
 *
 * Inital Value
 * memo[0] = 0 memo[1] = 1 momo[2] = 1 momo[3] = 2 memo[4] = 1
 * momo[5] = 2 memo[6] = 2 memo[7] = 3 memo[8] = 1 memo[9] = 2
 */
class Solution {
 public:
  vector<int> countBits(int num) {
    if (num == 0) {
      auto v = vector<int>{0};
      return v;
    }
    auto memo = vector<int>(num + 1, -1);
    memo[0] = 0, memo[1] = 1;
    for (int i = 2; i <= num; i++) {
      if (i % 2 == 0) {
        memo[i] = memo[i >> 1];
      } else {
        memo[i] = memo[i - 1] + 1;
      }
    }
    return memo;
  }
};
TEST(countingBits, countBits) {
  Solution s;
  auto v1 = vector<int>{0, 1, 1};
  EXPECT_EQ(s.countBits(2), v1);
  auto v2 = vector<int>{0, 1, 1, 2, 1, 2};
  EXPECT_EQ(s.countBits(5), v2);
  auto v3 = vector<int>{0, 1, 1, 2, 1, 2, 2, 3, 1};
  EXPECT_EQ(s.countBits(8), v3);
  auto v4 = vector<int>{0};
  EXPECT_EQ(s.countBits(0), v4);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
