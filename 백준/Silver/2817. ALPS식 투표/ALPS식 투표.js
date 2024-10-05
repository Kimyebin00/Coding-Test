function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const x = +input[0];
  const n = +input[1];

  const staffs = [];

  for (let i = 2; i < 2 + n; i++) {
    const [name, chip] = input[i].split(" ");

    if (+chip < x * 0.05) continue;

    const scores = [];

    for (let i = 1; i <= 14; i++) {
      scores.push(+chip/i);
    }

    staffs.push([name, scores, 0]);
  }

  const totalScores = [];

  for (const [,scores,] of staffs) {
    totalScores.push(...scores);
  }

  totalScores.sort((a,b) => b-a);

  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < staffs.length; j++) {
      if (staffs[j][1].includes(totalScores[i])) {
        staffs[j][2] += 1;
      }
    }
  }
  
  staffs.sort((a,b) => a[0].charCodeAt()-b[0].charCodeAt());

  for (const [name, , chipCount] of staffs) {
    console.log(name + ' ' + chipCount);
  }
}

solution();