function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  
  const dp = Array.from({length: n}, () => []);

  dp[0] = [1,1];

  for (let i = 1; i < n; i++) {
    if (i % 2) dp[i] = [dp[i-1][0] + dp[i-1][1], dp[i-1][1]];
    else dp[i] = [dp[i-1][0], dp[i-1][0] + dp[i-1][1]]
  }

  console.log((dp[n-1][0] + dp[n-1][1]) * 2);
}

solution();