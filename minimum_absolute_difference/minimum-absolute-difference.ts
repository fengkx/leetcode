function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    let result = [];
    let minDiff = Number.MAX_SAFE_INTEGER;
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            result = [];
            result.push([arr[i - 1], arr[i]]);
            minDiff = diff;
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }
    return result;
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe('minimumAbsDifference', () => {
        test('returns pairs with minimum absolute difference for [4,2,1,3]', () => {
            const result = minimumAbsDifference([4, 2, 1, 3]);
            expect(result).toEqual([[1, 2], [2, 3], [3, 4]]);
        });

        test('returns pairs with minimum absolute difference for [1,3,6,10,15]', () => {
            const result = minimumAbsDifference([1, 3, 6, 10, 15]);
            expect(result).toEqual([[1, 3]]);
        });

        test('returns pairs with minimum absolute difference for [3,8,-10,23,19,-4,-14,27]', () => {
            const result = minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
            expect(result).toEqual([[-14, -10], [19, 23], [23, 27]]);
        });
    });
}