function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  const arr = [];
  let index = 1;

  while (+input[index] !== -1) {
    const packet = +input[index];

    if (packet > 0 && arr.length < n) arr.push(packet);
    else if (packet === 0) arr.shift();
    
    index++;
  }

  if (arr.length === 0) console.log('empty');
  else console.log(arr.join(' '));
}

solution();