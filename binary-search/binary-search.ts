function search(nums: number[], target: number): number {
    const len = nums.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const current = nums[mid];
        if (current < target) {
            left = mid + 1;
        } else if (current > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('search', () => {
        test('returns the index of the target element if it exists in the array', () => {
            expect(search([1, 2, 3, 4, 5], 4)).toBe(3);
            expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
            expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
        });

        test('returns -1 if the target element does not exist in the array', () => {
            expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
            expect(search([1, 2, 3, 4, 5], 0)).toBe(-1);
        });
    });

}