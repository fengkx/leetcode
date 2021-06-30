#include "headers.h"

class Solution {
 public:
  bool isValidBST(TreeNode* root) {
    stack<TreeNode*> s;
    auto cur = root;
    TreeNode* pre = nullptr;
    while (cur || !s.empty()) {
      while (cur) {
        s.push(cur);
        cur = cur->left;
      }
      cur = s.top();
      s.pop();
      if (pre != nullptr && pre->val >= cur->val) return false;
      pre = cur;
      cur = cur->right;
    }
    return true;
  }
};
TEST(validateBinarySearchTree, validateBinarySearchTree) {
  Solution s;
  EXPECT_EQ(s.isValidBST(build_tree("[2,1,3]")), true);
  EXPECT_EQ(s.isValidBST(build_tree("[5,1,4,null,null,3,6]")), false);
  EXPECT_EQ(s.isValidBST(build_tree("[5,4,6,null,null,3,7]")), false);
  EXPECT_EQ(s.isValidBST(build_tree("[2,2,2]")), false);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
