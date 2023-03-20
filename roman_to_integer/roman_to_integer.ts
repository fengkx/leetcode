const SymoblToValue = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
])

function romanToInt(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = SymoblToValue.get(s[i]);
        const nextVal = i < s.length - 1 ? SymoblToValue.get(s[i + 1]) : 0;

        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
};

if (import.meta.vitest) {
    const { expect, it } = import.meta.vitest;
    it('should pass', () => {
        expect(romanToInt('III')).toBe(3)
        expect(romanToInt('VVV')).toBe(15)
        expect(romanToInt('LVIII')).toBe(58)
    })

}