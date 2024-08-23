function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const [n, m] = input[0].split(" ").map(Number);

  const direction = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,1],[1,-1]];
  const graph = [];

  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
  }

  const visited = Array.from({ length: n}, () =>  Array.from({ length: m}, () => false));
  

  let ok = true;

  const dfs = (currentX, currentY) => {
    for (const [x, y] of direction) {
      let newX = currentX + x;
      let newY = currentY + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (graph[newX][newY] === graph[currentX][currentY]) {
          if (!visited[newX][newY]) {
            visited[newX][newY] = true;
            dfs(newX, newY);
          }
        } else if (graph[newX][newY] > graph[currentX][currentY]) {
          ok = false;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j);
        
        if (ok) answer++;
        ok = true;
      }
    }
  }

  console.log(answer);
}

solution();
