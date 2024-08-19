function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = [];

  const [n, m] = input[0].split(" ").map(Number);

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i < n; i++) {
    let [a, b, distance] = input[i].split(" ").map(Number);

    graph[a].push([b, distance]);
    graph[b].push([a, distance]);
  }

  const dfs = (visited, currentNode, findNode, distance) => {
    if (currentNode === findNode) {
      return answer.push(distance);
    }
    for (const [node, d] of graph[currentNode]) {
      if (!visited[node]) {
        visited[node] = 1;
        dfs(visited, node, findNode, distance + d);
      }
    }
  }
  
  for (let i = n; i < n + m; i++) {
    let [startNode, findNode] = input[i].split(" ").map(Number);

    const visited = Array.from({ length: n + 1 }, () => 0);

    visited[startNode] = 1;
    dfs(visited, startNode, findNode, 0);
  }


  console.log(answer.join("\n"));
}

solution();
