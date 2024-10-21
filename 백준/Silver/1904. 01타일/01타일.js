function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  const dp = Array.from({length: n+1}, () => 0);

  dp[1] = 1;

  if (n > 1) dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 15746;
  }

  console.log(dp[n]);
}

solution();