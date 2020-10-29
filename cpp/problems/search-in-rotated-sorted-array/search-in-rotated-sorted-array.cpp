#include "headers.h"

class Solution {
 private:
  int search(const vector<int> &nums, int target, int left, int right) {
    if ((right - left) <= 5) {
      for (int i = left; i <= right; i++) {
        if (nums[i] == target) {
          return i;
        }
      }
      return -1;
    }
    int mid = left + (right - left) / 2;
    if (target == nums[mid]) {
      return mid;
    }
    if (nums[left] < nums[mid]) {
      // left side is in order
      if (target >= nums[left] && target < nums[mid]) {
        return search(nums, target, left, mid - 1);
      } else {
        return search(nums, target, mid + 1, right);
      }
    } else {
      // right side is in order
      if (target <= nums[right] && target > nums[mid]) {
        return search(nums, target, mid + 1, right);
      } else {
        return search(nums, target, left, mid - 1);
      }
    }
  }

 public:
  int search(vector<int> &nums, int target) {
    size_t len = nums.size();
    return search(nums, target, 0, len - 1);
  }
};
TEST(searchInRotatedSortedArray, search) {
  Solution s;
  auto v1 = vector<int>{6, 8, 10, 12, 0, 2, 3, 4, 5};
  EXPECT_EQ(s.search(v1, 0), 4);
  auto v2 = vector<int>{6, 7, 0, 1, 2, 4, 5};
  EXPECT_EQ(s.search(v2, 3), -1);
  auto v3 = vector<int>{4, 5, 6, 7, 0, 1, 2};
  EXPECT_EQ(s.search(v3, 0), 4);
  auto v4 = vector<int>{4, 5, 6, 7, 8, 1, 2, 3};
  EXPECT_EQ(s.search(v4, 8), 4);
  auto v5 = vector<int>{7, 8, 1, 2, 3, 4, 5, 6};
  EXPECT_EQ(s.search(v5, 2), 3);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
