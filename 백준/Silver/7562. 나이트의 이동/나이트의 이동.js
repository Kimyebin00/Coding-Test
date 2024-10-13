function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const t = +input[0];

  const answer = [];

  const direction = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

  let index = 1;
  for (let i = 0; i < t; i++) {
    const n = +input[index++];
    const [startX, startY] = input[index++].split(" ").map(Number);
    const [endX, endY] = input[index++].split(" ").map(Number);

    const graph = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    const visited = [[startX, startY, 0]];
    graph[startX][startY] = 1;

    while (visited.length) {
      const [currentX, currentY, cnt] = visited.shift();

      if (currentX === endX && currentY === endY) {
        answer.push(cnt);
        break;
      }

      for (const [x, y] of direction) {
        const [newX, newY] = [currentX + x, currentY + y];

        if (newX >= 0 && newX < n && newY >= 0 && newY < n && graph[newX][newY] === 0) {
          graph[newX][newY] = 1;
          visited.push([newX, newY, cnt + 1]);
        }
      }
    }
  }

  console.log(answer.join('\n'));
}

solution();