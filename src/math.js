exports.add = function(a, b){
    return a + b;
}

exports.divide = function(a, b){
    return b === 0 ? null : a/b;
}

exports.multiply = function(a, b){
    return new Promise( resolve => {
        setTimeout( () => {
            resolve( a * b );
        }, 1000) // 1s
    });
};