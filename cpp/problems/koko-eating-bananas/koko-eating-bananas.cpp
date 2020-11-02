#include "headers.h"

class Solution {
 public:
  int minEatingSpeed(vector<int>& piles, int H) {
    int maxPile = *max_element(begin(piles), end(piles));
    int left = 1, right = maxPile + 1;
    while (left < right) {
      int mid = left + (right - left) / 2;
      int h = 0;
      for (auto p : piles) {
        h += p / mid;
        if ((p % mid) > 0) {
          h += 1;
        }
      }
      if (h > H) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return right;
  }
};
TEST(kokoEatingBananas, minEatingSpeed) {
  Solution s;
  auto v1 = vector<int>{3, 6, 7, 11};
  EXPECT_EQ(s.minEatingSpeed(v1, 8), 4);
  auto v2 = vector<int>{30, 11, 23, 4, 20};
  EXPECT_EQ(s.minEatingSpeed(v2, 5), 30);
  EXPECT_EQ(s.minEatingSpeed(v2, 6), 23);
  auto v3 = vector<int>{312884470};
  EXPECT_EQ(s.minEatingSpeed(v3, 312884469), 2);
  auto v4 = vector<int>{1, 1};
  EXPECT_EQ(s.minEatingSpeed(v4, 2), 1);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
