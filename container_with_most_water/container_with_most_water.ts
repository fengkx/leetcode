function maxArea(height: number[]): number {
    let len = height.length;
    let maxArea = 0;
    let left = 0, right = len - 1;

    while (left < right) {
        let shortBorder = height[left];
        if (shortBorder > height[right]) {
            shortBorder = height[right]
            right--
        } else {
            left++
        }
        const area = (right - left + 1) * shortBorder
        if (maxArea < area) {
            maxArea = area
        }
    }
    return maxArea

};
