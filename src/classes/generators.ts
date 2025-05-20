import { Matrix, Array } from "../types/matrix"

/**
 * La función "zeros" crea una matriz de ceros con el ancho y alto especificados.
 * @param {number} width - El parámetro `width` especifica el número de columnas en la matriz.
 * @param {number} height - El parámetro `height` representa el número de filas en la matriz que será creada. Determina el tamaño o dimensión vertical de la matriz.
 * @returns La función `zeros` retorna una matriz (arreglo 2D) llena de ceros, con el ancho y alto especificados.
 */
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

/**
 * La función `randMatrix` genera una matriz aleatoria de los tamaños especificados, con valores decimales aleatorios.
 * @param {number} width - El parámetro `width` especifica el número de columnas en la matriz.
 * @param {number} height - El parámetro `height` se refiere al número de filas en la matriz que se generará. Determina cuántos arreglos de números aleatorios se crearán y agregarán a la matriz.
 * @param {number} [decimals=8] - El parámetro `decimals` especifica el número de cifras decimales a las que se redondearán los números aleatorios generados para los elementos de la matriz. Por defecto es 8 si no se especifica al llamar a la función. Este parámetro permite controlar la precisión de los valores generados.
 * @returns La función `randMatrix` retorna una matriz generada aleatoriamente con el ancho, alto y número de decimales especificados.
 */
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

/**
 * La función `identity` crea una matriz identidad de un tamaño especificado.
 * @param {number} size - El parámetro `size` representa las dimensiones de la matriz identidad cuadrada que se va a crear. Especifica el número de filas y columnas de la matriz.
 * @returns La función `identity` retorna una matriz cuadrada de tamaño `size` donde los elementos de la diagonal son 1 y los demás son 0.
 */
export function identity(size: number): Matrix {
    const result: Matrix = zeros(size, size)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[0].length; j++) {
            result[i][j] = i === j ? 1 : 0
        }
    }
    return result
}
