{/* 
    MOCHA FUNCTIONS AND THEIR PURPOSE

    it: Runs a test and makes and assertion.
    describe: Groups together 'it' functions.
    beforeEach: Execute some general setup code.
*/}

{/* 
    Because of function scopes, we declare the 'car' variable outside of beforeEach function 
    so that we may still have access to it outside beforeEach. 
*/}

const assert = require('assert');


let car;

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom vroom';
    }
}

// beforeEach('set up car', () => {
//     car = new Car();
// });
// describe('Car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can go go', () => {
//         assert.equal(car.drive(), 'vroom vroom');
//     });
// });