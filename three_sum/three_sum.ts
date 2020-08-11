/**
 * @expect [[-1,0,1,2,-1,-4]] toBe [[[-1,-1,2],[-1,0,1]]]
 * @param nums
 */
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const sorted = nums.sort((a, b) => a - b);
    let left, right;
    for (let i = 0, len = sorted.length; i < len; i++) {
        const target = -sorted[i];
        left = i + 1;
        right = len - 1;
        if (i > 0 && sorted[i] === sorted[i - 1]) {
            continue;
        }
        while (left < right) {
            if (sorted[left] + sorted[right] < target) {
                left++;
            } else if (sorted[left] + sorted[right] > target) {
                right--
            } else {
                result.push([sorted[i], sorted[left], sorted[right]])
                while (sorted[left + 1] === sorted[left]) left++;
                while (sorted[right - 1] === sorted[right]) right--;
                left++;
                right--;
            }
        }
    }
    return result
};
