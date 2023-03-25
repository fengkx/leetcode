function isIsomorphic(s: string, t: string): boolean {
    const sLen = s.length;
    const tLen = t.length;
    if (sLen !== tLen) return false;
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();
    for (let i = 0; i < sLen; i++) {
        const sc = s[i];
        const tc = t[i];
        const sSeen = sMap.get(sc);
        const tSeen = tMap.get(tc);
        if (sSeen !== tSeen) return false;
        sMap.set(sc, i);
        tMap.set(tc, i);
    }
    return true
};

if (import.meta.vitest) {
    const { expect, test } = import.meta.vitest;
    test('example test case', () => {
        expect(isIsomorphic('egg', 'add')).toBe(true);
        expect(isIsomorphic('foo', 'bar')).toBe(false);
        expect(isIsomorphic('paper', 'title')).toBe(true);
    });
    test('more test cases', () => {
        expect(isIsomorphic('ab', 'aa')).toBe(false);
        expect(isIsomorphic('ab', 'cd')).toBe(true);
        expect(isIsomorphic('abc', 'd')).toBe(false);
        expect(isIsomorphic('abc', '')).toBe(false);
        expect(isIsomorphic('', 'def')).toBe(false);
        expect(isIsomorphic('', '')).toBe(true);
    });

}