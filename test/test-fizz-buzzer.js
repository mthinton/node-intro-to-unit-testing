const fizzBuzzer = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizzBuzzer', function(){
    it('should print fizz if divisible by 3, buzz if divisible by 5, and fizz-buzz if divisible by both', function(){
        const goodInputs = [3, 5, 15];
        const expectedAnswers = ['fizz', 'buzz', 'fizz-buzz'];
        let count = 0;

        goodInputs.forEach( function(num){
            
            const answer = fizzBuzzer(num);
            expect(answer).to.equal(expectedAnswers[count]);
            count++;   
        })
    })

    it('should throw error message if provided non-numerical inputs', function(){
        const badInputs = ['3', undefined, 0];

        badInputs.forEach( function(badInput){
            expect(function(){fizzBuzzer(badInput).to.throw(Error)})
        })
    })


})