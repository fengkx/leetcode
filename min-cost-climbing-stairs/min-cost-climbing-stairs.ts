function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    if (n < 2) {
        return cost[n - 1];
    }
    const dp = new Array(n + 1).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (i === n ? 0 : cost[i]);
    }
    return dp[n];
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('minCostClimbingStairs', () => {
        test('example case 1', () => {
            expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
        });

        test('example case 2', () => {
            expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });

        test('single step', () => {
            expect(minCostClimbingStairs([1])).toBe(1);
        });

        test('two steps', () => {
            expect(minCostClimbingStairs([1, 2])).toBe(1);
        });

        test('three steps', () => {
            expect(minCostClimbingStairs([1, 2, 3])).toBe(2);
        });
    });

}