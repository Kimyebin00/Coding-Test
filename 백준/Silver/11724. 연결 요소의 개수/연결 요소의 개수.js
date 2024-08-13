function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const n = parseInt(input[0].split(" ")[0]);
  const m = parseInt(input[0].split(" ")[1]);

  const graph = [[]];

  for (let i = 0; i < n; i++) {
    graph.push([]);
  }

  for (let i = 1; i <= m; i++) {
    graph[parseInt(input[i].split(" ")[0])].push(parseInt(input[i].split(" ")[1]));
    graph[parseInt(input[i].split(" ")[1])].push(parseInt(input[i].split(" ")[0]));
  }

  const visited = [];

  const dfs = (startNode) => {
    for (const v of graph[startNode]) {
      if (!visited.includes(v)) {
        visited.push(v);
        dfs(v);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visited.includes(i)) {
      dfs(i);
      
      answer++;
    }
  }
  

  console.log(answer);
}

solution();