const fs = require("fs");

function read() {
  const fs = require("fs");
  let file = fs.readFileSync("./puzzles.txt", "utf-8");
  let newFormatForFile = file.split("\n");
  console.log(typeof [1, 2]);
  return newFormatForFile;
}
console.table(read())

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 9; col++) {
      if (board[row][col] === 0 || board[row][col] > 9) {
        return false;
      }
    }
  }
  return true;
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
