const assert = require('chai').assert;
const sHello = require('../app/app').sayHello;
const aNumbers = require('../app/app').addNumbers;

describe('App', function() {

    it('should say hello', function() {
        let result = sHello()
        assert.equal(result, 'hello');
    });

    it('should return the string type', function() {
        let result = sHello()
        assert.typeOf(result, 'string');
    });

    it('should concat numbers', function() {
        let result = aNumbers(2,3)
        assert.equal(result, 5);
    })

    it('should be above 5', function() {
        let result = aNumbers(2,3)
        assert.isAbove(result, 4);
    })

    it('should be a number type', function() {
        let result = aNumbers(1,1);
        assert.typeOf(result, 'number');
    })
})