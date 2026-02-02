/**
 * 1528. Shuffle String
 * https://leetcode.com/problems/shuffle-string/
 *
 * You are given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position
 * moves to indices[i] in the shuffled string. Return the shuffled string.
 *
 * Constraints:
 * - s.length == indices.length == n
 * - 1 <= n <= 100
 * - s consists of only lowercase English letters
 * - 0 <= indices[i] < n
 * - All values of indices are unique
 */

function _swap<T>(source: T[], i: number, j: number): void {
    const tmp = source[i];
    source[i] = source[j];
    source[j] = tmp;
}

function quickSort<T>(arr: T[], swap: typeof _swap<T>, left?: number, right?: number) {
    const len = arr.length;
    let l = left ?? 0;
    let r = right ?? len - 1;
    const start = l;
    const end = r;
    const mid = l + Math.floor((r - l) / 2);
    const midVal = arr[mid];


    while (l <= r) {
        while (arr[l] < midVal) {
            l++;
        }
        while (arr[r] > midVal) {
            r--;
        }
        if (l <= r) {
            swap(arr, l, r);
            l++;
            r--;
        }
    }
    if (start < r) {
        quickSort(arr, swap, start, r);
    }
    if (l < end) {
        quickSort(arr, swap, l, end);
    }
    return arr;
}

function restoreString(s: string, indices: number[]): string {
    const chars = s.split('');
    console.log(quickSort(indices, (arr, i, j) => {
        _swap(arr, i, j);
        _swap(chars, i, j);
    }, 0, indices.length - 1));

    return chars.join('');
}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("restoreString", () => {
        test("example 1: codeleet -> leetcode", () => {
            expect(
                restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
            ).toBe("leetcode");
        });

        test("example 2: abc unchanged", () => {
            expect(restoreString("abc", [0, 1, 2])).toBe("abc");
        });

        test("boundary: single char", () => {
            expect(restoreString("a", [0])).toBe("a");
        });

        test("aiohn with [3,1,4,2,0] -> nihao", () => {
            expect(restoreString("aiohn", [3, 1, 4, 2, 0])).toBe("nihao");
        });
    });
}
