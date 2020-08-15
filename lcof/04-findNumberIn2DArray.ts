function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    const rowNum = matrix.length;
    if (rowNum === 0) return false;
    const colNum = matrix[0].length;

    let row = 0;
    while (row < rowNum && matrix[row][colNum - 1] < target) row++;
    while (row < rowNum) {
        if (matrix[row].indexOf(target) >= 0) {
            return true
        }
        row++;
    }
    return false;
}
