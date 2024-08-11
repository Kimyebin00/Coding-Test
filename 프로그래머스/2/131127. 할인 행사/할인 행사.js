function solution(want, number, discount) {
    let answer = 0;
    
    const map = new Map();
    
    for (let i = 0; i < want.length; i++) {
        map.set(want[i], 0);
    }
    
    for (let i = 0; i < discount.length - 10 + 1; i++) {
        let things = discount.slice(i, i+10);
        
        for (let j = 0; j < things.length; j++) {
            if (map.has(things[j])) map.set(things[j], map.get(things[j])+1);
        }
        
        let saleOK = true;
        
        for (let j = 0; j < want.length; j++) {
            if (map.get(want[j]) !== number[j]) {
                saleOK = false;
                break;
            }
        }
        
        if (saleOK) answer++;
        
        for (let i = 0; i < want.length; i++) {
            map.set(want[i], 0);
        }
    }
    
    return answer;
}