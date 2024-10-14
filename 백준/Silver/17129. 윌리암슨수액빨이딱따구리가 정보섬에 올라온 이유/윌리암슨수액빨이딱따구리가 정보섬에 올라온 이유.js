function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);

  const direction = [[-1,0], [1,0], [0,-1], [0,1]];

  const island = [];

  let possible = false;

  let start;

  for (let i = 1; i <= n; i++) {
    const row = input[i].split('').map(Number);

    if (row.includes(2)) start = [i-1, row.indexOf(2)];

    island.push(row);
  }

  const visited = Array.from({length: n}, () => Array.from({length: m}, () => 0));
  visited[start[0]][start[1]] = 1;

  const nodes = [[start[0], start[1], 0]];

  while (nodes.length) {
    const [currentX, currentY, cnt] = nodes.shift();

    if (island[currentX][currentY] === 3 || island[currentX][currentY] === 4 || island[currentX][currentY] === 5) {
      possible = true;
      console.log("TAK");
      console.log(cnt);
      break;
    }

    for (const [x, y] of direction) {
      const [newX, newY] = [currentX + x, currentY + y];

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && island[newX][newY] !== 1 && !visited[newX][newY]) {
        visited[newX][newY] = 1;
        nodes.push([newX, newY, cnt + 1]);
      }
    }
  }

  if (!possible) console.log("NIE");
}

solution();