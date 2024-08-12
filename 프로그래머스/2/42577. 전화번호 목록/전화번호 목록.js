function solution(phone_book) {
    var answer = true;
    
    phone_book.sort();
        
    const map = new Map();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        let checked = phone_book[i];
        
        let newChecked = phone_book[i+1].slice(0,checked.length);
            
        if (checked === newChecked) {
            answer = false;
            break;
        }
    }
    
    return answer;
}