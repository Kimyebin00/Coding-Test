function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [n, m, r] = input[0].split(" ").map(Number);

  const graph = Array.from({ length: n + 1}, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
  }

  graph.forEach(node => node.sort((a, b) => a-b));

  const answer = Array(n+1).fill(0);

  const nodes = [r];
  const visited = Array(n+1).fill(false);

  visited[r] = true;
  answer[r] = 1;

  let count = 2;
  
  while (nodes.length !== 0) {
    let currentNode = nodes.shift();

    for (let nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        answer[nextNode] = count++;
        nodes.push(nextNode);
      }
    }
  }
  
  answer.shift();

  console.log(answer.join("\n"));

}

solution();