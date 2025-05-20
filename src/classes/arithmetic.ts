import { Matrix, Array } from "../types/matrix";
import { verifyMatrixSize } from "../utils/verify";

export function add(element1: Matrix, element2: Matrix): Matrix {
    if (!verifyMatrixSize(element1, element2)) {
        throw new Error("Las matrices no tienen el mismo tamaño.");
    }

    const result: Matrix = [];

    for (let i = 0; i < element1.length; i++) {
        const row: Array = [];
        for (let j = 0; j < element1[0].length; j++) {
            row.push(element1[i][j] + element2[i][j]);
        }
        result.push(row);
    }

    return result;
}

export function subtract(element1: Matrix, element2: Matrix): Matrix {
    if (!verifyMatrixSize(element1, element2)) {
        throw new Error("Las matrices no tienen el mismo tamaño.");
    }

    const result: Matrix = [];

    for (let i = 0; i < element1.length; i++) {
        const row: Array = [];
        for (let j = 0; j < element1[0].length; j++) {
            row.push(element1[i][j] - element2[i][j]);
        }
        result.push(row);
    }

    return result;
}

export function multiply(element1: Matrix, element2: Matrix): Matrix {
    if (element1[0].length !== element2.length) {
        throw new Error("No se pueden multiplicar las matrices: el número de columnas de la primera debe coincidir con el número de filas de la segunda.");
    }

    const result: Matrix = [];

    for (let i = 0; i < element1.length; i++) {
        const row: Array = [];
        for (let j = 0; j < element2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < element1[0].length; k++) {
                sum += element1[i][k] * element2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}

export function scale(matrix: Matrix, scalar: number): Matrix {
    const result: Matrix = [];

    for (let i = 0; i < matrix.length; i++) {
        const row: Array = [];
        for (let j = 0; j < matrix[0].length; j++) {
            row.push(matrix[i][j] * scalar);
        }
        result.push(row);
    }

    return result;
}
