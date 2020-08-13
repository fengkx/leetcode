function maxSubArray(nums: number[]): number {
  let result = nums[0],
    maxSoFar = nums[0];
  for (const num of nums) {
    maxSoFar = Math.max(maxSoFar + num, num);
    result = Math.max(result, maxSoFar);
  }
  return result;
}