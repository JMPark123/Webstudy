function add(a, b, callback) {
    var result = a + b;
    callback(result);
    
    var count = 0;
    var history = function() {
        count += 1;
                return a +'+'+b+"="+result;
        
    };
    return history;
}
var add_history = add (20, 20, function(result){
   console.log('더하기 결과 : ' + result); 
});
console.log(typeof(add_history));
console.log(add_history());