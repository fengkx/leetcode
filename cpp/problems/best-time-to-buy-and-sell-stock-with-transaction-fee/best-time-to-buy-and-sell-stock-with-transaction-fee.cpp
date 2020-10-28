#include "headers.h"
/**
 * buy[i] max profit we can have when we buy stock on that day;
 * sell[i] max profit we can have when we sell stock on that day;
 *
 * target: sell[-1] sell all stock to cash
 *
 * Transfer Func
 * buy[i] =
 * | no transcation on day i -> buy[i-1]
 * | have transcation on day i -> unhold[i-1] - pirces[i] #we haven't buy stock
 * yet, and buy on day i
 *
 * sell[i] =
 * | no transcation on day i -> sell[i-1]
 * | have transcation on day i -> hold[i-1] + prices[i] - fee #we have bought
 * stock an sell it on day i
 *
 * Inital Val
 * buy[0] = -prices[0]
 * sell[0] = 0;
 */
class Solution {
 public:
  int maxProfit(vector<int>& prices, int fee) {
    auto len = prices.size();
    if (len < 2) return 0;
    auto buy = vector<int>(len, 0);
    auto sell = vector<int>(len, 0);
    buy.front() = -prices[0];
    sell.front() = 0;
    for (size_t i = 1; i < len; i++) {
      buy[i] = max(buy[i - 1], sell[i - 1] - prices[i]);
      sell[i] = max(sell[i - 1], buy[i - 1] + prices[i] - fee);
    }
    return sell.back();
  }
};

TEST(bestTimeToBuyAndSellStockWithTransactionFee, maxProfit) {
  Solution s;
  auto v1 = vector<int>{1, 3, 2, 8, 4, 9};
  EXPECT_EQ(s.maxProfit(v1, 2), 8);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
