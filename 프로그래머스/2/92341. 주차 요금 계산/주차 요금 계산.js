function solution(fees, records) {
    var answer = [];
    
    const map = new Map();
    const cars = [];
    const [basicTime, basicCharge, minuteTime, minuteCharge] = fees;
    
    const calculateTime = (inTime, outTime) => {
        let [inH, inM] = inTime.split(":").map(Number);
        let [outH, outM] = outTime.split(":").map(Number);
        
        let times = 0;
        
        times += (outH-inH) * 60;
        times += outM-inM;
        
        return times;
    };
    
    const calculateCharge = (time) => {
        let charge = basicCharge;
        
        if (time > basicTime) {
            charge += Math.ceil((time - basicTime) / minuteTime) * minuteCharge;
        }
        
        return charge;
    };
    
    for (let i = 0; i < records.length; i++) {
        let [time, carNumber, io] = records[i].split(" ");

        if (io === 'IN') {
            if (map.has(carNumber)) {
                map.set(carNumber, [time, map.get(carNumber)]);
            } else {
                map.set(carNumber, [time, 0]);
                cars.push(carNumber);
            }
        } else {
            let times = calculateTime(map.get(carNumber)[0], time);
            map.set(carNumber, map.get(carNumber)[1] + times);
        }
    }   
        
    for (const record of map) {
        if (typeof record[1] !== 'number') {
            let times = calculateTime(record[1][0], '23:59');
            map.set(record[0], record[1][1] + times);
        }
    }
    
    for (const record of map) {
        let charge = calculateCharge(record[1]);
        map.set(record[0], charge);
    }
    
    cars.sort();
    
    cars.forEach(car => {
        answer.push(map.get(car));
    });
    
    return answer;
}