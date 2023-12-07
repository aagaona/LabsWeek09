/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
  describe(`Question 1a: Sorted array of numbers:`, () => {
    it(`#Should sort the Array in Ascending Order`, () => {
      expect(arrayOfNumbers).to.deep.equal([ 1, 2, 3, 4, 5])
    })
  })


  describe(`Question 1b: Manage my wallet:`, () => {
    it(`#Should be able to check Wallet`, () => {
      expect(myWallet.money).to.be.a(`number`);
    })

    it(`#Should be able to add Money to our Wallet`, ()=> {
      let myWallet = new Wallet(50)
      myWallet.addMoney(10)
      expect (myWallet.money).to.equal(60)
    })

    it(`#Should be able to remve Money from our Wallet`, ()=> {
      let myWallet = new Wallet(50)
      myWallet.removeMoney(10)
      expect (myWallet.money).to.equal(40)
    })
  })

  describe(`Question 1c: Day of the Week:`, () => {
    it(`#Should return Monday`, () => {
      expect(dayOfTheWeek(1)).to.equal(`Monday`)
    })
    it(`#Should return Tuesday`, () => {
      expect(dayOfTheWeek(2)).to.equal(`Tuesday`)
    })
    it(`#Should return Wednesday`, () => {
      expect(dayOfTheWeek(3)).to.equal(`Wednesday`)
    })
    it(`#Should return Thursday`, () => {
      expect(dayOfTheWeek(4)).to.equal(`Thursday`)
    })
    it(`#Should return Friday`, () => {
      expect(dayOfTheWeek(5)).to.equal(`Friday`)
    })
    it(`#Should return Saturday`, () => {
      expect(dayOfTheWeek(6)).to.equal(`Saturday`)
    })
    it(`#Should return Sunday`, () => {
      expect(dayOfTheWeek(7)).to.equal(`Sunday`)
    })
  })

  describe(`Question 1d: Only wizards shall pass!:`, () => {
    for (let character of onlyWizards(movieCharacters)) {
      it('#Character should be a wizard', () => {
        expect(character.isAWizard).to.equal(true)
      })
    }
  })

})
