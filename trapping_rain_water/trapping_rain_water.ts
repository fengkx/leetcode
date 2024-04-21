function trap(heights: number[]): number {
    const len = heights.length;
    const leftMax = [];
    const rightMax = [];

    let lc = 0;
    let rc = 0;

    let r = 0;

    for (let i = 0; i < len; i++) {
        lc = Math.max(heights[i], lc);
        rc = Math.max(heights[len - 1 - i], rc);
        leftMax.push(lc);
        rightMax.unshift(rc)

    }

    for (let i = 0; i < len; i++) {
        const wh = Math.min(rightMax[i], leftMax[i]);
        r += wh - heights[i];
    }
    return r
}

function trapWithStack(heights: number[]): number {
    let answer = 0;
    const stack = [];

    const len = heights.length;
    for (let i = 0; i <= len; i++) {
        const h = heights[i];
        while (stack.length > 0 && heights[stack.at(-1)] < h) { // 非递增栈
            // [10] 5
            // [10, 5] 1
            // [10, 5, 1] 10
            // [10]
            const top = stack.pop();
            const popH = heights[top];

            if (stack.length <= 0) {
                break;
            }
            const leftHeight = heights[stack.at(-1)];
            const minHeight = Math.min(leftHeight, h);
            const distance = i - stack.at(-1) - 1;
            answer += distance * (minHeight - popH)
        }
        stack.push(i);
    }
    return answer
}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('trapping rain water', () => {
        test('simple', () => {
            expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
            //                  1     1  2  1        1
        })

        test('random', () => {
            for (let i = 0; i < 10; i++) {
                const input = new Array(20).fill(0).map(_ => {
                    return Math.floor(Math.random() * 100)
                })
                expect(trapWithStack(input)).toBe(trap(input))
            }
        })
    })
}