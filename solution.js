// REPRESENTA TABLERO Y Nº DE REINAS: withQueen(Queen): Board
// AMENAZAS: threats(): boolean
// SI SE PUEDE COLOCAR REINA: empty(Position): boolean
// POSICIÓN DE LA REINA: position(): Position
// INFO TABLERO: board(): Board
// POSICIÓN EN EL TABLERO (1-8): row(): Number
// POSICIÓN EN EL TABLERO (1-8): column(): Number
// AMENAZA EN POSICIÓN: threats(Position): boolean
// SOLUCIÓN: solve(): void
// SOLUCIÓN: result(): Solution
// success(): boolean
// DEVUELVE LISTA O MATRIZ DE INSTANCIAS DE LA REINA, SI SU TAMAÑO NO ES 8 SUCCESS = TRUE: solutions(): List<Queen>

// LONGITUD DE TABLERO ====================================
let arrQueen = [
  0, '☠', 0, 0, 0, 0, '♛', 0,
  0, 0, '♛', 0, 0, 0, 0, '☠',
  0, 0, 0, 0, '☠', 0, 0, '♛',
  '♛', 0, 0, '♛', 0, 0, 0, 0,
  0, 0, '☠', 0, 0, 0, '☠', 0,
  '☠', 0, '♛', 0, 0, 0, 0, '☠',
  0, 0, 0, 0, '♛', 0, 0, 0,
  0, '☠', 0, 0, 0, 0, '♛', 0,
];

console.log(arrQueen);
console.log(`La longitud del tablero es: ${arrQueen.length} casillas`);

// NÚMERO DE REINAS============================================
function withQueen(arr, item) {
  let i = arr.indexOf( item );
    return arr.filter(function(e) {
      return e == '♛';
    });
  }
  
let countQueens = withQueen(arrQueen, 0);
console.log(`El número de reinas es: ${countQueens}`);

// POSICIÓN DE LAS REINAS=====================================
for(let i = 0; i <= arrQueen.length; i++) {
  console.log(`La posición de la reina es: ${arrQueen.indexOf('♛', i + 1)}`);
}

// NÚMERO DE AMENAZAS==========================================
function arrThreats(arr, item) {
  let i = arr.indexOf( item );
    return arr.filter(function(e) {
      return e == '☠';
    });
  }
  
let countThreats = arrThreats(arrQueen, 0);
console.log(`El número de amenazas es: ${countThreats}`);

// POSICIÓN DE LAS AMENAZAS=====================================
for(let i = 0; i <= arrQueen.length; i++) {
  console.log(`La posición de la amenaza es: ${arrQueen.indexOf('☠', i + 1)}`);
}

// CASILLA VACÍA================================================
function empty() {
  for(let i = 0; i <= arrQueen.length; i++) {
    if(i === undefined) {
      let x = new Boolean(true);
      return x;
    } 
  }
}

console.log(empty(arrQueen[1]));
console.log(arrQueen[1]);

// INSTANCIAS DE LA REINA
