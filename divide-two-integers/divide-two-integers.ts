const MAX_32BIT_INT = 2 ** 31 - 1;
const MIN_32BIT_INT = -(2 ** 31);
function divide(dividend: number, divisor: number): number {
    let quotient = Math.trunc(dividend / divisor);

    if (quotient > MAX_32BIT_INT) {
        return MAX_32BIT_INT;
    } else if (quotient < MIN_32BIT_INT) {
        return MIN_32BIT_INT;
    } else {
        return quotient;
    }
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('should pass', () => {
        expect(divide(10, 3)).toBe(3)
        expect(divide(7, -3)).toBe(-2)
        expect(divide(-(2 ** 31), -1)).toBe(2 ** 31 - 1)
    })
}