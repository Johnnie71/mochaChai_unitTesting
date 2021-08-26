const expect = require('chai').expect;

function myAsyncFunction(callback){
    setTimeout(function(){
        callback('blah');
    }, 50);
};
function myPromiseFunction(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('blah');
        }, 50);
    });
};

it('test_async', function(done){
    myAsyncFunction(function(str){
        expect(str).to.equal('doh');
    });
    done();
});