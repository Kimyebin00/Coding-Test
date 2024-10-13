function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, k] = input[0].split(" ").map(Number);
  
  let answer;
  
  const nodes = [[n, 0]];
  const visited = Array(100000+1).fill(0);
  visited[n] = 1;

  while (nodes.length) {
    const [currentNode, cnt] = nodes.shift();

    if (currentNode === k) {
      answer = cnt;
      break;
    }

    for (const nextNode of [currentNode - 1, currentNode + 1, currentNode * 2]) {
      if (nextNode >= 0 && nextNode <= 100000 && !visited[nextNode]) {
        visited[nextNode] = 1;
        nodes.push([nextNode, cnt + 1]);
      }
    }
  }

  console.log(answer);
}

solution();