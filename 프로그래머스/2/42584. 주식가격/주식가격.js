function solution(prices) {
    var answer = [];
    
    for (let i = 0; i < prices.length - 1; i++) {
        let second = 0;
        for (let j = i+1; j < prices.length; j++) {
            second++;

            if (prices[i] > prices[j]) break;
        }
        answer.push(second);
    }
    
    answer.push(0);
    return answer;
}