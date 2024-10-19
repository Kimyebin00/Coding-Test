function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const [a, b, c, d, e, f] = input[0].split(" ").map(Number);
  
  let answer = "";
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a*x + b*y !== c) continue;
      if (d*x + e*y !== f) continue;
      
      answer = x + " " + y;
      break;
    }

    if (answer !== "") break;
  }

  console.log(answer);
}

solution();