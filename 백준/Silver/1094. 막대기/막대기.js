function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let n = +input[0];

  const numbers = [64, 32, 16, 8, 4, 2, 1];

  let answer = 0;

  for (const num of numbers) {
    if (num <= n) {
      answer++;
      n -= num;
    }
  }

  console.log(answer);
}

solution();