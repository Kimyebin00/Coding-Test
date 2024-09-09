function solution() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

  let answer = -1;

  let [n, k] = input[0].split(" ").map(Number);

  let baskets = Array.from({length: k}, (_, i) => i+1);

  const minBallCount = baskets.reduce(
    (acc, currentV) => acc + currentV,
    0,
  );

  if (n >= minBallCount) {
    n -= minBallCount;

    baskets = baskets.map((ballCount) => ballCount + Math.ceil(n/k));

    n = n % k;

    for (let i = k-1; i >= 0; i++) {
      if (n === 0) break;

      baskets[i] += 1;
      n -= 1;
    }

    answer = baskets[k-1] - baskets[0];
  }

  console.log(answer);
}

solution();
