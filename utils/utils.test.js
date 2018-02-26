const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
//   if (res !== 44) {
//     throw new Error(`Expected 44, but got ${res}.`);
//   }
});

it('should aysnc add two numbers', (done) => { // Done tells mocha to wait until done() is called before completeing test.
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBeA('number').toBe(7);
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(3);
  expect(res).toBeA('number').toBe(9);
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`);
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBeA('number').toBe(9);
    done();
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
// assert the type is an object using .toBeA('object')
it('should set firstName and lastName', () => {
  var user = {
    age: 25,
    location: 'New York'
  }
  var res = utils.setName(user, 'Robin Hood');
  expect(res).toBeA('object').toInclude({
    firstName: 'Robin',
    lastName: 'Hood'
  });
});

// it('should expect some value', () => {
//   //expect(12).toBe(12);
//   //expect({name: 'andrew'}).toNotEqual({name: 'andrew'});
//   //expect([2, 3, 4]).toInclude(2);
//   //expect([2, 3, 4]).toExclude(5);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toInclude({
//     age: 25
//   }).toExclude({
//     age: 23
//   });
// });