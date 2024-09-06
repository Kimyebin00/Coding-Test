function solution() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

  const [n, k] = input[0].split(" ").map(Number);

  const answer = Array(n).fill(0);

  let si = input[1].split(" ").map(Number);
  const di = input[2].split(" ").map(Number);

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
      answer[di[j]-1] = si[j];
    }

    si = [...answer];
  }

  console.log(answer.join(" "));
}

solution();
