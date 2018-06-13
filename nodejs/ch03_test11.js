var users = [{name : '레드벨벳', age:20}, {name:'호롤롤로할머니', age:88}];
console.log('배열 원소의 갯수 : ' + users.length);

users.push({name : '기분이너무나좋아요' , age : 21});
console.log('배열 원소의 갯수 : ' + users.length);

var elem = users.pop();
console.log('배열 원소의 갯수 : ' + users.length);

console.log('pop으로 꺼낸 세번째 원소');
console.dir(elem);