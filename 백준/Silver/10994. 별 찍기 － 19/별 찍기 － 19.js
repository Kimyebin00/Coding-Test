function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const n = +input[0];

  let stars = Array.from({length: 1 + (n-1)*4}, () => Array.from({length: 1 + (n-1)*4}, () => " "));

  const middleIndex = Math.floor((1 + (n-1)*4)/2);
  stars[middleIndex][middleIndex] = "*";

  for (let i = 1; i < n; i++) {
    for (let j = middleIndex-2*i; j <= middleIndex+2*i; j++) {
      stars[middleIndex-2*i][j] = "*";
      stars[middleIndex+2*i][j] = "*";
      stars[j][middleIndex-2*i] = "*";
      stars[j][middleIndex+2*i] = "*";
    }
  }

  let answer = "";

  for (let i = 0; i <= (n-1)*4; i++) {
    answer += stars[i].join("");
    answer += "\n";
  }

  console.log(answer);
}

solution();