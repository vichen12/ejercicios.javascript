let numero = 30

function primo(num) {
    if (num <= 1) {
        return `El número ${num} no es primo`
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `El número ${num} no es primo`
        }
    }
    return `El número ${num} es primo`
}

console.log(primo(numero));

