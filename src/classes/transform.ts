import { Matrix, Array } from "../types/matrix";

/**
 * La función `transponse` recibe una matriz como entrada y retorna su matriz transpuesta.
 * @param {Matrix} matrix - El parámetro `matrix` en la función `transponse` es un arreglo bidimensional
 * de números, donde cada subarreglo representa una fila de la matriz. La función transpone esta matriz,
 * es decir, intercambia filas por columnas para crear una nueva matriz transpuesta.
 * @returns La función `transponse` retorna la matriz transpuesta, donde las filas de la matriz de entrada
 * se convierten en columnas de la matriz resultante, y viceversa.
 */
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

/**
 * La función `mirror` recibe una matriz como entrada y retorna una nueva matriz con cada fila invertida.
 * @param {Matrix} matrix - El parámetro `matrix` en la función `mirror` es un arreglo bidimensional,
 * donde cada elemento representa una fila de la matriz. Cada fila es un arreglo de valores. La función
 * invierte el orden de los elementos en cada fila y retorna una nueva matriz con las filas invertidas.
 * @returns La función `mirror` retorna una nueva matriz donde cada fila de la matriz de entrada está invertida.
 */
export function mirror(matrix: Matrix): Matrix {
    const result: Matrix = [];

    for (let x = 0; x < matrix.length; x++) {
        const row: Array = matrix[x];
        row.reverse();
        result.push(row);
    }

    return result;
}

/**
 * La función `rotated` recibe una matriz como entrada y retorna una nueva matriz rotada 90 grados en sentido horario.
 * @param {Matrix} matrix - Un arreglo bidimensional que representa la matriz que deseas rotar.
 * @returns La función `rotated` retorna una versión rotada de la matriz de entrada.
 */
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
