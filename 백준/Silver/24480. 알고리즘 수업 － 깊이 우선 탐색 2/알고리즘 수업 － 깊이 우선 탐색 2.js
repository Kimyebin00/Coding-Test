function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m, r] = input[0].split(" ").map(Number);

  const graph = Array.from({length: n+1}, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    
    graph[a].push(b);
    graph[b].push(a);
  }

  for (const nodes of graph) {
    nodes.sort((a,b) => b-a);
  }

  const visited = Array(n+1).fill(0);

  let index = 1;
  const dfs = (currentNode) => {
    for (const nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = ++index;
        dfs(nextNode);
      }
    }
  }

  visited[r] = 1;
  dfs(r);

  visited.shift();

  console.log(visited.join("\n"));
}

solution();