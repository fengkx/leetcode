function groupAnagrams(strs: string[]): string[][] {
    const cache = {};
    for (let i = 0, len = strs.length; i < len; i++) {
        const str = strs[i];
        const normalized = str.split('').sort().join('');
        if (!cache[normalized]) {
            cache[normalized] = []
        };
        cache[normalized].push(str)
    }
    return Object.values(cache);
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;
    test('should pass', () => {
        expect(groupAnagrams([''])).to.have.deep.members([['']]);
        expect(groupAnagrams(
            ["eat", "tea", "tan", "ate", "nat", "bat"]
        )).to.have.deep.members(
            [["eat", "tea", "ate"],
            ["tan", "nat"], ["bat"]]
        );
        expect(groupAnagrams(
            ["a"]

        )).to.have.deep.members(
            [["a"]]
        )
        // Additional test cases
        expect(groupAnagrams(["cab", "pug", "rat", "abc", "tar", "gup"])).to.have.deep.members(
            [["cab", "abc"], ["pug", "gup"], ["rat", "tar"]]
        );
        expect(groupAnagrams(["hello", "olleh", "world", "dlrow"])).to.have.deep.members(
            [["hello", "olleh"], ["world", "dlrow"]]
        );
        expect(groupAnagrams(["listen", "silent", "inlets"])).to.have.deep.members(
            [["listen", "silent", "inlets"]]
        );
        expect(groupAnagrams(["ab", "ba", "cd", "dc", "ef", "fe"])).to.have.deep.members(
            [["ab", "ba"], ["cd", "dc"], ["ef", "fe"]]
        );
    })
}