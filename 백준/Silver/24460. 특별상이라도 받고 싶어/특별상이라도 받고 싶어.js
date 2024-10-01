function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  if (n === 1) return console.log(input[1]);
    
  let chairs = [];

  for (let i = 1; i <= n; i++) {
    chairs.push(input[i].split(" ").map(Number));
  }

  while (chairs.length > 2) {
    let newChairs = [];

    for (let i = 0; i < chairs.length/2; i++) {
      let specialPrizes = [];

      for (let j = 0; j < chairs.length/2; j++) {
        let currentSpecialPrize = [chairs[i*2][j*2], chairs[i*2][j*2+1], chairs[i*2+1][j*2], chairs[i*2+1][j*2+1]];
        currentSpecialPrize.sort((a,b) => a- b);
        specialPrizes.push(currentSpecialPrize[1]);
      }

      newChairs.push(specialPrizes);
    }

    chairs = newChairs;
  }

  let finalChairs = [...chairs[0], ...chairs[1]];
  finalChairs.sort((a,b) => a- b);

  console.log(finalChairs[1]);
}

solution();