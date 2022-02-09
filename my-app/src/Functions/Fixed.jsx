export function Fixed(num){
    let count = Number(num).toFixed(2);
    let countfix =  Number(num).toFixed(0);
    let len = countfix.toString();
    if (len.length > 6 && len.length < 10){
        count = countfix/1e6;
        count = Number(count).toFixed(2);
        count = count + 'm';
    }
    if (len.length > 9){
        count = countfix/1e9;
        count = Number(count).toFixed(2);
        count = count + 'b';
    }
    return count;
} 