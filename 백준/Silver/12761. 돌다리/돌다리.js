function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [a, b, n, m] = input[0].split(" ").map(Number);

  const visited = Array(100001).fill(0);
  visited[n] = 1;

  const nodes = [[n, 0]];

  while (nodes.length) {
    const [currentNode, cnt] = nodes.shift();

    if (currentNode === m) {
      console.log(cnt);
      break;
    }

    const nextNodes = [currentNode + 1, currentNode - 1, currentNode + a, currentNode - a, currentNode + b, currentNode - b, currentNode * a, currentNode * b];

    for (const nextNode of nextNodes) {
      if (nextNode > 0 && nextNode <= 100000 && !visited[nextNode]) {
        visited[nextNode] = 1;
        nodes.push([nextNode, cnt + 1]);
      }
    }
  }
}

solution();