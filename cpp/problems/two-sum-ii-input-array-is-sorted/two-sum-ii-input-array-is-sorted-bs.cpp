#include "headers.h"

class Solution {
 public:
  vector<int> twoSum(vector<int>& numbers, int target) {
    int len = numbers.size();
    for (int i = 0; i < len; i++) {
      int tmp = target - numbers[i];
      if (tmp < numbers[i]) {
        continue;
      }
      int left = i + 1, right = len - 1;
      while (left <= right) {
        int mid = left + (right - left) / 2;
        if (numbers[mid] > tmp) {
          right = mid - 1;
        } else if (numbers[mid] < tmp) {
          left = mid + 1;
        } else {
          return vector<int>{i + 1, mid + 1};
        }
      }
    }
    return vector<int>{-1, -1};
  }
};
#define MATCH_VECTOR(actual, expect)           \
  EXPECT_EQ(actual.size(), expect.size());     \
  for (size_t i = 0; i < actual.size(); i++) { \
    EXPECT_EQ(actual[i], expect[i]);           \
  }
TEST(twoSumInputArrayIsSorted, twoSum) {
  Solution s;
  auto v1 = vector<int>{2, 7, 11, 15};
  auto act1 = s.twoSum(v1, 9);
  auto ans1 = vector<int>{1, 2};
  MATCH_VECTOR(act1, ans1);
  auto v2 = vector<int>{1, 1};
  auto act2 = s.twoSum(v1, 2);
  auto ans2 = vector<int>{1, 2};
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
