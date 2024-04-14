function calcularMCD(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Ambos numeros deben ser enteros."
    }
    a = Math.abs(a);
    b = Math.abs(b);

    while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(calcularMCD(13, 6));
console.log(calcularMCD(95, 97));
console.log(calcularMCD(7, 95));
console.log(calcularMCD(3, 7.5));