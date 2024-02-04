const person = {
    firstName: 'Luis',
    lastName: 'Ramirez',
//    fullName: function() {} same as below
    fullName() {
        return  '${person.firstName} ${person.LastName}';

    }
};

console.log(person.fullName());

//console.log(person.firstName + ' ' + person.lastName)