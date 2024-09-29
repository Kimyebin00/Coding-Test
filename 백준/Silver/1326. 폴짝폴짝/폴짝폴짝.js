function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];
  const stones = input[1].split(" ").map(Number);
  const [a, b] = input[2].split(" ").map(Number);

  if (a === b) {
    console.log(0);
    return;
  }

  const nodes = [[a, 0]];
  const counts = Array(n+1).fill(0);

  while (nodes.length) {
    let [currentNode, count] = nodes.shift();

    let multiple = 1;

    if (currentNode === b) break;

    while (currentNode + stones[currentNode-1] * multiple <= n) {
      let nextNode = currentNode + stones[currentNode-1] * multiple;

      if (!counts[nextNode]) {
        nodes.push([nextNode, count + 1]);
        counts[nextNode] = count + 1;
      }
      multiple++;
    }

    multiple = 1;

    while (currentNode - stones[currentNode-1] * multiple > 0) {
      let nextNode = currentNode - stones[currentNode-1] * multiple;

      if (!counts[nextNode]) {
        nodes.push([nextNode, count + 1]);
        counts[nextNode] = count + 1;
      }
      multiple++;
    }
  }

  if (counts[b] === 0) console.log(-1);
  else console.log(counts[b]);

}

solution();