function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  let answer;
  const password = input[0];

  const n = +input[1];

  const dic = [];

  for (let i = 2; i < 2+n; i++) {
    dic.push(input[i]);
  }

  let isDecoded = false;

  for (let i = 0; i < 26; i++) {
    let decodedPassword = "";

    for (let j = 0; j < password.length; j++) {
      let a = password.charAt(j);

      if (a === ' ') {
        decodedPassword += ' ';
        continue;
      }
        
      if (a.charCodeAt() + i > 122) a = String.fromCharCode(a.charCodeAt() + i - 26);
      else a = String.fromCharCode(a.charCodeAt() + i);

      decodedPassword += a;
    }

    for (const word of dic) {
      if (decodedPassword.indexOf(word) !== -1) {
        isDecoded = true;
        answer = decodedPassword;
        break;
      }
    }

    if (isDecoded) break;
  }

  console.log(answer);
}

solution();