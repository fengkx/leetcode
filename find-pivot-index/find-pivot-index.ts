function pivotIndex(nums: number[]): number {
    let left = 0;
    let right = nums.reduce((acc, cur) => acc + cur, 0) - nums[0];
    for (let i = 0, len = nums.length; i < len;) {
        if ((right - left) === 0) {
            return i;
        }
        left += nums[i];
        i++
        right -= nums[i];
    }
    return -1;
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;

    test('last one', () => {
        expect(pivotIndex([-1, 2, -1, 3])).toBe(3);
        expect(pivotIndex([-1, 2, -2, 3])).toBe(-1);
    })

    test('pivotIndex([1, 7, 3, 6, 5, 6]) should return 3', () => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    });

    test('pivotIndex([1, 2, 3]) should return -1', () => {
        expect(pivotIndex([1, 2, 3])).toBe(-1);
    });

    test('pivotIndex([-1, -1, -1, 0, 1, 1]) should return 0', () => {
        expect(pivotIndex([-1, -1, -1, 0, 1, 1])).toBe(0);
    });

    test('pivotIndex([2, 1, -1]) should return 0', () => {
        expect(pivotIndex([2, 1, -1])).toBe(0);
    });

    test('pivotIndex([1, 1, 0, -1, -1, -1]) should return 5', () => {
        expect(pivotIndex([1, 1, 0, -1, -1, -1])).toBe(5);
    });
}