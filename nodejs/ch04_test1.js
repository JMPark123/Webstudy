var url = require('url');

var urlStr = 'https://www.youtube.com/watch?v=RtOSw8TLCtQ&list=PLG7te9eYUi7tHH-hJ2yzBJ9h6dwBu1FUy&index=14';

var curUrl = url.parse(urlStr);

console.dir(curUrl);

console.log('query -> ' + curUrl.query); 

var curStr = url.format(curUrl);
console.log('url -> ' + curStr);

var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어 : ' + params.query);