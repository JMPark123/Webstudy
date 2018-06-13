var users = [{name : '레드벨벳', age:20}, {name:'호롤롤로할머니', age:88}];

for (var i = 0; i < users.length; i++) {
    console.log('배열 원소 #' + i + ' : ' + users[i].name);
}

users.forEach(function(item, index) {
    console.log('배열 원소 #' + index + ' : ' + item.name);
});