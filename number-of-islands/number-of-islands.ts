function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let cnt = 0;

  function eraseIsland(r: number, c: number) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = "0";

    eraseIsland(r - 1, c);
    eraseIsland(r + 1, c);
    eraseIsland(r, c - 1);
    eraseIsland(r, c + 1);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        cnt++;
        eraseIsland(i, j);
      }
    }
  }
  return cnt;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('pass', () => {
    expect(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ])
    ).toBe(1);
    expect(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ])
    ).toBe(3);
    expect(
      numIslands([
        ["1", "1", "0", "0", "1"],
        ["1", "1", "0", "1", "0"],
        ["0", "0", "1", "0", "0"],
        ["1", "0", "0", "1", "1"],
      ])
    ).toBe(6);

  })
}