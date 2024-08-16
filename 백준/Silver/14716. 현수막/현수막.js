function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [M, N] = input[0].split(" ").map(Number);

  const graph = [];
  const direction = [[-1,0], [1,0], [0,-1], [0,1], [1,1], [1,-1],[-1,-1], [-1,1]];

  for (let i = 1; i <= M; i++) {
    graph.push(input[i].split(" ").map(Number));
  }

  const dfs = (currentX, currentY) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < M && newY >= 0 && newY < N) {
        if (graph[newX][newY]) {
          graph[newX][newY] = 0;
          dfs(newX, newY);
        }
      }
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j]) {
        graph[i][j] = 0;
        dfs(i, j);
        answer++;
      }
    }
  }

  console.log(answer);
}

solution();
