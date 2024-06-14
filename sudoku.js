const fs = require("fs");

function read(num) {
  const read1 = fs.readFileSync("./puzzles.txt", "utf-8").split("\r\n");
  const getSudoku = read1[num - 1].split("");
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(getSudoku.slice(i * 9, (i + 1) * 9));
  }
  const number = board.map((row) =>
    row.map((el) => {
      if (el === "-") {
        return null;
      }
      return Number(el);
    })
  );
  return number;
}


function solve() {
  const sudoku = read(1);
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] === null) {
        sudoku[i][j] = Math.floor(Math.random() * 9) + 1;
      }
    }
  }
  return sudoku;
}

console.table(solve());

function isSolved(board) {
  // Проверка строк и столбцов
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === null || board[j][i] === null) {
        return false;
      }
      if (row.has(board[i][j]) || col.has(board[j][i])) {
        return false;
      }
      row.add(board[i][j]);
      col.add(board[j][i]);
    }
  }

  // Проверка 3x3 квадратов
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const block = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const current = board[row + i][col + j];
          if (current === null || block.has(current)) {
            return false;
          }
          block.add(current);
        }
      }
    }
  }
  return true;
}

function prettyBoard(board) {
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log("-".repeat(21));
    }
    const row = board[i].map(el => (el === null ? '-' : el)).join(" ");
    console.log(row.replace(/(.{5})/g, '$1 '));
  }
}

const sudoku = solve();
prettyBoard(sudoku);

