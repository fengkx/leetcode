#include "headers.h"

class Solution {
 public:
  void flatten(TreeNode* root) {
    if (root == nullptr) return;
    TreeNode* prev = nullptr;
    stack<TreeNode*> s;
    s.push(root);
    while (!s.empty()) {
      auto node = s.top();
      s.pop();
      if (node->right != nullptr) s.push(node->right);
      if (node->left != nullptr) s.push(node->left);
      if (prev != nullptr) {
        prev->right = node;
        prev->left = nullptr;
      }
      prev = node;
    }
  }
};
TEST(flattenBinaryTreeToLinkedList, flattenBinaryTreeToLinkedList) {}

int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);

  return RUN_ALL_TESTS();
}
