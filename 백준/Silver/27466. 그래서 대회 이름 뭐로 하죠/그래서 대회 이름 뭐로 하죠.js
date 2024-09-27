function solution() {
  const fs = require('fs');
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  let title = input[1];

  let answer = "YES";

  let aCount = 0;

  for (let i = 0; i < n; i++) {
    if (title.charAt(i) === "A") aCount++;
  }

  if (aCount < 2) answer = "NO"
  else if (n === m) {
    if (title[n-1] === "A" || title[n-1] === "E" || title[n-1] === "I" || title[n-1] === "O" || title[n-1] === "U") answer = "NO"
    else {
      if (title[n-2] !== "A" || title[n-3] !== "A") answer = "NO";
    }
  } else {
    while (title[title.length - 1] === "A" || title[title.length - 1] === "E" || title[title.length - 1] === "I" || title[title.length - 1] === "O" || title[title.length - 1] === "U") {
      title = title.substring(0, title.length-1);
    }

    if (title.length < m) answer = "NO"
    else if (title.length === m) {
      if (title[m-2] !== "A" || title[m-3] !== "A") answer = "NO";
    } else {
      let count = 0;
      while (title.length >= m) {
        if (title[title.length - 2] === "A") {
          count = 1;
          if (title[title.length - 3] === "A") {
            count = 2;
            break;
          } else {
            title = title.substring(0, title.length-3) + "A" + title.charAt(title.length-1);
          }
        } else {
          title = title.substring(0, title.length-2) + title.charAt(title.length-1);
        }
      }

      if (answer === "YES" && count === 2) {
        if (title.length > m) {
          title = title.substring(0,m-3) + "AA" + title.charAt(title.length-1);
        }
      } else {
        answer = "NO";
      }
    }
  }
  
  console.log(answer);

  if (answer === "YES") console.log(title);
}

solution();