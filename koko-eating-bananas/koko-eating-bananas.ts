function minEatingSpeed(piles: number[], h: number): number {
  let right = Math.max(...piles);
  let left = 1;

  while (left <= right) {
    const speed = left + Math.floor((right - left) / 2);
    if (canEatenWithSpeed(piles, h, speed)) {
      right = speed - 1;
    } else {
      left = speed + 1;
    }
  }
  return left;
}

function canEatenWithSpeed(piles: number[], h: number, speed: number) {
  let used = 0;
  for (const p of piles) {
    used += Math.ceil(p / speed);
  }
  return used <= h;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("koko eating bananas", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
  });
}
