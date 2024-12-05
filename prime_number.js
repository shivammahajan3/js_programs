/*
1. Find Prime Numbers up to a Given Number
Objective:
To write a program that identifies all prime numbers up to a given number.

Program Explanation:
A prime number is a number greater than 1 that is divisible only by 1 and itself. 
The program iterates through numbers from 2 to the given number, 
checking each one for primality.
A helper function determines if a number is prime by ensuring 
it has no divisors other than 1 and itself.
Output:
The program lists all prime numbers up to the given number.
*/

function IsPrime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function prime_list(num) {
    let arr = [];
    for (let i = 2; i <= num; i++) {
        if (IsPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(prime_list(27));