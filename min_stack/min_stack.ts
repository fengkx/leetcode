class MinStack {
    private readonly stack = [];
    private readonly mins = [];

    constructor() { }

    push(val: number): void {
        this.stack.push(val);
        this.mins.push(Math.min(this.mins.at(-1) ?? Infinity, val))
    }

    pop(): void {
        this.stack.pop();
        this.mins.pop();

    }

    top(): number {
        return this.stack.at(-1);
    }

    getMin(): number {
        return this.mins.at(-1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

function tableTest(input: string[], params: Array<number[]>) {
    let stack;
    const outputs = [];

    for (let i = 0; i < input.length; i++) {
        const fn = input[i];
        if (fn === 'MinStack') {
            stack = new MinStack();
            outputs.push(null);
        } else {
            outputs.push(stack[fn](...params[i]) ?? null)
        }
    }

    return outputs

}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe('min stack', () => {
        test('sample', () => {
            expect(tableTest(
                ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
                [[], [-2], [0], [-3], [], [], [], []]
            )).toEqual([null, null, null, null, -3, null, 0, -2])
        })
    })




}