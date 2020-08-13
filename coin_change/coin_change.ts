/**
 * @expect [[1, 2, 5], 11] 3
 * @param coins
 * @param amount
 */
function coinChange(coins: number[], amount: number): number {
    const cache: number[] = [];

    function change(total: number): number {
        if (total === 0) return 0;
        if (total < 0) return -1;
        if (cache[total] !== undefined) {
            return cache[total]
        }
        let min = Infinity;
        for (const coin of coins) {
            const res = change(total - coin)
            if (min > res && res >= 0) {
                min = res
            }
        }
        if (min === Infinity) {
            cache[total] = -1;
            return cache[total]
        }
        cache[total] = min + 1;
        return min + 1;
    }

    return change(amount)
};
