function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  const dancers = [];

  for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ");

    if (a === 'ChongChong') {
      if (!dancers.includes(a)) dancers.push(a);
      if (!dancers.includes(b)) dancers.push(b);
    } else if (b === 'ChongChong') {
      if (!dancers.includes(a)) dancers.push(a);
      if (!dancers.includes(b)) dancers.push(b);
    } else {
      if (dancers.includes(a)) {
        if (!dancers.includes(b)) dancers.push(b);
      } else if (dancers.includes(b)) {
        if (!dancers.includes(a)) dancers.push(a);
      }
    }
  }

  console.log(dancers.length);
}

solution();