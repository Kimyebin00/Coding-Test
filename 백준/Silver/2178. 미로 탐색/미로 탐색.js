function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);

  let answer = n*m;

  const direction = [[-1,0], [1,0], [0,-1], [0,1]];

  const maze = [];

  for (let i = 1; i <= n; i++) {
    maze.push(input[i].split(''));
  }

  const visited = [[0,0,1]];
  maze[0][0] = '0';

  while (visited.length) {
    const [currentX, currentY, cnt] = visited.shift();

    if (currentX === n-1 && currentY === m-1) {
      answer = Math.min(answer, cnt);
      break;
    }
    if (cnt > answer) break;

    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && maze[newX][newY] === '1') {
        maze[newX][newY] = '0';
        visited.push([newX, newY, cnt + 1]);
      }
    }
  }

  console.log(answer);
}

solution();