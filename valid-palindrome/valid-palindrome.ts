function isPalindrome(s: string): boolean {
    const ss = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const len = ss.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        if (ss[left] !== ss[right]) {
            return false
        }
        left++;
        right--
    }
    return true
};

if (import.meta.vitest) {
    const { expect, describe, test } = import.meta.vitest;
    describe('isPalindrome', () => {
        test('returns true for empty string', () => {
            expect(isPalindrome('')).toBe(true);
        });

        test('returns true for single character string', () => {
            expect(isPalindrome('a')).toBe(true);
        });

        test('returns true for palindrome string', () => {
            expect(isPalindrome('racecar')).toBe(true);
        });

        test('returns false for non-palindrome string', () => {
            expect(isPalindrome('hello')).toBe(false);
        });

        test('ignores non-alphanumeric characters', () => {
            expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
        });
        test('returns false for non-palindrome string with alphanumeric characters', () => {
            expect(isPalindrome('0P')).toBe(false);
        });
    });

}