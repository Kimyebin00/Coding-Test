function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, k] = input[0].split(" ").map(Number);

  const numArr = [[1], [1,1]];

  for (let i = 2; i < n; i++) {
    const nums = [1];

    for (let j = 1; j <= i - 1; j++) {
      nums.push(numArr[i-1][j-1] + numArr[i-1][j]);
    }

    nums.push(1);
    numArr.push(nums);
  }

  console.log(numArr[n-1][k-1]);
}

solution();