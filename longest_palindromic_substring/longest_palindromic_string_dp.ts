function longestPalindrome(s: string): string {
    if (s.length <= 1) {
        return s;
    }
    if (s.length === 2) {
        return s[0] === s[1] ? s : s[0];
    }
    const len = s.length;
    let start = 0, end = 0;
    const dp: boolean[][] = Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = false;
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = true;
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j] && ((j - i) <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if ((j - i) > (end - start)) {
                    start = i;
                    end = j
                }
            }
        }
    }
    return s.substring(start, end + 1);
};
