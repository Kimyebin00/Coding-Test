function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let [n, m, p] = input[0].split(" ").map(Number);

  let answer = 1;
  for (let i = 1; i <= n; i++) {
    const attackPoints = input[i].split(" ").map(Number);
    
    attackPoints.sort((a,b) => a-b);

    let attackCount = 0
    for (let i = 0; i < m; i++) {
      if (attackPoints[i] === -1) {
        attackCount++;
      } else if (attackPoints[i] <= p) {
        p += attackPoints[i];
      } else {
        if (attackCount > 0) {
          p = p * 2;
          attackCount--;
          i--;
        } else {
          answer = 0;
          break;
        }
      }
    }

    if (attackCount > 0) {
      p = p * 2 * attackCount;
    }
      
    if (!answer) break;
  }

  console.log(answer);
}

solution();
