import { Matrix } from "../types/matrix"
export const verifyMatrixSize = (element1: Matrix, element2: Matrix): boolean => {
    return (
        element1.length === element2.length &&
        element1.every((row, i) => row.length === element2[i].length)
    );
}
