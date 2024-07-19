pub struct Solution {}
impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        let (mut low, mut mid, mut high) = (0, 0, nums.len() - 1);
        while mid <= high {
            if nums[mid] == 1 {
                mid += 1;
            } else if nums[mid] == 0 {
                let tmp = nums[mid];
                nums[mid] = nums[low];
                nums[low] = tmp;

                low += 1;
                mid += 1;
            } else if nums[mid] == 2 {
                let tmp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = tmp;
                if high == 0 {
                    break;
                }
                high -= 1;
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        let mut vec = vec![2, 0, 1];
        Solution::sort_colors(&mut vec);
        assert_eq!(vec![0, 1, 2], vec);
        let mut vec = vec![1, 0, 2, 1, 2, 0, 0, 2, 1];
        Solution::sort_colors(&mut vec);
        assert_eq!(vec![0, 0, 0, 1, 1, 1, 2, 2, 2], vec);

        let mut vec = vec![2];
        Solution::sort_colors(&mut vec);
        assert_eq!(vec![2], vec);
    }
}
