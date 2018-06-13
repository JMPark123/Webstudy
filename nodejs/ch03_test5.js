var person = {};

person.name = '레드벨벳';
person['age'] = 20;
person.add = function(a,b) {
    return a+b;
};
console.log(person.add(20,20))