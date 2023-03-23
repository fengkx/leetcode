function runningSum(nums: number[]): number[] {
    const result = [];
    let cumulativeSum = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        cumulativeSum += nums[i];
        result.push(cumulativeSum)
    }
    return result
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;
    test('runningSum with example input', () => {
        expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    });

    test('runningSum with empty array', () => {
        expect(runningSum([])).toEqual([]);
    });

    test('runningSum with single element', () => {
        expect(runningSum([5])).toEqual([5]);
    });

    test('runningSum with negative numbers', () => {
        expect(runningSum([-1, 2, -3, 4])).toEqual([-1, 1, -2, 2]);
    });

    test('runningSum with mixed positive and negative numbers', () => {
        expect(runningSum([3, -2, 5, -1])).toEqual([3, 1, 6, 5]);
    });
}