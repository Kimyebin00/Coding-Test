function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const answer = [];

  const fibonacci = Array(n+1).fill(BigInt(0));

  fibonacci[0] = BigInt(0);

  if (n >= 1) fibonacci[1] = BigInt(1);

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }

  console.log(fibonacci[n]+'');
}

solution();