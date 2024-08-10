function solution(str1, str2) {
    var answer = 0;

    const aCode = 'A'.charCodeAt();
    const zCode = 'Z'.charCodeAt();
    
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    const str1Arr = [];
    const str2Arr = [];
    
    for (let i = 0; i < str1.length - 1; i++) {
        let sliced = str1.slice(i,i+2);
        
        if ((sliced.charAt(0).charCodeAt() >= aCode && sliced.charAt(0).charCodeAt() <= zCode) && (sliced.charAt(1).charCodeAt() >= aCode && sliced.charAt(1).charCodeAt() <= zCode)) str1Arr.push(sliced);
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        let sliced = str2.slice(i,i+2);
        
        if ((sliced.charAt(0).charCodeAt() >= aCode && sliced.charAt(0).charCodeAt() <= zCode) && (sliced.charAt(1).charCodeAt() >= aCode && sliced.charAt(1).charCodeAt() <= zCode)) str2Arr.push(sliced);
    }
    
    console.log(str1Arr);
    console.log(str2Arr)
    const total = [];
    const totalSet = [];
    
    for (let i = 0; i < str1Arr.length; i++) {
        let str = str1Arr[i];
        
        if (!totalSet.includes(str)) {
            totalSet.push(str);
        
            let numCount1 = str1Arr.filter(x => x === str).length;
            let numCount2 = str2Arr.filter(x => x === str).length;

            for (let j = 0; j < Math.max(numCount1, numCount2); j++) {
                total.push(str);
            }   
        }
    }
    
    for (let i = 0; i < str2Arr.length; i++) {
        let str = str2Arr[i];
        
        if (!totalSet.includes(str)) {
            totalSet.push(str);
        
            let numCount1 = str1Arr.filter(x => x === str).length;
            let numCount2 = str2Arr.filter(x => x === str).length;

            for (let j = 0; j < Math.max(numCount1, numCount2); j++) {
                total.push(str);
            }   
        }    
    }
    
    const same = [];
    const sameSet = [];

    for (let i = 0; i < str1Arr.length; i++) {
        let str = str1Arr[i];
        
        if (!sameSet.includes(str)) {
            sameSet.push(str);
        
            let numCount1 = str1Arr.filter(x => x === str).length;
            let numCount2 = str2Arr.filter(x => x === str).length;

            for (let j = 0; j < Math.min(numCount1, numCount2); j++) {
                same.push(str);
            }   
        }
    }
    
    if (same.length === 0 && total.length === 0) {
        answer = 65536;
    } else{
        answer = Math.floor(same.length / total.length * 65536);        
    }
    
    return answer;
}