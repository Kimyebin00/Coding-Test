function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const n = +input[0];

  const keyArr = [];

  for (let i = 1; i <= n; i++) {
    let finalWord = [];

    let keyOK = false;

    const words = input[i].split(" ");

    for (const word of words) {
      if (!keyOK) {
        if (!keyArr.includes(word[0])) {
          keyArr.push(word[0].toLowerCase());
          keyArr.push(word[0].toUpperCase());
  
          keyOK = true;
  
          finalWord.push('[' + word[0] + ']' + word.substring(1));
        } else {
          finalWord.push(word);
        }
      } else {
        finalWord.push(word);
      }
    }

    if (!keyOK) {
      finalWord = [];

      for (const word of words) {
        if (keyOK) {
          finalWord.push(word);
          continue;
        }

        for (let j = 0; j < word.length; j++) {
          if (!keyArr.includes(word[j])) {
            keyArr.push(word[j].toLowerCase());
            keyArr.push(word[j].toUpperCase());

            keyOK = true;

            finalWord.push(word.substring(0, j) + '[' + word[j] + ']' + word.substring(j+1));

            break;
          }
        }

        if (!keyOK) {
          finalWord.push(word);
        }
      }
    }

    console.log(finalWord.join(" "));
  }
}

solution();