function permute(nums: number[]): number[][] {
    const result = [];
    const len = nums.length;
    if (len <= 1) {
        return [nums]
    }
    if (nums.length === 2) {
        return [nums, [nums[1], nums[0]]]
    }

    for (let i = 0; i < len; i++) {
        permute(nums.filter((_, idx) => idx !== i)).forEach(p => {
            result.push([nums[i], ...p])
        })
    }
    return result;
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;
    test('should pass', () => {
        expect(permute([])).to.have.deep.members([[]]);
        expect(permute([1])).to.have.deep.members([[1]]);
        expect(permute([1, 2])).to.have.deep.members([[1, 2], [2, 1]]);
        expect(permute([2, 3])).to.have.deep.members([[2, 3], [3, 2]]);

        expect(permute([1, 2, 3])).to.have.deep.members(
            [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
        )
        expect(permute([-1, 0, 1, 2])).to.have.deep.members([[-1, 0, 1, 2], [-1, 0, 2, 1], [-1, 1, 0, 2], [-1, 1, 2, 0], [-1, 2, 0, 1], [-1, 2, 1, 0], [0, -1, 1, 2], [0, -1, 2, 1], [0, 1, -1, 2], [0, 1, 2, -1], [0, 2, -1, 1], [0, 2, 1, -1], [1, -1, 0, 2], [1, -1, 2, 0], [1, 0, -1, 2], [1, 0, 2, -1], [1, 2, -1, 0], [1, 2, 0, -1], [2, -1, 0, 1], [2, -1, 1, 0], [2, 0, -1, 1], [2, 0, 1, -1], [2, 1, -1, 0], [2, 1, 0, -1]]
        )
    })
}