// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

// 1 -> 2 -> 3
// 2 -> 1 -> 3
struct Solution;
impl Solution {
    fn swap_pairs_helper(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        if let Some(mut first) = head {
            if let Some(mut second) = first.next {
                first.next = Solution::swap_pairs_helper(second.next);
                second.next = Some(first);
                return Some(second);
            } else {
                return Some(first);
            }
        } else {
            return None;
        }
    }
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Solution::swap_pairs_helper(head)
    }
}

mod tests {
    use super::*;

    #[test]
    fn simple() {
        assert_eq!(
            Solution::swap_pairs(Some(Box::new(ListNode {
                val: 1,
                next: Some(Box::new(ListNode {
                    val: 2,
                    next: Some(Box::new(ListNode { val: 3, next: None })),
                })),
            }))),
            Some(Box::new(ListNode {
                val: 2,
                next: Some(Box::new(ListNode {
                    val: 1,
                    next: Some(Box::new(ListNode { val: 3, next: None })),
                })),
            }))
        )
    }
}
