function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [0, 0];

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const [n, m] = input[0].split(" ").map(Number);

  const graph = [];

  for (let i = 1; i <= m; i++) {
    graph.push(input[i].split(""));
  }

  let whiteCount = 1;
  let blueCount = 1;

  const dfs = (currentX, currentY, color) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (graph[newX][newY] === color) {
          graph[newX][newY] = 0;
          
          if (color === 'W') whiteCount++;
          else               blueCount++;

          dfs(newX, newY, color);
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let color = graph[i][j];

      if (color !== 0) {
        graph[i][j] = 0;
        dfs(i, j, color);
        if (color === 'W') {
          answer[0] += whiteCount ** 2;
          whiteCount = 1;
        } else {
          answer[1] += blueCount ** 2;
          blueCount = 1;
        }
      }
    }
  }
  
  console.log(answer.join(" "));
}

solution();
