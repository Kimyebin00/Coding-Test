function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  
  let answer = [];

  const n = parseInt(input[0]);

  const graph = [[]];
  const visited = [false];

  for (let i = 0; i < n; i++) {
    graph.push([]);
    answer.push(0);
    visited.push(false);
  }

  for (let i = 1; i <= n - 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = (startNode) => {
    for (const v of graph[startNode]) {
      if (!visited[v]) {
        visited[startNode] = true;
        dfs(v);
        answer[v] = startNode;
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  answer.shift();
  answer.shift();

  console.log(answer.join("\n"));
}

solution();