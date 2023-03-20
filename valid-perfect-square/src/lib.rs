use rayon::prelude::*;
pub struct Solution;
impl Solution {
    pub fn is_perfect_square(num: i32) -> bool {
        let mut left = 0;
        let mut right = num;

        while right >= left {
            let mid = left + (right - left) / 2;
            if let Some(square) = mid.checked_mul(mid) {
                if square > num {
                    right = mid - 1;
                } else if square < num {
                    left = mid + 1;
                } else {
                    return true;
                }
            } else {
                right = mid - 1;
            }
        }
        false
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        (1..10000).into_par_iter().for_each(|num| {
            assert_eq!(
                Solution::is_perfect_square(num),
                (num as f64).sqrt().fract() == 0.0
            )
        })
    }
}
