function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const n = +input[0];

  const answer = [];

  const bombs = [];

  for (let i = 1; i <= n; i++) {
    bombs.push(+input[i]);
  }

  for (let i = 0; i < n - 1; i++) {
    if (bombs[i] < bombs[i+1]) {
      bombs[i] = 0;
    } else {
      answer.push(i+1);
      
      let current = bombs[i];
      for (let j = i+1; j < n; j++) {
        if (bombs[j] < current) {
          current = bombs[j];
          bombs[j] = 0;

          if (j === n - 1) i = j - 1;
        } else {
          i = j - 1;
          break;
        }
      }
    }
  }

  if (bombs[n-1] !== 0) answer.push(n);

  console.log(answer.join("\n"));
}

solution();