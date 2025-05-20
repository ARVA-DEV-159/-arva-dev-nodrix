import { Matrix, Array } from "../types/matrix";

/**
 * La función `printPrettyMatrix` recibe una matriz como entrada y la imprime en un formato
 * visualmente agradable con columnas alineadas.
 * @param {Matrix} matrix - La función `printPrettyMatrix` recibe una matriz como entrada y la imprime en un
 * formato visualmente agradable donde cada columna está correctamente alineada. La matriz está representada como
 * un arreglo bidimensional donde cada elemento es un arreglo que representa una fila de la matriz.
 */
export function printPrettyMatrix(matrix: Matrix): void {
    const colWidths: Array = [];
    for (let j = 0; j < matrix[0].length; j++) {
        let maxWidth = 0;
        for (let i = 0; i < matrix.length; i++) {
            const cell = matrix[i][j].toString();
            if (cell.length > maxWidth) maxWidth = cell.length;
        }
        colWidths.push(maxWidth);
    }

    for (let i = 0; i < matrix.length; i++) {
        let row = "[ ";
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = matrix[i][j].toString().padStart(colWidths[j], " ");
            row += cell + (j < matrix[i].length - 1 ? "  " : " ");
        }
        row += "]";
        console.log(row);
    }
}
