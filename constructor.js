function Person(name,age){
    this.name = name;
    this.age = age;
    this.great = function(){
        console.log(`Hello, my name is ${this.name} and l am ${this.age} years old`);
    }
};

const adam = new Person('Adam',30);
console.log({adam});
adam.language = 'English';
adam.great();

const eve = new Person('Eve',20);
console.log({eve});

Person.prototype.nationality = 'Kenyan';
console.log({adam});
console.log("adam-nationality",adam.nationality);
console.log('eve-nationality',eve.nationality);

eve.nationality = 'Ugandan';
console.log({eve});
console.log({adam});