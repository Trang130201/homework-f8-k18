// Part 1:

function isPrime(n) {
    if (n <= 1) {
        return false
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false
        } 
    }
    return true
}


// Part 2:

function isPerfectNumber(n){
    if (n <= 1) {
        return false
    }
    let sum = 0
    for (let i = 1; i < n; i++ ) {
        if (n % i === 0){
            sum = sum + i
        }
    }
    return sum === n
}

