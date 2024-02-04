// const foo = { name: 'tom', age: 30, nervous: false};
// const bar = { name: 'richard', age: 38, nervous: false};
// const baz = { name: 'harry', age: 32, nervous: true};


// // console.log(foo);

// console.log('%c My Friends', 'color: orange; font-weight: bold;')
// console.log({foo, bar, baz});

// console.table([foo, bar, baz]);

// console.time('looper')

// let i = 0;
// while(i < 1000000) { i ++};
// console.timeEnd('looper');

// const deleteMe = () => console.trace('bye bye database');
//  deleteMe();
//  deleteMe();

 const turtle = {
     name: 'bob',
     legs: 4,
     shell: true,
     type: 'amphibious',
     meal: 10,
     diet: 'berries'
 }

//  function feed(animal) {
//      return `Feed ${animal.name} ${animal.meal} kilos of ${animal.feed}`
//  }

//  function feed({ name, meal, diet}) {
//      return `Feed ${name} ${meal} kilos of ${diet}`;
//  }

 function feed(animal) {
     const { name, meal, diet} = animal;
     return `Feed ${name} ${meal} kilos of ${diet}`;
 }

 console.log(feed(turtle));
 console.table(turtle);