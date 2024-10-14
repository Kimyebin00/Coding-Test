function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);

  const graph = Array.from({length: n+1}, () => []);
  
  for (let i = 1; i <= m; i++) {
    const [a,b] = input[i].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(n+1).fill(-1);
  visited[1] = 0;

  const nodes = [[1, 0]];

  while (nodes.length) {
    const [currentNode, cnt] = nodes.shift();

    for (const nextNode of graph[currentNode]) {
      if (visited[nextNode] === -1) {
        visited[nextNode] = cnt + 1;
        nodes.push([nextNode, cnt + 1]);
      }
    }
  }

  const maxDistance = Math.max(...visited);
  
  console.log(visited.indexOf(maxDistance) + ' ' + maxDistance + ' ' + visited.filter(cnt => cnt === maxDistance).length);
}

solution();