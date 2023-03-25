function isSubsequence(s: string, t: string): boolean {
    let sCursor = 0;
    const sLen = s.length;
    for (let i = 0, len = t.length; i < len; i++) {
        if (t[i] === s[sCursor]) {
            sCursor++;
        }
        // fast path
        if (sCursor >= sLen) {
            return true;
        }

    }

    return (sCursor >= sLen);
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;

    test('test case 1', () => {
        expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    });

    test('test case 2', () => {
        expect(isSubsequence("axc", "ahbgdc")).toBe(false);
        expect(isSubsequence("ahbgdcc", "ahbgdc")).toBe(false);
    });

    test('test case 3', () => {
        expect(isSubsequence("abc", "abc")).toBe(true);
    });

    test('test case 4', () => {
        expect(isSubsequence("abc", "acb")).toBe(false);
    });

    test('test case 5', () => {
        expect(isSubsequence("", "ahbgdc")).toBe(true);
    });

    test('test case 6', () => {
        expect(isSubsequence("abc", "")).toBe(false);
    });
}
