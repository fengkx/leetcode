#include "headers.h"

class Solution {
 public:
  bool searchMatrix(vector<vector<int>>& matrix, int target) {
    size_t row = matrix.size();
    if (row <= 0) return false;
    size_t col = matrix.front().size();
    if (col <= 0) return false;
    int left = 0, right = row - 1;
    while (left <= right) {
      size_t rm = left + (right - left) / 2;
      if (matrix[rm][col - 1] < target) {
        left = rm + 1;
      } else {
        right = rm - 1;
      }
    }

    auto vec = matrix[left < row ? left : row - 1];
    left = 0;
    right = col - 1;
    while (left <= right) {
      size_t m = left + (right - left) / 2;
      if (vec[m] == target) return true;
      if (vec[m] > target) {
        right = m - 1;
      } else {
        left = m + 1;
      }
    }
    return false;
  }
};
TEST(searchMatrix, searchMatrix) {
  Solution s;
  auto v1 =
      vector<vector<int>>{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 50}};
  EXPECT_EQ(s.searchMatrix(v1, 3), true);
  EXPECT_EQ(s.searchMatrix(v1, 13), false);
  auto v2 = vector<vector<int>>{
      {1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 50}, {51, 53, 55, 57}};
  EXPECT_EQ(s.searchMatrix(v2, 51), true);
  EXPECT_EQ(s.searchMatrix(v2, 13), false);
  auto v3 = vector<vector<int>>(0);
  EXPECT_EQ(s.searchMatrix(v3, 0), false);
  auto v4 = vector<vector<int>>(1, vector<int>{1});
  EXPECT_EQ(s.searchMatrix(v4, 2), false);
}
/**
 * 1, 3, 5, 7
 * 10, 11, 16, 20
 * 23, 30, 34, 50
 * 51, 53, 55, 57
 */

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
