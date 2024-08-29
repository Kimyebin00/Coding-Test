function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let answer = 0;

  const n = +(input[0]);

  let xArr = [];
  let yArr = [];

  const customers = [];

  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(x => parseInt(x) + 1000000);

    customers.push([x, y]);

    xArr.push(x);
    yArr.push(y);
  }

  xArr.sort((a,b) => a-b);
  yArr.sort((a,b) => a-b);

  const middleX = xArr[Math.floor(n/2)];
  const middleY = yArr[Math.floor(n/2)];
    
  for (const [x, y] of customers) {
    let distance = Math.abs(x-middleX) + Math.abs(y-middleY);
    answer += distance;
  }

  console.log(answer);
}

solution();
