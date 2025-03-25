function solution() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const answer = [];

  const n = +input[0];

  const arr = input[1].split(" ").map(Number);
 
  const dfs = (totalGCD, start, end) => {
    if (start === end) {
      return answer.push(totalGCD + arr[start]);
    }

    const mid = Math.floor((end - start + 1) / 2);

    const leftGCD = calculateGCD(arr.slice(start, start + mid));
    const rightGCD = calculateGCD(arr.slice(start + mid, end + 1));

    dfs(totalGCD + leftGCD, start + mid, end);
    dfs(totalGCD + rightGCD, start, start + mid - 1);
  }

  const gcd = (a, b) => (b === 0 ? a : gcd (b, a % b));

  const calculateGCD = (numbers) => {
    if (numbers.length === 0) return 0;
    
    return numbers.reduce((pre, cur) => gcd(pre, cur));
  }
  
  dfs(0, 0, n-1);

  console.log(Math.max(...answer));
}

solution();