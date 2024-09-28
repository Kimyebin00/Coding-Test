function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  let aCount = 1;
  let bCount = 0;

  for (let i = 0; i < n; i++) {
    let prevBCount = bCount;

    bCount += aCount;
    aCount = prevBCount;
  }

  console.log(aCount + ' ' + bCount);
}

solution();