/**
 * 2540. Minimum Common Value
 * https://leetcode.com/problems/minimum-common-value/
 *
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * return the minimum integer common to both arrays. If there is no common
 * integer amongst nums1 and nums2, return -1.
 *
 * Note that an integer is said to be common to nums1 and nums2 if both arrays
 * have at least one occurrence of that integer.
 *
 * Constraints:
 * - 1 <= nums1.length, nums2.length <= 10^5
 * - 1 <= nums1[i], nums2[j] <= 10^9
 * - Both nums1 and nums2 are sorted in non-decreasing order
 */
function getCommon(nums1: number[], nums2: number[]): number {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        const n1 = nums1[i];
        const n2 = nums2[j];
        if (n1 === n2) {
            return n1;
        } else if (n1 < n2) {
            i++;
        } else {
            j++;
        }

    }
    return -1
}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("getCommon", () => {
        test("example 1: smallest common element is 2", () => {
            expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
        });

        test("example 2: common elements 2 and 3, return 2", () => {
            expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).toBe(2);
        });

        test("no common element returns -1", () => {
            expect(getCommon([1, 2, 3], [4, 5, 6])).toBe(-1);
        });

        test("single common element", () => {
            expect(getCommon([1], [1])).toBe(1);
        });

        test("single element each, no match", () => {
            expect(getCommon([1], [2])).toBe(-1);
        });
    });
}
