export function choose(page){
    switch(page){
        case '1': return [-1, 10];
        case '2': return [9, 20];
        case '3': return [19, 30];
        case '4': return [29, 40];
        case '5': return [39, 50];
        case '6': return [49, 60];
        case '7': return [59, 70];
        case '8': return [69, 80];
        case '9': return [79, 90];
        case '10': return [89, 100];
        default: return [-1, 10];
    }
}