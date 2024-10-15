function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const [n, newScore, p] = input[0].split(" ").map(Number);
  
  if (n === 0) return console.log(1);

  const rankingList = input[1].split(" ").map(Number);

  rankingList.sort((a,b) => b-a);

  if (n === p && rankingList[n-1] >= newScore) return console.log(-1);
  
  let ranking = 1;
  for (let i = 0; i < n; i++) {
    if (rankingList[i] <= newScore) break;
    else if (rankingList[i] > newScore) ranking++;
  }

  console.log(ranking);
  
}

solution();