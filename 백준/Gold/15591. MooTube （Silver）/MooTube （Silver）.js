function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const [n, q] = input[0].split(" ").map(Number);

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i < n; i++) {
    let [a, b, usado] = input[i].split(" ").map(Number);

    graph[a].push([b, usado]);
    graph[b].push([a, usado]);
  }

  let count = 0;
  const dfs = (visited, startNode, usado) => {
    for (const [node, u] of graph[startNode]) {
      if (!visited[node]) {
        if (u >= usado) {
          visited[node] = 1;
          count++;
          dfs(visited, node, usado, count + 1);
        }
      }
    }
  }

  for (let i = n; i < n + q; i++) {
    const visited = Array(n+1).fill(0);

    let [k, v] = input[i].split(" ").map(Number);
    visited[v] = 1;
    dfs(visited, v, k);
    answer.push(count);
    count = 0;
  }
  
  console.log(answer.join("\n"));
}

solution();
