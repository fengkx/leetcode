function helper(image: number[][], sr: number, sc: number, color: number, rowLen: number, colLen: number, originalVal: number) {
    image[sr][sc] = color
    if (sr > 0) {
        const curVal = image[sr - 1][sc];
        if (curVal === originalVal && curVal !== color) {
            helper(image, sr - 1, sc, color, rowLen, colLen, originalVal)
        }
    }
    if (sr < rowLen - 1) {
        const curVal = image[sr + 1][sc];
        if (curVal === originalVal && curVal !== color) {
            helper(image, sr + 1, sc, color, rowLen, colLen, originalVal)
        }
    }
    if (sc > 0) {
        const curVal = image[sr][sc - 1];
        if (curVal === originalVal && curVal !== color) {
            helper(image, sr, sc - 1, color, rowLen, colLen, originalVal)
        }
    }
    if (sr < colLen - 1) {
        const curVal = image[sr][sc + 1];
        if (curVal === originalVal && curVal !== color) {
            helper(image, sr, sc + 1, color, rowLen, colLen, originalVal)
        }
    }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const rowLen = image.length;
    if (rowLen <= 0) return image;
    const colLen = image[0].length;
    if (colLen <= 0) return image;
    if (sr < 0 || sr >= rowLen) return image;
    if (sc < 0 || sc >= colLen) return image;
    const originalVal = image[sr][sc];
    helper(image, sr, sc, color, rowLen, colLen, originalVal);
    return image;
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;
    test('Flood fill on a 3x3 grid with valid input', () => {
        const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const sr = 1;
        const sc = 1;
        const color = 2;
        const expectedOutput = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];
        expect(floodFill(image, sr, sc, color)).toEqual(expectedOutput);
    });

    test('Flood fill on a 3x3 grid with out of bounds input', () => {
        const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const sr = -1;
        const sc = 4;
        const color = 2;
        const expectedOutput = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        expect(floodFill(image, sr, sc, color)).toEqual(expectedOutput);
    });

    test('Flood fill on a 0x0 grid', () => {
        const image = [[]];
        const sr = 0;
        const sc = 0;
        const color = 2;
        const expectedOutput = [[]];
        expect(floodFill(image, sr, sc, color)).toEqual(expectedOutput);
    });

    test('Flood fill on a 1x1 grid', () => {
        const image = [[1]];
        const sr = 0;
        const sc = 0;
        const color = 2;
        const expectedOutput = [[2]];
        expect(floodFill(image, sr, sc, color)).toEqual(expectedOutput);
    });

    test('Flood fill on a 3x3 grid with same color as the target color', () => {
        const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const sr = 0;
        const sc = 0;
        const color = 1;
        const expectedOutput = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        expect(floodFill(image, sr, sc, color)).toEqual(expectedOutput);
    });

}