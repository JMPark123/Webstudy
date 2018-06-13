var users = [{name : '레드벨벳', age:20}, {name:'호롤롤로할머니', age:88}, {name:'기분이너무나좋아요', age:21}];

delete users[1];
console.dir(users);

users.forEach(function(elem, index){
    console.log(index);
    console.dir(elem);
});

users.splice(1, 0, {name:'아따맘마', age:33});
console.dir(users);

users.splice(2, 1);
console.dir(users);