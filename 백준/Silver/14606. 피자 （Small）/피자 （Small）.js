function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const funs = Array(n+1).fill(0);

  funs[1] = 0;

  if (n >= 2) {
    funs[2] = 1;

    for (let i = 3; i <= n; i++) {
      for (let j = 1; j <= i/2; j++) {
        const a = j;
        const b = i-j;

        const fun = a * b + funs[a] + funs[b];
        funs[i] = Math.max(funs[i], fun);
      }
    }
  }
  
  console.log(funs[n]);
}

solution();