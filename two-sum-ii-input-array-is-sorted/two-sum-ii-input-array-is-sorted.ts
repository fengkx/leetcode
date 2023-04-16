function twoSum(numbers: number[], target: number): number[] {
    const len = numbers.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        if ((numbers[left] + numbers[right]) === target) return [left + 1, right + 1];
        while (numbers[left] < target - numbers[right]) left++;
        if ((numbers[left] + numbers[right]) === target) return [left + 1, right + 1];
        while (numbers[right] > target - numbers[left]) right--;
        if ((numbers[left] + numbers[right]) === target) return [left + 1, right + 1];
    }
};


// 1 , 2 ,3 ,4, 5, 6, 7
if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('twoSum', () => {
        test('returns the indices of the two numbers that add up to the target', () => {
            const numbers = [2, 7, 11, 15];
            const target = 9;
            const result = twoSum(numbers, target);
            expect(result).toStrictEqual([1, 2]);
        });

        test('returns the indices of the two numbers that add up to the target', () => {
            const numbers = [2, 3, 4];
            const target = 6;
            const result = twoSum(numbers, target);
            expect(result).toStrictEqual([1, 3]);
        });

        test('returns the indices of the two numbers that add up to the target', () => {
            const numbers = [-1, 0];
            const target = -1;
            const result = twoSum(numbers, target);
            expect(result).toStrictEqual([1, 2]);
        });
    });

}