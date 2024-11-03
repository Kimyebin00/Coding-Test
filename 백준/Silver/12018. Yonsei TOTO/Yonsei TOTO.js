function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [n, m] = input[0].split(" ").map(Number);

  const lastMileages = [];

  let count = 0;
  let index = 1;

  while (count++ < n) {
    const [currentCapacity, maxCapacity] = input[index++].split(" ").map(Number);
    const milages = input[index++].split(" ").map(Number);

    milages.sort((a,b) => b-a);

    if (currentCapacity >= maxCapacity) lastMileages.push(milages[maxCapacity - 1]);
    else lastMileages.push(1);
  }

  lastMileages.sort((a,b) => a-b);

  let sum = 0;
  let answer = 0;

  while (true) {
    sum += lastMileages[answer];

    if (sum <= m) {
      answer++;
    } else {
      break;
    }
  }

  console.log(answer);
}

solution();