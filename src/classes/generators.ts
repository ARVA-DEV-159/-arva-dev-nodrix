import { Matrix, Array } from "../types/matrix";

export function zeros(width: number, height: number): Matrix {
    const result: Matrix = []
    for (let x = 0; x < width; x++) {
        const row: Array = []
        for (let y = 0; y < height; y++) {
            row.push(0)
        }
        result.push(row)
    }
    return result
}

export function randMatrix(width: number, height: number, decimals: number = 8): Matrix {
    const result: Matrix = []

    for (let x = 0; x < width; x++) {
        const row: Array = []
        for (let y = 0; y < height; y++) {
            row.push(parseFloat(Math.random().toFixed(decimals)))
        }
        result.push(row)
    }

    return result
}

export function identity(size: number): Matrix {
    const result: Matrix = zeros(size, size)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[0].length; j++) {
            result[i][j] = i === j ? 1 : 0
        }
    }
    return result
}