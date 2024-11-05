function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [c, p] = input[0].split(" ").map(Number);

  const heights = input[1].split(" ").map(Number);

  let count = 0;

  if (p === 1) {
    count += c;
    
    for (let i = 0; i < c - 3; i++) {
      if (heights[i] === heights[i+1] && heights[i] === heights[i+2] && heights[i] === heights[i+3]) count += 1;
    }
  } else if (p === 2) {
    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1]) count += 1;
    }
  } else if (p === 3) {
    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+1] && heights[i] === heights[i+2] - 1) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] + 1) count += 1;
    }
  } else if (p === 4) {
    for (let i = 0; i < c - 2; i++) {
      if (heights[i+1] === heights[i+2] && heights[i] === heights[i+1] + 1) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] - 1) count += 1;
    }
  } else if (p === 5) {
    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+1] && heights[i+1] === heights[i+2]) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] - 1) count += 1;
    }

    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+2] && heights[i+1] === heights[i+2] - 1) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] + 1) count += 1;
    }
  } else if (p === 6) {
    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+1] && heights[i+1] === heights[i+2]) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1]) count += 1;
    }

    for (let i = 0; i < c - 2; i++) {
      if (heights[i+1] === heights[i+2] && heights[i] === heights[i+1] - 1) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] + 2) count += 1;
    }
  } else if (p === 7) {
    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+1] && heights[i+1] === heights[i+2]) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1] - 2) count += 1;
    }

    for (let i = 0; i < c - 2; i++) {
      if (heights[i] === heights[i+1] && heights[i] === heights[i+2] + 1) count += 1;
    }

    for (let i = 0; i < c - 1; i++) {
      if (heights[i] === heights[i+1]) count += 1;
    }
  } 

  console.log(count);
}

solution();