#include "headers.h"
/**
 * buy[i] max profit we can have when we buy stock on that day;
 * sell[i] max profit we can have when we sell stock on that day;
 * colldown max profit we can get when we cooldown on that day;
 * target: sell[-1] sell all stock to cash
 *
 * Transfer Func
 * cooldown[i] =
 * | at least we not lose money (no stock in hands)-> cooldown[i] (yesterday we
 * don't sell stock) | we get the profit/lost by selling stock yesterday ->
 * sell[i-1]
 *
 * buy[i] =
 * | no transcation on day i -> buy[i-1]
 * | have transcation on day i -> cooldown[i-1] - pirces[i] #we should cooldown
 * before so we have cooldown[i-1] money
 *
 * sell[i] =
 * | no transcation on day i -> sell[i-1]
 * | have transcation on day i -> buy[i-1] + prices[i] #we have bought stock
 * before stock an sell it on day i
 *
 * Inital Val
 * buy[0] = -prices[0]
 * sell[0] = 0;
 */
class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    auto len = prices.size();
    if (len < 2) return 0;
    auto buy = vector<int>(len, 0);
    auto sell = vector<int>(len, 0);
    auto cooldown = 0;
    buy.front() = -prices[0];
    sell.front() = 0;
    for (size_t i = 1; i < len; i++) {
      buy[i] = max(buy[i - 1], cooldown - prices[i]);
      cooldown = max(cooldown, sell[i - 1]);
      sell[i] = max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    return sell.back();
  }
};
TEST(bestTimeToBuyAndSellStockWithCooldown, maxProfit) {
  Solution s;
  auto v1 = vector<int>{1, 2, 3, 0, 2};
  EXPECT_EQ(s.maxProfit(v1), 3);
  auto v2 = vector<int>{1, 3, 5, 1, 2};
  EXPECT_EQ(s.maxProfit(v2), 4);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
