function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const [n, m] = input[0].split(" ").map(Number);

  const cards = input[1].split(" ").map(Number);

  let maxNum = 0;

  for (let i = 0; i < n-2; i++) {
    for (let j = i+1; j < n-1; j++) {
      for (let k = j+1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum > maxNum && sum <= m) {
          maxNum = sum;
        }
      }
    }
  }

  console.log(maxNum);
}

solution();