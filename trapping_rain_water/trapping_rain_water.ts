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

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('trapping rain water', () => {
        test('simple', () => {
            expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
            //                  1     1  2  1        1
        })
    })
}