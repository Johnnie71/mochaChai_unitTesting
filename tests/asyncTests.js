const expect = require('chai').expect;

function myAsyncFunction(callback){
    setTimeout(function(){
        callback('blah');
    }, 50);
}