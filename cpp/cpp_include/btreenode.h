#include <vector>
#include <string>
#include <sstream>
using namespace std;
// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {
        
    }
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {
        
    }
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {
        
    }
};
namespace {
TreeNode* build_tree_from_vec(const vector<string>& nodes) noexcept
	{
		vector<TreeNode*> vec(nodes.size());
		vec[0] = new TreeNode(stoi(nodes[0]));
		size_t parent_idx = 0;
		int count = 0;
		for (size_t i = 1; i < nodes.size(); i++) {

            if (count == 2) {
				count = 0;
				parent_idx++;
				while (parent_idx < nodes.size() && !vec[parent_idx])
					parent_idx++;
			}

            
			if (nodes[i] == "null") {
				count++;
				continue;
			}
			

			vec[i] = new TreeNode(stoi(nodes[i]));
			if (count % 2 == 1) {
				vec[parent_idx]->right = vec[i];
			}
			else {
				vec[parent_idx]->left = vec[i];
			}
			count++;
		}
		return vec[0];
	}
}

/* https://github.com/grewwc/leetcode_build_tree */
// it is NOT efficient, but does its work
// we only new, but don't delete (it has memory leak). 
//     It doesn't matter in this case. 
// here just copy the string, no string_view or (const) reference
TreeNode* build_tree(string nodes)
{
	vector<string> vec;

	// transform "," & "[" & "]" to empty space
	transform(cbegin(nodes), cend(nodes), begin(nodes),
		[](char ch) {
			if (ch != ',' && ch != '[' && ch != ']') {
				return ch;
			};
			return ' ';
		});

	// use iss to ignore empty space 
	istringstream iss{ move(nodes) };
	string next_word;

	while (!iss.eof()) {
		iss >> next_word;
		if (!next_word.empty())  // avoid push_back trailing empty space
			vec.push_back(move(next_word));
	}

	return build_tree_from_vec(vec);
}