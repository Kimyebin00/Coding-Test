function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const t = +input[0];

  const answer = [];

  for (let i = 1; i <= t; i++) {
    const num = +input[i];

    let count = 0;
    let index = 1;

    while (true) {
      if (num / (5 ** index) < 1) break;
     
      count += Math.floor(num / (5 ** index));
      index++;
    }

    answer.push(count);
  }

  console.log(answer.join("\n"));
}

solution();