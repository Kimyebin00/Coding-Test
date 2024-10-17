function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const votes = input[0].split("");

  const counts = [[0, 0], [0, 0], [0, 0], [0, 0]]; // U D P C

  for (const vote of votes) {
    if (vote === 'U') {
      counts[0][0] += 1;
      counts[3][1] += 1;
    } else if (vote === 'D') {
      counts[1][0] += 1;
      counts[2][1] += 1;
    } else if (vote === 'P') {
      counts[2][0] += 1;
      counts[1][1] += 1;
    } else {
      counts[3][0] += 1;
      counts[0][1] += 1;
    }
  }

  let answer = "";

  if (counts[0][0] + counts[0][1] > Math.ceil((counts[1][0] + counts[2][0])/2)) {
    answer += 'U';
  }
  if (counts[1][0] !== 0 || counts[2][0] !== 0) {
    answer += 'D';
  }
  if (counts[1][0] !== 0 || counts[2][0] !== 0) {
    answer += 'P';
  }
  
  if (answer === '') answer = 'C';

  console.log(answer);
}

solution();