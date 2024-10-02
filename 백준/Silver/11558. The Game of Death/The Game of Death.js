function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const answer = [];

  const t = +input[0];

  let index = 1;
  for (let i = 0; i < t; i++) {
    const n = +input[index];

    const players = [];
    for (let j = index + 1; j <= index + n; j++) {
      players.push(+input[j]);
    }

    if (!players.includes(n)) {
      answer.push(0);
      continue;
    }

    let k = 0;
    let currentIndex = 0;
    while (true) {
      let nextIndex = players[currentIndex];
      k++;

      if (nextIndex === n) break;
      else currentIndex = nextIndex - 1;
    }

    answer.push(k);
    index += n + 1;
  }

  console.log(answer.join("\n"));
}

solution();