function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const str = input[0];

  let answer = "";

  let s = [];

  let tag = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      answer += s.reverse().join("");
      s = [];
      tag = true;
    } else if (str[i] === '>') {
      tag = false;
      answer += '>';
      continue;
    }

    if (tag) {
      answer += str[i];
    } else {
      if (str[i] === ' ') {
        answer += s.reverse().join("") + " ";
        s = [];
      } else {
        s.push(str[i]);
      }
    }
  }

  if (s.length) {
    answer += s.reverse().join("");
  }

  console.log(answer);
}

solution();