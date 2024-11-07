function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m, v] = input[0].split(" ").map(Number);

  const nodes = input[1].split(" ").map(Number);

  const answer = [];

  for (let i = 2; i < 2 + m; i++) {
    const count = +input[i];

    if (count < n) answer.push(nodes[count]);
    else answer.push(nodes[(count-n) % (n - v + 1) -1 + v]);
  } 

  console.log(answer.join("\n"));
}

solution();