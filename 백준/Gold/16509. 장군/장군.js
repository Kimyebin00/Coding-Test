function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [r1, c1] = input[0].split(" ").map(Number);
  const [r2, c2] = input[1].split(" ").map(Number);

  let possible = false;

  const directions = [[[-1,0], [[-2,-2],[-2,2]]], [[1,0], [[2,-2], [2,2]]], [[0,-1], [[-2,-2], [2,-2]]], [[0,1], [[-2,2], [2,2]]]];

  const visited = Array.from({length: 10}, () => Array.from({length: 9}, () => 0));
  visited[r1][c1] = 1;

  const nodes = [[r1, c1, 0]];

  while (nodes.length) {
    const [currentX, currentY, cnt] = nodes.shift();

    if (currentX === r2 && currentY === c2) {
      possible = true;
      console.log(cnt);
      break;
    }

    for (const dir of directions) {
      const firstMove = dir[0];
      const secondMove = dir[1];

      if (currentX + firstMove[0] === r2 && currentY + firstMove[1] === c2) continue;

      for (const subDir of secondMove) {
        if (currentX + firstMove[0] + subDir[0]/2 === r2 && currentY + firstMove[1] + subDir[1]/2 === c2) continue;

        const [nextX, nextY] = [currentX + firstMove[0] + subDir[0], currentY + firstMove[1] + subDir[1]];

        if (nextX >= 0 && nextX < 10 && nextY >= 0 && nextY < 9 && !visited[nextX][nextY]) {
          visited[nextX][nextY] = 1;
          nodes.push([nextX, nextY, cnt + 1]);
        }
      }
    }
  }

  if (!possible) console.log(-1);
}

solution();