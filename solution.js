// Situar 8 reinas en un tablero sin que se amenacen entre ellas.
// Las reinas se amenazan si están en la misma columna, fila o diagonal.
// 92 posibles soluciones en un tablero de 8x8.

// Same Row: R1 = R2
// Same Column: C1 = C2
// Same Diagonal: |R1 - R2| = |C1 - C2|
// Diagonal example: |3-7| = |4-8| -> 4=4 -> true

let arrQueen = {
  0: ['♛', 0, 0, 0, 0, 0, 0, 0],
  1: [0, 0, 0, 0, 0, 0, '♛', 0],
  2: [0, 0, 0, 0, '♛', 0, 0, 0],
  3: [0, 0, 0, 0, 0, 0, 0, '♛'],
  4: [0, '♛', 0, 0, 0, 0, 0, 0],
  5: [0, 0, 0, '♛', 0, 0, 0, 0],
  6: [0, 0, 0, 0, 0, '♛', 0, 0],
  7: [0, 0, '♛', 0, 0, 0, 0, 0]
};

// ROWS
// Test if a specific row on this board contains a conflict
function hasRowConflictAt (rowIndex) {
  let currentRow = this.get(rowIndex);
  let currentTotal = 0;

  for (let i = 0; i < currentRow.length; i++) {
    if (currentRow[i] === 1) {
      currentTotal++;
    }
  }

  if (currentTotal < 1) {
    return true;
  } else {
    return false;
  }
};

// COLUMNS
// Test if any column on this board contains conflicts
function hasAnyColumnConflicts () {

  for (let i = 0; i < this.get('n'); i++) {
    if(this.hasColumnConflictAt(i)) {
      return true;
    };
  }
  return false;
}

function hasColumnConflictAt (columnIndex) {
  let currentColumn = this.get(columnIndex);
  let currentTotal = 0;

  for (let i = 0; i < currentColumn.length; i++) {
    if (currentColumn[i] === 1) {
      currentTotal++;
    }
  }

  if (currentTotal < 1) {
    return true;
  } else {
    return false;
  }
};

// Test if any column on this board contains conflicts
function hasAnyColumnConflicts () {

  for (let i = 0; i < this.get('n'); i++) {
    if(this.hasColumnConflictAt(i)) {
      return true;
    };
  }
  return false;
}

window.countNQueensSolutions = function(n) {

  let solutionCount = 0;
  let board = new board({n:n});

  if (n === 2 || n === 3) {
    return solutionCount;

    function solver (row) {
      if(row === n) {
        solutionCount++;
        return;
      }

      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);

        if(!board.hasAnyQueensConglicts()) {
          solver(row, i);
        }
        board.togglePiece(row, i);
      }
    };

    solver(0);

    this.console.log(`Number of solutions for ${n} queens: ${solutionCount}`);
    return solutionCount;
  }
}