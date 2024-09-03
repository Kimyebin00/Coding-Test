function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const n = +input[0];
  const m = +input[1];

  let answer = n;

  if (m !== 0) {
    const rooms = Array(n).fill(0);

    for (let i = 2; i < 2 + m; i++) {
      const [x, y] = input[i].split(" ").map(Number);

      for (let j = x; j < y; j++) {
        rooms[j-1] = 1;
      }
    }

    answer = rooms.filter(room => room === 0).length;
  }

  console.log(answer);
}

solution();
