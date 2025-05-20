import { Matrix, Array } from "../types/matrix";

export function transponse(matrix: Matrix): Matrix {
    if (matrix.length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposed: Matrix = [];

    for (let j = 0; j < cols; j++) {
        const newRow: Array = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

export function mirror(matrix: Matrix): Matrix {
    const result: Matrix = []

    for (let x = 0; x < matrix.length; x++) {
        const row: Array = matrix[x]
        row.reverse()
        result.push(row)
    }

    return result
}

export function rotated(matrix: Matrix): Matrix {
    const n = matrix.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
}