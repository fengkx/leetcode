#include "headers.h"

class Solution {
 public:
  bool isSameTree(TreeNode* p, TreeNode* q) {
    if (p == nullptr && q == nullptr) return true;
    if (p && !q) return false;
    if (!p && q) return false;

    return (p->val == q->val) && isSameTree(p->left, q->left) &&
           isSameTree(p->right, q->right);
  }
};

TEST(sameTree, sameTree) {
  Solution s;
  EXPECT_EQ(
      s.isSameTree(build_tree("[10,5,15]"), build_tree("[10,5,null,null,15]")),
      false);
  // EXPECT_EQ(
  //     s.isSameTree(build_tree("[2,null,null]"), build_tree("[2,null,null]")),
  //     true);
}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
