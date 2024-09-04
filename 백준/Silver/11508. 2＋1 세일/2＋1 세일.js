function solution() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

  let answer = 0;

  const n = +input[0];

  const prices = [];

  for (let i = 1; i <= n; i++) {
    prices.push(+input[i]);
  }

  prices.sort((a,b) => b-a);

  for (let i = 0; i < n; i++) {
    if (i % 3 !== 2) answer += prices[i];
  }

  console.log(answer);
}

solution();
