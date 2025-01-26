function searchMatrix(matrix: number[][], target: number): boolean {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  const size = rowLen * colLen;

  let left = 0;
  let right = size - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const current = matrix[Math.floor(mid / colLen)][Math.floor(mid % colLen)];

    if (current === target) return true;
    if (current < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("search a 2d matrix", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3
      )
    ).toBe(true);

    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13
      )
    ).toBe(false);
  });
}
