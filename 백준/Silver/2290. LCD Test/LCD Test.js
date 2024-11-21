function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let [s, number] = input[0].split(" ");
  
  s = +s;

  const numbers = number.split("");

  const answer = [];
  
  const numStr = [];

  for (let i = 0; i <= 9; i++) {
    let str = [];

    if (i === 0) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j === Math.floor((2 * s + 3)/2)) {
          str.push(" ".repeat(s + 2));
        } else {
          str.push("|" + " ".repeat(s) + "|");
        }
      }
    } else if (i === 1) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" ".repeat(s + 2));
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    } else if (i === 2) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j > 0 && j < Math.floor((2 * s + 3)/2)){
          str.push(" ".repeat(s + 1) + "|");
        } else {
          str.push("|" + " ".repeat(s + 1));
        }
      }
    } else if (i === 3) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    } else if (i === 4) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2) {
          str.push(" ".repeat(s + 2));
        } else if (j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j > 0 && j < Math.floor((2 * s + 3)/2)){
          str.push("|" + " ".repeat(s) + "|");
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    } else if (i === 5) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j > 0 && j < Math.floor((2 * s + 3)/2)){
          str.push("|" + " ".repeat(s + 1));
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    } else if (i === 6) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j > 0 && j < Math.floor((2 * s + 3)/2)){
          str.push("|" + " ".repeat(s + 1));
        } else {
          str.push("|" + " ".repeat(s) + "|");
        }
      }
    } else if (i === 7) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" ".repeat(s+2));
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    } else if (i === 8) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else {
          str.push("|" + " ".repeat(s) + "|");
        }
      }
    } else if (i === 9) {
      for (let j = 0; j < 2 * s + 3; j++) {
        if (j === 0 || j === 2 * s + 2 || j === Math.floor((2 * s + 3)/2)) {
          str.push(" " + "-".repeat(s) + " ");
        } else if (j > 0 && j < Math.floor((2 * s + 3)/2)){
          str.push("|" + " ".repeat(s) + "|");
        } else {
          str.push(" ".repeat(s + 1) + "|");
        }
      }
    }

    numStr.push(str);
  }

  for (let i = 0; i < s * 2 + 3; i++) {
    let str = "";

    for (const num of numbers) {
      str += numStr[+num][i];
      str += " ";
    }

    answer.push(str);
  }

  console.log(answer.join("\n"));
}

solution();