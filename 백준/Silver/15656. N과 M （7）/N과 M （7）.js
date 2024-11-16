function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  numbers.sort((a,b) => a-b);

  const answer  = [];

  const makeSequence = (cnt, sequence) => {
    if (cnt === m) {
      answer.push(sequence);
      
      return;
    }

    for (let i = 0; i < n; i++) {
      makeSequence(cnt + 1, sequence + " " + numbers[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    makeSequence(1, numbers[i]);
  }

  console.log(answer.join("\n"));
}

solution();