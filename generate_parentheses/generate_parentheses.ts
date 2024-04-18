// stack
function generateParenthesis1(n: number): string[] {
    const answer = [];
    const stack = [];

    function gen(left: number, right: number) {
        if (left === right && left === n) {
            answer.push(stack.join(''))
            return
        }

        if (left < n) {
            stack.push('(');
            gen(left + 1, right);
            stack.pop()
        }

        if (right < left) {
            stack.push(')');
            gen(left, right + 1)
            stack.pop()
        }
    }
    gen(0, 0)
    return answer;
};


// Recursive
function generateParenthesis(n: number): string[] {
    function gen(ans: string[], cur: string, leftCnt: number, rightCnt: number, n: number) {
        console.log(cur, leftCnt, rightCnt, n);
        if (cur.length === n * 2) {
            ans.push(cur)
            return
        }
        if (leftCnt < n) {
            gen(ans, cur + '(', leftCnt + 1, rightCnt, n)
        }
        if (rightCnt < leftCnt) {
            gen(ans, cur + ')', leftCnt, rightCnt + 1, n);
        }
    }
    const answer = [];
    gen(answer, '', 0, 0, n);
    return answer;
};

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;
    describe('generateParenthesis', () => {
        test('sample', () => {

            expect(generateParenthesis1(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
            // expect(generateParenthesis(1)).toEqual(["()"])
        })
    })
}
