var path = require('path');

var directories = ['Users', 'Windows', 'docs'];
var dirStr = directories.join();
console.log('dir : ' + dirStr);
var dirStr2 = directories.join(path.sep);
console.log(dirStr2);

var filepath = path.join('/Users/Windows', 'notepad.exe');
console.log(filepath);

var dirname = path.dirname(filepath);
console.log(dirname);
var basename = path.basename(filepath);
console.log(basename);
var extname = path.extname(filepath);
console.log(extname);