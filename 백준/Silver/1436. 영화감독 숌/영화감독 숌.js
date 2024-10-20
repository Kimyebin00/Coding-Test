function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
  const n = +input[0];

  let count = 1;

  let num = 666;
  while (count < n) {
    num++;
    let stringNum = num + "";
    
    for (let i = 0; i <= stringNum.length - 3; i++) {
      let slicedNum = stringNum.slice(i, i+3);
      if (slicedNum === "666") {
        count++;
        break;
      }
    }
  }

  console.log(num);
}

solution();