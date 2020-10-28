#include "headers.h"

class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    if (prices.size() <= 0) return 0;
    int maxProfit = 0;
    int minBefore = prices[0];
    for (auto price : prices) {
      maxProfit = max(maxProfit, price - minBefore);
      minBefore = min(minBefore, price);
    }
    return maxProfit;
  }
};
TEST(bestSimeToBuyAndSellStock, maxProfit) {
  Solution s;
  auto v1 = vector<int>{7, 1, 5, 3, 6, 4};
  EXPECT_EQ(s.maxProfit(v1), 5);
  auto v2 = vector<int>{7, 6, 4, 3, 1};
  EXPECT_EQ(s.maxProfit(v2), 0);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
