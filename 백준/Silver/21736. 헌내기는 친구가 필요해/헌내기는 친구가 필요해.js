function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [n, m] = input[0].split(" ").map(Number);

  const scool = [];
  let findedLocation = [];

  for (let i = 1; i <= n; i++) {
    let arr = input[i].split("");
    scool.push(arr);
  }

  for (let i = 0; i < n; i++) {
    let arr = scool[i];
    let index = arr.indexOf('I');
    if (index !== -1) {
      findedLocation.push(i);
      findedLocation.push(index);
      break;
    }
  }

  const direction = [[-1, 0], [0, -1], [1, 0], [0, 1]];

  const bfs = (currentX, currentY) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if ((newX >= 0 && newX < n) && (newY >= 0 && newY < m)) {
        if (scool[newX][newY] !== 'X') {
          if (scool[newX][newY] === 'P') answer++;
          scool[newX][newY] = 'X';
          bfs(newX, newY);
        }
      }
    }
  };

  bfs(findedLocation[0], findedLocation[1]);

  if (answer === 0) answer = 'TT';
  console.log(answer);
}

solution();
