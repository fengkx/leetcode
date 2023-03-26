function longestPalindrome(s: string): number {
    const len = s.length;
    if (len === 0) {
        return 0;
    }
    const map: Record<string, number> = {};
    for (let i = 0; i < len; i++) {
        const ch = s[i];
        map[ch] = (map[ch] ?? 0) + 1;
    }
    const allCounts = Object.values(map);

    let hasOdd = 0;
    const evenLen = allCounts.reduce((acc, cur) => {
        const even = cur % 2 === 0;
        acc += even ? cur : cur - 1;
        if (!even) {
            hasOdd = 1;
        }
        return acc;
    }, 0)

    const result = evenLen + hasOdd;

    return result;
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;
    test('longestPalindrome', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
        expect(longestPalindrome('a')).toBe(1);
        expect(longestPalindrome('bb')).toBe(2);
        expect(longestPalindrome('AB')).toBe(1);
        expect(longestPalindrome('cd')).toBe(1);

    });
    test('longestPalindrome', () => {
        expect(longestPalindrome('')).toBe(0);
        expect(longestPalindrome('abc')).toBe(1);
        expect(longestPalindrome('abba')).toBe(4);
        expect(longestPalindrome("ccc")).toBe(3);
        expect(longestPalindrome('racecar')).toBe(7);
        expect(longestPalindrome('abccba')).toBe(6);
        expect(longestPalindrome('aabbc')).toBe(5);
        expect(longestPalindrome('aabbcc')).toBe(6);
    });

}