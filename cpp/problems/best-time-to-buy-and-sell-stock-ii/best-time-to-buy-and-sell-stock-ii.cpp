#include "headers.h"

class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    int profit = 0;
    for (size_t i = 1; i < prices.size(); i++) {
      int mayGet = prices[i] - prices[i - 1];
      if (mayGet > 0) profit += mayGet;
    }
    return profit;
  }
};
TEST(bestTimeToBuyAndSellStock2, maxProfit) {
  Solution s;
  auto v1 = vector<int>{7, 1, 5, 3, 6, 4};
  EXPECT_EQ(s.maxProfit(v1), 7);
  auto v2 = vector<int>{1, 2, 3, 4, 5};
  EXPECT_EQ(s.maxProfit(v2), 4);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
