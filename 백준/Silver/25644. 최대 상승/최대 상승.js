function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const arr = input[1].split(" ").map(Number);

  let answer = 0;

  for (let i = 0; i < n-1; i++) {
    const currentArr = [arr[i]];
    let lastIndex = i+1;
    for (let j = i+1; j < n; j++) {
      lastIndex = j;
      if (arr[i] >= arr[j]) break;
      else currentArr.push(arr[j]);
    }

    if (currentArr.length > 1) {
      currentArr.sort((a,b) => a-b);
      answer = Math.max(answer, currentArr[currentArr.length-1] - currentArr[0]);
    }

    i = lastIndex - 1;
  }


  console.log(answer);
}

solution();