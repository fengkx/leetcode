type Car = {
    pos: number;
    speed: number;
}
function carFleet(target: number, position: number[], speed: number[]): number {
    const stack = []; // 单调栈 只保留慢的那台车
    const cars: Car[] = [];

    for (let i = 0, len = position.length; i < len; i++) {
        cars.push({ pos: position[i], speed: speed[i] })
    }
    cars.sort((a, b) => a.pos - b.pos);

    // 后面的车得等，所以从后面往前
    for (let i = cars.length - 1; i >= 0; i--) {
        const car = cars[i];
        const time = (target - car.pos) / car.speed;
        if (stack.length <= 0) {
            stack.push(time);
        } else if (stack.at(-1) < time) {
            stack.push(time);
        }
    }
    return stack.length;

};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('carFleet', () => {
        test('sample', () => {
            expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3)
        })
    })
}