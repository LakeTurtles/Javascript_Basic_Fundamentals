
const person = {
    name: 'Luis',
    age: 31 ,
    scope: 'Undefined'
};

for (let key in person)
console.log(key, person[key]);

const colors = [ 'red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

for (let color of colors)
    console.log(color)