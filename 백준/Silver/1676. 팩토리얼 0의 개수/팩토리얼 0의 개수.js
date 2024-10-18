function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  let n = +input[0];

  let count10 = Math.floor(n/10);
  let count5 = Math.floor(n/5);
  let count25 = Math.floor(n/25);
  let count125 = Math.floor(n/125);
  count5 -= count10;

  console.log(count10 + count5 + count25 + count125);
}

solution();