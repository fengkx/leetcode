/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array `nums`, find the subarray with the largest sum,
 * and return its sum.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 */
function maxSubArray(nums: number[]): number {
    const dp = [nums[0]];
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        const last = dp[i - 1];
        const r = last + nums[i];
        if (r > nums[i]) {
            dp[i] = r;
        } else {
            dp[i] = nums[i]
        }
    }
    return Math.max(...dp);
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("maxSubArray", () => {
        test("example 1: subarray [4,-1,2,1] has the largest sum 6", () => {
            const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
            expect(maxSubArray(nums)).toBe(6);
        });

        test("example 2: single element array", () => {
            const nums = [1];
            expect(maxSubArray(nums)).toBe(1);
        });

        test("example 3: all positive numbers", () => {
            const nums = [5, 4, -1, 7, 8];
            expect(maxSubArray(nums)).toBe(23);
        });

        test("single negative element", () => {
            const nums = [-1];
            expect(maxSubArray(nums)).toBe(-1);
        });

        test("all negative numbers", () => {
            const nums = [-2, -3, -1, -5];
            expect(maxSubArray(nums)).toBe(-1);
        });
    });
}
