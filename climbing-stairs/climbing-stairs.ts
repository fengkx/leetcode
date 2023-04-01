function climbStairs(n: number): number {
    let a = 0;
    let b = 1;
    let cnt = n;
    while (cnt > 0) {
        let tmp = a + b;
        a = b;
        b = tmp;
        cnt--;
    }
    return b;
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("climbStairs", () => {
        test("returns the correct number of ways to climb 1 stair", () => {
            const result = climbStairs(1);
            expect(result).toBe(1);
        });

        test("returns the correct number of ways to climb 2 stairs", () => {
            const result = climbStairs(2);
            expect(result).toBe(2);
        });

        test("returns the correct number of ways to climb 3 stairs", () => {
            const result = climbStairs(3);
            expect(result).toBe(3);
        });

        test("returns the correct number of ways to climb 4 stairs", () => {
            const result = climbStairs(4);
            expect(result).toBe(5);
        });

        test("returns the correct number of ways to climb 5 stairs", () => {
            const result = climbStairs(5);
            expect(result).toBe(8);
        });

        test("returns the correct number of ways to climb 6 stairs", () => {
            const result = climbStairs(6);
            expect(result).toBe(13);
        });

        test("returns the correct number of ways to climb 10 stairs", () => {
            const result = climbStairs(10);
            expect(result).toBe(89);
        });

        test("returns the correct number of ways to climb 20 stairs", () => {
            const result = climbStairs(20);
            expect(result).toBe(10946);
        });
    });
}