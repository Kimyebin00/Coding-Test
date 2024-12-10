function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];
  const numbers =  input[1].split(" ").map((num, i) => [num, i+1]);

  numbers.sort((a,b) => a[0]-b[0]);

  let heightArr = [numbers[0][1]];
  
  for (let i = 1; i < n; i++) {
    const heightHeightCount = heightArr.slice(0,i).filter(height => height > numbers[i][1]).length;

    if (heightHeightCount === +numbers[i][0]) {
      heightArr[i] = numbers[i][1];
    } else if (heightHeightCount > +numbers[i][0]) {
      heightArr = [...heightArr.slice(0, i - heightHeightCount + +numbers[i][0]), numbers[i][1], ...heightArr.slice(i - heightHeightCount + +numbers[i][0])];
    }
  }

  console.log(heightArr.join(" "));
}

solution();