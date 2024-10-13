function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [f, s, g, u, d] = input[0].split(" ").map(Number);
  
  let answer;
  let arrival = false;

  const nodes = [[s, 0]];
  const visited = Array(f+1).fill(0);
  visited[s] = 1;

  while (nodes.length) {
    const [currentFloor, cnt] = nodes.shift();

    if (currentFloor === g) {
      arrival = true;
      answer = cnt;
      break;
    }

    if (currentFloor + u >= 1 && currentFloor + u <= f && !visited[currentFloor + u]) {
      visited[currentFloor + u] = 1;
      nodes.push([currentFloor + u, cnt + 1]);
    }

    if (currentFloor - d >= 1 && currentFloor - d <= f && !visited[currentFloor - d]) {
      visited[currentFloor - d] = 1;
      nodes.push([currentFloor - d, cnt + 1]);
    }
  }
  
  if (!arrival) answer = "use the stairs";

  console.log(answer);
}

solution();