function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  const nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(+input[i])
  }

  nums.sort((a,b) => a-b);
  
  console.log(nums.join("\n"));
}

solution();