const Person = function (first, last) {
    let firstName = first;
    let lastName = last;

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };

    this.setFirstName = function (first) {
        firstName = first;
    };

    this.setLastName = function (last) {
        lastName = last;
    };

    this.setFullName = function (first, last) {
        firstName = first;
        lastName = last;
    };
};

// Testes
const person = new Person('Bob', 'Ross');
console.log(person.getFirstName()); // Deve retornar 'Bob'
console.log(person.getLastName());  // Deve retornar 'Ross'
console.log(person.getFullName());  // Deve retornar 'Bob Ross'

person.setFirstName('John');
console.log(person.getFirstName()); // Deve retornar 'John'

person.setLastName('Doe');
console.log(person.getLastName());  // Deve retornar 'Doe'

person.setFullName('Alice', 'Smith');
console.log(person.getFullName());  // Deve retornar 'Alice Smith'