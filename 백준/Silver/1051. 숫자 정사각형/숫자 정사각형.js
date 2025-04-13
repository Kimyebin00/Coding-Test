function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);

  let answer = 1;

  const points = [];

  for (let i = 1; i <= n; i++) {
    points.push(input[i].split("").map(Number));
  }

  const minLen = Math.min(n, m);

  for (let k = 1; k < minLen; k++) {
    for (let i = 0; i < n - k; i++) {
      for (let j = 0; j < m - k; j++) {
        if (points[i][j] === points[i + k][j] && points[i][j + k] === points[i + k][j] && points[i][j + k] === points[i + k][j + k]) {
          answer = Math.max(answer, (k + 1)**2);
        }
      }
    }
  }

  console.log(answer);
}

solution();