/**
 * Minimum Cost to Convert String I
 * https://leetcode.com/problems/minimum-cost-to-convert-string-i/
 *
 * You are given two 0-indexed strings source and target, both of length n and
 * consisting of lowercase English letters. You are also given two 0-indexed
 * character arrays original and changed, and an integer array cost, where
 * cost[i] represents the cost of changing the character original[i] to
 * changed[i].
 *
 * In one operation, you can pick a character x and change it to y at cost z
 * if there exists any index j such that cost[j] == z, original[j] == x, and
 * changed[j] == y.
 *
 * Return the minimum cost to convert source to target using any number of
 * operations. If it is impossible, return -1.
 *
 * Constraints:
 * - 1 <= source.length == target.length <= 10^5
 * - source, target consist of lowercase English letters
 * - 1 <= cost.length == original.length == changed.length <= 2000
 * - original[i], changed[i] are lowercase English letters
 * - 1 <= cost[i] <= 10^6
 * - original[i] != changed[i]
 */
function minimumCost(
    source: string,
    target: string,
    original: string[],
    changed: string[],
    cost: number[]
): number {
    const costMap: Record<string, Record<string, number>> = {};
    const chars = new Set<string>();
    for (const ch of source) chars.add(ch);
    for (const ch of target) chars.add(ch);
    for (let i = 0; i < original.length; i++) {
        const from = original[i];
        const to = changed[i];
        chars.add(from);
        chars.add(to)
        if (!costMap[from]) {
            costMap[from] = {};
        }
        costMap[from][to] = Math.min(cost[i], costMap[from][to] ?? Number.MAX_VALUE);

    }

    for (const ch of chars) {
        for (const ch2 of chars) {
            for (const ch3 of chars) {
                if (costMap?.[ch2]?.[ch] != undefined && costMap?.[ch]?.[ch3] != undefined) {
                    if (costMap?.[ch2]?.[ch3] != undefined) {
                        costMap[ch2][ch3] = Math.min(costMap[ch2][ch3], costMap[ch2][ch] + costMap[ch][ch3])
                    } else {
                        costMap[ch2][ch3] = costMap?.[ch2]?.[ch] + costMap?.[ch]?.[ch3]
                    }
                }
            }
        }
    }

    let result = 0;
    for (let i = 0; i < source.length; i++) {
        const from = source[i];
        const to = target[i];
        if (from === to) {
            continue
        }
        if (costMap?.[from]?.[to] != undefined) {
            result += costMap[from][to]
        } else {
            return -1
        }
    }
    return result;

}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("minimumCost", () => {
        test("example 1: convert abcd to acbe", () => {
            const source = "abcd";
            const target = "acbe";
            const original = ["a", "b", "c", "c", "e", "d"];
            const changed = ["b", "c", "b", "e", "b", "e"];
            const cost = [2, 5, 5, 1, 2, 20];
            expect(minimumCost(source, target, original, changed, cost)).toBe(
                28
            );
        });

        test("example 2: convert aaaa to bbbb via a->c->b", () => {
            const source = "aaaa";
            const target = "bbbb";
            const original = ["a", "c"];
            const changed = ["c", "b"];
            const cost = [1, 2];
            expect(minimumCost(source, target, original, changed, cost)).toBe(
                12
            );
        });

        test("example 3: impossible to convert d to e", () => {
            const source = "abcd";
            const target = "abce";
            const original = ["a"];
            const changed = ["e"];
            const cost = [10000];
            expect(minimumCost(source, target, original, changed, cost)).toBe(
                -1
            );
        });

        test("source equals target returns 0", () => {
            const source = "abc";
            const target = "abc";
            const original = ["a", "b"];
            const changed = ["b", "c"];
            const cost = [1, 2];
            expect(minimumCost(source, target, original, changed, cost)).toBe(
                0
            );
        });
    });
}
