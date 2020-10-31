#include "headers.h"

class Solution {
 public:
  bool search(vector<int>& nums, int target) {
    return search(nums, target, 0, nums.size() - 1);
  }

 private:
  bool search(const vector<int>& nums, int target, int left, int right) {
    if ((right - left) <= 5) {
      for (int i = left; i <= right; i++) {
        if (nums[i] == target) {
          return true;
        }
      }
      return false;
    }
    int mid = left + (right - left) / 2;
    if (target == nums[mid]) {
      return mid;
    }
    while (nums[left] == nums[mid] && left != mid) {
      left++;
    }
    while (nums[right] == nums[mid] && right != mid) {
      right--;
    }

    if (nums[left] <= nums[mid]) {
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
};
TEST(searchInRotatedSortedArrayIi, search) {
  Solution s;
  auto v1 = vector<int>{2, 5, 6, 0, 0, 1, 2};
  // EXPECT_EQ(s.search(v1, 0), true);
  EXPECT_EQ(s.search(v1, 3), false);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
