function countAndSay(n: number): string {
    if (n <= 1) return '1'
    return countAndSayString(countAndSay(n - 1));

};

function countAndSayString(n: string): string {
    let result = '';
    const len = n.length;
    for (let i = 0; i < len;) {
        const cur = n[i];
        let cnt = 0;
        while (i < len && n[i] === cur) {
            i++
            cnt++
        }
        result += `${cnt}${cur}`
    }

    return result;
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('should have valid countAndSayString', () => {
        expect(countAndSayString('11223')).toEqual('212213');
        expect(countAndSayString('3322251')).toEqual('23321511')
    })

    it('should pass', () => {
        expect(countAndSay(2)).toEqual('11')
        expect(countAndSayString('1')).toEqual('11');
        expect(countAndSayString('11')).toEqual('21');
        expect(countAndSay(3)).toEqual('21')
        expect(countAndSay(4)).toEqual('1211')
        expect(countAndSay(5)).toEqual('111221')

    })
}