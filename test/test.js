var assert = require('assert');
var fizzBuzz = require('../index.js');

describe('FizzBuzz', function(){
    it('should return 1 for 1', function(){
        assert(fizzBuzz.shout(1) === '1');
    });

    it('should return 2 for 2', function (){
        assert(fizzBuzz.shout(2) === '2');
    });
});
