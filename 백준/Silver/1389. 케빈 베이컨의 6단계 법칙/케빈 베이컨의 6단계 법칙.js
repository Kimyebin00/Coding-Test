function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, m] = input[0].split(" ").map(Number);
  const answer = [];

  const graph = Array.from({length: n+1}, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    let kevinNum = 0;

    for (let j = 1; j <= n; j++) {
      if (i === j) continue;

      const visited = Array(n+1).fill(0);

      const nodes = [[i, 0]];
      visited[i] = 1;

      while (nodes.length) {
        const [currentIndex, cnt] = nodes.shift();

        if (currentIndex === j) {
          kevinNum += cnt;
          break;
        }

        for (const nextNode of graph[currentIndex]) {
          if (!visited[nextNode]) {
            visited[nextNode] = 1;
            nodes.push([nextNode, cnt + 1]);
          }
        }
      }
    }

    answer.push(kevinNum);
  }
  
  const minKevinNum = Math.min(...answer);

  console.log(answer.indexOf(minKevinNum) + 1);
}

solution();