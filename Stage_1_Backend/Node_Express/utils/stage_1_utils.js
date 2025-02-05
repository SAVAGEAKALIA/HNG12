// Utility function for HNG Stage one

export const isPrime = async (num) => {
    // Function to check if a number is prime
    if (num < 2) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

export const isPerfect = async (num) => {
    // Function to check if a number is a perfect number
    if (num < 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
};

export const isArmstrong = async (num) => {
    // Function to check if a number is an Armstrong number
    if (num < 1) return false;
    let sum = 0;
    let temp = num;
    const numDigits = num.toString().length;
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    return num === sum;
};

export const digitSum = async (num) => {
    // Function to calculate the sum of digits in a number
    if (num < 1) return false;
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
};

export const oddEven = async (num) => {
    // Function to check if a number is odd or even
    return num % 2 === 0 ? 'even' : 'odd';
};

export default {isPrime, isPerfect, isArmstrong, digitSum, oddEven};