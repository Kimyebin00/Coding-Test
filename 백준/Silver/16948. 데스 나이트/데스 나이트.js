function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  const [r1, c1, r2, c2] = input[1].split(" ").map(Number);

  const direction = [[-2,-1], [-2,1], [0,-2], [0,2], [2,-1], [2,1]];
  
  let answer;
  let possible = false;

  const visited = Array.from({length: n}, () => Array.from({length: n}, () => 0));

  const nodes = [[r1, c1, 0]];
  visited[r1][c1] = 1;

  while (nodes.length) {
    const [currentX, currentY, cnt] = nodes.shift();

    if (currentX === r2 && currentY === c2) {
      possible = true;
      answer = cnt;
      break;
    }

    for (const [x, y] of direction) {
      const [newX, newY] = [currentX + x, currentY + y];

      if (newX >= 0 && newX < n && newY >= 0 && newY < n && !visited[newX][newY]) {
        visited[newX][newY] = 1;
        nodes.push([newX, newY, cnt + 1]);
      }
    }
  }

  if (!possible) answer = -1;

  console.log(answer);
}

solution();