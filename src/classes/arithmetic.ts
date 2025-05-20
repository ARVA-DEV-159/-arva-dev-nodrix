import { Matrix, Array } from "../types/matrix";
import { verifyMatrixSize } from "../utils/verify";

/**
 * La función `add` toma dos matrices como entrada, verifica que tengan el mismo tamaño
 * y devuelve una nueva matriz que representa la suma elemento a elemento de ambas.
 * @param {Matrix} element1 - Una matriz que representa un arreglo 2D de números.
 * @param {Matrix} element2 - Otra matriz con las mismas dimensiones que `element1`.
 * @returns La función `add` devuelve una matriz resultante de sumar las dos matrices
 * de entrada elemento por elemento.
 */
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

/**
 * La función `subtract` toma dos matrices como entrada y devuelve una nueva matriz que
 * representa la resta elemento a elemento entre `element1` y `element2`.
 * @param {Matrix} element1 - Una matriz representada como un arreglo 2D de números.
 * @param {Matrix} element2 - Otra matriz con las mismas dimensiones que `element1`.
 * @returns Una nueva matriz con el resultado de la resta de ambas matrices.
 */
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

/**
 * La función `multiply` toma dos matrices como entrada y devuelve su producto si son compatibles
 * para multiplicación, de lo contrario lanza un error.
 * @param {Matrix} element1 - Una matriz representada como arreglo 2D, donde cada subarreglo representa una fila.
 * @param {Matrix} element2 - Una segunda matriz que se desea multiplicar por `element1`.
 * @returns Una nueva matriz resultante de la multiplicación de `element1` por `element2`.
 */
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

/**
 * La función `scale` multiplica cada elemento de una matriz por un valor escalar.
 * @param {Matrix} matrix - Una matriz representada como un arreglo 2D que se desea escalar.
 * @param {number} scalar - Un número que se usará para multiplicar cada elemento de la matriz.
 * @returns Una nueva matriz con cada uno de sus elementos multiplicado por el escalar proporcionado.
 */
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
