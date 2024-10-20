function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const n = +input[0];

  const counts = [];

  for (let i = 0; i <= n/3; i++) {
    if ((n - 3 * i) % 5 === 0) {
      counts.push(i + (n - 3 * i) / 5);
    }
  }

  if (counts.length === 0) console.log(-1);
  else console.log(Math.min(...counts));
}

solution();