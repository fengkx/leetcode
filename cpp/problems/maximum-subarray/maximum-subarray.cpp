#include "headers.h"
class Solution {
 public:
  int maxSubArray(vector<int>& nums) {
    int maxSum = INT_MIN, tmp = 0;
    for (auto num : nums) {
      tmp = max(tmp + num, num);
      maxSum = max(tmp, maxSum);
    }
    return maxSum;
  }
};
TEST(maximumSubarray, maximumSubarray) {
  Solution s;
  auto v1 = vector<int>{-2, 1, -3, 4, -1, 2, 1, -5, 4};
  EXPECT_EQ(s.maxSubArray(v1), 6);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
