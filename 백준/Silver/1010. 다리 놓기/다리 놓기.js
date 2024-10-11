function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const t = +input[0];

  const answer = [];


  for (let i = 1; i <= t; i++) {
    const [n, m] = input[i].split(" ").map(Number);

    if (n === m) {
      answer.push(1);
      continue;
    }

    if (n === 1) {
      answer.push(m);
      continue;
    }

    let count = BigInt(1);
    let index = BigInt(m);

    for (let j = 0; j < n; j++) {
      count *= index--;
    }

    for (let j = BigInt(n); j > 0; j--) {
      count /= j;
    }

    answer.push(count);
  }

  console.log(answer.join('\n'));
}

solution();