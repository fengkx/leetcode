function findRepeatNumber(nums: number[]): number {
    const set = new Set<number>();
    for(let i=0,len=nums.length;i<len;i++) {
        if(set.has(nums[i])) {
            return nums[i]
        }
        set.add(nums[i])
    }
    return -1;
};
