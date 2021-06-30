#include "headers.h"

class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return isSymmetric(root->left, root->right);
        
    }
    bool isSymmetric(TreeNode *left, TreeNode* right) {
        if(!left && !right) return true;
        if (left && !right) return false;
        if (!left && right) return false;
        
        
        return left->val == right->val && isSymmetric(left->left, right->right) && isSymmetric(left->right, right->left);
        
    }
};
TEST(symmetricTree, symmetricTree) { 
  Solution s;
  EXPECT_EQ(s.isSymmetric(build_tree("[1,2,2,3,4,4,3]")), true);
  EXPECT_EQ(s.isSymmetric(build_tree("[1,2,2,null,3,null,3]")), false);
}

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
