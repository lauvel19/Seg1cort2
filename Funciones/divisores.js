function sumaDivisores(num) {
    if(!Number.isInteger(num)){
        return "El valor debe ser un número entero.";
    }
    num = Math.abs(num);
    let suma = 0;
    for(let i = 1; i < num; i++){
        if(num===0){ 
            suma +=i;
        }
    }
    return suma;
}
console.log(sumaDivisores(13));
console.log(sumaDivisores(97));
console.log(sumaDivisores(10));
console.log(sumaDivisores(-95));
console.log(sumaDivisores(6.3));
