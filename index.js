function receivesAFunction(x){
    console.log(x());
}

function returnsANamedFunction(){
    return function something() {x};
}

function returnsAnAnonymousFunction(){
    return function(){b}
}