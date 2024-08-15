function solution(order) {
    var answer = 0;
    
    const container1 = [];
    const container2 = [1,2];
    
    let count = 1;
    for (let i = 0; i < order.length; i++) {
        if (order[i] >= count) {
            while (count !== order[i]) {
                container2.push(count);
                count++;
            } 
            count++;
        } else {
            let top = container2.pop();
            if (top !== order[i]) {
                break;
            }
        }
        
        
        answer++;
    }
    
    return answer;
}
