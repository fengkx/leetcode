function countWords(words1: string[], words2: string[]): number {
    const words1Map = new Map<string, number>();
    const words2Map = new Map<string, number>();
    for (const word of words1) {
        words1Map.set(word, (words1Map.get(word) ?? 0) + 1);
    }
    for (const word of words2) {
        words2Map.set(word, (words2Map.get(word) ?? 0) + 1);
    }
    let result = 0;
    for (const [word, count] of words1Map) {
        if (count === 1 && words2Map.get(word) === 1) {
            result++;
        }
    }
    return result;

}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe('countWords', () => {
        test('example 1: returns 2 for common words appearing once', () => {
            const words1 = ["leetcode", "is", "amazing", "as", "is"];
            const words2 = ["amazing", "leetcode", "is"];
            expect(countWords(words1, words2)).toBe(2);
        });

        test('example 2: returns 0 when no common strings', () => {
            const words1 = ["b", "bb", "bbb"];
            const words2 = ["a", "aa", "aaa"];
            expect(countWords(words1, words2)).toBe(0);
        });

        test('example 3: returns 1 when one word appears once in each', () => {
            const words1 = ["a", "ab"];
            const words2 = ["a", "a", "a", "ab"];
            expect(countWords(words1, words2)).toBe(1);
        });
    });
}
