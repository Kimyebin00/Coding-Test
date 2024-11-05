function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = +input[0];

  let index = 1;
  for (let i = 0; i < n; i++) {
    const strLen = +input[index++];
    const cards = input[index++].split(" ");

    let str = cards[0];

    for (let j = 1; j < strLen; j++) {
      if (cards[j].charCodeAt() <= str[0].charCodeAt()) str = cards[j] + str;
      else str += cards[j];
    }

    console.log(str);
  }
}

solution();