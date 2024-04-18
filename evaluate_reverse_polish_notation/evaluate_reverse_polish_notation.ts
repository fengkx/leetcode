function evalRPN(tokens: string[]): number {
    const ops = ['+', '-', '*', '/'];
    const stack: number[] = [];

    const len = tokens.length;
    for (let i = 0; i < len; i++) {
        const token = tokens[i];
        if (ops.includes(token)) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            let r: number;
            console.log(`${num1} ${token} ${num2}`)
            switch (token) {
                case '+':
                    r = num1 + num2;
                    break;
                case '-':
                    r = num1 - num2;
                    break;
                case '*':
                    r = num1 * num2;
                    break;
                case '/':
                    r = (num1 / num2) | 0;
                    break
            }
            stack.push(r);
        } else {
            stack.push(Number.parseInt(token, 10))
        }
    }
    return stack.at(-1)
};

// ["2","1","+","3","*"] 9
// ["4","13","5","/","+"] 6
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] 22

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('evalRPN', () => {
        test('sample', () => {
            // expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9)
            // expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6)
            expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22)
        })
    })
}