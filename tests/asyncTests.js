const expect = require('chai').expect;

function myAsyncFunction(callback){
    setTimeout(function(){
        callback('blah');
    }, 50);
};

it('test_async', function(){
    myAsyncFunction(function(str){
        expect(str).to.equal('doh');
    });
});