/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    while (n !== 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[n + m - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[n + m - 1] = nums2[n - 1];
            n--;
        }
    }
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;

    test("Test with empty arrays", () => {
        const nums1: number[] = [];
        const nums2: number[] = [];
        merge(nums1, 0, nums2, 0);
        expect(nums1).have.length(0);
    });

    test("Test with one empty array", () => {
        const nums1: number[] = [1, 2, 3];
        const nums2: number[] = [];
        merge(nums1, 3, nums2, 0);
        expect(nums1).deep.eq([1, 2, 3]);
    });

    test("Test with two non-empty arrays of the same length", () => {
        const nums1: number[] = [1, 3, 5];
        const nums2: number[] = [2, 4, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).deep.eq([1, 2, 3, 4, 5, 6]);
    });

    test("Test with two non-empty arrays of different lengths", () => {
        const nums1: number[] = [1, 2, 3, 0, 0, 0];
        const nums2: number[] = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).deep.eq([1, 2, 2, 3, 5, 6]);
    });

    test("Test with two non-empty arrays where all elements in nums1 are greater than those in nums2", () => {
        const nums1: number[] = [3, 4, 5, 0, 0, 0];
        const nums2: number[] = [1, 2, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).deep.eq([1, 2, 3, 4, 5, 6]);
    });
}
