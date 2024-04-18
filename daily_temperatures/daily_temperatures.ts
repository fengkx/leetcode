function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const len = temperatures.length;
    const answer = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        const temperature = temperatures[i];
        while (stack.length > 0 && temperature > temperatures[stack.at(-1)]) { // 非递增栈
            const idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i)
    }

    return answer
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('dailyTemperatures', () => {
        test('sample', () => {
            expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
            //                           1   1   0   
            expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
            expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
            expect(dailyTemperatures([60, 20, 30, 90])).toEqual([3, 1, 1, 0]);


        })
    })
}