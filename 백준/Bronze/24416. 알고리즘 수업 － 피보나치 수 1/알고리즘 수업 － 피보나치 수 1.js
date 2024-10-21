function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const n = +input[0];

  let f1 = 0;
  let f2 = 0;

  const fib = (n) => {
    if (n === 1 || n === 2) {
      f1++;
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  };
  
  const f = Array.from({length: n+1}, () => 0);

  const fibonacci = n => {
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i <= n; i++) {
      f2++;
      f[i] = f[i-1] + f[i-2];
    }
  }

  fib(n);
  fibonacci(n);

  console.log(f1 + " " + f2);
}

solution();