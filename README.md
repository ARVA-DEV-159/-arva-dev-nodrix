# Guia basica para usar NODRIX

### Nodrix es una librería basica para usar matrices en NODE js, es una librería sencilla originalmente de uso personal, este es la versión completa de "Matrix-Manager" siendo esta la versión definitiva.

Instalación
```bash
npm i @arva-dev/nodrix
```

## Funciones básicas
```javascript
const { printPrettyMatrix, zeros } = require("@arva-dev/nodrix");
const matrix = zeros(10, 10);
printPrettyMatrix(matrix);
```
```bash
[ 0  0  0  0  0 ]
[ 0  0  0  0  0 ]
[ 0  0  0  0  0 ]
[ 0  0  0  0  0 ]
[ 0  0  0  0  0 ]
```
```javascript
const { printPrettyMatrix, randMatrix } = require("@arva-dev/nodrix");
const matrix = randMatrix(5, 5)
printPrettyMatrix(matrix)
```
```bash
[ 0.57082731  0.60467866  0.05289018  0.64459553  0.54171123 ]
[ 0.53345116  0.73670432  0.66579302   0.7723243  0.74376283 ]
[ 0.14699142  0.24089487  0.37309805  0.79636951  0.93648892 ]
[ 0.62907619  0.19152635  0.12452728  0.97441671   0.8947382 ]
[ 0.43823164   0.6043706  0.48615594  0.64728645  0.04095302 ]
```

