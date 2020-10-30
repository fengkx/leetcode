#include "headers.h"

class Solution {
 public:
  int mySqrt(int x) {
    int left = 1, right = x;
    while (left <= right) {
      int m = left + (right - left) / 2;
      if (m > x / m) {  // prevent overflow
        right = m - 1;
      } else {
        left = m + 1;
      }
    }
    return right;
  }
};
TEST(sqrtx, mySqrt) {
  Solution s;
  EXPECT_EQ(s.mySqrt(9), 3);
  EXPECT_EQ(s.mySqrt(10), 3);
  EXPECT_EQ(s.mySqrt(15), 3);
  EXPECT_EQ(s.mySqrt(16), 4);
  EXPECT_EQ(s.mySqrt(2147395599), 46339);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
