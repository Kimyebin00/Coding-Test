function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  
  const numArr = input[1].split(" ").map(Number);

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (numArr[j] < numArr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  } 

  console.log(Math.max(...dp));
}

solution();