function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];
  let num = 0;

  const direction = [[-1,0],[1,0],[0,-1],[0,1]];

  const n = +(input[0]);

  const graph = [];

  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
  }

  let count = 1;
  const dfs = (currentX, currentY) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        if (graph[newX][newY]) {
          graph[newX][newY] = 0;
          count++;
          dfs(newX, newY);
        }
      }
    }
  }  
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        graph[i][j] = 0;
        dfs(i, j);
        num++;
        answer.push(count);
        count = 1;
      }
    }
  }

  console.log(num);
  console.log(answer.sort((a,b) => a-b).join("\n"));
}

solution();
