function read() {
  const fs = require("fs");
  let file = fs.readFileSync("./puzzles.txt", "utf-8");
  let newFormatForFile = file.split("\n");
  return newFormatForFile[process.argv[2]];
}

function solve() {
  // let correctSudoku = [new Array(9).forEach((item)=> )];
  // console.log(correctSudoku);
}


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


console.log(solve())

