function largestRectangleAreaBraceForce(heights) {
    let res = 0;
    const len = heights.length;
    for (let left = 0; left < len; left++) {
        let minHeight = heights[left];
        for (let right = left + 1; right < len; right++) {
            if (heights[right] < minHeight) {
                minHeight = heights[right];
            }
            const square = (right - left + 1) * minHeight;
            if (square > res) {
                res = square;
            }
        }
    }
    return res;
}
// 2 4
// S: 0 1
function largestRectangleAreaStack(heights) {
    const stack = []; // 保持单调递增
    let res = 0;
    const len = heights.length;
    for (let i = 0; i < len; i++) {
        const currentHeight = heights[i];
        // 找到第一个高度小于 currentHeight的 单调递增
        while (stack.length > 0 && currentHeight <= heights[stack.at(-1)]) {
            const h = heights.at(stack.pop()); // 左边第一个比currentHeight高的下标， i 是 第一个比h小的
            let w;
            if (stack.length === 0) {
                // 没有了，可以包住整个区域
                w = i;
            }
            else {
                // 剩下的栈顶是第一个比currentHeight 小的，所以 + 1
                w = i - (stack.at(-1) + 1);
            }
            res = Math.max(res, h * w);
        }
        stack.push(i);
    }
    while (stack.length > 0) {
        const top = stack.pop();
        const h = heights[top];
        let w;
        if (stack.length === 0) {
            // 没有了，可以包住整个区域
            w = heights.length;
        }
        else {
            // 剩下的栈顶是第一个比currentHeight 小的，所以 + 1
            w = heights.length - (stack.at(-1) + 1);
        }
        res = Math.max(res, h * w);
    }
    return res;
}
function largestRectangleArea(heights) {
    return largestRectangleAreaStack(heights);
}
;
if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('largestRectangleArea', () => {
        test('sample', () => {
            expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
            expect(largestRectangleArea([2, 4])).toBe(4)
        });
    });
}
largestRectangleArea([2, 1, 5, 6, 2, 3]);
export { };
