#include "headers.h"

class Solution {
 public:
  int hammingWeight(uint32_t n) {
    int r = 0;
    while (n) {
      r += n & 1;
      n >>= 1;
    }
    return r;
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
