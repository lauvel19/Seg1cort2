function esPrimo (num) {
    if(num <2){
        return false;
    }
    if(num === 2) {
        return true;
    }
    if(num % 2 === 0) {
        return false;
    }

    function limite(num){ 
        Math.sqrt(num);
        for (let i = 3; i <= limite; i +=2){
            if(num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(esPrimo(num = 7));
console.log(esPrimo(num = 10));
console.log(esPrimo(num = 13));
console.log(esPrimo(num = 97));
console.log(esPrimo(num = 6));