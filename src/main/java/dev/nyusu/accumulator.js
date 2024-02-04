const numbers = [15, 10, 32, 41, 2, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
    }, 0);

console.log(sum);