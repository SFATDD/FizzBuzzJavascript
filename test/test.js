var assert = require('assert');
var fizzBuzz = require('../index.js');

describe('FizzBuzz', function(){
    it('should return 1 for 1', function(){
        assert(fizzBuzz.shout(1) === '1');
    });

    it('should return 2 for 2', function (){
        assert(fizzBuzz.shout(2) === '2');
    });

    it('should return fizz for 3', function (){
        assert(fizzBuzz.shout(3) === 'fizz');
    });

    it('should return fizz for 6', function (){
        assert(fizzBuzz.shout(6) === 'fizz');
    });

    it('should return buzz for 5', function (){
        assert(fizzBuzz.shout(5) === 'buzz');
    });

    it('should return buzz for 10', function (){
        assert(fizzBuzz.shout(10) === 'buzz');
    });

});
