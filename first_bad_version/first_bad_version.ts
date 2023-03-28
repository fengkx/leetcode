/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// 1 2 3 4 5
// 1 2
// 2 2

// 1 2 3 4
// 2 4

function solution(isBadVersion: (version: number) => boolean) {

    return function (n: number): number {
        let left = 1;
        let right = n;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe('solution', () => {
        test('example 1', () => {
            const isBadVersion = (version: number) => version >= 4;
            const n = 5;
            const firstBadVersion = solution(isBadVersion)(n);
            expect(firstBadVersion).toBe(4);
        });

        test('example 2', () => {
            const isBadVersion = (version: number) => version >= 2;
            const n = 2;
            const firstBadVersion = solution(isBadVersion)(n);
            expect(firstBadVersion).toBe(2);
        });

        test('example 3', () => {
            const isBadVersion = (version: number) => version >= 2;
            const n = 4;
            const firstBadVersion = solution(isBadVersion)(n);
            expect(firstBadVersion).toBe(2);
        });
    });

}