import * as expect from 'expect'
function decodeString(s: string): string {
    const isNumber = (c: string): boolean => /^\d+$/.test(c)
    const isAlpha = (c: string): boolean => /^[A-Za-z]+$/.test(c)
    const stack: string[] = [];
    for (const ch of s) {
        if (ch !== ']') {
            stack.push(ch);
            continue;
        }
        let str = '';
        let cur = stack.pop();
        while (cur !== '[') {
            str = cur + str;
            cur = stack.pop()
        }
        let num = '';
        cur = stack.pop()
        while (isNumber(cur!)) {
            num = cur + num
            cur = stack.pop()
        }
        stack.push(cur!)
        stack.push(str.repeat(parseInt(num, 10)))
    }
    return stack.join('');
};

expect(decodeString("3[a]2[bc]")).toEqual("aaabcbc")
expect(decodeString("3[a2[c]]")).toEqual("accaccacc")
expect(decodeString("2[abc]3[cd]ef")).toEqual("abcabccdcdcdef")
expect(decodeString("abc3[cd]xyz")).toEqual("abccdcdcdxyz")
