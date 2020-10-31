#include "headers.h"

class Solution {
 public:
  int findPeakElement(vector<int>& nums) {
    int len = nums.size();
    if (len == 1) return 0;
    int left = 0, right = len - 1;
    while (left <= right) {
      if (right - left == 1) {
        if (nums[left] > nums[right]) return left;
        return right;
      }
      int mid = left + (right - left) / 2;
      if ((mid == 0 && (nums[0] > nums[1])) ||
          (mid == len - 1 && (nums[len - 2] < nums[len - 1])) ||
          (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1])) {
        return mid;
      }
      if (nums[mid] > nums[mid - 1] && nums[mid + 1] > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
};
TEST(findPeakElement, findPeakElement) {
  Solution s;
  auto v1 = vector<int>{1, 2, 3, 1};
  auto v2 = vector<int>{9, 8, 7, 6};
  auto v3 = vector<int>{1, 2, 3, 4};
  auto v0 = vector<int>{1};
  auto v4 = vector<int>{1, 2};
  auto v5 = vector<int>{2, 1, 2};
  auto v6 = vector<int>{3, 4, 3, 2, 1};
  EXPECT_EQ(s.findPeakElement(v1), 2);
  EXPECT_EQ(s.findPeakElement(v2), 0);
  EXPECT_EQ(s.findPeakElement(v3), 3);
  EXPECT_EQ(s.findPeakElement(v0), 0);
  EXPECT_EQ(s.findPeakElement(v4), 0);
  EXPECT_EQ(s.findPeakElement(v6), 1);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
