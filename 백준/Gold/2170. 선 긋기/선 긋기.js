function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = input[0].split(" ").map(Number);

  const points = [];

  for (let i = 1; i <= n; i++) {
    points.push(input[i].split(" ").map(Number));
  }

  points.sort((a,b) => a[0] - b[0]);

  let answer = 0;

  let minPoint = points[0][0];
  let maxPoint = points[0][1];

  for (let i = 1; i < n; i++) {
    const [x, y] = points[i];

    if (x > maxPoint) {
      answer += maxPoint - minPoint;
      minPoint = x;
      maxPoint = y;
    } else {
      if (y > maxPoint) maxPoint = y;
    }
  }

  answer += maxPoint - minPoint;

  console.log(answer);
}

solution();